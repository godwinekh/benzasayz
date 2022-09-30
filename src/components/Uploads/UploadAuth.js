import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Card from "../UI/Card";
import Input from "../UI/Input";
import { auth } from "./../../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

const UploadAuth = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();

  const userIsAuthorizedHandler = async (data) => {
    setIsLoading(true);
    const { email, password } = data;

    try {
      const signInTask = await signInWithEmailAndPassword(auth, email, password);
      
      if (signInTask.user !== "") {
        localStorage.setItem("uid", signInTask.user.uid);
        navigate("/console/uploads");
      };

      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
    

  };

  return (
    <div className="my-40 lg:my-52 lg:mx-72">
      <Card>
        <h2 className="pb-10 text-2xl text-center text-gray-700 font-bold">
          Console Login
          <p className="text-sm">{error}</p>
        </h2>

        <form onSubmit={handleSubmit(userIsAuthorizedHandler)} className="px-7">
          <Input label="email" type="email" register={register} />
          <Input label="password" type="password" register={register} />

          <div className="my-7">
            <button className={`${isLoading?"bg-none":"bg-gray-900"} text-white px-7 py-2 mx-2 rounded-sm`}>
              { isLoading ? <LoadingSpinner /> : "Go to console" }
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default UploadAuth;
