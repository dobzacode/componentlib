import AllButton from "@/components/button/ButtonShowcase";
import FormShowcase from "@/components/form/FormShowcase";
import AllInput from "@/components/form/InputShowcase";

export default function Component({}) {
  return (
    <>
      <div className="flex gap-small mb-sub-large">
        <AllButton></AllButton>
        <AllInput></AllInput>
        <FormShowcase></FormShowcase>
      </div>
    </>
  );
}
