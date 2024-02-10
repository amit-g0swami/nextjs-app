import Image from "next/image";
import { USER_TYPE } from "@/shared/shared.interface";
import { Container } from "@/components/atoms/container";
import { Text } from "@/components/atoms/text";
import { Button } from "@/components/atoms/button";

type CardProps = {
  icon: string;
  title: string;
  description: string;
  setLoginType: (type: USER_TYPE) => void;
  type: USER_TYPE;
};

export const Card = ({
  icon,
  title,
  description,
  type,
  setLoginType,
}: Readonly<CardProps>) => (
  <Container className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
    <Container className="rounded-2xl bg-gray-50 py-6 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
      <Container className="mx-auto max-w-xs px-8">
        <Container className="mt-10 flex items-baseline justify-center text-gray-900">
          <Image src={icon} alt="" width={98} height={98} priority />
        </Container>
        <Button
          onClick={() => setLoginType(type)}
          btnText={title}
          className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        />
        <Text as="p" className="mt-10 text-xs leading-5 text-gray-600">
          {description}
        </Text>
      </Container>
    </Container>
  </Container>
);
