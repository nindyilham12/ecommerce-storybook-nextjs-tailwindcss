import { CameraIcon } from '@heroicons/react/solid'
import {ClockIcon} from '@heroicons/react/outline'
import { TiBatteryHigh } from "react-icons/ti";
import { ImFloppyDisk } from "react-icons/im";

const product = {
    name: 'Drone Light',
    tagline: 'Super fast, easy control drone',
    price: '$4.500,00',
    feature: 'Drone Features:',
    imageSrc: '/images/highlight_large.png',
    imageAlt: 'features of drone light',
    listfeature: [
        { id:1, icon: CameraIcon, class: 'bg-white', description: '4K Camera Resolution' },
        { id:2, icon: ImFloppyDisk, class: 'bg-white', description: '2 TB Storage' },
        { id:3, icon: ClockIcon, class: 'bg-white', description: '60 m/s Speed' },
        { id:4, icon: TiBatteryHigh, class: 'bg-white', description: '5000 mAh Battery' }
    ]
}

const imgproducts = [
    {
        id: 1,
        imageSrc: '/images/highlight1.png',
        imageAlt: "img1"
    },
    {
        id: 2,
        imageSrc: '/images/highlight2.png',
        imageAlt: "img2"
    },
    {
        id: 3,
        imageSrc: '/images/highlight3.png',
        imageAlt: "img3"
    },
    {
        id: 4,
        imageSrc: '/images/highlight4.png',
        imageAlt: "img4"
    }
]

const DPOne = () => {
    return (
        <div className="xs:mt-8 md:mt-20 mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-10">

                <div className="relative">
                    <div className="border rounded">
                        <div className="p-3 aspect-w-2 aspect-h-3 rounded overflow-hidden sm:col-span-4 lg:col-span-5">
                            <img src={product.imageSrc} alt={product.imageAlt} className="object-center object-cover md:w-[697px] md:h-[516px] xs:w-[346px] xs:h-[263px] h-[263px] w-[346px]" />
                        </div>
                    </div>
                    <div className="bg-white">
                        <div className="mx-auto">
                            <div className="mt-6 grid grid-cols-1 gap-2 grid-cols-4">
                                {imgproducts.map((image) => (
                                    <div key={image.id} className="group relative">
                                        <div className="border rounded">
                                            <div className="p-2 w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                                                <img
                                                    src={image.imageSrc}
                                                    alt={image.imageAlt}
                                                    className="object-center object-cover md:h-[100px] xs:h-[59px] h-[59px] md:w-[150px] xs:w-[77px] w-[77px]"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="sm:col-span-8 lg:col-span-7">
                        <h2 className="text-3xl font-semibold">{product.name}</h2>
                        <h4 className="pt-2 text-lg font-light">{product.tagline}</h4>
                        <p className="pt-4 sm:text-4xl md:text-5xl text-4xl font-semibold">{product.price}</p>
                        <h3 className="pt-4 text-xl font-medium">{product.feature}</h3>

                        <div className="pt-4">
                            <div className="items-center">
                                {product.listfeature.map((list) => (
                                    <div key={list.id}>
                                        <div className="absolute pt-2 flex items-center justify-center text-black">
                                            <list.icon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <h4 className="pt-2 ml-10 text-lg font-light">{list.description}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="mt-6 sm:w-full md:w-72 w-full bg-indigo-600 border border-transparent rounded-3xl py-3 px-8 flex items-center justify-center text-base font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            ORDER IT NOW
                            </button>
                    </div>
                </div>
            </dl>
        </div>
    );
}

export default DPOne;