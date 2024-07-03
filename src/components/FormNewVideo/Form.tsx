import { useForm } from "react-hook-form";
import { FormData } from "./type";
import FormField from "./FormField";
import { useVideoContext } from "../../fetching/VideoContext";

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm<FormData>();

  const { addVideo } = useVideoContext();

  const options = [
    { value: 'Frontend', label: 'Frontend' },
    { value: 'Backend', label: 'Backend' },
    { value: 'Innovacion', label: 'Innovacion' },
  ];

  const onSubmit = async (data: FormData) => {
    const id = Math.floor(Math.random() * 1000000).toString(); 
    const postData = { id, ...data }; 
    addVideo(postData); 
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid col-auto justify-items-center w-80 mx-auto gap-4 mb-6 mt-6">
        <FormField
          type="text"
          placeholder="Link from youtube"
          name="link"
          register={register}
          error={errors.link}
        />

        <FormField
          type="select"
          placeholder="Categorie"
          name="categorie"
          register={register}
          error={errors.categorie}
          options={options}
        />

        <button
          type="submit"
          className="text-white border-2 border-blue-500 rounded-md px-4 py-2 w-[180px] h-[54px] text-xl uppercase"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
