import Image from "next/image";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';

export default async function Page() {

    const cookieStore = cookies();
    const supabase = createServerComponentClient({cookies: () => cookieStore});

    const {data: {user}} = await supabase.auth.getUser();
    console.log({user});

    if (!user) {
        return (
            <main className='h-screen flex flex-col items-center justify-center bg-gray-100'>
                <div className='bg-black dark:bg-gray-900 p-8 rounder-lg shadow-md w-96 text-center'>
                    <h1 className='mb-4 text-xl font-bold text-gray-300 dark:text-gray-300'>
                        Proceed to Login
                    </h1>
                    <Link href={'/login'}>
                        <button
                            className='w-full p-3 rounded-md bg-green-700 text-white hover:bg-green-600 focus:outline-none'
                        >Continue</button>
                    </Link>
                </div>
            </main>
        )
    }

    return (
        <div className="relative">
            <div className="flex flex-col justify-center h-screen bg-white">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ca0fac3ecfc9b97e7973d331dffcee35011e99d51d361f3a1e8bb25f35bd760?apiKey=083cff44761149f29de8a214fde171e4&"
                    alt="Descriptive alt text for the image"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-4xl font-bold text-white text-center mb-4">Welcome to the Campus Parking App</h1>
                <div className="bg-gray-900 p-8 rounded-lg shadow-md text-center">
                    <h1 className="mb-4 text-xl font-bold text-gray-300 dark:text-gray-300">
                        Navigate to the Dashboard
                    </h1>
                    <Link href={'/dashboard'}>
                        <button className="w-full mb-2 p-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none">
                            Proceed
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}