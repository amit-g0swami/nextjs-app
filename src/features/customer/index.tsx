import { BackGroundDiv } from "@/features/shared/components/BackGroundDiv";
import { UserAuth } from "../shared/contexts/AuthContext";
import { Container } from "@/components/atoms/container";
import { Text } from "@/components/atoms/text";

export const CustomerComponent = () => {
  const { user } = UserAuth();
  return (
    <Container className="bg-white py-10 sm:py-14 h-screen">
      <BackGroundDiv>
        <Container>
          <Container className="px-4 sm:px-0">
            <Text
              as="h3"
              className="text-base font-semibold leading-7 text-gray-900"
            >
              Customer Information
            </Text>
          </Container>
          <Container className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <Container className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Full name
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {user?.displayName}
                </dd>
              </Container>
              <Container className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Email address
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {user?.email}
                </dd>
              </Container>
            </dl>
          </Container>
        </Container>
      </BackGroundDiv>
    </Container>
  );
};
