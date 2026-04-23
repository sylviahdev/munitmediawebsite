import React from "react";
import { motion } from "framer-motion";

function Videos() {
  const videos = [
    "KHcZ5tj8IF4",
    "UCy6owErxNk",
    "tZuONMDpa48",
    "34q46-Pwpno",
    "dVfvw7969Lc",
    "bAkyLHzVUCQ",
  ];

  return (
    <section id="videos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Work
          </h2>
          <p className="text-gray-600 text-lg">
            Watch some of our recent projects
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {videos.map((id, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition duration-300"
            >
              <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden">

                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${id}`}
                  title="M-Unit Media Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Videos;