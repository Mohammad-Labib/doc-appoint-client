'use client'

import { authClient, signIn } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button, Card, Description, FieldError, Form, Input, Label, Separator, TextField } from '@heroui/react';
import { redirect } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';



const LoginPage = () => {


    const handleLogin = async (e) => {
        e.preventDefault();

        // console.log("form submitted");

        const formData = new FormData(e.currentTarget);

        const logindata = Object.fromEntries(formData.entries());

        const { data, error } = await signIn.email({
            ...logindata,
            callbackURL: "/"

        })

        const { data:tokenData } = await authClient.token()
        console.log(tokenData);

        if (error) {
            console.log(error);
            toast.error(error.message || "Login failed!");
            return;
        }
        // router.push("/")

        // console.log(data);

    };

      const handleGoogleSign =async () =>{
            await authClient.signIn.social({
                provider: "google"
            })
    
        }
        
    return (
        <div className='max-w-7xl mx-auto p-8'>
            <div className='text-center my-3 shadow'>
                <h1 className='text-3xl font-bold'>Login</h1>
                <p>Start your adventure with DocAppoint</p>
            </div>
            <Card className='border rounded-none'>
                <Form onSubmit = {handleLogin} className="flex w-96 flex-col gap-4">

                    {/* Email Part */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="labib@example.com" />
                        <FieldError />
                    </TextField>

                    {/* password part */}
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 6 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>

                    {/* btn parts */}
                    <div className="flex justify-center gap-2">
                        <Button  className={'rounded-none w-full'} type="submit">
                            Login
                        </Button>

                    </div>
                </Form>
                {/* <ToastContainer position="top-center" /> */}
                     <div className='flex justify-center items-center gap-3'>
                                    <Separator>
                                        <div className='whitespace-nowrap'>or sign up with</div>
                                    </Separator>
                 
                                    </div>
                                <div >
                                    <Button onClick={handleGoogleSign} variant='outline' className={'w-full rounded-none'}>
                                        <FcGoogle />
                                        sign in with Google
                                    </Button>
                                </div>
            </Card>
        </div>
    );
};

export default LoginPage;