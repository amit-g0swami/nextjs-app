import { BackGroundDiv } from "@/features/shared/components/BackGroundDiv";
import { User } from "firebase/auth";

export interface CustomerProps {
  user: User | null;
}

export const CustomerComponent = ({ user }: CustomerProps) => {
  return (
    <div className="bg-white py-24 sm:py-32 h-screen">
      <BackGroundDiv>
        <h6 className="text-2xl text-neutral-800">User: {user?.displayName}</h6>
      </BackGroundDiv>
    </div>
  );
};
