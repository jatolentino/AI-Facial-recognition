import React from "react";

// const classesToRemove = ['border-gray-200', 'text-gray-500']
// const classesToAdd = ['bg-gray-100', 'border-black', 'text-black', 'leading-none', 'rounded-t']

const PricingContainer = () => (
    <React.Fragment>
        <div class="w-full justify-center items-center flex flex-col">
            <div class="flex h-max flex-col bg-white">
                <div class="flex flex-col text-center w-full mb-12">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Pricing</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Pay upon your consumption!</p>
                </div>
                <div class="flex justify-center">

                    <div class="flex flex-col md:flex-row max-w-7xl justify-center items-center m-2">

                        <div class="min-w-60 bg-white m-4 shadow-xl min-h-96 flex flex-col justify-center text-black hover:text-white hover:bg-stone-900 hover:scale-105 ">
                            <div class="m-8 h-96">
                                <div class=" m-2">Free</div>
                                <div class=" m-2 text-3xl">$0</div>
                                <div class=" m-2 mt-8">For Freelancers</div>
                                <div class="flex">
                                    <ion-icon name="checkmark-circle-outline" class="m-1 text-green-500"></ion-icon>
                                    <div class="">1 user</div>
                                </div>
                                <div class="flex">
                                    <ion-icon name="checkmark-circle-outline" class="m-1 text-green-500"></ion-icon>
                                    <div class="">First 5 API calls</div>
                                </div>
                                <div class="flex">
                                    <ion-icon name="checkmark-circle-outline" class="m-1 text-green-500"></ion-icon>
                                    <div class="">Daily calls</div>
                                </div>
                                <div class="flex">
                                    <ion-icon name="close-circle-outline" class="m-1 text-red-500"></ion-icon>
                                    <div class="">Downloads</div>
                                </div>
                                <div class="flex">
                                    <ion-icon name="close-circle-outline" class="m-1 text-red-500"></ion-icon>
                                    <div class="">Daily Backups </div>
                                </div>
                            </div>
                            <div class="flex justify-center">
                                <div
                                    class="bg-stone-900 text-white cursor-pointer m-4 px-8 py-1 rounded-2xl hover:bg-white hover:text-stone-900 font-medium">
                                    Subscribe</div>
                            </div>
                        </div>

                        <div class="bg-white m-4 shadow-xl min-h-96 flex flex-col justify-center text-black hover:text-white hover:bg-stone-900 hover:scale-105 ">
                            <div class="m-8 h-96 ">
                                <div class=" m-2">Gold</div>
                                <div class=" m-2 text-3xl">$9.99</div>
                                <div class=" m-2 mt-8">For Developers</div>
                                <div class="flex">
                                    <ion-icon name="checkmark-circle-outline" class="m-1 text-green-500"></ion-icon>
                                    <div class="">10 users</div>
                                </div>
                                <div class="flex">
                                    <ion-icon name="checkmark-circle-outline" class="m-1 text-green-500"></ion-icon>
                                    <div class="">100 API calls per dar</div>
                                </div>
                                <div class="flex">
                                    <ion-icon name="checkmark-circle-outline" class="m-1 text-green-500"></ion-icon>
                                    <div class="">Daily calls</div>
                                </div>
                                <div class="flex">
                                    <ion-icon name="checkmark-circle-outline" class="m-1 text-green-500"></ion-icon>
                                    <div class="">Downloads</div>
                                </div>
                                <div class="flex">
                                    <ion-icon name="close-circle-outline" class="m-1 text-red-500"></ion-icon>
                                    <div class="">Monthly Backups</div>
                                </div>
                            </div>
                            <div class="flex justify-center">
                                <div
                                    class="bg-stone-900 text-white cursor-pointer m-4 px-8 py-1 rounded-2xl hover:bg-white hover:text-stone-900 font-medium">
                                    Subscribe</div>
                            </div>
                        </div>

                        <div class="bg-white m-4 shadow-xl min-h-96 flex flex-col justify-center text-black hover:text-white hover:bg-stone-900 hover:scale-105 ">
                            <div class="m-8 h-96 ">
                                <div class=" m-2">Platinum</div>
                                <div class=" m-2 text-3xl">$14.99</div>
                                <div class=" m-2 mt-8">For Business</div>
                                <div class="flex">
                                    <ion-icon name="checkmark-circle-outline" class="m-1 text-green-500"></ion-icon>
                                    <div class="">100 users</div>
                                </div>
                                <div class="flex">
                                    <ion-icon name="checkmark-circle-outline" class="m-1 text-green-500"></ion-icon>
                                    <div class="">1000 API calls per day</div>
                                </div>
                                <div class="flex">
                                    <ion-icon name="checkmark-circle-outline" class="m-1 text-green-500"></ion-icon>
                                    <div class="">Daily calls</div>
                                </div>
                                <div class="flex">
                                    <ion-icon name="checkmark-circle-outline" class="m-1 text-green-500"></ion-icon>
                                    <div class="">Downloads</div>
                                </div>
                                <div class="flex">
                                    <ion-icon name="checkmark-circle-outline" class="m-1 text-green-500"></ion-icon>
                                    <div class="">Daily Backups</div>
                                </div>
                            </div>
                            <div class="flex justify-center">
                                <div
                                    class="bg-stone-900 text-white cursor-pointer m-4 px-8 py-1 rounded-2xl hover:bg-white hover:text-stone-900 font-medium">
                                    Subscribe</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
);



export default PricingContainer;
