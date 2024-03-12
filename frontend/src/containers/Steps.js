import React from "react";
import pic1 from "../assets/images/login.svg";
import pic2 from "../assets/images/upload.svg";
import pic3 from "../assets/images/result.svg";
import pic4 from "../assets/images/api-usage.svg";

class StepsContainer extends React.Component {
    state = {
        step_pic: pic1,
        is_selected_1: "text-black bg-gray-100 border-black",
        is_selected_2: "text-gray-500 border-gray-200",
        is_selected_3: "text-gray-500 border-gray-200",
        is_selected_4: "text-gray-500 border-gray-200"
        //yes "text-black bg-gray-100 border-black"
        //no "text-gray-500 border-gray-200"
    }

    render() {
        const { step_pic, is_selected_1, is_selected_2, is_selected_3, is_selected_4 } = this.state

        return (< React.Fragment >
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap flex-col">
                    <div class="flex flex-col text-center w-full mb-12">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">How It Works?</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Folows these steps!</p>
                    </div>
                    <div class="flex mx-auto flex-wrap mb-20">

                        <a onClick={() => {
                            this.setState({ step_pic: pic1 }),
                                this.setState({ is_selected_1: "text-black bg-gray-100 border-black" }),
                                this.setState({ is_selected_2: "text-gray-500 border-gray-200" }),
                                this.setState({ is_selected_3: "text-gray-500 border-gray-200" }),
                                this.setState({ is_selected_4: "text-gray-500 border-gray-200" })
                        }}
                            id="item1" className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center ${is_selected_1} sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none  hover:text-gray-900 tracking-wider`}>
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>1 Login
                        </a>

                        <a onClick={() => {
                            this.setState({ step_pic: pic2 }),
                                this.setState({ is_selected_1: "text-gray-500 border-gray-200" }),
                                this.setState({ is_selected_2: "text-black bg-gray-100 border-black" }),
                                this.setState({ is_selected_3: "text-gray-500 border-gray-200" }),
                                this.setState({ is_selected_4: "text-gray-500 border-gray-200" })
                        }}
                            id="item1" className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center ${is_selected_2} sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none  hover:text-gray-900 tracking-wider`}>
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
                                <circle cx="12" cy="5" r="3"></circle>
                                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                            </svg>
                            2 Upload
                        </a>

                        <a onClick={() => {
                            this.setState({ step_pic: pic3 }),
                                this.setState({ is_selected_1: "text-gray-500 border-gray-200" }),
                                this.setState({ is_selected_2: "text-gray-500 border-gray-200" }),
                                this.setState({ is_selected_3: "text-black bg-gray-100 border-black" }),
                                this.setState({ is_selected_4: "text-gray-500 border-gray-200" })
                        }}
                            id="item1" className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center ${is_selected_3} sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none  hover:text-gray-900 tracking-wider`}>
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                            3 Result
                        </a>

                        <a onClick={() => {
                            this.setState({ step_pic: pic4 }),
                                this.setState({ is_selected_1: "text-gray-500 border-gray-200" }),
                                this.setState({ is_selected_2: "text-gray-500 border-gray-200" }),
                                this.setState({ is_selected_3: "text-gray-500 border-gray-200" }),
                                this.setState({ is_selected_4: "text-black bg-gray-100 border-black" })
                        }}
                            id="item1" className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center ${is_selected_4} sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none  hover:text-gray-900 tracking-wider`}>
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                            4 Check
                        </a>

                    </div>
                    <div class="flex flex-col text-center w-full">
                        <img id="theImage" className="2xl:1/3 xl:w-2/5 lg:w-1/2 md:w-2/3 w-2/3 block mx-auto -mt-10 object-cover object-center rounded" alt="hero" src={step_pic} />
                    </div>
                </div>
            </section>

        </React.Fragment >
        )
    }
}


export default StepsContainer;
