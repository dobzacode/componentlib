import H2 from "../text/H2";
import Input from "./Input";

export default function AllInput({}) {
  return (
    <div className="ml-extra-large">
      <div className="flex flex-col justify-center items-start w-fit gap-sub-large">
        <H2 type="heading--extra-large">Input</H2>
        <div className="flex flex-col gap-small ">
          <H2 type="heading">Text</H2>
          <Input
            type="text"
            hiddenLabel={true}
            placeholder="Your text"
            color="primary"
            id="empty"
            name="empty"
          ></Input>
        </div>
        <div className="flex flex-col gap-small ">
          <H2 type="heading">Select</H2>
          <Input
            type="select"
            hiddenLabel={true}
            placeholder="Your choice"
            color="primary"
            id="empty"
            name="empty"
            choices={["First choice", "Second choice", "Third choice"]}
          ></Input>
        </div>
      </div>
      <div></div>
    </div>
  );
}
