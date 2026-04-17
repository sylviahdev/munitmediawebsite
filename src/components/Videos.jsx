import React from "react";

function Videos() {
  const projects = [
    { 
      title: "Nature & Exploration", 
      type: "Cinematic", 
      id: "8QbvDhkpSK8" 
    },
    { 
      title: "Urban Stories", 
      type: "Commercial", 
      id: "-ybE5tkAHD8" 
    },
    { 
      title: "Cultural Highlights", 
      type: "Documentary", 
      id: "tZuONMDpa48" 
    },
  ];

  return (
    <section id="videos" className="py-20">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Portfolio</span>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-4">Our Work</h2>
        <p className="text-gray-500 text-lg">A showcase of cinematic excellence and visual storytelling.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <div key={i} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
            <div className="relative overflow-hidden aspect-video">
              {/* Using hqdefault as it's more reliable than maxresdefault for all videos */}
              <img
                src={`https://img.youtube.com/vi/${project.id}/hqdefault.jpg`}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
              
              {/* Play Overlay */}
              <div className="absolute inset-0 bg-gray-900/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                 <div className="bg-white text-blue-600 w-16 h-16 rounded-full flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition duration-300">
                   <span className="text-2xl ml-1">▶</span>
                 </div>
              </div>
            </div>

            <div className="p-8">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em]">{project.type}</span>
              <h3 className="font-bold text-2xl mt-2 mb-6 text-gray-900">{project.title}</h3>
              <a
                href={`https://www.youtube.com/watch?v=${project.id}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-gray-900 font-bold group-hover:text-blue-600 transition-colors"
              >
                Watch Project <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Videos;