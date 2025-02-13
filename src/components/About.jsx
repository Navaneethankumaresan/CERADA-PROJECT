import React from "react";

const About = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-6">
          About ICSTEET 2026
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed text-center">
          Welcome to the International Conference on Social Sciences, Teaching & Education, 
          Engineering, and Technology (ICSTEET) 2026! This global conference will bring together 
          top scholars, researchers, and industry professionals to discuss innovations and tackle 
          interdisciplinary challenges.
        </p>

        <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-red-700 mb-4">About ICSTEET</h3>
          <p className="text-gray-700 leading-relaxed">
            ICSTEET unites leading academic scientists, researchers, and scholars to exchange ideas and present 
            groundbreaking research. This conference serves as a global platform to showcase advancements in 
            education, engineering, technology, social sciences, and humanities.
          </p>
        </div>

        <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-red-700 mb-4">Conference Theme</h3>
          <p className="text-gray-700 leading-relaxed">
            <strong>"Bridging the Gap: Innovations and Challenges in Social Sciences, Teaching & Education, 
            Engineering, and Technology"</strong>
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            This conference aims to bring together scholars and industry experts to explore how 
            interdisciplinary innovations can bridge knowledge gaps, enhance industry practices, 
            and tackle global challenges. Key topics include emerging educational technologies, 
            innovative teaching methods, industry-academia collaboration, and advancements in 
            sociology, psychology, and engineering.
          </p>
        </div>

        <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-red-700 mb-4">Networking & Publishing</h3>
          <p className="text-gray-700 leading-relaxed">
            Attendees will have the opportunity to connect with industry professionals, present their 
            research, and publish their findings in **Scopus-indexed journals**. 
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            The conference will feature **keynote speakers, panel discussions, paper presentations, and 
            hands-on workshops** designed to inspire innovation and collaboration.
          </p>
        </div>

        <div className="text-center mt-10">
          <p className="text-lg text-gray-700">
            For more details, visit:
            <a
              href="/"
              className="text-blue-600 hover:underline ml-2"
            >
              icsteet2026.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
