import Image from "next/image";
import { SocialLinks } from "./SocialLinks";
import { Text } from "@/components/atoms/text";
import { Container } from "@/components/atoms/container";

const socialLinks = [
  {
    href: "#",
    svg: (
      <svg
        className="w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 8 19"
      >
        <path
          fillRule="evenodd"
          d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    label: "Facebook page",
  },
  {
    href: "#",
    svg: (
      <svg
        className="w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 17"
      >
        <path
          fillRule="evenodd"
          d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    label: "Twitter page",
  },
];

export const FooterSection = () => {
  return (
    <footer className="bg-white border-t-2 border-gray-200">
      <Container className="mx-auto w-full max-w-screen-xl p-2 py-0 lg:py-2">
        <Container className="sm:flex sm:items-center sm:justify-between">
          <Container className="flex items-center justify-center gap-4">
            <Image
              src="/assets/logo.png"
              alt=""
              width={98}
              height={98}
              priority
            />
            <Text className="text-sm text-gray-900 sm:text-center dark:text-gray-900">
              © 2024{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Shippivot™
              </a>
              . All Rights Reserved.
            </Text>
          </Container>

          <Container className="hidden sm:flex justify-center mt-0">
            {socialLinks.map((link, index) => (
              <SocialLinks
                key={index}
                href={link.href}
                svg={link.svg}
                label={link.label}
              />
            ))}
          </Container>
        </Container>
      </Container>
    </footer>
  );
};
