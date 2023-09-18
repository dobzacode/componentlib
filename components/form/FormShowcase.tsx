import H2 from "../text/H2";
import Form from "./Form";

export default function FormShowcase() {
  return (
    <div className="ml-extra-large flex flex-col gap-sub-large">
      <H2 type="heading--extra-large">Form</H2>
      <Form theme="primary"></Form>
    </div>
  );
}
