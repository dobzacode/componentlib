import Form from "@/components/Form";
import AllButton from "@/components/button/AllButton";
import DivImage from "@/components/divImage/divImage";
import H1 from "@/components/text/H1";
import H2 from "@/components/text/H2";
import H3 from "@/components/text/H3";
import P from "@/components/text/P";

export default function Home() {
  return (
    <main className="flex justify-between flex-col items-center flex-wrap gap-large h-full mx-auto">
      <div className="flex flex-col gap-subLarge">
        <H1 type="headingExtraLarge" textColor="text-primary40">
          Extra large heading
        </H1>
        <H2 type="headingLarge" textColor="text-primary40">
          Large heading
        </H2>
        <H2 type="heading" textColor="text-primary40">
          Heading
        </H2>
        <H3 textColor="text-primary40">Sub heading</H3>
        <P type="body" textColor="text-primary30">
          Body text
        </P>
      </div>
      <AllButton></AllButton>
      <div className="flex flex-wrap justify-center gap-medium bg-white w-full items-center py-large tablet:px-40">
        <Form bgColor="bg-primary5/[.5]" title="Formulaire de contact"></Form>
        <DivImage
          src="https://placehold.co/600x400"
          dimension="h-[400px] w-[400px]"
          rounded="rounded-extraSmall"
          alt="alt"
          sizes="50vw"
        ></DivImage>
      </div>
    </main>
  );
}
