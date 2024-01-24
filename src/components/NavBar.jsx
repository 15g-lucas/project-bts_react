import ar2c_black from '../ar2c_black.png';
import favicon from '../favicon.png';

import MenuLeft from "./MenuLeft";



const NavBar = ({menu, setMenu, setIsSetting}) =>{
    return (
        <aside className="flex">
            {/* First Column */}
            <div
                className="flex h-screen w-12 flex-col items-center space-y-8 border-r border-slate-300 bg-slate-50 py-8 dark:border-slate-700 dark:bg-slate-900 sm:w-16"
            >
                {/* Logo */}
                <a href="#" className="mb-1">
                    <img  src={favicon} alt="favicon ar2c" className={'mt-[-10px] mb-[-25px]'}/>
                </a>
                {/* New conversation */}
                <a
                    onClick={() => setMenu(1)}
                    className="cursor-pointer rounded-lg p-1.5 text-slate-500 transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:text-slate-400 dark:hover:bg-slate-800"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M21.6359 12.9579L21.3572 14.8952C20.8697 18.2827 20.626 19.9764 19.451 20.9882C18.3822 21.9085 16.8599 21.9917 14 21.9993M21.6646 7.87495C21.1242 6.7476 19.9738 6.06233 17.6731 4.69181L16.2882 3.86687C14.199 2.62229 13.1543 2 12 2C10.8457 2 9.80104 2.62229 7.71175 3.86687L6.32691 4.69181C4.02619 6.06234 2.87583 6.7476 2.33537 7.87495C2.04852 8.47327 1.96736 9.12544 2.01108 10"
                                stroke="#63738a" strokeWidth="2.232" strokeLinecap="round"></path>
                            <path d="M11 22C11 17.0294 6.97056 13 2 13" stroke="#63738a" strokeWidth="2.232"
                                  strokeLinecap="round"></path>
                            <path d="M8 22C8 18.6863 5.31371 16 2 16" stroke="#63738a" strokeWidth="2.232"
                                  strokeLinecap="round"></path>
                            <path d="M5 22C5 20.3431 3.65685 19 2 19" stroke="#63738a" strokeWidth="2.232"
                                  strokeLinecap="round"></path>
                        </g>
                    </svg>
                </a>
                {/* Conversations */}
                <a
                    onClick={() => setMenu(2)}
                    className="bg-blue-100 cursor-pointer rounded-lg p-1.5 text-blue-600 transition-colors duration-200 dark:bg-slate-800 dark:text-blue-600"
                >

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M6 16H10M8 18V14M14.5 6.49988L17.5 9.49988M14.5 9.49988L17.5 6.49988M6 7.99997H10M14 15H18M14 18H18"
                                stroke="#63738a" strokeWidth="2.04" strokeLinecap="round"
                                strokeLinejoin="round"></path>
                        </g>
                    </svg>

                </a>
                {/* Discover */}
                <a
                    onClick={() => setMenu(3)}

                    className="cursor-pointer rounded-lg p-1.5 text-slate-500 transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:text-slate-400 dark:hover:bg-slate-800"
                >

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                                  stroke="#63738a" strokeWidth="1.9200000000000004" strokeLinecap="round"
                                  strokeLinejoin="round"></path>
                            <path opacity="0.44"
                                  d="M7.33008 14.4898L9.71008 11.3998C10.0501 10.9598 10.6801 10.8798 11.1201 11.2198L12.9501 12.6598C13.3901 12.9998 14.0201 12.9198 14.3601 12.4898L16.6701 9.50977"
                                  stroke="#63738a" strokeWidth="1.9200000000000004" strokeLinecap="round"
                                  strokeLinejoin="round"></path>
                        </g>
                    </svg>



                </a>
                {/* User */}
                <a
                    onClick={() => setMenu(4)}
                    className="cursor-pointer rounded-lg p-1.5 text-slate-500 transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:text-slate-400 dark:hover:bg-slate-800"
                >


                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M20 12.5V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H12M14 11H8M10 15H8M16 7H8M14.5 19L16.5 21L21 16.5"
                                stroke="#63738a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </g>
                    </svg>

                </a>
                {/* Settings */}
                <a
                    href="#"
                    className="cursor-pointer rounded-lg p-1.5 text-slate-500 transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:text-slate-400 dark:hover:bg-slate-800"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"
                        ></path>
                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                    </svg>
                </a>
            </div>
            {/* Second Column */}
            <MenuLeft menu={menu} setIsSetting={setIsSetting}/>
        </aside>
    )
}

export default NavBar