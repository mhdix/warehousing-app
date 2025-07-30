import Textarea from "../form/Textarea";
import FormProvider from "../form/FormProvider";
import Input from "../form/Input";

const AddCategoryForm = ({ handleSubmit, setIsOpen }) => {
  return (
    <FormProvider
      onSubmit={handleSubmit}
      toggleHandler={() => setIsOpen(false)}
    >
      <div className="flex flex-col gap-6">
        <Input label="title" id="title" />
        <Textarea label="description" id="description" className="w-full" />
      </div>
    </FormProvider>
  );
};

export default AddCategoryForm;
