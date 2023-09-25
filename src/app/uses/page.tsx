import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { SimpleLayout } from "@/components/SimpleLayout";

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
}

function Tool({
  title,
  href,
  children,
}: {
  title: string;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

export const metadata = {
  title: "Uses",
  description: "Software I use, gadgets I love, and other things I recommend.",
};

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="14” MacBook Pro, M1 Pro, 16GB RAM (2021)">
            For Development, I like using MacBook, the MacOS is clean and easy
            to use although not much customization tools avalible compare to
            linux system. I think I will be using it for many years unless it's
            broken.
          </Tool>
          <Tool title="Mechanical Keyboards">
            I have a few mechanical keyboards, I love the sound it makes when u
            press the key. I am a fan of Linear Switches. I don't have a stable
            build, just swapping and switching things from time to time.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code">
            I have been using VSCode since Day 0 of my coding history.
          </Tool>
          <Tool title="DBeaver">
            Great software for working with databases. Open Source with cute
            Beaver Icon.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  );
}
