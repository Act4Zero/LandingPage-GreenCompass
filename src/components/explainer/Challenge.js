import { useState } from "react";

export default function ChallengeSection() {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="white p-8 rounded-lg shadow-md text-center">
      <h2 className="text-3xl font-bold text-green-dark">
        If 10,000 users complete this week’s challenge…
      </h2>
      <p className="mt-4 text-xl">
        🌍 We’ll collectively save <strong>100 tons of CO2</strong> – the
        equivalent of planting
        <strong>5,000 trees!</strong>
      </p>
      <button
        onClick={toggleModal}
        className="mt-6 bg-green text-white py-2 px-4 rounded hover:bg-green-dark"
      >
        Join the Challenge
      </button>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Challenge Details</h3>
            <p>Here’s how you can participate and make an impact!</p>
            <button
              onClick={toggleModal}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
            >
              Maybe later
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
