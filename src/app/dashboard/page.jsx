import Background from '../../../public/components/Background'
import Option from './Option.jsx';
import Link from 'next/link';

export default function Page() {
    return (
        <div className="relative">
            <Background />
            <div className="fixed top-1/2 w-full h-full transform -translate-y-1/2">
                <h1 className="text-4xl font-bold text-white text-center">Dashboard</h1>
                <div className="grid grid-cols-3 gap-40 m-20 justify-items-center">
                    <Option
                        title="Car Controller"
                        desc="Go here to interface with Car information"    
                        buttonPath="/dashboard/cars"
                        buttonText="Cars"
                        buttonColor="indigo"
                    />
                    <Option
                        title="Registration Controller"
                        desc="Go here to interface with the Registration information"
                        buttonPath="/dashboard/registrations"
                        buttonText="Registrations"
                        buttonColor="teal"
                    />
                    <Option
                        title="Parking Lot Controller"
                        desc="Go here to interface with the Parking Lot information"
                        buttonPath="/dashboard/parking-lots"
                        buttonText="Parking Lots"
                        buttonColor="amber"
                    />
                    <Option
                        title="Entries Controller"
                        desc="Go here to interface with the Entries information"
                        buttonPath="/dashboard/entries"
                        buttonText="Entries"
                        buttonColor="emerald"
                    />
                    <Option
                        title="Exits Controller"
                        desc="Go here to interface with the Exits information"
                        buttonPath="/dashboard/exits"
                        buttonText="Exits"
                        buttonColor="rose"
                    />
                    <Option
                        title="Return to Home"
                        desc="Go here to return to the home page"
                        buttonPath="../"
                        buttonText="Return"
                        buttonColor="gray"
                    />
                </div>
            </div>
        </div>
    );
}