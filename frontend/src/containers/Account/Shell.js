import React, { useState } from "react";
import { Grid, Container, Segment, Menu } from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { logout } from "../../store/actions/auth";
import catavatar from '../../assets/images/cat.jpg'


let icon2 = document.getElementById("icon2");

const showMenu2 = (flag) => {
  if (flag) {
    //icon2.classList.toggle("rotate-180");
  }
};
let icon3 = document.getElementById("icon3");

const showMenu3 = (flag) => {
  if (flag) {
    //icon3.classList.toggle("rotate-180");
  }
};

let Main = document.getElementById("Main");
let open = document.getElementById("open");
let close = document.getElementById("close");

const showNav = (flag) => {
  if (flag) {
    //Main.classList.toggle("-translate-x-full");
    //Main.classList.toggle("translate-x-0");
    //open.classList.toggle("hidden");
    //close.classList.toggle("hidden");
  }
};

const Shell = props => {
  const [show, setShow] = useState(false);
  return (
    < Segment vertical>
      <Container>
        <Grid container stackable verticalAlign="top" columns={2}>

          <Grid.Row>
            <Grid.Column width={4}>
              <Menu vertical fluid>
                <div id="Main" className="xl:rounded-r transform  xl:translate-x-0  ease-in-out transition duration-500 flex justify-start items-start h-full  w-full sm:w-64 bg-white flex-col">

                  <div className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
                    {/* changed */}
                    <button onClick={() => props.history.push("/account/studio")} className="flex jusitfy-start items-center space-x-6 w-full  focus:outline-none  focus:text-indigo-400  text-black rounded ">
                      <svg className="fill-stroke " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className="text-base leading-4 ">Studio</p>
                    </button>

                    <button onClick={() => props.history.push("/account/profile")} className="flex jusitfy-start items-center w-full  space-x-6 focus:outline-none text-black focus:text-indigo-400   rounded ">
                      <svg className="fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className=" leading-4 focus:text-yellow ">Profile</p>
                    </button>

                  </div>
                  <div className="flex flex-col justify-start items-center   px-6 border-b border-gray-600 w-full  ">
                    <button onClick={() => setShow(!show)} className="focus:outline-none focus:text-indigo-400 text-left  text-black flex justify-between items-center w-full py-5 space-x-14  ">
                      <p className="text-sm leading-5  uppercase">Profile Overview</p>
                      <svg id="icon1" className={"transform" + show ? "rotate-180" : ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <div id="menu1" className={`flex justify-start  flex-col w-full md:w-auto items-start pb-1 ${show ? "hidden" : ""}`}>

                      <button onClick={() => props.history.push("/account/change-email")} className="flex justify-start items-center space-x-6 hover:text-white focus:bg-black focus:text-white hover:bg-black text-gray-500 rounded px-3 py-2  w-full md:w-52">
                        <svg className="fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-base leading-4  ">Email</p>
                      </button>

                      <button onClick={() => props.history.push("/account/api-key")} className="flex justify-start items-center space-x-6 hover:text-white focus:bg-black focus:text-white hover:bg-black text-gray-500 rounded px-3 py-2  w-full md:w-52">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 19C10.2091 19 12 17.2091 12 15C12 12.7909 10.2091 11 8 11C5.79086 11 4 12.7909 4 15C4 17.2091 5.79086 19 8 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M10.85 12.15L19 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M18 5L20 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M15 8L17 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-base leading-4  ">API key</p>
                      </button>

                      <button onClick={() => props.history.push("/account/api-usage")} className="flex justify-start items-center space-x-6 hover:text-white focus:bg-black focus:text-white hover:bg-black text-gray-500 rounded px-3 py-2  w-full md:w-52">
                        <svg width="24" height="24" viewBox="0 0 0.72 0.72" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            id="rect7723"
                            d="m 0.19355692,0.12219 h 0.33288614 c 0.0395373,0 0.0713669,0.0318297 0.0713669,0.0713669 v 0.3328862 c 0,0.0395373 -0.0318297,0.0713669 -0.0713669,0.0713669 H 0.19355692 c -0.0395373,0 -0.0713669,-0.0318297 -0.0713669,-0.0713669 V 0.19355693 c 0,-0.0395373 0.0318297,-0.0713669 0.0713669,-0.0713669 z"
                            stroke="currentColor" strokeWidth="0.04" strokeLinecap="round" strokeLinejoin="round"
                          />
                          <path
                            d="M 0.24061747,0.291 V 0.48654"
                            id="path7844"
                            stroke="currentColor" strokeWidth="0.04" strokeLinecap="round" strokeLinejoin="round"
                          />
                          <path
                            d="M 0.35930061,0.37701 V 0.48654"
                            id="path7844-6"
                            stroke="currentColor" strokeWidth="0.04" strokeLinecap="round" strokeLinejoin="round"
                          />
                          <path
                            d="M 0.47938247,0.23553 V 0.48654"
                            id="path7844-6-2"
                            stroke="currentColor" strokeWidth="0.04" strokeLinecap="round" strokeLinejoin="round"
                          />
                        </svg>
                        <p className="text-base leading-4  ">API Usage</p>
                      </button>





                      <button onClick={() => props.history.push("/account/change-password")} className="flex justify-start items-center space-x-6 hover:text-white focus:bg-black focus:text-white hover:bg-black text-gray-500 rounded px-3 py-2  w-full md:w-52">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17 11H7C5.89543 11 5 11.8955 5 13V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V13C19 11.8955 18.1046 11 17 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M8 11V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-base leading-4  ">Passwords</p>
                      </button>

                      <button onClick={() => props.history.push("/account/billing")} className="flex justify-start items-center space-x-6 hover:text-white focus:bg-black focus:text-white hover:bg-black text-gray-500 rounded px-3 py-2  w-full md:w-52">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <g
                            transform="matrix(0.29233954,0,0,0.29233954,1.183437,1.183437)">
                            <path
                              d="M 69.1,60.1 H 4.9 C 3.3,60.1 2,58.8 2,57.2 V 16.8 c 0,-1.6 1.3,-2.9 2.9,-2.9 h 64.2 c 1.6,0 2.9,1.3 2.9,2.9 v 40.4 c 0,1.6 -1.3,2.9 -2.9,2.9 z"
                              stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"
                            />
                          </g>
                          <path
                            d="m 17.466749,10.859876 c -0.292339,0.233871 -0.672381,0.380041 -1.081656,0.380041 -0.935486,0 -1.695569,-0.760083 -1.695569,-1.6955692 0,-0.9354865 0.760083,-1.6955693 1.695569,-1.6955693 0.409275,0 0.789317,0.1461698 1.081656,0.3800414 -0.380041,0.3215735 -0.613913,0.7893168 -0.613913,1.3155279 0,0.5262112 0.233872,0.9939542 0.613913,1.3155282 z"
                            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

                          <path
                            d="m 20.243976,9.5443478 a 1.6955694,1.6955694 0 0 1 -1.69557,1.6955692 1.6955694,1.6955694 0 0 1 -1.695569,-1.6955692 1.6955694,1.6955694 0 0 1 1.695569,-1.6955693 1.6955694,1.6955694 0 0 1 1.69557,1.6955693 z"
                            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

                          <path
                            d="M 5.5392962,16.151222 H 3.7852588"
                            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

                          <path
                            d="M 8.988903,16.151222 H 7.2348657"
                            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

                          <path
                            d="M 12.467743,16.151222 H 10.713706"
                            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

                          <path
                            d="M 15.91735,16.151222 H 14.163313"
                            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

                          <path
                            d="M 19.396191,16.151222 H 17.612919"
                            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

                          <path
                            d="M 4.1360664,8.6380949 H 8.1118841"
                            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

                          <path
                            d="M 4.1360664,10.538302 H 11.122981"
                            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <p className="text-base leading-4  ">Payment</p>
                      </button>

                      <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-black focus:text-white hover:bg-black text-gray-500 rounded px-3 py-2  w-full md:w-52">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34314 18.6569 4 17 4C15.3431 4 14 5.34314 14 7C14 8.65685 15.3431 10 17 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-base leading-4  ">Notifications</p>
                      </button>

                      <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-black focus:text-white hover:bg-black text-gray-500 rounded px-3 py-2 w-full md:w-52">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 8.00002C15.1046 8.00002 16 7.10459 16 6.00002C16 4.89545 15.1046 4.00002 14 4.00002C12.8954 4.00002 12 4.89545 12 6.00002C12 7.10459 12.8954 8.00002 14 8.00002Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M4 6H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M16 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M4 12H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M17 20C18.1046 20 19 19.1046 19 18C19 16.8955 18.1046 16 17 16C15.8954 16 15 16.8955 15 18C15 19.1046 15.8954 20 17 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M4 18H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M19 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-base leading-4  ">Settings</p>
                      </button>
                    </div>
                  </div>


                  <div className="flex flex-col justify-start items-center   px-6 border-b border-gray-600 w-full">
                    <button onClick={showMenu2(true)} className="focus:outline-none focus:text-indigo-400  text-black flex justify-between items-center w-full py-5 space-x-14  ">
                      <p className="text-sm leading-5 uppercase">SERVICES</p>
                      <svg id="icon2" className="transform rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    <div className="hidden flex justify-start flex-col items-start pb-5 ">
                      <button onClick={() => props.history.push("/account/change-email")} className="flex justify-start items-center space-x-6 hover:text-white focus:bg-black focus:text-white hover:bg-black text-gray-500 rounded px-3 py-2  w-full md:w-52">
                        <svg className="fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-base leading-4  ">Email</p>
                      </button>

                      <button onClick={() => props.history.push("/account/api-key")} className="flex justify-start items-center space-x-6 hover:text-white focus:bg-black focus:text-white hover:bg-black text-gray-500 rounded px-3 py-2  w-full md:w-52">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 19C10.2091 19 12 17.2091 12 15C12 12.7909 10.2091 11 8 11C5.79086 11 4 12.7909 4 15C4 17.2091 5.79086 19 8 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M10.85 12.15L19 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M18 5L20 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M15 8L17 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-base leading-4  ">API key</p>
                      </button>

                      <button onClick={() => props.history.push("/account/api-usage")} className="flex justify-start items-center space-x-6 hover:text-white focus:bg-black focus:text-white hover:bg-black text-gray-500 rounded px-3 py-2  w-full md:w-52">
                        <svg width="24" height="24" viewBox="0 0 0.72 0.72" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            id="rect7723"
                            d="m 0.19355692,0.12219 h 0.33288614 c 0.0395373,0 0.0713669,0.0318297 0.0713669,0.0713669 v 0.3328862 c 0,0.0395373 -0.0318297,0.0713669 -0.0713669,0.0713669 H 0.19355692 c -0.0395373,0 -0.0713669,-0.0318297 -0.0713669,-0.0713669 V 0.19355693 c 0,-0.0395373 0.0318297,-0.0713669 0.0713669,-0.0713669 z"
                            stroke="currentColor" strokeWidth="0.04" strokeLinecap="round" strokeLinejoin="round"
                          />
                          <path
                            d="M 0.24061747,0.291 V 0.48654"
                            id="path7844"
                            stroke="currentColor" strokeWidth="0.04" strokeLinecap="round" strokeLinejoin="round"
                          />
                          <path
                            d="M 0.35930061,0.37701 V 0.48654"
                            id="path7844-6"
                            stroke="currentColor" strokeWidth="0.04" strokeLinecap="round" strokeLinejoin="round"
                          />
                          <path
                            d="M 0.47938247,0.23553 V 0.48654"
                            id="path7844-6-2"
                            stroke="currentColor" strokeWidth="0.04" strokeLinecap="round" strokeLinejoin="round"
                          />
                        </svg>
                        <p className="text-base leading-4  ">API Usage</p>
                      </button>





                      <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-black focus:text-white hover:bg-black text-gray-500 rounded px-3 py-2  w-full md:w-52">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17 11H7C5.89543 11 5 11.8955 5 13V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V13C19 11.8955 18.1046 11 17 11Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M8 11V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V11" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-base leading-4  ">Passwords</p>
                      </button>

                      <button onClick={() => props.history.push("/account/billing")} className="flex justify-start items-center space-x-6 hover:text-white focus:bg-black focus:text-white hover:bg-black text-gray-500 rounded px-3 py-2  w-full md:w-52">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 21H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M10 21V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M10 4L19 8L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-base leading-4  ">Payment</p>
                      </button>

                      <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-black focus:text-white hover:bg-black text-gray-500 rounded px-3 py-2  w-full md:w-52">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V14" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34314 18.6569 4 17 4C15.3431 4 14 5.34314 14 7C14 8.65685 15.3431 10 17 10Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-base leading-4  ">Notifications</p>
                      </button>

                      <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-black focus:text-white hover:bg-black text-gray-500 rounded px-3 py-2 w-full md:w-52">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 8.00002C15.1046 8.00002 16 7.10459 16 6.00002C16 4.89545 15.1046 4.00002 14 4.00002C12.8954 4.00002 12 4.89545 12 6.00002C12 7.10459 12.8954 8.00002 14 8.00002Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M4 6H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M16 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M4 12H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M17 20C18.1046 20 19 19.1046 19 18C19 16.8955 18.1046 16 17 16C15.8954 16 15 16.8955 15 18C15 19.1046 15.8954 20 17 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M4 18H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M19 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-base leading-4  ">Settings</p>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-center h-full pb-6   px-6  w-full  space-y-32 ">

                    <button onClick={showMenu3(true)} className="focus:outline-none focus:text-indigo-400  text-black flex justify-between items-center w-full py-5 space-x-14  ">
                      <p className="text-sm leading-5  uppercase">HELP</p>
                      <svg id="icon3" className="rotate-180 transform" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    <div className="hidden flex justify-start flex-col items-start pb-5 ">

                      <button onClick={() => props.history.push("/account/change-email")} className="flex justify-start items-center space-x-6 hover:text-white focus:bg-black focus:text-white hover:bg-black text-gray-500 rounded px-3 py-2  w-52">
                        <svg className="fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-base leading-4  ">Email</p>
                      </button>

                      <button onClick={() => props.history.push("/account/api-key")} className="flex justify-start items-center space-x-6 hover:text-white focus:bg-black focus:text-white hover:bg-black text-gray-500 rounded px-3 py-2  w-52">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 19C10.2091 19 12 17.2091 12 15C12 12.7909 10.2091 11 8 11C5.79086 11 4 12.7909 4 15C4 17.2091 5.79086 19 8 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M10.85 12.15L19 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M18 5L20 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M15 8L17 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-base leading-4  ">API key</p>
                      </button>

                      <button onClick={() => props.history.push("/account/api-usage")} className="flex justify-start items-center space-x-6 hover:text-white focus:bg-black focus:text-white hover:bg-black text-gray-500 rounded px-3 py-2  w-52">
                        <svg width="24" height="24" viewBox="0 0 0.72 0.72" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            id="rect7723"
                            d="m 0.19355692,0.12219 h 0.33288614 c 0.0395373,0 0.0713669,0.0318297 0.0713669,0.0713669 v 0.3328862 c 0,0.0395373 -0.0318297,0.0713669 -0.0713669,0.0713669 H 0.19355692 c -0.0395373,0 -0.0713669,-0.0318297 -0.0713669,-0.0713669 V 0.19355693 c 0,-0.0395373 0.0318297,-0.0713669 0.0713669,-0.0713669 z"
                            stroke="currentColor" strokeWidth="0.04" strokeLinecap="round" strokeLinejoin="round"
                          />
                          <path
                            d="M 0.24061747,0.291 V 0.48654"
                            id="path7844"
                            stroke="currentColor" strokeWidth="0.04" strokeLinecap="round" strokeLinejoin="round"
                          />
                          <path
                            d="M 0.35930061,0.37701 V 0.48654"
                            id="path7844-6"
                            stroke="currentColor" strokeWidth="0.04" strokeLinecap="round" strokeLinejoin="round"
                          />
                          <path
                            d="M 0.47938247,0.23553 V 0.48654"
                            id="path7844-6-2"
                            stroke="currentColor" strokeWidth="0.04" strokeLinecap="round" strokeLinejoin="round"
                          />
                        </svg>
                        <p className="text-base leading-4  ">API Usage</p>
                      </button>

                      <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-black focus:text-white hover:bg-black text-gray-500 rounded px-3 py-2 w-52">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 8.00002C15.1046 8.00002 16 7.10459 16 6.00002C16 4.89545 15.1046 4.00002 14 4.00002C12.8954 4.00002 12 4.89545 12 6.00002C12 7.10459 12.8954 8.00002 14 8.00002Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M4 6H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M16 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M4 12H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M17 20C18.1046 20 19 19.1046 19 18C19 16.8955 18.1046 16 17 16C15.8954 16 15 16.8955 15 18C15 19.1046 15.8954 20 17 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M4 18H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M19 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-base leading-4  ">Settings</p>
                      </button>

                      <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-black focus:text-white hover:bg-black text-gray-500 rounded px-3 py-2  w-52">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V14" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34314 18.6569 4 17 4C15.3431 4 14 5.34314 14 7C14 8.65685 15.3431 10 17 10Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-base leading-4  ">Notifications</p>
                      </button>

                      <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-black focus:text-white hover:bg-black text-gray-500 rounded px-3 py-2  w-52">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17 11H7C5.89543 11 5 11.8955 5 13V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V13C19 11.8955 18.1046 11 17 11Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M8 11V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V11" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-base leading-4  ">Passwords</p>
                      </button>

                      <button onClick={() => props.history.push("/account/billing")} className="flex justify-start items-center space-x-6 hover:text-white focus:bg-black focus:text-white hover:bg-black text-gray-500 rounded px-3 py-2  w-52">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 21H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M10 21V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M10 4L19 8L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-base leading-4  ">Payment</p>
                      </button>

                    </div>
                    <div className=" flex justify-between items-center w-full">
                      <div className="flex justify-center items-center  space-x-2">
                        <div>
                          <img className="rounded-full w-10" src={catavatar} alt="avatar" />
                        </div>
                        <div className="flex justify-start flex-col items-start">
                          <p className="cursor-pointer text-sm leading-5 text-black">Test User</p>
                          <p className="cursor-pointer text-xs leading-3 text-gray-600">user@mail.com</p>
                        </div>
                      </div>
                      <svg className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>

                    </div>
                  </div>
                </div>
              </Menu>
            </Grid.Column>
            {/* CONTENT OF THE MENUS FROM THE BUTTONS Email, API key, Settings, etc*/}

            <Grid.Column width={12}>
              <Menu vertical fluid>
                <div className="mt-7 pl-4 pr-4 pb-6">  {/*  CONFIG of right side*/}
                  {props.children}
                </div>
              </Menu>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment >
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Shell)
);
