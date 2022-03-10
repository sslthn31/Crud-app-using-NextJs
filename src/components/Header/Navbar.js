import React from 'react';
import Link from 'next/link';

const Navbar = () => (
    <div className='navbar'>
        <Link href='/'>
        <a className='nav-logo'>CRUD APP</a>
        </Link>
        <Link href='/new'>
        <a className='nav-create'>Create New</a>
        </Link>
    </div>
)

export default Navbar;