import { FieldError, UseFormRegister } from "react-hook-form";

export type FormData = {
  link: string;
  categorie: string;
};

export type Option = {
  value: string;
  label: string;
};

export type FormFieldProps = {
  type: "text" | "number" | "select";
  placeholder: string;
  name: keyof FormData;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
} & (
  | { type: "text" | "number"; options?: never }
  | { type: "select"; options: Option[] }
);

export type ValidFieldNames = "link" | "categorie";
