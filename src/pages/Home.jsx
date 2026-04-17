import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Videos from "../components/Videos";

function Home() {
  const email = "munitmedia.ke@gmail.com";
  const phone = "0713919051";
  const whatsappNumber = "254713919051"; // International format for wa.me

  return (
    <main className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-32 md:space-y-48 pb-20">
        
        {/* Navigation Sections */}
        <section id="home">
          <Hero />
        </section>

        <section id="services">
          <Services />
        </section>
        
        <section id="videos">
          <Videos />
        </section>

        {/* FINAL CONTACT CTA */}
        <section id="contact" className="bg-[#020617] text-white rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          {/* Background Glows for Premium Look */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 blur-[100px]"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
             Ready to capture your special moments? Book your event with us today.
            </h2>
            
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Whether it's a wedding,graduation, dowry payment, or any other specia occasion, let's create something unforgettable.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              {/* WHATSAPP - The Fast Closer */}
              <a 
                href={`https://wa.me/${whatsappNumber}?text=Hi%20M-Unit%20Media,%20I'm%20interested%20in%20a%20project.`}
                target="_blank"
                rel="noreferrer"
                className="w-full md:w-auto bg-[#25D366] text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-[#128C7E] hover:scale-105 transition duration-300 shadow-xl flex items-center justify-center gap-3"
              >
                WhatsApp Chat
              </a>
              
              {/* CALL - The Direct Line */}
              <a 
                href={`tel:${phone}`}
                className="w-full md:w-auto bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 hover:scale-105 transition duration-300 shadow-lg flex items-center justify-center gap-3"
              >
                Call: {phone}
              </a>
            </div>

            {/* EMAIL US DIRECTLY - Back in a clean way */}
            <div className="mt-10">
              <a 
                href={`mailto:${email}`}
                className="inline-block text-white border-b-2 border-blue-500 pb-1 font-bold text-lg hover:text-blue-400 transition"
              >
                Email Us : {email}
              </a>
            </div>
          </div>
        </section>

        {/* REFINED FOOTER */}
        <footer className="py-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-8">
          <div className="text-center md:text-left">
            <p className="font-black text-gray-900 text-xl tracking-tighter uppercase mb-1">M-Unit Media</p>
            <p>© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 font-bold text-gray-800">
            <a href="#home" className="hover:text-blue-600 transition">Home</a>
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#videos" className="hover:text-blue-600 transition">Portfolio</a>
            <a 
              href="https://youtube.com/@m-unitmedia7055" 
              target="_blank" 
              rel="noreferrer" 
              className="text-red-600 hover:scale-105 transition"
            >
              YouTube
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default Home;