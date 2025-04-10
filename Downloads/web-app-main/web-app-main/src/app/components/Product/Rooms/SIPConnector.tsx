import Image from "next/image";

const SIPConnector = () => {
  return (
    <section className="bg-blue-50 py-16 px-10 lg:px-0">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-6">
          SIP/H.323 Connector
        </h2>
        <p className="text-gray-600 font-semibold">
          Integrate Lark with traditional video conferencing hardware (legacy
          devices). Support Cisco, Polycom and other mainstream codecs for
          various meeting spaces.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12 px-4">
        {/* First Box */}
        <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6 flex flex-col items-center">
          <Image
            width={112}
            height={64}
            src="https://i.ibb.co.com/SdNxHYV/larkmeeting.png"
            alt="Lark Meetings"
            className="w-28 h-16 mb-4"
          />
          <p className="text-gray-dark font-semibold">Lark Meetings</p>
        </div>

        {/* Connector */}
        <div className="flex items-center">
          <div className="bg-blue-100 border border-blue-200 shadow-md rounded-lg p-6 flex flex-col items-center">
            <p className="text-bluetext font-semibold">
              SIP/H.323 Room Connector
            </p>
          </div>
        </div>

        {/* Second Box */}
        <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6 flex flex-col items-center">
          <Image
            width={112}
            height={64}
            src="https://i.ibb.co.com/CVZ52fB/sipconnector.png"
            alt="SIP/H.323 Endpoints"
            className="w-28 h-16 mb-4"
          />
          <p className="text-gray-dark font-semibold">SIP/H.323 Endpoints</p>
        </div>
      </div>
    </section>
  );
};

export default SIPConnector;
