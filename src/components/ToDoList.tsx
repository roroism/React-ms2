import React from "react";
import { useRecoilValue } from "recoil";
import { toDoState } from "./atoms";
import CreateToDo from "./CreateTodo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoState);

  console.log("toDos", toDos);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          // <ToDo text={toDo.text} category={toDo.category} id={toDo.id} />
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;

// interface IFormData {
//   email: string;
//   firstName: string;
//   lastName: string;
//   userName: string;
//   password: string;
//   password1: string;
//   extraError?: string;
// }

// function ToDoList() {
//   const {
//     register,
//     watch,
//     handleSubmit,
//     formState: { errors },
//     setError,
//     setValue,
//   } = useForm<IFormData>({
//     defaultValues: {
//       email: "@naver.com",
//     },
//   });
//   const onValid = (data: IFormData) => {
//     if (data.password !== data.password1) {
//       setError(
//         "password1",
//         { message: "Password are not the same." },
//         { shouldFocus: true }
//       );
//     }
//     setValue("toDo","");
//     // setError("extraError", { message: "Server offline." });
//   };

//   // console.log(watch());
//   console.log("formState.errors : ", errors);

//   return (
//     <div>
//       <form
//         style={{ display: "flex", flexDirection: "column" }}
//         onSubmit={handleSubmit(onValid)}
//       >
//         <input
//           {...register("email", {
//             required: "Eamil is required",
//             pattern: {
//               value: /^[A-Za-z0-9._%+-]+@naver.com$/,
//               message: "only naver.com emails allowed",
//             },
//           })}
//           placeholder="email"
//         />
//         <span>{errors?.email?.message}</span>

//         <input
//           {...register("firstName", {
//             required: "write here",
//             validate: {
//               noNico: (value) =>
//                 value.includes("nico") ? "no nicos allowed" : true,
//               noNick: (value) =>
//                 value.includes("nick") ? "no nick allowed" : true,
//             },
//           })}
//           placeholder="firstName"
//         />
//         <span>{errors?.firstName?.message}</span>

//         <input
//           {...register("lastName", { required: "write here" })}
//           placeholder="lastName"
//         />
//         <span>{errors?.lastName?.message}</span>

//         <input
//           {...register("userName", { required: "write here", minLength: 10 })}
//           placeholder="userName"
//         />
//         <span>{errors?.userName?.message}</span>

//         <input
//           {...register("password", { required: "write here", minLength: 5 })}
//           placeholder="password"
//         />
//         <span>{errors?.password?.message}</span>

//         <input
//           {...register("password1", {
//             required: "Password is required",
//             minLength: { value: 5, message: "Your password is too short" },
//           })}
//           placeholder="password1"
//         />
//         <span>{errors?.password1?.message}</span>
//         <button>Add</button>
//         <span>{errors?.extraError?.message}</span>
//       </form>
//     </div>
//   );
// }

// export default ToDoList;
