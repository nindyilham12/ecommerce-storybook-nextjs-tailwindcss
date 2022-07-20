const SectionOne = () => {
    return (
        <div className="relative flex items-center justify-between">
            <img src="/images/HeroImage.png" alt="Hero Image" className="object-cover w-full md:h-[750px] xs:h-[570px] h-[572px]" />
            <div className="absolute w-full py-2.5 sm:top-5 md:top-20 top-5 inset-x-0 bg-transparent text-white text-center leading-4">
                <span className="sm:text-2xl md:text-4xl text-xl font-medium">Representing Drone Light</span>
                <div className="font-light md:text-lg sm:text-base text-base md:pt-7 sm:pt-5 pt-7 md:p-3 sm:p-0 p-2 px-14">
                    Look up the sky and beautiful world with simple navigation. <br/>Just record and get a lot memories to share, lighlty and fast like a lightning
                </div>
                <button
                    type="submit"
                    className="mt-3 md:w-60 sm:w-30 w-30 bg-indigo-600 border border-transparent rounded-3xl sm:py-2 md:py-3 py-2 px-8 sm:text-xs md:text-base text-xs font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 align-middle"
                >
                    GET NOW
                </button>
            </div>
           
        </div>
    );
}

export default SectionOne;