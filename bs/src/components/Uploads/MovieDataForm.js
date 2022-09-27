import { Fragment, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ActionsContext from "../../store/actions-context";
import Card from "../UI/Card";
import Input, { Textarea } from "../UI/Input";
import LoadingSpinner from "../UI/LoadingSpinner";
import Notification from "../UI/Notification";

const newMovieSchema = yup.object({
    title: yup.string().required(),
    synopsis: yup.string().required(),
    "release date": yup.date("You need to enter a valid date").required(),
    rating: yup.number().positive(),
    cast: yup.string().required(),
    genre: yup.string().required(),
    trailer: yup.string().url().required(),
    download: yup.string().url(),
    review: yup.string(),
    tags: yup.string().required(),
    "image-lsc": yup
      .mixed()
      .test({
        message: 'You must provide a landscape image to continue',
        test: (value) => {
          if (!value.length) return false;
          return true;
        }
      })
      .test({
        message: 'Please provide a supported file type',
        test: (value) => {
          const isValid = ['image/png', 'image/jpg', 'image/jpeg'].includes((value[0].type));
          return isValid;
        }
      })
      .test({
        message: "File is too large. Max size is 1MB",
        test: (value) => {
          return value[0].size < 1000000;
        }
      }),
    "image-prt": yup
      .mixed()
      .test({
        message: 'You must provide a landscape image to continue',
        test: (value) => {
          if (!value.length) return false;
          return true;
        }
      })
      .test({
        message: 'Please provide a supported file type',
        test: (value) => {
          const isValid = ['image/png', 'image/jpg', 'image/jpeg'].includes((value[0].type));
          return isValid;
        }
      })
      .test({
        message: "File is too large. Max size is 1MB",
        test: (value) => {
          return value[0].size < 1000000;
        }
      }),
  })
  .required();

  const updateMovieSchema = yup
  .object({
    title: yup.string().required(),
    synopsis: yup.string().required(),
    "release date": yup.date("You need to enter a valid date").required(),
    rating: yup.number().positive(),
    cast: yup.string().required(),
    genre: yup.string().required(),
    trailer: yup.string().url().required(),
    download: yup.string().url(),
    review: yup.string(),
    tags: yup.string().required(),
  })
  .required();

// component function
const MovieDataForm = (props) => {
  const { activeMovie, isEditing, status, addMovie, updateMovie, getActiveMovie } =
    useContext(ActionsContext);
  const [steps, setSteps] = useState(false);
  const copiedValues = {...activeMovie};
  if (copiedValues) { delete copiedValues.imageUrl };
  const existingValues = isEditing ? { ...copiedValues } : "";
  const schema = isEditing ? updateMovieSchema : newMovieSchema;

  const reactHookFormArgs = {
    resolver: yupResolver(schema),
    defaultValues: existingValues,
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(reactHookFormArgs);

  useEffect(() => {
    if (!status.pending && status.message) {
      reset();
      setSteps((prev) => !prev);
    }
  }, [status, reset]);

  const visible = status.message !== "" ? true : false;

  const step1 = (
    <Fragment>
      <Input label="title" type="text" register={register} error={errors.title} />
      <Input label="synopsis" type="text" register={register} error={errors.synopsis} />
      
      <div className="flex gap-5">
        <Input label="release date" type="date" register={register} error={errors["release date"]} />
        <Input label="rating" type="text" register={register} error={errors.rating} />
      </div>
      
      <Input label="cast" type="text" register={register} error={errors.cast} />
      <Input label="genre" type="text" register={register} error={errors.genre} />
      <Textarea label="review" type="text" register={register} error={errors.review} />
    </Fragment>
  );

  const step2 = (
    <Fragment>
      {!isEditing && 
        <Fragment>
          <Input label="image-lsc" type="file" register={register} error={errors["image-lsc"]} />
          <Input label="image-prt" type="file" register={register} error={errors["image-prt"]} />
        </Fragment> 
      }
      <Input label="trailer" type="text" register={register} error={errors.trailer} />
      <Input label="download" type="text" register={register} error={errors.download} />
      <Input label="tags" type="text" register={register} error={errors.tags} />
    </Fragment>
  );

  const buttonText = isEditing ? "Update" : "Save";

  const toggleStepHandler = (e) => {
    e.preventDefault();
    setSteps((prev) => !prev);
  };
  const onCancelHandler = () => {
    getActiveMovie(activeMovie);
  };

  

  return (
    <Fragment>
      <form onSubmit={handleSubmit(isEditing ? updateMovie : addMovie)}>
        <Card>
          {!steps && step1}
          {steps && step2}
        </Card>

        <div className="flex justify-center items-center pt-5">
          {isEditing && (
            <button
              onClick={onCancelHandler}
              className="bg-stone-400 text-gray-700 px-7 py-2 rounded-sm"
            >
              Cancel
            </button>
          )}
          <div>
            <button
              onClick={toggleStepHandler}
              className="bg-gray-900 text-white px-7 py-2 mx-2 rounded-sm"
            >
              {steps ? "Back" : "Next"}
            </button>
            {steps && (
              <button className="bg-green-600 text-white px-7 py-2 rounded-sm disabled:p-0 disabled:bg-transparent" disabled={status.pending}>
                { status.pending ? <LoadingSpinner /> : '' }
                { !status.pending && buttonText }
              </button>
            )}
          </div>
        </div>
      </form>

     {visible && <Notification />}
    </Fragment>
  );
};

export default MovieDataForm;
