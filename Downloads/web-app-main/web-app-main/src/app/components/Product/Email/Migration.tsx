import HeadingComponent from "@/app/components/common/HeadingComponent";
import HeadingDescriptionComponent from "@/app/components/common/HeadingDescriptionComponent";
import ImageComponent from "@/app/components/common/ImageComponent";
import LinkComponent from "@/app/components/common/LinkComponent";

const Migration = () => {
  return (
    <div className="bg-purple-100 text-white py-12 px-6 text-center relative border-b-2 border-b-gray-600">
      <HeadingComponent headingLabel="Migrate from legacy services to Lark Mail" />
      <HeadingDescriptionComponent
        headingDescriptionLabel={"Set up your Lark Mail account for free today"}
      />

     <div className="mb-10">
     <LinkComponent
        hrefText="/signup"
        linkLabel="Get the Lark Mail brochure and start your imagination"
      />
     </div>
      <div className="items-center flex justify-center">
        <ImageComponent
          width={800}
          height={400}
          src="https://i.ibb.co.com/0YfGVWd/emaill.jpg"
          alt="Migration"
          className="rounded w-[800px] h-[400px] object-cover mb-4"
        />
      </div>
    </div>
  );
};

export default Migration;
