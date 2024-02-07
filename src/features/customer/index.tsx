import { BackGroundDiv } from "@/features/shared/components/BackGroundDiv";
import { UserAuth } from "../shared/contexts/AuthContext";
import { Container } from "@/components/atoms/container";
import { Text } from "@/components/atoms/text";

export const CustomerComponent = () => {
  const { user } = UserAuth();
  return (
    <Container className="bg-white py-24 sm:py-32 h-screen">
      <BackGroundDiv>
        <Text as="h6" className="text-2xl text-neutral-800">
          User: {user?.displayName}
        </Text>
      </BackGroundDiv>
    </Container>
  );
};
