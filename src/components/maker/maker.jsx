import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Minji",
      company: "no",
      theme: "dark",
      title: "Front-end Developer",
      email: "dev.ilacilac@gmail.com",
      message: "yeah!",
      fileName: "minji",
      fileURL: "minji.png",
    },
    {
      id: "2",
      name: "Minji",
      company: "no",
      theme: "colorful",
      title: "Front-end Developer",
      email: "dev.ilacilac@gmail.com",
      message: "yeah!",
      fileName: "minji",
      fileURL: null,
    },
    {
      id: "3",
      name: "Minji",
      company: "no",
      theme: "light",
      title: "Front-end Developer",
      email: "dev.ilacilac@gmail.com",
      message: "yeah!",
      fileName: "minji",
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
  }, []);
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
