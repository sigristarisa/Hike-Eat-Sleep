import React, { useRef } from "react";
import Footer from "../Footer/Desktop/Footer";
import "./SubscribePage.css";

const SubscribePage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const submitEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
    };
    const email = target.email.value; // typechecks!
    console.log(email);
  };

  return (
    <div className='subscribe-page_container place-items_center'>
      <main className='place-items_center'>
        <form
          onSubmit={submitEmail}
          ref={formRef}
          className='subscribe-form grid-columns_two-extend-auto'
        >
          <input
            type='email'
            name='email'
            className='subscribe-form-input'
            placeholder='hello@wanderfux.com'
            required
          />
          <input type='submit' value='SUBSCRIBE' />
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default SubscribePage;
