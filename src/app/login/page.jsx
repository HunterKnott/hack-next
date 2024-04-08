'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter()

    const supabase = createClientComponentClient();

    useEffect(() => {
        async function getUser() {
            const {data: {user}} = await supabase.auth.getUser();
            setUser(user);
            setLoading(false);
        }
        getUser();
    }, [])

    const handleSignup = async () => {
        const res = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${location.origin}/auth/callback`
            }
        })
        setUser(res.data.user);
        router.refresh();
        setEmail('');
        setPassword('');
    }

    const handleSignIn = async () => {
        const res = await supabase.auth.signInWithPassword({
            email,
            password
        })
        setUser(res.data.user);
        router.refresh();
        setEmail('');
        setPassword('');
    }

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.refresh();
        setUser(null);
    }

    console.log(loading, user);

    if (loading) {
        return (
            <div className='h-screen flex flex-col items-center justify-center bg-black'>
                <h1 className='text-white'>
                    loading...
                </h1>
            </div>

        )
    }

    if (user) {
        return (
            <div className='h-screen flex flex-col items-center justify-center bg-gray-100'>
                <div className='bg-black dark:bg-gray-900 p-8 rounder-lg shadow-md w-96 text-center'>
                    <h1 className='mb-4 text-xl font-bold text-gray-300 dark:text-gray-300'>
                        You are logged in
                    </h1>
                    <button
                    onClick={handleLogout}
                    className='w-full p-3 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none'
                    >Log Out</button>
                </div>
            </div>
        )
    }

    return (
        <main className='h-screen flex items-center justify-center bg-gray-800 p-6'>
            <div className='bg-gray-900 p-8 rounded-lg shadow-md w-96'>
                <input
                type="email"
                name="email"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500'
                />
                <input
                type="password"
                name="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500'
                />
                <button
                onClick={handleSignup}
                className='w-full mb-2 p-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none'
                >Sign Up</button>
                <button
                onClick={handleSignIn}
                className='w-full mb-2 p-3 rounded-md bg-gray-700 text-white hover:bg-gray-600 focus:outline-none'
                >Sign In</button>
            </div>
        </main>
    )
}