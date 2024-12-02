import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";

const navlinks = [
    {
        name: "Home",
        href: "/",
        sublist: [{ name: "Overview", href: "/" }, {}, {}],
    },
    {
        name: "Listing",
        href: "/listing",
        sublist: [{ name: "Settings", href: "/" }, {}, {}],
    },
    {
        name: "Upload",
        href: "/upload",
        sublist: [{}, {}, {}],
    },{
        name: "Verify",
        href: "/verify",
        sublist: [{}, {}, {}],
    },
];

function Navbar() {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                        <a href="/" className="text-2xl font-bold text-red-600">
                            AuthChain
                        </a>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-6">
                        {navlinks.map((data) => (
                            <a
                                key={data.name}
                                href={data.href}
                                className="text-red-600 hover:text-white hover:bg-red-600 px-3 py-2 rounded-md text-lg font-medium transition-all"
                            >
                                {data.name}
                            </a>
                        ))}
                    </div>

                    {/* Wallet Connect */}
                    <div className="flex items-center space-x-4">
                        <ConnectWallet accentColor={'red'} />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
