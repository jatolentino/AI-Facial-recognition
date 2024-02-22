import React from "react";
import {
    Image
} from "semantic-ui-react";
import logorecognize from '../assets/images/logorecognize.svg'
var dt = new Date();

const FooterContainer = () => (
    <React.Fragment>
        <footer class="text-white body-font bg-black">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap md:text-left text-center order-first">
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">COMPANY</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a class="text-gray-400 hover:text-white">Home</a>
                            </li>
                            <li>
                                <a class="text-gray-400 hover:text-white">Aboust Us</a>
                            </li>
                            <li>
                                <a class="text-gray-400 hover:text-white">Services</a>
                            </li>
                            <li>
                                <a class="text-gray-400 hover:text-white">Demo</a>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">SUPPORT</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a class="text-gray-400 hover:text-white">Privacy Policy</a>
                            </li>
                            <li>
                                <a class="text-gray-400 hover:text-white">Terms & Conditions</a>
                            </li>
                            <li>
                                <a class="text-gray-400 hover:text-white">Contact Us</a>
                            </li>
                            <li>
                                <a class="text-gray-400 hover:text-white">FAQ</a>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">ADDRESS</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a class="text-gray-400 hover:text-white">49 Smith St.</a>
                            </li>
                            <li>
                                <a class="text-gray-400 hover:text-white">Saint Cloud</a>
                            </li>
                            <li>
                                <a class="text-gray-400 hover:text-white">Minnesota 56301</a>
                            </li>
                            <li>
                                <a class="text-gray-400 hover:text-white">(619) 474-4684</a>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">SUBSCRIBE</h2>
                        <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                            <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                <label for="footer-field" class="leading-7 text-sm text-white">Email</label>
                                <input type="text" id="footer-field" name="footer-field" class="w-full bg-gray-50 bg-opacity-100 rounded border border-gray-300 focus:bg-white focus:ring-2 focus:ring-gray-200 focus:border-gray-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-black bg-gray-200 border-0 py-3 px-6 focus:outline-none hover:bg-gray-300 hover rounded">Subscribe</button>
                        </div>
                        <p class="text-gray-500 text-sm mt-2 md:text-left text-center">Fast AI process to
                            <br class="lg:block hidden"></br>detect facial expressions
                        </p>
                    </div>
                </div>
            </div>


            <div class="bg-black">
                <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <Image src={logorecognize} style={{ marginTop: "5px", marginLeft: "0", marginRight: "20", width: "50%" }} />

                    </a>
                    <a style={{ marginTop: "5px", margin: "auto" }} href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-white ml-1" target="_blank">© {`${dt.getFullYear()}`} Recognize — @recognize</a>

                    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a class="text-gray-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="iconhoverfoot w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="iconhoverfoot w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="iconhoverinstafoot w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" class="iconhoverfoot w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>

        </footer>
    </React.Fragment>
);



export default FooterContainer;
