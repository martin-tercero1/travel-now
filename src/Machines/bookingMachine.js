import { fetchCountries } from "@/utils/api";
import { assign, createMachine, fromPromise } from "xstate";

const fillCountries = {
  initial: "loading",
  states: {
    loading: {
      invoke: {
        id: "getCountries",
        src: fromPromise(() => fetchCountries()),
        onDone: {
          target: "success",
          actions: assign({
            countries: ({event}) => event.output
          }),
        },
        onError: {
          target: "failure",
          actions: assign({
            error: "The request failed"
          })
        }
      }
    },
    success: {},
    failure: {
      on: {
        RETRY: [
          {
            target: "loading"
          }
        ]
      }
    }
  }
}

export const bookingMachine = createMachine(
  {
    id: "Buy plane tickets",
    initial: "initial",
    context: {
      passengers: [],
      countries: [],
      selectedCountry: "",
      error: "",
    },
    states: {
      initial: {
        on: {
          START: [
            {
              target: "search",
              actions: ["printWelcome"],
              meta: {},
            },
          ],
        },
      },
      search: {
        entry: "printEntry",
        exit: "printExit",
        on: {
          CONTINUE: [
            {
              target: "passengers",
              actions: assign({
                selectedCountry: ({ event }) => event.selectedCountry,
              }),
            },
          ],
          CANCEL: [
            {
              target: "initial",
              actions: [],
            },
          ],
        },
        ...fillCountries,
      },
      passengers: {
        on: {
          DONE: [
            {
              target: "tickets",
              guard: 'moreThanOnePassenger'
            },
          ],
          CANCEL: [
            {
              target: "initial",
              actions: "cleanContext",
            },
          ],
          ADD: [
            {
              target: "passengers", // We are not changing to anothe state, just triggering an action
              actions: assign({
                passengers: ({ context, event }) =>
                  context.passengers.concat(event.newPassenger),
              }),
            },
          ],
        },
      },
      tickets: {
        after: {
          5000: {
            target: "initial",
            actions: "cleanContext",
          },
        },
        on: {
          FINISH: [
            {
              target: "initial",
              actions: assign({
                selectedCountry: ({ _, event }) => event.selectedCountry,
              }),
            },
          ],
          CANCEL: [
            {
              target: "initial",
              actions: [],
            },
          ],
        },
      },
    },
  },
  {
    actions: {
      printWelcome: () => console.log("Print welcome"),
      printEntry: () => console.log("Print entry to search"),
      printExit: () => console.log("Print exit from search"),
      cleanContext: assign({
        selectedCountry: "",
        passengers: [],
      }),
    },
    actors: {},
    guards: {
      moreThanOnePassenger: ({context}) => context.passengers.length > 0
    },
    delays: {},
  }
);