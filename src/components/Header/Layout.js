import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ children }) => (
    <>
        <Head>
            <title>CRUD App</title>
        </Head>
        <Navbar />
        {children}
    </>
)

export default Layout;