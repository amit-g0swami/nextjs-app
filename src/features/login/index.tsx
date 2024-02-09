import { LoginForm } from "./components/LoginForm";
import { BackGroundDiv } from "@/features/shared/components/BackGroundDiv";
import { CardComponent } from "@/features/login/components/CardComponent";
import { USER_TYPE } from "@/shared/shared.interface";
import { Container } from "@/components/atoms/container";

type LoginComponentProps = {
  loginType: USER_TYPE | null;
  setType: (type: USER_TYPE) => void;
};

type getRenderedLoginTypeProps = {
  loginType: USER_TYPE | null;
  setType: (type: USER_TYPE) => void;
};

const getRenderedLoginType = ({
  loginType,
  setType,
}: getRenderedLoginTypeProps) => {
  switch (loginType) {
    case null:
      return <CardComponent setType={setType} />;
    default:
      return <LoginForm disabled={true} />;
  }
};

export const LoginComponent = ({ loginType, setType }: LoginComponentProps) => {
  return (
    <Container className="bg-white py-24 sm:py-32 h-screen">
      <BackGroundDiv>
        {getRenderedLoginType({ loginType, setType })}
      </BackGroundDiv>
    </Container>
  );
};
