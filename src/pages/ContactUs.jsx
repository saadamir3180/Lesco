import React from "react";
import "../style/contactus.css";

export default function ContactUs() {
  return (
    <>
      <div className="container ContactUsPage mt-8">
        <div className="row">
          <div className="mb-5 t-center">
            <b className="display-6 ContactLabels">Contact Us</b>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5 ">
            <div className="row">
              <div className="col-md-3 text-left">
                <b className="ContactLabels uppercase">Visit Us: </b>
              </div>
              <div className="col-md-9 mb-4">
                {" "}
                <p>LESCO Headquarters, Mall Road, Lahore</p>
              </div>

              <div className="col-md-3 text-left">
                <b className="ContactLabels uppercase">Write Us: </b>
              </div>
              <div className="col-md-9 mb-4">
                {" "}
                <p>lesco.gov.pk</p>
              </div>

              <div className="col-md-3 text-left">
                <b className="ContactLabels uppercase">Call Us: </b>
              </div>
              <div className="col-md-9 mb-4">
                {" "}
                <p>0900 7862134</p>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <form action="#" class="space-y-4">
              <input
                type="email"
                id="email"
                class="shadow-sm contactFormFields text-white text-sm rounded-lg  block p-2.5 dark:text-white mx-auto dark:shadow-sm-light"
                placeholder="name@gmail.com"
                required
              />

              <input
                type="text"
                id="subject"
                class="shadow-sm contactFormFields  text-white text-sm rounded-lg  block p-2.5 dark:text-white  mx-auto dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
              <textarea
                id="message"
                rows="6"
                class="shadow-sm text-white contactFormFields text-sm rounded-lg  block p-2.5 dark:text-white mx-auto  dark:shadow-sm-light"
                placeholder="Leave a comment..."
              ></textarea>

              <div className="t-center m-0">
                <button
                  type="submit"
                  class="py-3 px-5 text-sm sendButton font-medium text-white rounded-lg bg-primary-700 sm:w-fit "
                >
                  Send message
                </button>
              </div>
            </form>
          </div>

          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  );
}
