import { useState } from "react";
import "util/i18n";
import { useTranslation } from "react-i18next";
import parser from "html-react-parser";

export default function ChallengeCta() {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const { t } = useTranslation();
  const getText = () => {
    return t("explainer.challenge-cta", { returnObjects: true }) || {};
  };

  return (
    <div className="white p-8 rounded-lg shadow-md text-center">
      <h2 className="text-3xl font-bold text-green-dark">{getText().title}</h2>
      <p className="mt-4 text-xl">🌍 {parser(getText().subtitle)}</p>
      <button
        onClick={toggleModal}
        className="mt-6 bg-green text-white py-2 px-4 rounded hover:bg-green-dark"
      >
        {getText().button}
      </button>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              {getText().dialog.title}
            </h3>
            <p>{getText().dialog.subtitle}</p>
            <button
              onClick={toggleModal}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
            >
              {getText().dialog.button}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
