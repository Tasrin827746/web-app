
import LinkComponent from "../../common/LinkComponent";

const Footer = () => {
  return (
    <div className="bg-black text-white py-12 px-6 flex items-center justify-center flex-col border-b-2 border-b-gray-600">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Lark, bringing it all together
      </h1>
      <p className="text-lg md:text-lg mb-6">
        -All you need is the Internet and Lark.
      </p>
      <div className="flex justify-between items-center">
        <LinkComponent hrefText="/contactsales" linkLabel=" Try free demo" />
       
      </div>
      <div className="absolute bottom-10 right-10"></div>
    </div>
  );
};

export default Footer;
