import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { allCategoryListState, categoryState } from "./atoms";

interface IAddCategoryForm {
  newcategory: string;
}

export default function AddCategory() {
  const setCategoryList = useSetRecoilState(allCategoryListState);
  const { handleSubmit, register, setValue } = useForm<IAddCategoryForm>();

  const handleValue = ({ newcategory }: IAddCategoryForm) => {
    setCategoryList((oldCategoryList) => {
      return [...oldCategoryList, newcategory];
    });
    setValue("newcategory", "");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleValue)}>
        <input {...register("newcategory")} placeholder="Add Category"></input>
        <button>Add category</button>
      </form>
    </div>
  );
}
