import Image from "next/image";

export const ProfileButton = () => {
  return (
    <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:opacity-80">
      <Image
        aria-hidden
        className="w-full h-full rounded-full"
        src="/images/profile.png"
        alt="Profile avatar"
        width={16}
        height={16}
      />
    </button>
  );
};
