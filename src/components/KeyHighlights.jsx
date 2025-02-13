import React from "react";

const highlights = [
  {
    title: "Interdisciplinary Sessions",
    description:
      "Engage in thought-provoking sessions that bridge various disciplines and explore their interconnectedness.",
  },
  {
    title: "Expert Keynote Speakers",
    description:
      "Learn from renowned experts who will share their insights and experiences.",
  },
  {
    title: "Paper Presentations",
    description:
      "Present your research findings and contribute to discussions on a wide range of topics.",
  },
  {
    title: "Networking Opportunities",
    description:
      "Connect with peers, researchers, and industry professionals to build collaborations and partnerships.",
  },
  {
    title: "Publication Opportunities",
    description:
      "Selected papers will have the opportunity to be published in Scopus-indexed journals.",
  },
  {
    title: "CERADA Awards",
    description:
      "Celebrate excellence with our prestigious awards, recognizing outstanding contributions to the field.",
  },
];

const KeyHighlights = () => {
  return (
    <section className="py-12 bg-blue-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Key Highlights</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-lg font-semibold text-red-700 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;
