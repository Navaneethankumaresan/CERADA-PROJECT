import React from "react";
import KeyHighlights from "./KeyHighlights";

const Home = () => {
  return (
    <section>
    <div className="h-screen flex flex-col items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://st4.depositphotos.com/3576919/28957/v/1600/depositphotos_289577018-stock-illustration-illustration-high-computer-technology-on.jpg')" }}>
      <h1 className="text-4xl font-bold text-black">2nd International Conference on Social Sciences, Teaching & Education, Engineering and Technology (ICSTEET)</h1>
      <p className="text-lg text-black mt-4">HYBRID EVENT - Participate in person in the Philippines or virtually from anywhere.</p>
      <p className="text-xl font-semibold text-red-500 mt-6">Date: 29-30 January, 2026 | Location: Manila, Philippines</p>
    </div>
    <KeyHighlights />
    </section>
  );
};

export default Home;
