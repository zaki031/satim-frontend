    import { Landmark, CreditCard } from 'lucide-react';

    export default function Stats() {
    return (
        <div className="w-full flex-[2] grid grid-cols-2 gap-2">
        <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow-sm">
            <div>
            <h2 className="text-4xl font-bold text-red-500">4000</h2>
            <p className="text-sm text-gray-600">TPE</p>
            </div>
        </div>

        <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow-sm">
            <div>
            <h2 className="text-4xl font-bold text-red-500">17</h2>
            <p className="text-sm text-gray-600">Banks</p>
            </div>
            <div className='bg-red-500 rounded-full p-4 '>
            <Landmark className="text-white w-10 h-10" />
            </div>
        </div>

        <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow-sm">
            <div>
            <h2 className="text-4xl font-bold text-red-500">17</h2>
            <p className="text-sm text-gray-600">DAB/DAG</p>
            </div>
        </div>

        <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow-sm col-start-1">
            <div>
            <h2 className="text-4xl font-bold text-red-500">17</h2>
            <p className="text-sm text-gray-600">Certified website</p>
            </div>
        </div>

        {/* Carte CIB card spanning 2 rows */}
        <div className="flex items-end justify-between bg-white p-6 rounded-lg shadow-sm row-span-2 row-start-2 col-start-2">
            <div>
            <h2 className="text-4xl font-bold text-red-500">320308</h2>
            <p className="text-sm text-gray-600">Carte CIB</p>
            </div>
            <div className='bg-red-500 rounded-full p-4 '>
            <CreditCard className=" text-white w-10 h-10" />
            </div>
        </div>
        </div>
    );
    }
