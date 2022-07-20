import { Disclosure } from '@headlessui/react'
import { SearchIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import PropTypes from 'prop-types'

const navigation = [
    { name: 'HOME', href: '/', current: true },
    { name: 'GALLERY', href: '#', current: false },
    { name: 'PRODUCTS', href: '#', current: false },
    { name: 'REVIEW', href: '#', current: false },
    { name: 'SUPPORT', href: '#', current: false }
]

const NavHead = ({onSearch }) => {
    return (
        <Disclosure as="nav" className="bg-black">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center sm:items-stretch sm:justify-left  md:justify-center justify-left">
                                <div className="flex-shrink-0 flex items-center pl-2">
                                    <img
                                        className="block lg:hidden w-auto"
                                        src="/images/Logo.png"
                                        alt="Logo"
                                    />
                                    <img
                                        className="hidden lg:block w-auto"
                                        src="/images/Logo.png"
                                        alt="Logo"
                                    />
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={
                                                    item.current ? 'sm:px-4 md:px-8 py-2 rounded-md text-sm font-medium bg-gray-900 text-white' : 'sm:px-4 md:px-8 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                                                }
                                                aria-current={item.current}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                        <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                            <button
                                                onClick={onSearch}
                                                type="button"
                                                className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                            >
                                                <span className="sr-only">Search</span>
                                                <SearchIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-4 pt-2 pb-3 space-y-1 grid">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={
                                        item.current ? 'sm:px-4 md:px-8 py-2 rounded-md text-sm font-medium bg-gray-900 text-white' : 'sm:px-4 md:px-8 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                            <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button
                                    onClick={onSearch}
                                    type="button"
                                    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                >
                                    <span className="sr-only">Search</span>
                                    <SearchIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}

export default NavHead;

NavHead.propTypes = {
    onSearch: PropTypes.func.isRequired,
};