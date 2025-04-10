import ProductivityClient from "./InteractiveComponents/ProductivityClient";

const ProductivityPage = () => {
  return (
    <div className="bg-gradient-to-b from-violet-100 to-white min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-10">
      {/* Heading Section */}
      <div className="text-center mb-10 max-w-4xl">
        <h1 className="text-2xl md:text-4xl font-semibold mb-4">
          The productivity <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">Superapp</span> all businesses need
        </h1>
        <p className="text-sm md:text-lg font-medium text-gray-600 max-w-3xl mx-auto">
          Lark digitizes operations from HQ to storefront, streamlines communication, and empowers
          your business with tools for project management, video conferencing, chat, and more!
        </p>
      </div>

      {/* Interactive Client Component */}
      <div className="w-full max-w-5xl flex justify-center">
        <ProductivityClient />
      </div>
    </div>
  );
};

export default ProductivityPage;
