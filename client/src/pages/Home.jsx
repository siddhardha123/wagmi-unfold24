import React from "react";
import img from "../assets/bg.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const navCreateProj = () => {
        navigate("/createproject");
    };

    const navExplore = () => {
        navigate("/projects");
    };

    return (
        <div className="text-white mt-20">
            {/* Hero Section */}
            <div className="md:flex justify-evenly items-center">
                {/* Text Section */}
                <div className="my-auto px-5 md:px-0">
                    <h1 className="text-5xl md:text-6xl text-justify font-bold">
                        Find{" "}
                        <span className="text-red-600 leading-tight">
                            Freelancers
                        </span>
                        <br />
                        for Your{" "}
                        <span className="text-red-600 leading-tight">
                            Pro Gigs
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl mt-4 leading-8">
                        Join our platform today and start finding the perfect
                        freelancer for your projects.
                    </p>

                    <div className="mt-6 space-x-4">
                        <button
                            className="bg-red-600 hover:bg-red-700 transition-all rounded-md px-6 py-3 text-white text-lg"
                            onClick={navExplore}
                        >
                            Explore
                        </button>
                        <button
                            className="bg-white text-red-600 hover:text-red-700 border border-red-600 hover:border-red-700 transition-all rounded-md px-6 py-3 text-lg"
                            onClick={navCreateProj}
                        >
                            Create Project
                        </button>
                    </div>
                </div>

            </div>          
        </div>
    );
};

export default Home;
