import { FormEvent } from "react";

interface FormProps {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  isSuccessfullySent: boolean;
  sending: boolean;
  sender: string | null;
}

const Form = ({
  handleSubmit,
  isSuccessfullySent,
  sending,
  sender,
}: FormProps) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-orange gap-4 px-6 text-white text-center py-12 bg-hero-pattern bg-contain bg-top bg-no-repeat md:mx-10 md:rounded-xl lg:flex-row lg:text-left lg:px-24 lg:gap-24 xl:w-[1111px] xl:mx-auto"
    >
      <div className="basis-1/2 lg:flex lg:flex-col justify-center">
        <h1 className="text-center text-3xl mb-6 lg:text-left">Contact Us</h1>
        <p className="text-base">
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>

      {!sending && !isSuccessfullySent && (
        <div className="basis-1/2">
          <div className="w-full py-2 border-b flex justify-between gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="bg-transparent flex-grow"
            />
          </div>
          <div className="w-full py-2 border-b flex justify-between gap-2">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="bg-transparent flex-grow"
            />
          </div>
          <div className="w-full py-2 border-b flex justify-between gap-2">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="bg-transparent flex-grow"
            />
          </div>
          <div className="w-full pt-2 pb-12 border-b flex justify-between gap-2">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              className="bg-transparent flex-grow"
            />
          </div>
          {!isSuccessfullySent && (
            <button
              type="submit"
              className="text-black bg-white w-40 block mx-auto py-3 rounded-lg mt-8 lg:mr-0 lg:ml-auto hover:bg-[#FFAD9B] hover:text-white transition-colors"
            >
              Submit
            </button>
          )}
        </div>
      )}

      {!sending && isSuccessfullySent && (
        <p className="text-xl mt-6 lg:text-center lg:basis-1/2">
          {`Thank you for your message ${sender}!`}
        </p>
      )}
      {sending && !isSuccessfullySent && (
        <p className="text-xl mt-6 lg:text-center lg:basis-1/2">Sending...</p>
      )}
    </form>
  );
};

export default Form;
