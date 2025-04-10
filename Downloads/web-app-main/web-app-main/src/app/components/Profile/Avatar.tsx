"use client";

export default function ProfileAvatar({
  profileImage,
  firstLetter,
}: {
  profileImage: string | null;
  firstLetter: string;
}) {
  return (
    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-500 text-white border border-gray-300">
      {profileImage ? (
        <img
          src={profileImage}
          alt="Profile Avatar"
          className="w-full h-full rounded-full object-cover"
        />
      ) : (
        <span className="text-lg font-medium">{firstLetter}</span>
      )}
    </div>
  );
}
