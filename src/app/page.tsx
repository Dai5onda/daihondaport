import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Dai</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m an enthusiastic student with a {" "}<Highlight>deep passion in
        building and creating</Highlight> to solve a problem
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
      I love bringing ideas to life and
      solving problems through innovation, both in software and hardware.
      {" "} <Highlight> I&apos;m skilled in Machine Learning and Artificial Intelligence</Highlight> and always eager to take on new challenges and learn new things.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
