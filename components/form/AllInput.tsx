import H2 from "../text/H2";
import Input from "./InputText";

export default function AllInput({}) {
  return (
    <div className="ml-extra-large">
      <div className="flex flex-col justify-center items-start w-fit gap-sub-large">
        <H2 type="heading--extra-large">Input</H2>
        <div className="flex flex-col gap-small ">
          <H2 type="heading">Text</H2>
          <Input id="empty" name="empty"></Input>
        </div>
      </div>
      <div></div>
    </div>
  );
}
