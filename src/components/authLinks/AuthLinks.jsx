import React from 'react';
import styles from "./authLinks.module.css"
import Link from 'next/link';

const AuthLinks = () => {

    //temporaire
    const status = "notauthenticated";
    return (
        <>
            {status === "notauthenticated" ? (
                <Link href='/'> Login</Link> ):(
                    <>
                    <link href='/write'>Write</link>
                    <span className={styles.link}>Logout</span>
                    </>
                )
            }
        </>
    );
};

export default AuthLinks;