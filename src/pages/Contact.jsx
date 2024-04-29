import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="bg-white flex gap-28 mt-48">
      <div className=" flex flex-col gap-y-11 min-w-screen-md my-24">
        <div>
          <h2 className="font-2xl font-semibold text-2xl">Email</h2>
          <div className="flex items-center gap-2">
            <span>
              <FaEnvelope />
            </span>{" "}
            <a href="mailto:contact.joybiswas@gmail.com">contact.joybiswas@gmail.com</a>
          </div>
        </div>
        <div>
          <h2 className="font-2xl font-semibold text-2xl">Phone</h2>
          <p className="flex items-center gap-2">
            {" "}
            <span>
              <FaPhone />
            </span>{" "}
            +8801845727676
          </p>
        </div>
        <div>
          <h2 className="font-2xl font-semibold text-2xl">Email</h2>
          <p className="flex items-center gap-2">
            {" "}
            <span>
              <FaMapLocation />
            </span>{" "}
            Manikganj-1800
          </p>
        </div>
      </div>
      <div className="max-w-screen-md flex-1">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Me
        </h2>

        <form
          action="https://formsubmit.co/contact.joybiswas@gmail.com"
          className="space-y-8"
          method="POST"
        >
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center bg-warning rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
