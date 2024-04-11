import Background from '../../public/components/Background'
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
            <Background />
            <div className="flex flex-col gap-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
                <div className="bg-gray-900 p-8 rounded-lg shadow-md text-center">
                    <h1 className="mb-4 text-xl font-bold text-gray-300 dark:text-gray-300">
                        Navigate to the logout
                    </h1>
                    <Link href={'/login'}>
                        <button className="w-full mb-2 p-3 rounded-md bg-red-600 text-white hover:bg-red-700 focus:outline-none">
                            Proceed
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}