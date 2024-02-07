import { LoginForm } from "./components/LoginForm";
import { BackGroundDiv } from "@/features/shared/components/BackGroundDiv";
import { CardComponent } from "@/features/login/components/CardComponent";
import { USER_TYPE } from "@/shared/shared.interface";

type LoginComponentProps = {
  loginType: USER_TYPE | null;
  setType: (type: USER_TYPE) => void;
};

export const LoginComponent = ({ loginType, setType }: LoginComponentProps) => {
  return (
    <div className="bg-white py-24 sm:py-32 h-screen">
      <BackGroundDiv>
        {loginType === null ? (
          <CardComponent setType={setType} />
        ) : (
          <LoginForm disabled={true} />
        )}
      </BackGroundDiv>
    </div>
  );
};
