'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function Page() {
  const images = [
    { src: '/hornettracking.png', alt: 'Hornet Detection Sample 1' },
    { src: '/beehornetdetection.png', alt: 'Hornet Detection Sample 2' },
    { src: '/hornetfrontpage.png', alt: 'Hornet Detection Front Page' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 min-h-screen py-16 px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Hornet Detection and Tracking Project
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          The Hornet Detection and Tracking project automates the identification and tracking of hornets in video footage to support ecological monitoring and pest control. This solution leverages computer vision to streamline detection.
          <br></br>
          <Link target='_blank' className="inline-flex items-center mt-4 inline-block px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md" href="https://github.com/emmanuel-akpandara/Team6-AIProject/blob/main/yolo_training/Final_Report_finished.ipynb">
            More on My Github <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/>
            </svg>
            </Link >

        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Problem Statement</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
        Hornets threaten bee populations and ecosystems. Manual detection methods aren't scalable, necessitating an automated detection system.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Solution</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          In a team of 3, we developed a local computer vision application on Streamlit using YOLO for object detection to detect and track hornets.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Technologies Used</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
          <li>Python</li>
          <li>Roboflow for Annotation</li>
          <li>YOLOv7 and v8 for object detection and tracking</li>
          <li>Google Colab for training on GPU</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Impact</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The system reduces manual monitoring efforts by automating hornet detection and tracking. This solution can scale to other ecological monitoring applications.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Project Showcase</h2>

        <div className="relative w-full max-w-3xl mx-auto">
          <div className="relative h-64 md:h-96 overflow-hidden rounded-lg">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                  priority={true}
                />
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 hover:bg-white/70 p-2 rounded-full"
            aria-label="Previous Slide"
          >
            &#10094;
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 hover:bg-white/70 p-2 rounded-full"
            aria-label="Next Slide"
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}
