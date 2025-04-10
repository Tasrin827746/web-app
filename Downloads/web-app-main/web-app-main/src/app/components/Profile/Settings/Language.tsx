import { useState } from "react";

export default function LanguageSettings() {
  const [nameDisplay, setNameDisplay] = useState("english-only"); 
  const [translationDisplay, setTranslationDisplay] = useState("translation-only"); 
  const [autoTranslate, setAutoTranslate] = useState(false); 
  const [syncTranslate, setSyncTranslate] = useState(false);
  const [timeFormat24, setTimeFormat24] = useState(false);

  return (
    <div className="p-2 bg-gray-100">
      <h3 className="text-xl font-medium mb-4">Language and Time</h3>

      {/* Language Selection */}
      <label className="block text-gray-900 text-sm">Language</label>
      <select className="mt-2 p-2 border border-gray-300 bg-transparent rounded-lg w-1/2 outline-none cursor-pointer">
        <option value="">Spanish</option>
        <option value="">Chinese</option>
        <option value="">French</option>
        <option value="">English</option>
      </select>

      {/* Name Display on Profile Page */}
      <div className="mt-6">
        <p className="text-gray-900 text-sm mb-2">Name display on profile page</p>
        <div className="flex gap-4">
          <div className={`p-4 border rounded-lg w-56 cursor-pointer ${nameDisplay === "english-only" ? "bg-blue-100" : ""}`}
            onClick={() => setNameDisplay("english-only")}
          >
            <img src="/profile.webp" alt="Profile" className="w-10 h-10 rounded-full" />
            <p className="mt-2">Lily</p>
            <input type="radio" name="name-display" className="mt-2" checked={nameDisplay === "english-only"} onChange={() => setNameDisplay("english-only")} />
            <span className="ml-2 text-sm">English name only</span>
          </div>
          <div className={`p-4 border rounded-lg w-56 cursor-pointer ${nameDisplay === "english-original" ? "bg-blue-100" : ""}`}
            onClick={() => setNameDisplay("english-original")}
          >
            <img src="/profile.webp" alt="Profile" className="w-10 h-10 rounded-full" />
            <p className="mt-2">Lily (李梅)</p>
            <input type="radio" name="name-display" className="mt-2" checked={nameDisplay === "english-original"} onChange={() => setNameDisplay("english-original")} />
            <span className="ml-2 text-sm">English and original name</span>
          </div>
        </div>
      </div>

      {/* Translate Into */}
      <div className="mt-8">
        <label className="block text-gray-900 text-sm">Translate into</label>
        <select className="mt-2 p-2 border border-gray-300 rounded-lg w-1/2 bg-transparent outline-none cursor-pointer">
          <option>English</option>
          <option>Chinese</option>
          <option>Spanish</option>
          <option>French</option>
        </select>
      </div>

      {/* Translation Display */}
      <div className="mt-6">
  <p className="text-gray-900 mb-2 text-sm">Translation display</p>
  <div className="flex gap-4">
    {/* Card 1 */}
    <div
      className={`relative p-4 border rounded-lg w-56 cursor-pointer flex flex-col justify-between h-40 ${
        translationDisplay === "original-and-translation" ? "bg-blue-100" : ""
      }`}
      onClick={() => setTranslationDisplay("original-and-translation")}
    >
      <div className="mb-6 bg-gray-200 p-2 rounded-lg">
        <p className="mb-2">你好, 朋友</p>
        <p className="text-gray-500">Hello, my friend</p>
      </div>
      <div className="absolute bottom-4 left-4 flex items-center">
        <input
          type="radio"
          name="translation-display"
          checked={translationDisplay === "original-and-translation"}
          onChange={() => setTranslationDisplay("original-and-translation")}
        />
        <span className="ml-2">Show original and translation</span>
      </div>
    </div>

    {/* Card 2 */}
    <div
      className={`relative p-4 border rounded-lg w-56 cursor-pointer flex flex-col justify-between h-40 ${
        translationDisplay === "translation-only" ? "bg-blue-100" : ""
      }`}
      onClick={() => setTranslationDisplay("translation-only")}
    >
      <div className="mb-6 bg-gray-200 p-2 rounded-lg">
        <p className="mb-2">Hello, my friend</p>
      </div>
      <div className="absolute bottom-4 left-4 flex items-center">
        <input
          type="radio"
          name="translation-display"
          checked={translationDisplay === "translation-only"}
          onChange={() => setTranslationDisplay("translation-only")}
        />
        <span className="ml-2">Show translation only</span>
      </div>
    </div>
  </div>
</div>

<div>
    <button className="mt-2 text-sm text-blue-600">Set by language</button>
</div>


      {/* Additional Options */}
      <div className="mt-6 space-y-6 text-sm">
  {/* Auto-translation */}
  <div>
    <label className="flex items-center">
      <input
        type="checkbox"
        className="mr-2"
        checked={autoTranslate}
        onChange={() => setAutoTranslate(!autoTranslate)}
      />
      Auto-translation
    </label>
    <p className="text-gray-500 text-xs ml-6">Automatically translate messages in other languages.</p>
  </div>

  {/* Sync Translate as you type settings */}
  <div>
    <label className="flex items-center">
      <input
        type="checkbox"
        className="mr-2"
        checked={syncTranslate}
        onChange={() => setSyncTranslate(!syncTranslate)}
      />
      Sync Translate as you type settings
    </label>
    <p className="text-gray-500 text-xs ml-6">Keep settings of Translate as you type consistent across all chats.</p>
  </div>

  {/* 24-hour Time */}
  <div>
    <label className="flex items-center">
      <input
        type="checkbox"
        className="mr-2"
        checked={timeFormat24}
        onChange={() => setTimeFormat24(!timeFormat24)}
      />
      24-hour Time
    </label>
    <p className="text-gray-500 text-xs ml-6">Display time in 24-hour format in all features.</p>
  </div>
</div>

    </div>
  );
}
