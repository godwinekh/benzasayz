import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Card from "../UI/Card";
import Input from "../UI/Input";
import { auth } from "./../../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

const UploadAuth = (props) => {
  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();

  const userIsAuthorizedHandler = async (data) => {
    const { email, password } = data;

    const signInTask = await signInWithEmailAndPassword(auth, email, password);

    if (signInTask.user !== "") {
      localStorage.setItem("uid", signInTask.user.uid);
      navigate("/console/uploads");
    };
  };

  return (
    <div className="my-52 mx-72">
      <Card>
        <h2 className="pb-10 text-2xl text-center text-gray-700 font-bold">
          Console Login
        </h2>
        <form onSubmit={handleSubmit(userIsAuthorizedHandler)} className="px-7">
          <Input label="email" type="email" register={register} />
          <Input label="password" type="password" register={register} />

          <div className="my-7">
            <button className="bg-gray-900 text-white px-7 py-2 mx-2 rounded-sm">
              Go to console
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default UploadAuth;
