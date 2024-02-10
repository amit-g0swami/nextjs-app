import { Container } from "@/components/atoms/container";
import { Text } from "@/components/atoms/text";
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

type ServicesSectionListProps = {
  icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
};

export const ServiceSectionList = ({
  title,
  description,
  icon: Icon,
}: ServicesSectionListProps) => {
  return (
    <li className="mt-10 md:mt-0">
      <Container className="flex">
        <Container className="flex-shrink-0">
          <Container className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
            <Icon className="h-6 w-6" />
          </Container>
        </Container>
        <Container className="ml-4">
          <Text as="h4" className="text-lg leading-6 font-medium text-gray-900">
            {title}
          </Text>
          <Text as="p" className="mt-2 text-base leading-6 text-gray-500">
            {description}
          </Text>
        </Container>
      </Container>
    </li>
  );
};
