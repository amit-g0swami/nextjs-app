import { BackGroundDiv } from "@/features/shared/components/BackGroundDiv";
import { UserAuth } from "../shared/contexts/AuthContext";

export const CustomerComponent = () => {
  const { user } = UserAuth();
  return (
    <div className="bg-white py-24 sm:py-32 h-screen">
      <BackGroundDiv>
        <h6 className="text-2xl text-neutral-800">User: {user?.displayName}</h6>
      </BackGroundDiv>
    </div>
  );
};
