const products = [
    {
        name: 'Mini Drone',
        description: 'Powerful camera drone at an affordable price range. Camera up to 4K resolution, optimize shots automatically.',
        imageSrc: '/images/mini_drone.png',
        imageAlt: 'img1',
        href: '#',
    },
    {
        name: 'Drone Light',
        description: 'Drone light is every creators dream. Setting apperture manually and high battery  performance. Drone light is everything you need.',
        imageSrc: '/images/drone_light.png',
        imageAlt: 'img2',
        href: '/detail_product/',
    },
    {
        name: 'Phantom Drone',
        description: 'Inspired by phantom, drone can move faster and quickly like a ghost. Focus on speed so you can investigate environtment quickly.',
        imageSrc: '/images/phantom_drone1.png',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    },
]
const SectionFour = () => {
    return (
        <div className="bg-white">
            <div className="pt-10 mx-auto">
                <h2 className="text-3xl text-center font-medium">New Products</h2>
                <p className="text-base font-light pt-5 text-center">
                    New innovation, best quality than before.<br/>
                    Make every moment flying operation become unforgettable.
                    </p>
                <div className="relative rounded-xl overflow-hidden">
                    <div className="relative w-full sm:grid md:flex gap-6 snap-x snap-mandatory overflow-x-hidden pt-10">
                        <div className="snap-end scroll-mx-8 shrink-0">
                            <div className="shrink-0 sm:w-10 md:w-52 sm:-mr-[5px]"></div>
                        </div>
                        {products.map((product) => (
                            <div key={product.name} className="snap-end scroll-mx-8 shrink-0">
                                <div className="sm:border-0 md:border border-0 rounded p-5 text-center lg:w-96 md:w-72 sm:w-full">
                                    <div className="relative w-full bg-white overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="w-full rounded-lg md:h-[240px] xs:h-[194px] h-[194px] object-center object-cover"
                                        />
                                    </div>
                                    <h2 className="text-xl mt-5 font-normal-600">{product.name}</h2>
                                    <p className="text-base pt-5 font-light">{product.description}</p>

                                    <a href={product.href}>
                                        <button
                                            type="submit"
                                            className="mt-6 lg:w-64 md:w-44 bg-indigo-600 border border-transparent rounded-3xl py-3 px-8 text-base font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 align-middle"
                                        >
                                            GET NOW
                                        </button>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionFour;