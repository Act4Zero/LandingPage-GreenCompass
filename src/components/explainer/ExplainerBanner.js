export default function ExplainerBanner(props) {
  return (
    <div className="relative bg-gradient-to-br from-lightBg to-green-lightest rounded-lg shadow-lg mt-0 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1542202229-7d93c33f5d07?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="A scenic view of a forest with sunlight filtering through the trees"
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black bg-opacity-60 flex items-center justify-center">
        <div className="text-center text-white px-6">
          <h2 className="text-4xl font-bold mb-4">{props.title}</h2>
          <p className="text-lg">{props.subtitle}</p>
        </div>
      </div>
    </div>
  );
}
