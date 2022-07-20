const profiles = [
    {
        name: 'Hugo Adams',
        title: 'Content Creator',
        description: 'With high resolution camera, picture become clear and beautiful. It’s so easy to operate drone.',
        imageSrc: '/images/profile1.png',
        imageAlt: 'img1',
    },
    {
        name: 'Jennie Obrien',
        title: 'Director Film',
        description: 'Taking high view video become easy and faster. Battery performance really helping for making film.',
        imageSrc: '/images/profile2.png',
        imageAlt: 'img2',
    },
    {
        name: 'Lisa Millz',
        title: 'Content WQCreator',
        description: 'Making video content for my trip vlog so powerful and wonderful. Love the video quality.',
        imageSrc: '/images/profile3.png',
        imageAlt: 'img3',
    },
]
const SectionFive = () => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto pt-20 lg:max-w-none">
                    <h2 className="text-4xl font-semibold">What Our “Pilots<br/>Are Saying</h2>

                    <div className="mt-20 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
                        {profiles.map((profile) => (
                            <div key={profile.name} className="group relative">
                                <div className="border rounded p-5">
                                    <p className="text-base font-light text-gray-900">{profile.description}</p>
                                    <div className="pt-5 flex -space-x-2 grid-columns-2 gap-4 overflow-hidden">
                                        <img
                                            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                                            src={profile.imageSrc}
                                            alt={profile.imageAlt}
                                        />
                                        <div>
                                            <h3 className="text-lg font-semibold text-black">
                                                <span className="absolute inset-0" />
                                                {profile.name}
                                            </h3>
                                            <p className="text-base font-light">{profile.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default SectionFive;