import { LoginForm } from "./components/LoginForm";
import { BackGroundDiv } from "@/features/shared/components/BackGroundDiv";
import { Card } from "@/features/login/components/CardComponent";
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
          <>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl rounded-3xl sm:mt-18 lg:mx-0 lg:flex lg:max-w-none justify-center">
                <Card
                  icon={"/assets/seller.png"}
                  title="Seller Login"
                  description="Elevate your business journey! Sign in to your seller account
             and explore tools designed to boost your sales."
                  setLoginType={setType}
                  type={USER_TYPE.SELLER}
                />
                <Card
                  icon={"/assets/profile.png"}
                  title="Customer Login"
                  description="Unlock endless possibilities and personalized experiences. Login to
            access exclusive features tailored just for you."
                  setLoginType={setType}
                  type={USER_TYPE.CUSTOMER}
                />
              </div>
            </div>
          </>
        ) : (
          <LoginForm disabled={true} />
        )}
      </BackGroundDiv>
    </div>
  );
};
