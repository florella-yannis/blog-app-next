"use client"

import React, { useState } from 'react';
import styles from "./authLinks.module.css"
import Link from 'next/link';

const AuthLinks = () => {

    const [open,setOpen] = useState(false);
    //temporaire
    const status = "notauthenticated";
    return (
        <>
            {status === "notauthenticated" ? (
                <Link href='/login' className={styles.link}> Login</Link> ):(
                    <>
                    <link href='/write' className={styles.link}>Write</link>
                    <span className={styles.link}>Logout</span>
                    </>
                )}
            <div className={styles.burger} onClick={()=>setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            {open && (
                <div className={styles.responsiveMenu}>
                    <Link href="/">Homepage</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                    {status === "notauthenticated" ? (
                <Link href='/'> Login</Link> ):(
                    <>
                    <link href='/write'>Write</link>
                    <span className={styles.link}>Logout</span>
                    </>
            )}
            </div>
            )}
        </>
    );
};

export default AuthLinks;