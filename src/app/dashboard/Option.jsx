import Link from 'next/link';

export default function Option({ title, desc, buttonPath, buttonText, buttonColor}) {
    const colorMap = {
        indigo: 'bg-indigo-600',
        teal: 'bg-teal-600',
        amber: 'bg-amber-600',
        emerald: 'bg-emerald-600',
        rose: 'bg-rose-600',
        gray: 'bg-gray-600',
    };

    return (
        <div className='bg-gray-100 dark:bg-gray-900 p-8 rounded-xl border-4 border-gray-300 shadow-md w-96 text-center'>
            <h2 className='mb-4 text-xl font-bold text-gray-600 dark:text-gray-300'>
                {title}
            </h2>
            <p>{desc}</p>
            <Link href={`${buttonPath}`}>
                <button className={`w-full mb-2 p-3 rounded-md bg-${buttonColor}-600 text-white hover:bg-opacity-90 focus:outline-none`}>
                    {buttonText}
                </button>
            </Link>
        </div>
    )
}