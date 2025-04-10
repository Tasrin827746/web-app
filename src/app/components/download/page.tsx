import Button from "./Button";

export default function Download() {
  const platforms = [
    {
      name: "macOS",
      image: "https://i.ibb.co/GJNKKy1/Apple-Logo.png",
      link: "https://www.apple.com/macos",
    },
    {
      name: "Linux",
      image: "https://i.ibb.co/D95HPQ9/linux.jpg",
      link: "https://www.linux.org",
    },
    {
      name: "App Store",
      image: "https://i.ibb.co/GJNKKy1/Apple-Logo.png",
      link: "https://apps.apple.com",
    },
    {
      name: "Google Play",
      image: "https://i.ibb.co/Wns6Rpc/googleplay.webp",
      link: "https://play.google.com",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white text-center py-16 px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Download Lark for Windows</h2>
      <p className="text-gray-600 mb-6">
        Your journey starts here. Download Lark and join the Next-Gen collaboration suite.
      </p>
      <Button />
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Also available on</h3>
        <div className="flex justify-center gap-4">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow rounded-lg p-3 flex flex-col items-center justify-center w-40 h-28 hover:shadow-lg hover:bg-slate-100 transition"
            >
              <img
                src={platform.image}
                alt={`${platform.name} icon`}
                className="w-10 h-8 mb-2"
                aria-label={`Download for ${platform.name}`}
              />
              <p className="text-gray-700 text-sm font-medium">{platform.name}</p>
            </a>
          ))}
        </div>
      </div>
      <div className="mt-12 flex justify-center">
        <img
          src="https://i.ibb.co.com/Fxsyv9W/meeting4.jpg"
          alt="Preview of Lark on various devices"
          className="max-w-full rounded-3xl shadow-lg"
        />
      </div>
    </section>
  );
}
