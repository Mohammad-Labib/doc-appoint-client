"use client";

import { signOut, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Image from "next/image";

const Navbar = () => {
    const router = useRouter();
    const { data: session, isPending } = useSession();

    const user = session?.user;

    const handleLogOut = async () => {
        try {
            await signOut();
            toast.success("Logged out successfully");
            router.push("/login");
        } catch (error) {
            console.log(error);
            toast.error("Logout failed!");
        }
    };

    return (
        <div className="border-b">
            <nav className="flex justify-between w-11/12 mx-auto py-4 items-center">

                {/* Logo */}
                <h1 className="text-2xl font-bold text-green-500">
                    DocAppoint
                </h1>

                {/* Menu */}
                <ul className="flex gap-4">
                    <li><Link href="/dashboard">Dashboard</Link></li>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/all-appointment">All Appointment</Link></li>
                </ul>

                {/* Auth Section */}
                <ul className="flex gap-3 items-center">

                    {isPending ? (
                        <li>Loading...</li>
                    ) : user ? (
                        <>
                            {/* USER INFO */}
                          {/* USER INFO */}
<li className="flex items-center gap-2">

    {user.image && (
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-500 shadow-sm hover:scale-105 transition">
            <Image
                src={user.image}
                alt="user"
                width={40}
                height={40}
                className="object-cover w-full h-full"
            />
        </div>
    )}

    <span className="font-medium text-gray-700">
        {user.name}
    </span>

</li>

                            {/* PROFILE */}
                            <li>
                                <Link href="/profile">Profile</Link>
                            </li>

                            {/* LOGOUT */}
                            <li>
                                <Button  variant="outline"
                                      
                                    onClick={handleLogOut}
                                    className= "text-black bg-green-200 "
                                >
                                    Logout
                                </Button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link href="/login">Login</Link>
                            </li>

                            <li>
                                <Link href="/register">Register</Link>
                            </li>
                        </>
                    )}

                </ul>

            </nav>
        </div>
    );
};

export default Navbar;