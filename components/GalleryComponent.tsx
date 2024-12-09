import Image from "next/image";

const ChairGallery = () => {
  const chairImages = [
    { src: "/chair3.png", alt: "Main Chair" },
    { src: "/chair2.png", alt: "Chair 2" },
    { src: "/chair.png", alt: "Chair 3" },
    { src: "/chair4.png", alt: "Chair 4" },
    { src: "/card.png", alt: "Chair 5" },
  ];

  return (
    <div className="relative mt-12 flex flex-col md:flex-row items-center">
      {/* Rotated Text Section */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-24 rotate-90 origin-center">
        <p className="text-sm md:text-lg text-gray-700 font-semibold tracking-wide whitespace-nowrap">
          EXPLORE NEW AND POPULAR STYLES
        </p>
      </div>

      {/* Main Image Section */}
      <div className="md:w-1/2 flex justify-center items-center">
        <Image
          src={chairImages[0].src}
          alt={chairImages[0].alt}
          width={400}
          height={400}
          className="object-contain max-w-full max-h-[400px]"
          priority
        />
      </div>

      {/* Gallery Section */}
      <div className="md:w-1/2 grid grid-cols-2 gap-4 mt-6 md:mt-0 ml-0 md:ml-8">
        {chairImages.slice(1).map((chair, index) => (
          <Image
            key={index}
            src={chair.src}
            alt={chair.alt}
            width={200}
            height={200}
            className="object-cover w-full h-auto rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default ChairGallery;
