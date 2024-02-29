import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor amet sint voluptas nisi cum.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>02.02.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
              veniam maiores sint alias consectetur numquam tenetur aut eveniet
              voluptates in at nisi laboriosam hic accusamus umenda error, in
              dolorum eaque placeat amet fuga odit ipsam officiis eum reiciendis
              minima exercitationem maxime a. Inventore nobis veniam ipsam,
              quibusdam similique mollitia, ducimus accusamus, autem
              exercitationem distinctio voluptas!
            </p>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing el magnam,
              vitae, non a omnis earum error libero deserunt ex facilis
              voluptatem quas!
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
              veniam maiores sint alias consectetur numquam tenetur aut eveniet
              voluptates in at nisi laboriosam hic accusamus umenda error, in
              dolorum eaque placeat amet fuga odit ipsam officiis eum reiciendis
              minima exercitationem maxime a. Inventore nobis veniam ipsam,
              quibusdam similique mollitia, ducimus accusamus, autem
              exercitationem distinctio voluptas!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
              veniam maiores sint alias consectetur numquam tenetur aut eveniet
              voluptates in at nisi laboriosam hic accusamus umenda error, in
              dolorum eaque placeat amet fuga odit ipsam officiis eum reiciendis
              minima exercitationem maxime a. Inventore nobis veniam ipsam,
              quibusdam similique mollitia, ducimus accusamus, autem
              exercitationem distinctio voluptas!
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
