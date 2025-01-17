import React from 'react';

export default function Page() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">
          About Me
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Hello!, I'm Emmanuel Akpandara, a young IT professional and a graduating computer science student.
        </p>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Through out my academic and internship experiences, I have had the opportunity to gain soft skills, some of which are:
        </p>
        <br></br>
        
<ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
    <li className="flex items-center space-x-3 rtl:space-x-reverse">
         <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
        <span>The ability to quickly adapt to new tools and environments</span>
    </li>
    <li className="flex items-center space-x-3 rtl:space-x-reverse">
        <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
        <span>Willingness to learn and apply new technologies and best practices</span>
    </li>
    <li className="flex items-center space-x-3 rtl:space-x-reverse">
        <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
        <span>Proactive attitude and ability to work independently</span>
    </li>
    <li className="flex items-center space-x-3 rtl:space-x-reverse">
        <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
        <span>Strong communication skills for effective collaboration and problem-solving</span>
    </li>
</ul>
      </div>

      <div className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Professional Highlight Section */}
    <section>
      <h3 className="text-2xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white mb-4">
        Professional Highlight
      </h3>
      <p className="p-4 bg-blue-100 rounded-lg">
        During my internship at <b>Umicore Belgium,</b> I worked on building a state-of-the-art AI Model to classify patents. This experience enhanced my understanding <br></br>
        of <b>NLP and semantic embeddings</b> while solidifying my skills in tools like <b>Databricks and MLflow</b>.
      </p>
      <br></br>
      <h3 className="text-2xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white mb-4">
        Personal Interest
      </h3>
      <p className="p-4 bg-blue-100 rounded-lg">
      When I'm not coding or analyzing data, you’ll find me working
      on my personal development, from honing my skills to getting a good work-out done for the day.
      </p>
    </section>

    {/* Resume Section */}
    <section className="space-y-6">
      <h3 className="text-2xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">
        My Resume
      </h3>
      <a 
        href="/Emmanuel Akpandara__cv.pdf" 
        download 
        className="mt-4 inline-block px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
      >
        Download My Resume
      </a>
    </section>
  </div>
</div>
    </section>
  );
}
