"use client";
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    try {
      // Using your actual Formspree form ID
      const response = await fetch("https://formspree.io/f/xzdkzbel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div id="contactus" className="bg-white flex flex-wrap gap-6 justify-evenly shadow-2xl py-6 overflow-hidden rounded w-full">
      {/* Contact Form */}
      <div className="w-full lg:w-96 p-6">
        <div className="flex justify-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Contact ME</h1>
        </div>
        
        {/* Contact Info Cards */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:saeed.ahmad075@gmail.com" className="text-blue-600 hover:underline break-all">
              saeed.ahmad075@gmail.com
            </a>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href="tel:+923443820531" className="text-blue-600 hover:underline">
              +92-344-3820531
            </a>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
            <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.58-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            </svg>
            <a href="https://wa.me/923443820531" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              WhatsApp: +92-344-3820531
            </a>
          </div>
          
          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
            <svg className="w-6 h-6 text-red-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <p className="font-semibold">Address</p>
              <p className="text-gray-600">Khyber Pakhtunkhwa, Swabi</p>
              <p className="text-gray-600">Pakistan</p>
            </div>
          </div>
        </div>

        {/* Contact Form - Using your Formspree ID */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          
          {status === "success" && (
            <div className="p-3 bg-green-100 text-green-700 rounded-lg text-center">
              ✓ Message sent successfully! I'll get back to you soon.
            </div>
          )}
          
          {status === "error" && (
            <div className="p-3 bg-red-100 text-red-700 rounded-lg text-center">
              ✗ Failed to send message. Please try again or email me directly.
            </div>
          )}
        </form>
      </div>
      
      {/* MAP */}
      <div className="w-full lg:w-96 h-96 rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Swabi,%20Khyber%20Pakhtunkhwa,%20Pakistan+(Saeed%20Ahmed)&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width="100%"
          height="100%"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
          className="border-0"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
