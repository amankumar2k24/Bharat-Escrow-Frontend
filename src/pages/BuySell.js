import React, { useState } from 'react'
import Box from '../components/Box'
import domain1 from "../assets/buyorsell/Domain1.png"
import domain2 from "../assets/buyorsell/Domain2.png"
import domain3 from "../assets/buyorsell/Domain3.png"
import Websites1 from "../assets/buyorsell/Websites1.png"
import Websites2 from "../assets/buyorsell/Websites2.png"
import Websites3 from "../assets/buyorsell/Website3.png"
import Gadget1 from "../assets/buyorsell/Gadget1.jpg"
import Gadget2 from "../assets/buyorsell/Gadget2.jpg"
import Gadget3 from "../assets/buyorsell/Gadget3.jpg"
import Car1 from '../assets/buyorsell/Car1.jpg'
import Ship1 from '../assets/buyorsell/Ship1.jpg'
import Truck1 from '../assets/buyorsell/Truck1.jpg'
import Cycle1 from "../assets/buyorsell/cycle1.jpg"
import Cycle2 from "../assets/buyorsell/cycle2.jpg"
import Cycle3 from "../assets/buyorsell/cycle3.jpg"
import Footer from '../components/Footer'

const BuySell = () => {
    const [selectCategory, setSelectCategory] = useState("domain")

    return (
        <>
            <section className='buySell border-y-2 border-white'>
                <div className=' flex pt-28 pb-[83px] bg-gradient-to-r row from-[rgb(1,66,106)] to-[#096aa6]  font-roboto flex-col gap-5 px-2 ' >
                    <div className='font-bold text-3xl sm:text-4xl md:text-5xl mt-8 sm:mt-0 w-full text-center text-yellow-600'>
                        BUY OR SELL ITEMS
                    </div>
                    <ul className=' uppercase font-bold text-sm sm:text-md md:text-lg w-full text-center leading-tight text-yellow-600 flex justify-evenly flex-wrap'>
                        <li className='inline-block text-white transition-all duration-150 ease-in-out  hover:text-yellow-600  cursor-pointer py-3 px-3 '
                            onClick={() => setSelectCategory("domain")}>
                            Domain
                        </li>
                        <li className=' inline-block text-white transition-all duration-150 ease-in-out  hover:text-yellow-600  cursor-pointer py-3 px-3 '
                            onClick={() => setSelectCategory("websites")}>
                            Websites
                        </li>
                        <li className='inline-block text-white transition-all duration-150 ease-in-out  hover:text-yellow-600  cursor-pointer py-3 px-3 '
                            onClick={() => setSelectCategory("carOrTrucks")}>
                            Car or Trucks
                        </li>
                        <li className='inline-block text-white transition-all duration-150 ease-in-out  hover:text-yellow-600  cursor-pointer py-3 px-3'
                            onClick={() => setSelectCategory("gadgets")}>
                            Gadgets
                        </li>
                        <li className='inline-block text-white transition-all duration-150 ease-in-out  hover:text-yellow-600  cursor-pointer py-3 px-3'
                            onClick={() => setSelectCategory("motorcycles")}>
                            Motorcycles
                        </li>
                    </ul>

                    <div className='flex flex-wrap flex-shrink justify-between space-y-2 gap-4 px-2  '>
                        {selectCategory === "domain" && (
                            <>
                                <Box text={"Web Design"} src={domain1} />
                                <Box text={"Graphics"} src={domain2} />
                                <Box text={"Logo Design"} src={domain3} />
                            </>
                        )}


                        {selectCategory === "websites" && (
                            <>
                                <Box text={"Advertising"} src={Websites1} />
                                <Box text={"Video Content"} src={Websites2} />
                                <Box text={"Viral Tweet"} src={Websites3} />
                            </>

                        )}

                        {selectCategory === "carOrTrucks" && (
                            <>
                                <Box text={"Car"} src={Car1} />
                                <Box text={"Ship"} src={Ship1} />
                                <Box text={"Truck"} src={Truck1} />
                            </>

                        )}

                        {selectCategory === "gadgets" && (
                            <>
                                <Box text={"Mobile Phones"} src={Gadget1} />
                                <Box text={"Ear Phones"} src={Gadget2} />
                                <Box text={"Head Phones"} src={Gadget3} />
                            </>

                        )}

                        {selectCategory === "motorcycles" && (
                            <>
                                <Box text={"Sell"} src={Cycle1} />
                                <Box text={"In Stock"} src={Cycle3} />
                                <Box text={"Buy"} src={Cycle2} />
                            </>

                        )}

                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default BuySell