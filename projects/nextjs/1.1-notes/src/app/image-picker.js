"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickImage, setPickImage] = useState(null);
  const imageInputRef = useRef(null);

  function handlePickClick() {
    imageInputRef?.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    console.log(event.target.files);

    if (!file) {
      setPickImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = (url) => {
      setPickImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickImage && <p>No image picked yet.</p>}
          {pickImage && (
            <Image src={pickImage} fill alt="The image selected by the user." />
          )}
        </div>
        <input
          ref={imageInputRef}
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          // multiple
          required
          onChange={handleImageChange}
        />
        <button
          onClick={handlePickClick}
          className={classes.button}
          type="button"
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
