import Form from "@/components/Form";
import AllButton from "@/components/button/AllButton";
import ImageDiv from "@/components/div/ImageDiv";
import H1 from "@/components/text/H1";
import H2 from "@/components/text/H2";
import H3 from "@/components/text/H3";
import P from "@/components/text/P";

export default function Home() {
  return (
    <main className="flex justify-between flex-col items-center flex-wrap gap-large h-full mx-auto">
      <div className="flex flex-col gap-sub-large">
        <H1 type="heading--extra-large" textColor="text-neutral80">
          Extra large heading
        </H1>
        <H2 type="heading--large" textColor="text-neutral80">
          Large heading
        </H2>
        <H2 type="heading--sub-large" textColor="text-neutral80">
          Sub-large heading
        </H2>
        <H2 type="heading" textColor="text-neutral80">
          Heading
        </H2>
        <H3 type="sub-heading" textColor="text-neutral80">
          Sub heading
        </H3>
        <P type="body" textColor="text-neutral80">
          Body text
        </P>
      </div>
      <AllButton></AllButton>
      <div className="flex flex-wrap justify-center gap-medium bg-white w-full items-center py-large tablet:px-40">
        <Form bgColor="bg-white " title="Formulaire de contact"></Form>
        <ImageDiv
          src="https://placehold.co/600x400"
          dimension="h-[400px] w-[400px]"
          rounded="rounded-extra-small"
          alt="alt"
          sizes="50vw"
        ></ImageDiv>
      </div>
    </main>
  );
}
