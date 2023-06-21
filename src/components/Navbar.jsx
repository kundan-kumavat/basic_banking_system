import React from "react";
import { useState } from "react";
import cross from '../assets/cross.png';
import menu from '../assets/favicon.png';

function Navbar(){
 
    const [toggle, setToggle] = useState(false);

    return(
        <div className="flex flex-row w-100 justify-between relative">
            <p className="text-[20px] text-white font-bold font-poppins">Sparks Bank</p>

            <div className="flex flex-row text-white navbar items-center sm:block hidden">
                <a href="/">Home</a>
                <a href="allcustomers">All Customers</a>
                <a href="transactions">Transactions</a>
                <a href="tranferFunds">Transfer Money</a>
            </div>

            <a className="text-white sm:block hidden" href="#">Get Started</a>

            <div className="sm:hidden block">
                <img src={toggle ? cross : menu} alt="menu" className="w-[1.5rem]"
                 onClick={() => {
                    setToggle((prev) => (!prev))
                 } }
                />

                <div className={`${toggle ? 'flex' : 'hidden'} flex flex-col p-[1rem] bg-secondary text-white font-poppins font-semibold items-center absolute top-[3rem] right-[1rem] rounded-xl nav`}>
                <a href="/">Home</a>
                <a href="allcustomers">All Customers</a>
                <a href="transactions">Transactions</a>
                <a href="tranferFunds">Transfer Money</a>
                </div>
            </div>

        </div>
    )
}

export default Navbar;