import React, { useRef, useEffect, useState } from "react";
import Footer from "../../Footer/Desktop/Footer";
import FooterMobile from "../../Footer/Mobile/FooterMobile";
import { Subscriber, WindowSize } from "../../../helpers/types";
import "./SubscribePage.css";
import "../Mobile/SubscribePageMobile.css";

interface props {
  windowSize: WindowSize;
  isMobile: Function;
}

const SubscribePage: React.FC<props> = ({ windowSize, isMobile }) => {
  useEffect(() => {
    fetch("https://extreme-ip-lookup.com/json/?key=QzDxS214a6mQ1G1azgiy")
      .then((res) => res.json())
      .then((res) => {
        setSubscriber({
          ...subscriber,
          city: res.city,
          country: res.country,
        });
      });
  }, []);

  const [subscriber, setSubscriber] = useState<Subscriber>({
    email: "",
    date: new Date(),
    city: "",
    country: "",
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const formRef = useRef<HTMLFormElement>(null);

  const submitEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
    };
    const email = target.email.value;

    fetch("https://api.apispreadsheets.com/data/3spaPIfYPAttlnwV/", {
      method: "POST",
      body: JSON.stringify({ data: { ...subscriber, email } }),
    }).then((res) => setIsSubmitted(true));
  };

  return (
    <div className={`subscribe-page_container${isMobile()} place-items_center`}>
      <main className='place-items_center'>
        {isSubmitted ? (
          <div className={`subscribe-form${isMobile()}`}>
            <p>thank you for your subscription!</p>
          </div>
        ) : (
          <form
            onSubmit={submitEmail}
            ref={formRef}
            id='subscriptionForm'
            className={`subscribe-form${isMobile()} grid-columns_two-extend-auto align-items_center`}
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
        )}
      </main>
      {windowSize.innerWidth > 600 ? <Footer /> : <FooterMobile />}
    </div>
  );
};

export default SubscribePage;
