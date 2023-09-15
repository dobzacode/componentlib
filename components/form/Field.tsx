import Input from "./Input";
import Label from "./Label";

interface FieldProps {
  flex?: string;
  nom: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
}

export default function Field({ nom, flex, onChange, value }: FieldProps) {
  return (
    <div className={`${flex}`}>
      <Label htmlFor={nom} hidden>
        {nom.charAt(0).toUpperCase() + nom.slice(1)}
      </Label>
      <Input
        required={true}
        type="text"
        id={nom}
        name={nom}
        value={value}
        onChange={onChange}
        placeholder={nom.charAt(0).toUpperCase() + nom.slice(1)}
      ></Input>
    </div>
  );
}
