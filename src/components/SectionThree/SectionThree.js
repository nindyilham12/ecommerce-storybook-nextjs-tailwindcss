const SectionThree = () => {
    return (
        <div className="mt-10 pt-10 pb-10 space-y-10 md:space-y-0 md:grid md:grid-cols-2 bg-[#F7F8FA]">
            <div className="relative">
                <div className="aspect-w-2 aspect-h-3 rounded overflow-hidden sm:col-span-4 lg:col-span-5">
                    <img src="/images/benefit_feature_image.png" alt="why drone light?" className="mx-auto object-center object-cover md:h-[358px] xs:h-[236px] h-[236px]" />
                </div>
            </div>
            <div className="relative">
                <div className="sm:pr-0 lg:pr-32 pr-0 sm:text-center md:text-left text-center sm:col-span-8 lg:col-span-7">
                    <h2 className="text-3xl font-medium text-gray-900 sm:pr-12">Why Drone Light?</h2>
                    <h3 className="mt-5 text-lg text-gray-900 font-light">
                        We provide a best self drone easy to use and operate. With
                        auto pilot, the device will take a beautiful view for the
                        best of flying operation.
                        </h3>
                    <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold">4K</h2>
                            <h4 className="text-base font-light">Camera<br />Resolution</h4>
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold">2 TB</h2>
                            <h4 className="text-base font-light">Storage<br />Capacity</h4>
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold">60 m/s</h2>
                            <h4 className="text-base font-light">Super <br />Max Speed</h4>
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl text-center font-semibold">30 mins</h2>
                            <h4 className="text-base font-light">Long Flight <br />Time</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionThree;