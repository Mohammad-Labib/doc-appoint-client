import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-between'>

                  <div>
                    {/* <Image

                    src={'/assets/doctor-logo.png'}
                    height={50}
                    width={50}
                    alt="logo"
                    
                    /> */}
                <h1 className='text-2xl font-bold text-green-500'>DocAppoint</h1>
                 
                </div>

                <ul className='flex gap-4'>
                    <li><Link href={'/dashboard'}>Dashboard</Link></li>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/all-appointment'}>All Appointment</Link></li>
                    
                </ul>

              

                   <ul className='flex gap-4'>
                    <li><Link href={'/profile'}>Profile</Link></li>
                    <li><Link href={'/login'}>Login</Link></li>
                    <li><Link href={'/register'}>Register</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;