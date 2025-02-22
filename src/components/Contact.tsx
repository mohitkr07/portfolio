import React from "react";

const Contact = () => {
  return (
    <div
      style={{ minHeight: "calc(100vh - 4rem)" }}
      className="flex gap-4 flex-col items-center justify-center w-full bg-gradient-to-r from-purple-50 to-indigo-50"
    >
      <section className="w-full text-gray-700 body-font relative flex justify-center">
        <div className="container px-5 py-12 flex justify-center">
          <div className="lg:w-1/2 md:w-2/3 bg-white rounded-lg p-8 flex flex-col w-full relative z-10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-gray-900 text-2xl font-bold mb-3 title-font">
              Get in Touch
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Have a question or want to work together? Feel free to reach out!
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="name"
                className="leading-7 text-sm text-gray-600 font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Your Name"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Your Email"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-40 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg font-semibold transition-colors duration-200 ease-in-out transform">
              Send Message
            </button>
            <p className="text-xs text-gray-500 mt-3">
              We'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;