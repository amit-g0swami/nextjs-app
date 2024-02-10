import Link from "next/link";
import { Container } from "@/components/atoms/container";
import { INavigationData } from "../../../home.interface";

type MenuProps = {
  navigationData: INavigationData[];
};

export const Menu = ({ navigationData }: MenuProps) => {
  return (
    <Container className="hidden lg:flex lg:gap-x-12">
      {navigationData.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          {item.name}
        </Link>
      ))}
    </Container>
  );
};
