const Robust = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <img
        src="https://i.ibb.co.com/GCd06Cn/Robust-Image.jpg"
        alt="Data Center"
        className="w-full h-80 md:h-auto object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center mt-[-500px] justify-center text-center px-4 md:px-8 lg:px-0">
        <h1 className="text-xl md:text-2xl lg:text-[32px] font-semibold mb-2 text-black">
          Robust data security and compliance
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-gray-700 max-w-2xl">
          Protecting customer data security is a top priority and the foundation
          of our relationship with our customers.
        </p>
      </div>
    </div>
  );
};

export default Robust;
