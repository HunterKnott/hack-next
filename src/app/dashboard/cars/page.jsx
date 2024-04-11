'use client';

import Option from '.././Option.jsx';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

const insertCar = async (licensePlate) => {
    try {
        const { data, error } = await supabase
            .from('Cars')
            .insert([
                { license_plate: licensePlate }
            ])
            .select()
    } catch (error) {
        console.log(error);
    }
}

export default function Page() {
    const [cars, setCars] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [licensePlate, setLicensePlate] = useState('');
    const [isFiltered, setIsFiltered] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchCars();
    }, [isFiltered, searchTerm]);

    const fetchCars = async () => {
        const { data } = await supabase.from("Cars").select();
        if (isFiltered) {
          const filteredByRegistration = data.filter(car => car.registration_id === null);
          const filteredBySearch = filteredByRegistration.filter(car => car.license_plate.toLowerCase().includes(searchTerm.toLowerCase()));
          setCars(filteredBySearch);
        } else {
            const filteredBySearch = data.filter(car => car.license_plate.toLowerCase().includes(searchTerm.toLowerCase()));
          setCars(filteredBySearch);
        }
      }

    const handleAddClick = () => {
        setShowForm(!showForm);
    }

    const handleInputChange = (e) => {
        setLicensePlate(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await insertCar(licensePlate);
        fetchCars();
        setShowForm(false);
        setLicensePlate('');
    }

    const handleUnregisteredClick = () => {
        setIsFiltered(!isFiltered);
    }

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleSearchClick = async () => {
        await fetchCars();
    }

    return (
        <div className="bg-gradient-to-r from-green-400 to-blue-500 bg-cover p-12 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-white my-8">Car Controller</h1>
            <div className="flex flex-row gap-4">
                <Option
                    title="Add a Car"
                    desc={showForm ? "Hide form" : "Fill out a form to add a new car"}
                    onClick={handleAddClick}
                    buttonText="Apply"
                    buttonColor="emerald"
                />
                <Option
                    title="Unregistered Cars"
                    desc={isFiltered ? "View all cars" : "View all cars without a registration"}
                    onClick={handleUnregisteredClick}
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
            {showForm && (
                <form onSubmit={handleSubmit}>
                    <div className="mt-4 bg-gray-100 shadow appearance-none border rounded-md p-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            License Plate
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Ex: ABCD123"
                            value={licensePlate}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button className="w-full p-3 mt-4 bg-emerald-600 rounded-md text-white hover:bg-opacity-90 focus:outline-none">
                        Add
                    </button>
                </form>
            )}
            <div className="mt-4 bg-gray-100 shadow appearance-none border rounded-md p-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Search by license plate
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Ex: ABCD123"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                />
                <button className="w-full p-3 mt-4 bg-indigo-600 rounded-md text-white hover:bg-opacity-90 focus:outline-none">
                    Search
                </button>
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