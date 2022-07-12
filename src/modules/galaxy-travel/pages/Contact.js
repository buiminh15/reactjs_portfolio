import React from "react";
import { ContactForm, HeroImage } from "../components";

function Contact() {
  return (
    <div className="min-h-screen w-full  ">
      <HeroImage>
        <h2 className="text-4xl uppercase font-bold">contact.</h2>
        <p className="text-xl font-semibold">Contact GLX Travel</p>
      </HeroImage>
      <ContactForm />
    </div>
  );
}

export default Contact;
