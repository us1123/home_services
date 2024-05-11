import React, { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';


const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_sjqxvet',
        'template_zl1x0pj',
        form.current,
        'cFGH1qWsElvBvzvdD'
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
          toast.success('Thank you!');
        },
        (error) => {
          console.log(error.text);
          toast.error('Error sending message!');
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h2 className="flex text-2xl font-bold mb-4 justify-center mb-5">CONNECT WITH US</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg p-6 shadow-md">
          <MdOutlineEmail className="text-4xl mb-2" />
          <h4 className="font-bold text-xl mb-2">Email</h4>
          <a href="mailto:xxxxxxxxxxx@gmail.com" className="text-blue-500 hover:text-blue-700">
            Send Feedback
          </a>
        </div>
        <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          />
          <input
            type="email"
            placeholder="Your Email"
            name="user_email"
            required
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          />
          <textarea
            placeholder="Your Message"
            rows="7"
            name="message"
            required
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          ></textarea>
   <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold flex justify-center py-2 px-4 rounded ">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
