export default function ExplainerCta() {
  const handleDownloadClick = () => {
    // Replace with your app download link
    window.open(
      "https://play.google.com/store/apps/details?id=com.yourapp",
      "_blank"
    );
  };

  const handleCrowdfundingClick = () => {
    // Replace with your crowdfunding platform link
    window.open("", "_blank");
  };

  return (
    <div className="bg-green-lightest p-8 text-center rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-green-dark mb-4">
        Ready to take your first step?
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        Download our beta app or support us on{" "}
        <strong>Crowdfunding Platform</strong>. Together, we can make a
        difference.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <button
          onClick={handleDownloadClick}
          className="bg-green-dark text-white py-2 px-6 rounded hover:bg-green-darkest shadow-md"
        >
          Download the Beta App
        </button>
        <button
          onClick={handleCrowdfundingClick}
          className="bg-brown text-white py-2 px-6 rounded hover:bg-opacity-90 shadow-md"
        >
          Support Us
        </button>
      </div>
    </div>
  );
}
