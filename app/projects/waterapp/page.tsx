'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  const images = [
    { src: '/WaterLevelProject.png', alt: '' },
    { src: '/signup.png', alt: '' },
  
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };



  return (
    <section className="bg-gray-100 dark:bg-gray-900 min-h-screen py-16 px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Water Level Monitoring Web App
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Collaborated in a 6-member team to monitor water levels in Flanders for CIPAL, using sensor data from waterinfo.be APIs processed with Node-RED and visualized through Grafana. Developed a Streamlit app enabling users to sign up, view water levels on charts, set thresholds for alerts, and manage sensor setup files with Firebase.
          </p><br />
          <div className="flex space-x-4 mt-4">
          <Link target='_blank' className="inline-flex items-center px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md" href="https://github.com/emmanuel-akpandara/WaterLevelProject">
            More on My Github
            <svg className="w-6 h-6 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
            </svg>
          </Link>

          <Link target='_blank' className="inline-flex items-center px-6 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md" href="https://waterlevelproject.streamlit.app/">
            View App
            <svg className="w-6 h-6 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Key Impact</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
          <li>Delivered a user-friendly web app with login and registration functionalities, enabling users to monitor water levels across Flanders.</li>
          <li>Implemented customizable alert thresholds for significant water level changes, ensuring timely notifications.</li>
          <li>Enabled users to view and store sensor files, such as water level records and setup files for multiple stations.</li>
        </ul>


        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Technology Stack</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
          <li>Frontend: Streamlit</li>
          <li>Backend: Node-RED, Firebase</li>
          <li>Data Source: waterinfo.be APIs</li>
          <li>Visualization: Grafana</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Project Showcase</h2>

        <div className="relative w-full max-w-3xl mx-auto">
          <div className="relative h-64 md:h-96 overflow-hidden rounded-lg">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              >
                <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" className="rounded-lg" priority />
              </div>
            ))}
          </div>

          <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 hover:bg-white/70 p-2 rounded-full" aria-label="Previous Slide">
            &#10094;
          </button>

          <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 hover:bg-white/70 p-2 rounded-full" aria-label="Next Slide">
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}
