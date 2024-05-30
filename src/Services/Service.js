// import "./index.css";
import Newsletter from "../Newsletter";
import Footer from "../Home/Footer";

function Service() {
  const services = [
    {
      title: "Service 1",
      description: "Description for service 1.",
      imageUrl: "https://images.unsplash.com/photo-1",
    },
    {
      title: "Service 2",
      description: "Description for service 2.",
      imageUrl: "https://images.unsplash.com/photo-2",
    },
    // Add more service objects here
    {
      title: "Service 3",
      description: "Description for service 3.",
      imageUrl: "",
    },
    {
      title: "Service 4",
      description: "Description for service 4.",
      imageUrl: "",
    },
    {
      title: "Service 5",
      description: "Description for service 5.",
      imageUrl: "",
    },
    {
      title: "Service 6",
      description: "Description for service 6.",
      imageUrl: "",
    },
  ];

  return (
    <>
      <div className="min-h-screen p-10 flex flex-col items-center">
        <div className="text-center text-black text-3xl font-bold mt-10 mb-8 border-b-2 border-green-800">
          Services
        </div>
        <div className="text-center text-black text-xl font-semibold mb-8">
          Empowering Minds Our Mental Health Consulting Services
        </div>
        <div className="grid grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-[200px] w-[300px] rounded-md"
            >
              <img
                src={service.imageUrl}
                alt={service.title}
                className="z-0 h-full w-full rounded-md object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-green-300"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">
                  {service.title}
                </h1>
                <p className="mt-2 text-sm text-gray-300">
                  {service.description}
                  <button className="mt-2 inline-flex cursor-pointer items-center text-lg font-semibold text-white ml-10">
                    →
                  </button>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}

export default Service;
