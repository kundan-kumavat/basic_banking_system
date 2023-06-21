import React from "react";
import cards from '../assets/cards.png';

function Home(){
    return(
        <div className="flex flex-col mt-[3rem]">
         <div className="flex sm:flex-row flex-col justify-between">
            {/* Section 1 */}
            <div className="flex flex-col">
                <p className="text-dimWhite text-[1rem] font-poppins tracking-wider mb-[-0.5rem] mt-[2.5rem]">3s - Simple, Smart, Secure</p>

                <p className="text-white text-[3rem] md:text-[5.5rem] font-bold max-w-[35rem] font-poppins leading:[1rem] md:leading-[7rem]">Enjoy Our Banking System</p>

                <button className="text-white text-[20px] font-bold w-[150px] p-[7px] rounded-[30px] button my-[1rem]">Get Started</button>
            </div>

            {/* section 2 */}
            <div>
                <img src={cards} alt="cards" />
            </div>
         </div>

         <div className="flex sm:flex-row flex-col justify-between mt-[1.5rem]">
            <p className="text-white max-w-[17rem]">The most simple, secure, smart banking system for easy transactions</p>
            <div className="flex flex-row m-[1rem] md:m-[0]">
                <p className="text-white text-[2.5rem] font-bold">8</p>
                <p className="text-dimWhite my-[1rem] mx-[0.5rem]">Years of Active Work</p>
            </div>
            <div className="flex flex-row m-[1rem] sm:m-[0]">
                <p className="text-white text-[2.5rem] font-bold">1M</p>
                <p className="text-dimWhite my-[0.5rem] mx-[0.5rem]">Satisified customer <br /> of our company</p>
            </div>
         </div>
        </div>
    )
}

export default Home;