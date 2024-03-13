import Question from './Question';

function FAQs() {
  return (
    <div className='mb-10' id="faq">
      <div className="w-full h-full px-6 flex flex-col space-y-4">
        <p className="text-3xl text-primary font-semibold dark:text-white">FAQs</p>
        <Question
          question={"Payment Methods"}
          answer={
            "We accept VISA, MasterCard, American Express, Paypal and Binance"
          }
        />
        <Question
          question={"Cancellation Policy"}
          answer={
            "Cancel within 48 hrs for full refund. After, 50% refund up to 7 days before."
          }
        />
        <Question
          question={"Long Stays"}
          answer={
            "For extended stays, 30-day notice for full refund. After, 50% refund up to 14 days before."
          }
        />
      </div>
    </div>
  );
}

export default FAQs