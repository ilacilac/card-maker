import React from "react";
import styles from "./card_edit_form.module.css";
import Button from "../button/button";
import ImgageFileInput from "../image_file_input/image_file_input";

const CardEditForm = ({ card }) => {
  const {
    name,
    company,
    title,
    email,
    message,
    theme,
    fileName,
    fileURL,
  } = card;
  const onsubmit = () => {};
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" name="name" value={name} />
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
      />
      <select className={styles.select} name="theme" value={theme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input type="text" className={styles.input} name="title" value={title} />
      <input type="text" className={styles.input} name="email" value={email} />
      <textarea
        name="message"
        className={styles.textarea}
        value={message}
      ></textarea>
      <div className={styles.fileInput}>
        <ImgageFileInput />
      </div>
      <Button name="Delete" onClick={onsubmit} />
    </form>
  );
};

export default CardEditForm;
