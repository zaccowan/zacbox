import React from "react";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="my-20 m-auto max-w-5xl -space-y-20 text-center border p-2 rounded-3xl bg-gradient-to-r from-blue-600 to-red-400 box-border shadow-2xl"
    >
      <div className="space-y-8 bg-white p-10 lg:p-20 rounded-2xl">
        <label
          className="font-thin text-4xl tracking-widest redToBlueTextGradient"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="border rounded-full shadow-lg px-4 py-2 text-center w-[100%]"
          type="text"
          placeholder="Doug Dimmadome"
          required
        />
      </div>

      <div className="space-y-8 bg-white p-10 lg:p-20 rounded-2xl">
        <label
          className="font-thin text-4xl tracking-widest redToBlueTextGradient"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="border rounded-full shadow-lg px-4 py-2 text-center w-[100%]"
          type="email"
          placeholder="doug.dimmadome@gmail.com"
          required
        />
      </div>

      <div className="space-y-8 bg-white p-10 lg:p-20 rounded-2xl">
        <label
          className="font-thin text-4xl tracking-widest redToBlueTextGradient"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="border rounded-2xl shadow-lg px-4 py-2 text-center w-[100%] min-h-[5rem] lg:min-h-[3rem]"
          type="message"
          placeholder="My name is Doug Dimmadome, owner of the Dimmsdale Dimmadome!"
          required
        />
      </div>
    </form>
  );
}

export default Contact;
