import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "ming",
      company: "ming",
      theme: "dark",
      title: "Software Engineer",
      email: "ming@gmail.com",
      message: "go for it",
      fileName: "ming",
      fileURL: null,
    },
    {
      id: "2",
      name: "ming",
      company: "ming",
      theme: "light",
      title: "Software Engineer",
      email: "ming@gmail.com",
      message: "go for it",
      fileName: "ming",
      fileURL: null,
    },
    {
      id: "3",
      name: "ming",
      company: "ming",
      theme: "colorful",
      title: "Software Engineer",
      email: "ming@gmail.com",
      message: "go for it",
      fileName: "ming",
      fileURL: null,
    },
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
