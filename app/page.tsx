import Form from "@/components/Form";
import AllButton from "@/components/button/AllButton";
import H1 from "@/components/text/H1";

export default function Home() {
  return (
    <main className="flex justify-center flex-col items-center flex-wrap gap-5">
      <H1>HEADING</H1>
      <AllButton></AllButton>
      <Form></Form>
    </main>
  );
}
