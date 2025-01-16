import { TeamMemberItem } from "@/components/modules/TeamMemberItem";
import { NextApiRequest, NextApiResponse } from "next";

const data: TeamMemberItem[] = [
  {
    id: "1",
    name: "Livia Bator",
    role: "CEO",
    image: "/images/user_1.png",
  },
  {
    id: "2",
    name: "Randy Press",
    role: "Director",
    image: "/images/user_2.png",
  },
  {
    id: "3",
    name: "Workman",
    role: "Designer",
    image: "/images/user_3.png",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(data);
}
