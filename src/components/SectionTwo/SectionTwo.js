const SectionTwo = () => {
    return (
        <div className="bg-white">
            <div className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

                    <div className="relative flex items-center justify-between">
                        <img src="/images/ultra_light.png" alt="ultra light" className="object-cover w-full lg:h-[660px] sm:h-[460px] h-[460px]" />
                        <div className="absolute w-full py-2.5 sm:top-10 lg:top-20 top-10 inset-x-0 bg-transparent text-center leading-4">
                            <span className="sm:text-2xl md:text-4xl text-black text-2xl font-medium">Ultra Light</span>
                            <div className="md:text-2xl sm:text-xl text-xl text-gray-400 md:pt-7 sm:pt-5 pt-7 lg:px-20 sm:px-8">
                                Drone move faster with weighing component <span className="text-black">under 200 g</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-between">
                        <img src="/images/best_resolution.png" alt="best resolution" className="object-cover w-full lg:h-[660px] sm:h-[460px] h-[460px]" />
                        <div className="absolute w-full py-2.5 sm:top-10 lg:top-20 top-10 inset-x-0 bg-transparent text-white text-center leading-4">
                            <span className="sm:text-2xl md:text-4xl text-2xl font-medium">Best Resolution</span>
                            <div className="md:text-2xl sm:text-xl text-xl text-gray-500 md:pt-7 sm:pt-5 pt-7 lg:px-20 sm:px-8">
                                Take a beautiful view with best camera up to <span className="text-white">4K Camera Resolution</span>
                            </div>
                        </div>
                    </div>
                </dl>
            </div>
        </div>
    );
}

export default SectionTwo;