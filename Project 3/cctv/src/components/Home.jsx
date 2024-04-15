import React from "react";
import { Link } from "react-router-dom";
function Home() {
    return (
        <>
            <section
                className="relative bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(https://bityl.co/PEuL)`,
                }}
            >
                <div
                    className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/25"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center sm:text-left">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Upscale Enlarge And

                            <strong className="block font-extrabold text-blue-800"> Enhance Your Videos </strong>
                        </h1>

                        <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                            Automatically increase resolution using AI video processing
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <Link
                                to="/upload"
                                className="block w-full rounded bg-blue-800 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Upload Video
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;