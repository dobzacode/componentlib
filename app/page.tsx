import Form from "@/components/Form";
import AllButton from "@/components/button/AllButton";
import H1 from "@/components/text/H1";
import H2 from "@/components/text/H2";
import H3 from "@/components/text/H3";
import P from "@/components/text/P";

export default function Home() {
  return (
    <main className="flex justify-between flex-col items-center flex-wrap gap-5 h-full">
      <div className="flex flex-col gap-24">
        <H1 type="headingExtraLarge" color="text-primary0">
          Extra large heading
        </H1>
        <H2 type="headingLarge" color="text-primary10">
          Large heading
        </H2>
        <H2 type="heading" color="text-primary20">
          Heading
        </H2>
        <H3 color="text-primary30">Sub heading</H3>
        <P type="body" color="text-primary40">
          Body text
        </P>
      </div>
      <AllButton></AllButton>
      <Form></Form>
    </main>
  );
}
