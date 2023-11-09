"use client";


import { ChangeEvent, useState } from "react";
import Input from "../ui/form/Input";
import H2 from "../ui/text/H2";
import H3 from "../ui/text/H3";


export default function InputShowcase({}) {
  const [formData, setFormData] = useState<{ radioValue: string }>({
    radioValue: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    console.log(formData);
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-start w-fit gap-sub-large">
        <H2 className="laptop-large:heading--extra-large heading--large">Input</H2>
        <div className="flex flex-col gap-small w-full">
          <H3 textType="heading">Text</H3>
          <Input
            type="text"
            hiddenLabel={true}
            placeholder="Your text"
            intent="primary"
            id="empty"
          ></Input>
        </div>
        <div className="flex flex-col gap-small w-full">
          <H3 textType="heading">Select</H3>
          <Input
            type="select"
            hiddenLabel={true}
            placeholder="Your choice"
            intent="primary"
            id="empty"
            choices={["First choice", "Second choice", "Third choice"]}
          ></Input>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-small ">
            <H3 textType="heading">Radio</H3>
          
              <Input
                type="radio"
                hiddenLabel={true}
                intent="primary"
                id="radioValue"
                choices={["First choice", "Second choice"]}
                value={formData.radioValue}
                onChange={handleChange}
              ></Input>
          
          </div>
          <div className="switch flex flex-col gap-small">
              <H3 textType="heading">Switch</H3>
              <label className="flex flex-wrap items-center gap-extra-small">
                <input
                  className="toggle-checkbox"
                  type="checkbox"
                  id="isNsfw"
                  name="isNsfw"
          
                  onChange={handleChange}
                />
                <div className="toggle-switch"></div>
          
              </label>
            </div>
        </div>
        <div className="flex flex-col gap-small w-full">
          <H3 textType="heading">Textarea</H3>
          <form>
            <Input
              type="textarea"
              hiddenLabel={true}
              intent="primary"
              id="radioValue"
            ></Input>
          </form>
        </div>
        
      </div>
      <div></div>
    </div>
  );
}
