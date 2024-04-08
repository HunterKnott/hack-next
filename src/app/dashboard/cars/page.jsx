// import { supabase } from '@/supabase';
// import { useState } from 'react';

// const [licensePlate, setLicensePlate] = useState('');

// const fetchRegistrations = async () => {
//     try {
//         let { data: registrations, error } = await supabase
//             .from('Registrations')
//             .select('*')
//             .eq('name', 'John Smith')
        
//         if (registrations) {
//             console.log(registrations);
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

// const insertCar = async () => {
//     try {
//         const { data, error } = await supabase
//             .from('Cars')
//             .insert([
//                 { license_plate: '_' }
//             ])
//             .select()
//     } catch (error) {
//         console.log(error);
//     }
// }

// fetchRegistrations();