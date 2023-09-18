import AllButton from "@/components/button/ButtonShowcase";
import FormShowcase from "@/components/form/FormShowcase";
import AllInput from "@/components/form/InputShowcase";

export default function Component({}) {
  return (
    <>
      <div className="flex laptop-large:gap-extra-large gap-large mb-sub-large justify-center flex-wrap mx-small">
        <AllButton></AllButton>
        <AllInput></AllInput>
        <FormShowcase></FormShowcase>
      </div>
    </>
  );
}
