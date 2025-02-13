import React from "react";

const sessions = [
  { id: 1, title: "Emerging Technologies & Education" },
  { id: 2, title: "New Trends & Modern Approaches" },
  { id: 3, title: "Education & Industry Cooperation" },
  { id: 4, title: "Education & International Cooperation" },
  { id: 5, title: "Teaching - Learning Relationship" },
  { id: 6, title: "Sociology and Anthropology" },
  { id: 7, title: "Psychology" },
  { id: 8, title: "Social Science & Humanities" },
  { id: 9, title: "Engineering & Technology" },
];

const deadlines = [
  { title: "Early Bird Registration Deadline", date: "30 April 2025" },
  { title: "Abstract Submission", date: "1 April 2025" },
  { title: "Full Paper Submission", date: "31 May 2025" },
  { title: "Final Registration", date: "30 June 2025" },
];

const benefits = [
  "Explore Cutting-Edge Research and Innovations",
  "Foster Global Networking and Collaborations",
  "Gain Diverse Perspectives",
  "Interactive and Engaging Sessions",
  "Contribute to Global Challenges",
  "Professional Development",
  "Share Your Expertise",
  "Celebrate Interdisciplinary Innovation",
  "Publication Opportunities",
  "CERADA Awards - Recognizing Excellence",
];

const Sessions = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-10">
          ICSTEET 2026: Sessions & Call for Papers
        </h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {sessions.map((session) => (
            <div
              key={session.id}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold text-red-700 mb-2">
                {session.title}
              </h3>
              <p className="text-gray-600">
                Join this session to explore groundbreaking research and advancements.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-8 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold text-red-700 mb-4">
            Submission Deadlines
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {deadlines.map((deadline, index) => (
              <li key={index} className="text-lg">
                <strong>{deadline.title}:</strong> {deadline.date}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <a
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all"
            >
              Visit Submission Page
            </a>
          </div>
        </div>

        <div className="mt-12 bg-gray-100 p-8 shadow-2xl rounded-lg">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Why Join Us at ICSTEET-2026?</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {benefits.map((benefit, index) => (
              <li key={index} className="text-lg">{benefit}</li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700">
            For more details, visit: 
            <a href="/" className="text-blue-600 hover:underline ml-2">
              icsteet2026.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sessions;
