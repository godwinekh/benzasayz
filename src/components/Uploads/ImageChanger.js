import Input from "../UI/Input";
import { ConsoleModal } from "../UI/Modal";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db, storage } from "../../firebase-config";
import { ref, update } from "firebase/database";
import { getDownloadURL, ref as storageBucketRef, uploadBytesResumable } from "firebase/storage";
import { consoleActions } from "../../store/console/actions-slice";
import LoadingSpinner from "../UI/LoadingSpinner";

const schema = yup
  .object({
    image: yup
      .mixed()
      .test({
        message: "You must provide a landscape image to continue",
        test: (value) => {
          if (!value.length) return false;
          return true;
        },
      })
      .test({
        message: "Please provide a supported file type",
        test: (value) => {
          const isValid = ["image/png", "image/jpg", "image/jpeg"].includes(
            value[0].type
          );
          return isValid;
        },
      })
      .test({
        message: "File is too large. Max size is 1MB",
        test: (value) => {
          return value[0].size < 1000000;
        },
      })
  })
  .required();

const ImageChanger = (props) => {
  const [form, setForm] = useState(false);
  const [imageType, setImageType] = useState();
  const [selected, setSelected] = useState();
  const [isUploading, setIsUploading] = useState();
  const activeMovie = useSelector(state => state.console.activeMovie);
  const dispatch = useDispatch();
  const {register, handleSubmit, formState: {errors} } = useForm({resolver: yupResolver(schema)});

  const imageTypeHandler = (e) => {
    const type = e.target.value;
    setSelected(e.target.value);

    if (type === "portrait") {
      setImageType("imagePrt");
    }
    if (type === "landscape") {
      setImageType("imageLsc")
    }
    setForm(true);
  }

  const updateImageHandler = (file) => {
    setIsUploading(true);
    const updates = {};
    const storageRef = storageBucketRef(storage);
    const activeMovieImagesRef = storageBucketRef(storageRef, `images/${activeMovie.key}`)
    const newImageRef = storageBucketRef(activeMovieImagesRef, file.image[0]["name"]);
    
    const uploadImage = uploadBytesResumable(newImageRef, file.image[0]);
    uploadImage.then(snapshot => getDownloadURL(snapshot.ref)).then(downloadURL => {
      updates[`movies/${activeMovie.key}/imageUrl/${imageType}`] = downloadURL;
      update(ref(db), updates).then(() => {
        dispatch(consoleActions.uploadImageMessage({message: `${selected} image for ${activeMovie.title.toUpperCase()} has been successfully updated!`}))
        setIsUploading(false);
        props.onClose();
      });
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <ConsoleModal onClose={props.onClose} heading="Image Changer">
      <section>
        <p className="text-gray-700 text-sm text-center pb-2">Which image do you wish to update?</p>
        <form className="flex flex-row justify-center gap-5">
          <div className={`border py-2 px-3 rounded-sm ${selected==="portrait"?"bg-stone-200":""}`}>
            {selected==="portrait" && <i className="bi-check2-circle pr-2 text-xl"></i>}
            <input type="button" onClick={imageTypeHandler} value="portrait" className="capitalize text-gray-800"/>
          </div>

          <div className={`border py-2 px-3 rounded-sm ${selected==="landscape"?"bg-stone-200":""}`}>
          {selected==="landscape" && <i className="bi-check2-circle pr-2 text-xl"></i>}
            <input type="button" onClick={imageTypeHandler} value="landscape" className="capitalize text-gray-800"/>
          </div>
        </form>
      </section>

      {form && <section className="border rounded-sm p-5 mt-10">
        <form onSubmit={handleSubmit(updateImageHandler)}>
          <Input label="image" type="file"
            register={register}
            error={errors["image"]} />
         { !isUploading && 
            <button className="rounded-sm px-3 py-1 border text-slate-900 text-sm bg-gradient-to-t from-stone-400 to-stone-100 hover:scale-105">
              Submit
            </button> }
          { isUploading && <LoadingSpinner /> }
        </form>
      </section>}
    </ConsoleModal>
  )
}

export default ImageChanger;