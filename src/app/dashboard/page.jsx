import Option from './Option.jsx';

export default function Page() {
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
            <div className="fixed top-1/2 w-full h-full transform -translate-y-1/2">
                <h1 className="text-4xl font-bold text-white text-center">Dashboard</h1>
                <div className="grid grid-cols-3 gap-40 m-20 justify-items-center">
                    <Option
                        title="Car Controller"
                        desc="Go here to interface with Car information"    
                        buttonPath="/cars"
                        buttonText="Cars"
                        buttonColor="indigo"
                    />
                    <Option
                        title="Registration Controller"
                        desc="Go here to interface with the Registration information"
                        buttonPath="/registrations"
                        buttonText="Registrations"
                        buttonColor="teal"
                    />
                    <Option
                        title="Parking Lot Controller"
                        desc="Go here to interface with the Parking Lot information"
                        buttonPath="/parking-lots"
                        buttonText="Parking Lots"
                        buttonColor="amber"
                    />
                    <Option
                        title="Entries Controller"
                        desc="Go here to interface with the Entries information"
                        buttonPath="/entries"
                        buttonText="Entries"
                        buttonColor="emerald"
                    />
                    <Option
                        title="Exits Controller"
                        desc="Go here to interface with the Exits information"
                        buttonPath="/exits"
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