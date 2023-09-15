import Form from "@/components/Form";
import AllButton from "@/components/button/AllButton";
import H1 from "@/components/text/H1";
import H2 from "@/components/text/H2";
import H3 from "@/components/text/H3";
import P from "@/components/text/P";

export default function Home() {
  return (
    <main className="flex justify-between flex-col items-center flex-wrap gap-large h-full">
      <div className="flex flex-col gap-subLarge">
        <H1 type="headingExtraLarge" color="text-primary40">
          Extra large heading
        </H1>
        <H2 type="headingLarge" color="text-primary40">
          Large heading
        </H2>
        <H2 type="heading" color="text-primary40">
          Heading
        </H2>
        <H3 color="text-primary40">Sub heading</H3>
        <P type="body" color="text-primary30">
          Body text
        </P>
      </div>
      <AllButton></AllButton>
      <div className="flex flex-col gap-medium bg-tertiary10 w-full items-center py-large">
        <H1 type="heading" color="text-tertiary90">
          Form
        </H1>
        <Form></Form>
      </div>
    </main>
  );
}
