import Background from '../../../../public/components/Background'

export default function Page() {
    return (
        <div className="relative">
            <Background />
            <div className="fixed top-1/2 w-full h-full transform -translate-y-1/2">
                <h1 className="text-4xl font-bold text-white text-center">Entry Controller</h1>
            </div>
        </div>
    );
}