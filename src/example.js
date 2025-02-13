import React from 'react';
// function example({ content1}) {
//   return (
//     <div className="flex flex-row items-center justify-evenly p-40 bg-white">
//       <div className="bg-red-500 text-3xl  p-24 rounded-lg w-16 text-center ">
//         {content1="HEAD"}
//       </div>
//       <div className="bg-green-500 text-3xl p-24 rounded-lg  w-16 text-center">
//         {content1}
//       </div>
//       <div className="bg-emerald-400 text-3xl p-24 rounded-lg  w-16 text-center">
//         {content1}
//       </div>
//     </div>
//   );
// }
// export default example;



export const Card = ({ title, description, price, buttonText, onClick }) => {
  return (
    <div className="bg-black rounded-lg p-6 shadow-2xl shadow-gray-500 ">  
      <h1 className="text-2xl font-bold text-gray-300 mb-4">{title}</h1>
      <p className="text-gray-500 mb-4">{description}</p>
      <div className="text-3xl font-bold text-white mb-6">RS-{price}</div>
      <button
        onClick={onClick}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-400 "
      >
        {buttonText}
      </button>
    </div>
  );
};



function Product() {
  const handleClick = (Card) => {
    console.log (`Selected ${Card} plan!`);;
   
  };
  

  const cards = [
    {
      title: "Basic Recharge Plan",
      description: "Perfect for starters. Includes daily 2G & unlimited call.",
      price: "399",
      image: "https://i.pinimg.com/564x/4f/44/c7/4f44c7c46b5aedc071a217e8179a4479.jpg",
      buttonText: "Start Basic",
      onClick: () => handleClick("Basic")
    },
    {
      title: "Pro Recharge Plan",
      description: "Most popular choice.Yearly pack  daily 3G & unlimited call .",
      price: "1999",
      image: "https://i.pinimg.com/564x/4f/44/c7/4f44c7c46b5aedc071a217e8179a4479.jpg",
      buttonText: "Go Pro",
      onClick: () => handleClick("Pro")
    },
    {
      title: "5G Recharge Plan",
      description: "Full suite of features. 5G unlimited data & unlimited call .",
      price: "2999",
      image: "https://soulfit.net.in/wp-content/uploads/2017/01/product_08.jpg",
      buttonText: "Get Super",
      onClick: () => handleClick("Enterprise")
    },
    {
      title: "5G Recharge Plan",
      description: "Full suite of features. 5G unlimited data & unlimited call .",
      price: "2999",
      image: "https://soulfit.net.in/wp-content/uploads/2017/01/product_08.jpg",
      buttonText: "Get Super",
      onClick: () => handleClick("Enterprise")
    },
    {
      title: "5G Recharge Plan",
      description: "Full suite of features. 5G unlimited data & unlimited call .",
      price: "2999",
      image: "https://soulfit.net.in/wp-content/uploads/2017/01/product_08.jpg",
      buttonText: "Get Super",
      onClick: () => handleClick("Enterprise")
    },
    {
      title: "5G Recharge Plan",
      description: "Full suite of features. 5G unlimited data & unlimited call .",
      price: "2999",
      image: "https://soulfit.net.in/wp-content/uploads/2017/01/product_08.jpg",
      buttonText: "Get Super",
      onClick: () => handleClick("Enterprise")
    },
    
   
  ];

  return (
    <div className="min-h-screen  bg-lime-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-orange-500 mb-12">
          Our Pricing Plans
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              price={card.price}
              image={card.image}
              buttonText={card.buttonText}
              onClick={card.onClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
