import { BackGroundDiv } from "@/components/shared/BackGroundDiv";
import { User } from "firebase/auth";

type SellerProps = {
  user: User | null;
};

export const SellerComponent = ({ user }: SellerProps) => {
  return (
    <div className="bg-white py-24 sm:py-32 h-screen">
      <BackGroundDiv>
        <h6 className="text-2xl text-neutral-800">
          Seller: {user?.displayName}
        </h6>
      </BackGroundDiv>
    </div>
  );
};
