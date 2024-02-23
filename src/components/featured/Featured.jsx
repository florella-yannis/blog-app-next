import React from 'react';
import styles from "./featured.module.css"
import Image from 'next/image';

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}> <b>Salut à tous ! </b>je mapelle yannis et je vais vous parler de mon blog</h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae recusandae accusantium dignissimos culpa eaque commodi, perspiciatis vel iusto, velit quaerat placeat? Quisquam inventore, qui ut architecto nam quasi facere ab.</h1>
                    <p className={styles.postDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem exercitationem, quis tempora nisi in illum, nostrum inventore ad cum non, veritatis ex distinctio id itaque eveniet dicta qui iste! Minus!
                    Saepe similique est voluptatibus enim aperiam dolore, deleniti amet ducimus dignissimos velit labore quae omnis autem blanditiis quas tempora dolores neque rem animi ea architecto, ab atque nam. Blanditiis, laboriosam?</p>
                    <button className={styles.button}>Read More</button>
                </div>

            </div>
        </div>
    );
};

export default Featured;