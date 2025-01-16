import Image from "next/image";

type EditProfilePictureProps = {
  src?: string;
  onEditClick?: () => void;
};

export const EditProfilePicture = ({
  src,
  onEditClick,
}: EditProfilePictureProps) => {
  return (
    <div className="flex h-fit justify-center md:justify-start md:flex-shrink-0">
      <div className="relative">
        <Image
          aria-hidden
          src={src || "/images/no_image.png"}
          alt="profile picture"
          className="w-40 h-40 rounded-full object-cover shadow-md"
          width={40}
          height={40}
        />
        <button
          type="button"
          className="absolute bottom-2 right-2 bg-darkBlue rounded-full p-2 hover:opacity-70 cursor-pointer"
          onClick={onEditClick}
        >
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
