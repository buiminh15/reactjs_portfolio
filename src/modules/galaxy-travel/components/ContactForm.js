import React from "react";

const INPUT_TYPES = {
  TEXT: "text",
  EMAIL: "email",
};

function InputForm({ title, type, labelFor, textareaFlag, placeholder }) {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={labelFor} className="cursor-pointer">
        {title}
      </label>
      {textareaFlag ? (
        <textarea
          id={labelFor}
          rows={8}
          placeholder={placeholder}
          className="text-[#f4f4f4] px-4 py-3 bg-[#1b1a1a] border border-[#c4c4c4] rounded text-xl"
        />
      ) : (
        <input
          id={labelFor}
          placeholder={placeholder}
          type={type}
          className="text-[#f4f4f4] px-4 py-3 bg-[#1b1a1a] border border-[#c4c4c4] rounded text-xl"
        />
      )}
    </div>
  );
}

function ContactForm() {
  return (
    <div className="bg-black text-white w-full">
      <form action="" className="px-20 py-5 flex flex-col gap-4 md:max-w-[600px] md:mx-auto md:px-0">
        <InputForm title="Your Name" labelFor="name" type={INPUT_TYPES.TEXT} />
        <InputForm labelFor="email" title="Email" type={INPUT_TYPES.EMAIL} />
        <InputForm labelFor="subject" title="Subject" type={INPUT_TYPES.TEXT} />
        <InputForm
          labelFor="details"
          title="Details"
          type={INPUT_TYPES.TEXT}
          textareaFlag
          placeholder="Type a short message here"
        />
      </form>
    </div>
  );
}

export default ContactForm;
