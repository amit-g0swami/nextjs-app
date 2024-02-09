import Link from "next/link";
import Image from "next/image";
import { BackGroundDiv } from "../../shared/components/BackGroundDiv";
import { Container } from "@/components/atoms/container";
import { Text } from "@/components/atoms/text";

export const HeroSection = () => {
  return (
    <Container className="bg-white">
      <Container className="relative">
        <Container className="absolute top-0 left-0 bg-transparent opacity-30 sm:block">
          <Image src="/assets/bg.png" width={460} height={400} alt="box" />
        </Container>
        <Container className="absolute top-0 right-0 bg-transparent opacity-30 mt-10 hidden md:block">
          <Image src="/assets/boxes.png" width={400} height={460} alt="boxes" />
        </Container>
      </Container>
      <BackGroundDiv>
        <Container className="absolute bottom-0 left-0 bg-transparent opacity-30 p-16 hidden lg:block -z-10">
          <Image src="/assets/box.png" width={300} height={300} alt="box" />
        </Container>
        <Container className="absolute bottom-0 right-0 bg-transparent opacity-30 p-8 hidden lg:block -z-10">
          <Image
            src="/assets/storage.png"
            width={360}
            height={200}
            alt="storage"
          />
        </Container>
        <Container className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <Container className="hidden sm:mb-8 sm:flex sm:justify-center">
            <Container className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Streamline Your Supply Chain with Our Proven Logistics Solutions.{" "}
              <a href="#services" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </Container>
          </Container>
          <Container className="text-center">
            <Text
              as="h1"
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              Your Gateway to Global Logistics Excellence
            </Text>
            <Text as="p" className="mt-6 text-lg leading-8 text-gray-600">
              As a dynamic logistics partner, we specialize in delivering
              efficient, reliable, and tailored solutions for your unique supply
              chain needs.
            </Text>
            <Container className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/login"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <a
                href="#about-us"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </Container>
          </Container>
        </Container>

        <Container
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <Container
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </Container>
      </BackGroundDiv>
    </Container>
  );
};
