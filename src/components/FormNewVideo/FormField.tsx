import { FormFieldProps } from "./type";

const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
  options, 
}) => {
  if (type === "select" && options) {
    return (
      <>
        <select
          className="w-full p-4 rounded-lg border-2 border-gray-500 bg-transparent text-white"
          {...register(name, { valueAsNumber })}
        >
          <option value="" selected disabled>
            Seleccionar una categoria
          </option>
          {options.map((option) => (
            <option className="text-black" key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <span className="error-message">{error.message}</span>}
      </>
    );
  } else {
    return (
      <>
        <input
          className="w-full p-4 rounded-lg border-2 border-gray-500 bg-transparent text-white"
          type={type}
          placeholder={placeholder}
          {...register(name, { valueAsNumber })}
        />
        {error && <span className="error-message">{error.message}</span>}
      </>
    );
  }
};

export default FormField;
