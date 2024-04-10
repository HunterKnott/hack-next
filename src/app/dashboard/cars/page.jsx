'use client';

import Option from '.././Option.jsx';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

const insertCar = async () => {
    try {
        const { data, error } = await supabase
            .from('Cars')
            .insert([
                { license_plate: '_' }
            ])
            .select()
    } catch (error) {
        console.log(error);
    }
}

function Page() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = async () => {
        const { data } = await supabase.from("Cars").select();
        setCars(data);
    }

    const handleClick = () => {
        console.log("Test");
    }

    return (
        <div className="bg-gray-700 bg-cover p-12 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-white my-8">Car Controller</h1>
            <div className="flex flex-row gap-4">
                <Option
                    title="Add a Car"
                    desc="Fill out a form to add a new car"
                    onClick={handleClick}
                    buttonText="Apply"
                    buttonColor="emerald"
                />
                <Option
                    title="Unregistered Cars"
                    desc="View all cars without a registration"
                    onClick={handleClick}
                    buttonText="Apply"
                    buttonColor="amber"
                />
                <Option
                    title="Return to Dashboard"
                    desc="Go back to see other options"
                    buttonPath="../dashboard"
                    buttonText="Apply"
                    buttonColor="gray"
                />
            </div>
            <div className="bg-gray-800 relative overflow-x-auto shadow-md sm:rounded-lg p-8 m-8">
                <table className="w-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Car ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                License Plate
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Registration ID
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {cars.map((cars) => (
                            <tr key={cars.car_id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {cars.car_id}
                                </th>
                                <td className="px-6 py-4">
                                    {cars.license_plate}
                                </td>
                                <td className="px-6 py-4">
                                    {cars.registration_id}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      );
}

export default Page;