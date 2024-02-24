import React from "react";
import { Link } from "react-router-dom";
import apirecognize from "../assets/images/apirecognize.svg";

// const classesToRemove = ['border-gray-200', 'text-gray-500']
// const classesToAdd = ['bg-gray-100', 'border-black', 'text-black', 'leading-none', 'rounded-t']

const InviteDemoContainer = () => (
    <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <div class="flex flex-col text-center w-full mb-12">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Try our API</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">It is extremely easy!</p>
            </div>
            <img class="xl:w-2/5 lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={apirecognize} />
            <div class="text-center lg:w-2/3 w-full">
                <div class="flex justify-center">
                    <Link to="/login">
                        <button class="flex mx-auto border-0 py-2 px-8 focus:outline-none bg-black hover:bg-gray-700 text-gray-100 hover:shadow-xl transition duration-150 rounded text-lg">Try our API</button>
                    </Link>

                </div>
            </div>
        </div>
    </section>
);


export default InviteDemoContainer
