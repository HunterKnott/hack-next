import Background from '../../../../public/components/Background'

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

export default function Page() {
    return (
        <div className="relative">
            <Background />
            <div className="fixed top-1/2 w-full h-full transform -translate-y-1/2">
                <h1 className="text-4xl font-bold text-white text-center">Registration Controller</h1>
            </div>
        </div>
    );
}