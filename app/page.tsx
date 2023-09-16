import Form from "@/components/Form";
import AllButton from "@/components/button/AllButton";
import ImageDiv from "@/components/div/ImageDiv";
import H1 from "@/components/text/H1";
import H2 from "@/components/text/H2";
import H3 from "@/components/text/H3";
import P from "@/components/text/P";

export default function Home() {
  return (
    <main className="flex justify-between flex-col items-center flex-wrap gap-large mx-auto">
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
