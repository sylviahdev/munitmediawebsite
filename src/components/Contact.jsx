import React from "react";

function Contact() {
  const email = "munitmedia.ke@gmail.com";
  const phone = "0713919051";

  return (
    // CRITICAL: This id="contact" must match the Navbar href="#contact"
    <section id="contact" className="py-24 text-center relative z-10">
      <div className="max-w-3xl mx-auto px-6 bg-gray-50 py-16 rounded-[3rem] border border-gray-100 shadow-sm">
        
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          Let’s Work Together
        </h2>

        <p className="text-gray-600 text-lg mb-10 max-w-md mx-auto">
          Ready to build something amazing? Reach out today and let's bring your cinematic vision to life.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* ACTION 1: Opens Email Client */}
          <a 
            href={`mailto:${email}?subject=Inquiry from Website`}
            className="w-full sm:w-auto bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition duration-300 block"
          >
            Email Us
          </a>

          {/* ACTION 2: Direct Call */}
          <a 
            href={`tel:${phone}`}
            className="w-full sm:w-auto border-2 border-gray-200 bg-white text-gray-900 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition duration-300 block"
          >
            Call: 0713 919 051
          </a>
        </div>

        <p className="mt-8 text-sm text-gray-400 font-medium italic">
          Based in Kenya • Available for Global Projects
        </p>
      </div>
    </section>
  );
}

export default Contact;