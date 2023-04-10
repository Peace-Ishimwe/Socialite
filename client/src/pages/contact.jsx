import React from "react";

const Contact = () => {
  return (
    <div className="main_content">
      <div className="bg-gradient-to-tr flex from-blue-400 h-52 items-center justify-center lg:h-80 pb-10 relative to-blue-300 via-blue-400 w-full">
        <div className="text-center max-w-xl mx-auto z-10 relative px-5">
          <div className="lg:text-4xl text-2xl text-white font-semibold mb-3">
            {" "}
            Leave a message{" "}
          </div>
          <div className="text-white text-lg font-medium text-opacity-90">
            {" "}
            Contact us if you have any questions about our company We will try
            to provide an answer{" "}
          </div>
        </div>
      </div>
      <div className="mcontainer">
        <div className="-mt-16 bg-white max-w-2xl mx-auto p-10 relative rounded-md shadow">
          <div className="grid md:grid-cols-2 md:gap-y-7 md:gap-x-6 gap-6">
            <input type="text" placeholder="Your Name" className="with-border p-2 w-full outline-none border-2 rounded-md" />
            <input
              type="text"
              placeholder="Email address"
              className="with-border p-2 w-full outline-none border-2 rounded-md"
            />
            <input type="text" placeholder="Company Name" className="with-border p-2 w-full outline-none border-2 rounded-md" />
            <input
              type="text"
              placeholder="Contact Number"
              className="with-border p-2 w-full outline-none border-2 rounded-md"
            />
            <textarea
              placeholder="How can we help?"
              rows="5"
              className="with-border md:col-span-2 p-5 px-7 resize-none h-72 outline-none border-2 rounded-md"
            ></textarea>
            <div className="md:col-span-2 md:flex items-center justify-between">
              <div>
                <div className="checkbox flex items-center gap-1">
                  <input className="w-4 h-4" type="checkbox" id="chekcbox2" />
                  <label htmlFor="chekcbox2">
                    <span className="checkbox-icon"></span>{" "}
                    <span className="font-medium text-gray-400">
                      I agree to the Terms &amp; Conditions
                    </span>
                  </label>
                </div>
              </div>
              <button
                type="button"
                className="button bg-blue-700 w-full md:w-auto md:mt-0 mt-4 py-2 px-5 rounded-md text-white font-semibold"
              >
                {" "}
                Submit{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
