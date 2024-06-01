"use client";
import Home from "./Home/Home";
import Recommended from "./Recommended/Recommended";
import Featured from "./Featured/Featured";
import FAQs from "./FAQ/FAQs";
import Footer from "./Footer/Footer";
import TabBar from "./Mobile/TabBar";
import Header from "./Nav/NavDesktop";
import { useMachine } from "@xstate/react";
import { bookingMachine } from "../Machines/bookingMachine";

export default function App() {
  const [state, send] = useMachine(bookingMachine);

  return (
    <>
      <Header />
      <section className="w-full h-screen mt-14">
        <Home state={state} send={send} />
        <TabBar></TabBar>
        <Recommended />
        <Featured />
        <FAQs />
        <Footer />
      </section>
      {/* <TabBar/> */}
    </>
  );
}
