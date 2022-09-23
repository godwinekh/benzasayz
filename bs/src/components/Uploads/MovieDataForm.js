import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Card from "../UI/Card";
import Input from "../UI/Input";
import useHttp from "../../hooks/use-http";

const schema = yup
  .object({
    title: yup.string().required(),
    synopsis: yup.string().required(),
    "release date": yup.date().required(),
    rating: yup.number().positive().required(),
    cast: yup.string().required(),
    genre: yup.string().required(),
    trailer: yup.string().url().required(),
    download: yup.string().url().required(),
    review: yup.string().required(),
    tags: yup.string().required(),
  })
  .required();

const resolverObj = { resolver: yupResolver(schema) };

// component function
const MovieDataForm = (props) => {
  const { register, handleSubmit, formState: { errors }} = useForm(resolverObj);
  const { postMovie } = useHttp();

  const addMovieData = (data) => {
    //generate id
    const id = "m-";
    const transformData = {id: id, ...data};
    let status;

    try {
      status = postMovie(transformData);      
    } catch (error) {
      status = error.message;
    }
    console.log(status);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(addMovieData)}>
        <Input label="title" type="text" register={register} error={errors.title} />
        <Input label="synopsis" type="text" register={register} error={errors.synopsis} />
        <div className="flex gap-5">
          <Input label="release date" type="date" register={register} error={errors['release date']} />
          <Input label="rating" type="text" register={register} error={errors.rating} />
        </div>
        <Input label="cast" type="text" register={register} error={errors.cast} />
        <Input label="genre" type="text" register={register} error={errors.genre} />
        <Input label="trailer" type="text" register={register} error={errors.trailer} />
        <Input label="download" type="text" register={register} error={errors.download} />
        <Input label="review" type="text" register={register} error={errors.review} />
        <Input label="tags" type="text" register={register} error={errors.tags} />
        <div className="flex justify-center pt-5">
          <button className="bg-gray-900 text-white px-7 py-2 rounded-sm">
            Save
          </button>
        </div>
      </form>
    </Card>
  );
};

export default MovieDataForm;
