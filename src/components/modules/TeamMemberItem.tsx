import Image from "next/image";

type TeamMemberRole = "CEO" | "Director" | "Designer";

export type TeamMemberItem = {
  id: string;
  name: string;
  role: TeamMemberRole;
  image: string;
};

type TeamMemberItemProps = {
  member: TeamMemberItem;
  isActive?: boolean;
  onClick?: (item: TeamMemberItem) => void;
};

export const TeamMemberItem = ({
  member,
  isActive = false,
  onClick,
}: TeamMemberItemProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick(member);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center shrink-0 cursor-pointer"
      onClick={handleClick}
    >
      <div className="w-20 h-20 mb-3">
        <Image
          aria-hidden
          src={member.image}
          alt={member.name}
          className="w-full h-full rounded-full object-cover"
          width={80}
          height={80}
        />
      </div>
      <h3
        className={`font-bold text-darkBlue ${
          isActive ? "font-bold text-lg" : ""
        }`}
      >
        {member.name}
      </h3>
      <p className={`text-skyBlue ${isActive ? "font-bold text-lg" : ""}`}>
        {member.role}
      </p>
    </div>
  );
};
