import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

export default function Page() {
return (
  <section className="bg-gray-100 dark:bg-gray-900 min-h-screen">
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">
      My Work In Action
    </h1>
    <p className="mt-4 text-gray-600 dark:text-gray-300">
    Here&apos;s a selection of some projects I&apos;ve developed, blending software engineering and data science
    </p>
    <p className="mt-4 text-gray-600 dark:text-gray-300">
    These projects highlight my technical skills, problem-solving abilities, and passion for creating meaningful solutions
    </p>
  </div>

  <div className="container mx-auto px-4 py-8">
  <h3 className="text-2xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white mb-4">
    Water Level Monitoring WebApp
  </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
{/* Professional Highlight Section */}
<section>
  <p className="p-4 bg-blue-100 rounded-lg">
    This project showcases a system built to manage water levels in the Flanders Region for the company <b>CIPAL</b>.
  </p>
  <div className="flex items-center gap-4 mt-1">
  <Link className="mt-4 inline-block px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md" href="/projects/waterapp">
  View More
  </Link >
  <Link className="mt-4 inline-block px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md"  target='_blank' href="https://github.com/emmanuel-akpandara/WaterLevelProject">
  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/>
</svg>
  </Link>
</div>
</section>

{/* Resume Section */}
<section className="space-y-6">
<div className="md:col-span-5 lg:col-span-4 flex justify-center items-center">
<Image src="/WaterLevelProject.png" alt="Logo" width={1000} height={800} />
  </div>
</section>
</div>
</div>


{/* Second Project */}
<div className="container mx-auto px-4 py-8">
  <h3 className="text-2xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white mb-4">
    Computer Vision: Hornet Detection and Tracking 
  </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
{/* Professional Highlight Section */}
<section>
  <p className="p-4 bg-blue-100 rounded-lg">
    This project showcases a streamlit application built to track hornets that threaten the bee ecosystem.
  </p>
  <div className="flex items-center gap-4 mt-1">
  <Link className="mt-4 inline-block px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md" href="/projects/hornetdetection">
  View More
  </Link >
  <Link target='_blank' className="mt-4 inline-block px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md" href="https://github.com/emmanuel-akpandara/Team6-AIProject/blob/main/yolo_training/Final_Report_finished.ipynb">
  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/>
</svg>
</Link>
</div>
</section>


<section className="space-y-6">
<div className="md:col-span-5 lg:col-span-4 flex justify-center items-center">
<Image src="/beehornetdetection.png" alt="Logo" width={1000} height={800} />
  </div>
</section>
</div>
</div>

</section>
  );


}
