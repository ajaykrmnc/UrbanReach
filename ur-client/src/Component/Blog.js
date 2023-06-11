import React from "react";
import ContactUs from "./Contactus";
import Footer from "./Footer";
import { obj } from "./Object";
import styles from "./style/Blog.module.css";

const Blog = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles["blog-title"]}>Our Blog</h1>
        <h3 className={styles["text-center"]}>
          Sharing some knowledge about our industry
        </h3>
        <div className={styles.row}>
          {Object.values(obj).map((e) => (
            <div className={styles["blog-card"]} key={e.id}>
              <img src={e.image} alt="Blog Image" className={styles["card-image"]} />
              <div className={styles["card-content"]}>
                <h2>{e.title}</h2>
                <p>{e.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
