"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
export default function ImagePicker({ label, name }) {
  const imageInput = useRef();
  const [imagePreview, setImagePreview] = useState();

  function handleImagePicking() {
    imageInput.current.click();
  }

  function handleImagePreview(event) {
    const imageFile = event.target.files[0];

    if (!imageFile) {
      setImagePreview(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setImagePreview(fileReader.result);
    };
    fileReader.readAsDataURL(imageFile);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {imagePreview ? (
            <Image src={imagePreview} alt="image selected by user" fill />
          ) : (
            <p>no image picked yet</p>
          )}
        </div>

        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/jpeg, image/png"
          name={name}
          ref={imageInput}
          onChange={handleImagePreview}
          required
        ></input>
        <button
          className={classes.button}
          type="button"
          onClick={handleImagePicking}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
