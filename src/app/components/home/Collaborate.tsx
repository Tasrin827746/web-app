import CollaborateInteractive from "./InteractiveComponents/CollaborateInteractive";

const CollaborateWrapper = () => {
  return (
    <section className="bg-white pt-8 px-4 sm:px-6 lg:px-20">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-defaultText">
          Plan, collaborate, execute and measure
        </h1>
        <p className="text-textGray max-w-2xl mx-auto text-base sm:text-lg lg:text-lg font-semibold">
          Lark empowers you to achieve operational excellence by providing tools
          to organize your business, digitalize workflows, and ensure your plans
          turn into action on the ground.
        </p>
      </div>

      {/* Interactive Component */}
      <CollaborateInteractive />
    </section>
  );
};

export default CollaborateWrapper;
