import React from 'react'
import Link from 'next/link';

export default function Page() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">
          Internship Overview
        </h1>
        <ul className="mt-4 text-gray-600 dark:text-gray-300">
          <li><b>Position: </b>Data-Science Intern – Patent Classification Project</li>
          <li><b>Company: </b>Umicore Belgium</li>
          <li><b>Internship Period: </b>September 2024 – December 2024</li>
        </ul>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Developed an automated patent classification system for battery-related technologies. Transitioned from the Bag of Words (BoW) model to advanced machine learning models like PatentBERT to improve classification accuracy and efficiency.
        </p>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h3 className="text-2xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white mb-4">
          Project Responsibilities
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ul className="max-w-md space-y-1 text-black list-inside text-gray-600 dark:text-gray-300">
            <li className="flex items-center">
              <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
              </svg>
              Analyzed the BoW model.
            </li>
            <li className="flex items-center">
              <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
              </svg>
              Implemented and fine-tuned PatentBERT for classification.
            </li>
            <li className="flex items-center">
              <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
              </svg>
              Handled class imbalance and large text processing.
            </li>
            <li className="flex items-center">
              <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
              </svg>
              Experimented with data augmentation and meta-model embeddings.
            </li>
            <li className="flex items-center">
              <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
              </svg>
              Used MLflow for experiment tracking.
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h3 className="text-2xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white mb-4">
          Technologies Used
        </h3>
        <ul className="text-gray-600 dark:text-gray-300">
          <li>Machine Learning: PatentBERT, BatteryBert, Huggingface Transformers, MLflow</li>
          <li>Programming: Python, PyTorch</li>
          <li>Data Processing: Pandas, NumPy</li>
          <li>Experiment Tracking: MLflow</li>
          <li>Microsoft Azure: Azure Cloud</li>
        </ul>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h3 className="text-2xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white mb-4">
          Files for Reference
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          The internship project includes three main files:
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
          <li><b>Project Plan:</b> Overview of the internship and project details.</li>
          <li><b>Thesis:</b> Document detailing the experiments and results from the project.</li>
          <li><b>Reflection:</b> Personal reflection on the internship experience.</li>
        </ul>

        <div className="mt-4">
          <Link target="_blank" href="/Emmanuel_Research and Planning.pdf" className="text-blue-500 hover:text-blue-700">View Project Plan</Link>
        </div>
        <div className="mt-2">
          <Link target="_blank" href="/Emmanuel_Realization and Experiments.pdf" className="text-blue-500 hover:text-blue-700">View Thesis</Link>
        </div>
        <div className="mt-2">
          <Link target="_blank" href="/Reflection_Emmanuel.pdf" className="text-blue-500 hover:text-blue-700">View Reflection</Link>
        </div>
      </div>
    </section>
  );
}
