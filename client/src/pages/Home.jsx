import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="text-white mt-20">
            {/* Hero Section */}
            <div className="md:flex justify-evenly items-center">
                {/* Text Section */}
                <div className="my-auto px-5 md:px-0">
                    <h1 className="text-5xl md:text-6xl text-justify font-bold">
                        Introducing{" "}
                        <span className="text-red-600 leading-tight">
                            AuthChain
                        </span>
                        <br />
                        for On-Chain{" "}
                        <span className="text-red-600 leading-tight">
                            Content Verification
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl mt-4 leading-8">
                        Empower creators and businesses with a secure,
                        decentralized platform to authenticate content and
                        manage digital rights effortlessly.
                    </p>
                    <button
                        onClick={() => navigate("/features")}
                        className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 mt-6 rounded-lg shadow-lg transition"
                    >
                        Learn More
                    </button>
                </div>
            </div>

            {/* Features Section */}
            <div className="mt-20 px-5 md:px-20">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
                    Why Choose <span className="text-red-600">AuthChain</span>?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Feature 1 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-red-600">
                            Decentralized Verification
                        </h3>
                        <p className="mt-4 text-lg">
                            Authenticate your digital content through a
                            blockchain-powered, tamper-proof system. Say goodbye
                            to unauthorized duplication and fake claims.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-red-600">
                            Seamless Rights Management
                        </h3>
                        <p className="mt-4 text-lg">
                            Manage ownership, licensing, and permissions with
                            ease. Simplify the legal process with built-in
                            smart contracts.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-red-600">
                            Creator-Centric Approach
                        </h3>
                        <p className="mt-4 text-lg">
                            Designed to prioritize creators and businesses by
                            ensuring fair compensation and proper attribution
                            for your content.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-red-600">
                            Robust Security
                        </h3>
                        <p className="mt-4 text-lg">
                            Your data is encrypted and stored on the blockchain,
                            ensuring unparalleled security and reliability for
                            your digital assets.
                        </p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="mt-20 text-center px-5 md:px-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Secure Your Digital Assets?
                </h2>
                <p className="text-lg md:text-xl mb-6">
                    Join thousands of creators and businesses who trust{" "}
                    <span className="text-red-600 font-semibold">AuthChain</span>{" "}
                    for their content verification needs.
                </p>
                <button
                    onClick={() => navigate("/get-started")}
                    className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg shadow-lg transition"
                >
                    Get Started Now
                </button>
            </div>
        </div>
    );
};

export default Home;
