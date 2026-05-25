'use client'

import { signUp } from "@/lib/auth-client";
import {
    Card,
    Form,
    Input,
    Button,
    Label,
    FieldError,
    TextField,
    Description
} from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const RegisterPage = () => {
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();

        // console.log("form submitted");

        const formData = new FormData(e.currentTarget);

        const registerdata = Object.fromEntries(formData.entries());

        const { data, error } = await signUp.email({
            ...registerdata,

        })
        if (error) {
            console.log(error);
            toast.error(error.message || "Register failed!");
            return;
        }
        router.push("/")

        // console.log(data);

    };

    return (
        <div className="min-h-screen flex items-center justify-center">

            <Card className='border rounded-none p-6'>

                <div>
                    <h1 className="text-2xl font-bold text-center">
                        Register
                    </h1>
                    <h1 className="text-sm text-center">Create your DocAppoint</h1>
                </div>

                <Form className="flex w-96 flex-col gap-4" onSubmit={handleRegister}>

                    <TextField isRequired name="name" type="text">
                        <Label>Name</Label>
                        <Input placeholder="Enter your name" />
                        <FieldError />
                    </TextField>

                    <TextField name="image" type="url">
                        <Label>Image URL</Label>
                        <Input placeholder="Image url" />
                    </TextField>

                    <TextField isRequired name="email" type="email">
                        <Label>Email</Label>
                        <Input placeholder="labib@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField isRequired name="password" type="password">
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>
                            Must be at least 6 characters
                        </Description>
                        <FieldError />
                    </TextField>

                    <Button className="rounded-none w-full" type="submit">
                        Register
                    </Button>

                </Form>

            </Card>

        </div>
    );
};

export default RegisterPage;