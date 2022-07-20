import Image from 'next/image'

const NavFooter = () => {
    return (
        <div className="bg-black mt-20">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-12">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    <div className="group relative">
                        <div className="flex justify-between">
                            <div>
                                <div className="grid-columns-2 flex gap-5">
                                    <Image
                                        alt="Logo"
                                        src="/images/Logo.png"
                                        width={68}
                                        height={32}
                                    />
                                    <h2 className="text-2xl font-normal-600 tracking-tight text-white">autodrone</h2>
                                </div>
                                <p className="text-base font-light text-white pt-5">
                                    Look up the sky and beautiful world easily.
                                </p>     
                            </div>                      
                        </div>
                    </div>
                    <div div className="group relative">
                        <h4 className="text-base font-semibold tracking-tight text-white">
                            <span className="absolute inset-0" />
                            Explore
                        </h4>
                        <p className="text-base font-light text-white pt-5">Our Services</p>
                        <p className="mt-5 text-base font-light text-white">Specification</p>  
                        <p className="mt-5 text-base font-light text-white">Refund</p>  
                        <p className="mt-5 text-base font-light text-white">Playlist</p>  
                    </div>
                    <div div className="group relative">
                        <h4 className="text-base font-semibold tracking-tight text-white">
                            <span className="absolute inset-0" />
                            Account
                        </h4>
                        <p className="text-base font-light text-white pt-5">My Account</p>
                        <p className="mt-5 text-base font-light text-white">Top Benefit</p>  
                        <p className="mt-5 text-base font-light text-white">How-to Tutorials</p>  
                        <p className="mt-5 text-base font-light text-white">Moment</p>  
                    </div>
                    <div div className="group relative">
                        <h4 className="text-base font-semibold tracking-tight text-white">
                            <span className="absolute inset-0" />
                            Office
                        </h4>
                        <p className="text-base font-light text-white pt-5">+021 2208 1996</p>
                        <p className="mt-5 text-base font-light text-white">SCBD, Jakarta</p>  
                        <p className="mt-5 text-base font-light text-white">No.2 (Autodrone)</p>  
                        <p className="mt-5 text-base font-light text-white">support@autodrone.id</p>  
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavFooter;