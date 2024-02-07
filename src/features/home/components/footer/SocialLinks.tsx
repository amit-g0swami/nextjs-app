import { Text } from "@/components/atoms/text";

type SocialLinkProps = {
  href: string;
  svg: React.ReactNode;
  label: string;
};

export const SocialLinks = ({ href, svg, label }: SocialLinkProps) => (
  <a href={href} className="text-gray-900 hover:text-gray-500 ms-5">
    {svg}
    <Text className="sr-only">{label}</Text>
  </a>
);
