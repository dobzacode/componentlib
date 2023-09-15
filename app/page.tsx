import Form from "@/components/Form";
import AllButton from "@/components/button/AllButton";

export default function Home() {
  return (
    <main className="flex justify-center flex-col items-center flex-wrap gap-5">
      <AllButton></AllButton>
      <Form></Form>
    </main>
  );
}
