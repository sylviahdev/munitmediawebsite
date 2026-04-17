import React from "react";

function Services() {
  const services = [
    { title: "Video Production", desc: "High quality professional videos and photos for events and brands.", icon: "🎬" },
    { title: "Photography", desc: "Professional shots that capture your special moments..", icon: "📸" },
    { title: "Editing & Post-Production", desc: "We creatively edit and refine your footage, then publish it on YouTube for you.", icon: "✂️" },
  ];

  return (
    <section id="services" className="py-10">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
        <p className="text-gray-500 text-lg">Tailored video and photography solutions for your brand or event..</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-500">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-3xl">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;