import React from 'react';

function ContentSection(props) {
  return (
    <section className="bg-gradient-to-r from-green-400 to-blue-500 p-8 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{props.title}</h1>
        <p className="mb-4">{props.paragraph1}</p>
        <p className="mb-4">{props.paragraph2}</p>    
        <p className="mb-4">{props.paragraph3}</p>
        <p className="mb-6">{props.paragraph4}</p>
        <button
          className={`
            bg-white text-green-500 font-bold py-2 px-4 rounded
            hover:bg-gray-200 transition duration-300
          `}
        >
          Learn More
        </button>
      </div>
    </section>
  );
}

export default ContentSection;
