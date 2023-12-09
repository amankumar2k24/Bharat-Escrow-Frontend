import React, { useState } from 'react'
import { HiOutlineUser } from "react-icons/hi"
import { FiMail } from "react-icons/fi"
import { RiLockPasswordFill } from "react-icons/ri"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
import { BiPhone } from "react-icons/bi"
import { MdDateRange } from "react-icons/md"
import { FaRegAddressBook } from "react-icons/fa"
import { TbBuildingEstate } from "react-icons/tb"
import { GiModernCity } from "react-icons/gi"

const countries = ["Afghanistan", "Australia", "Bahrain", "Bangladesh", "Bhutan", "Brazil", "Canada", "China", "France", "Germany", "India", "Indonesia", "Iran", "Israel", "Italy", "Japan", "Jordan", "Kyrgyzstan", "London", "Malaysia", "Maldives", "Mauritius", "Mongolia", "Myanmar", "Nepal", "Netherlands", "New York", "Oman", "Palestine", "Philippines", "Portugal", "Qatar", "Russia", "Rwanda", "Saudi Arabia", "Singapore", "South Africa", "South Korea", "Spain", "Sri Lanka", "Sweden", "Switzerland", "Tajikistan", "Tanzania", "Thailand", "Turkey", "Turkmenistan", "Uganda", "United Arab Emirates", "United Kingdom", "United States", "Uzbekistan", "Vietnam", "Other"];

const Page1 = ({ initialDataPage1, handleInputPage1 }) => {
    const [hide, setHide] = useState(true)


    return (
        <>
            <div className="flex -mx-3 flex-col sm:flex-row">
                {/* {console.log(initialDataPage1)} */}
                <div className="w-full sm:w-1/2 px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">Username</label>
                    <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <HiOutlineUser />
                        </div>
                        <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900" placeholder="Enter your name"
                            id='username'
                            value={initialDataPage1.username}
                            onInput={handleInputPage1}
                            required
                        />
                    </div>
                </div>

                <div className="w-full sm:w-1/2 px-3 mb-0 sm:mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">Role</label>

                    <select id="role"
                        value={initialDataPage1.role}
                        onChange={handleInputPage1}
                        required
                        className="block w-full p-3 mb-6 text-sm text-black border rounded-lg focus:border-black bg-white dark:placeholder-gray-400   dark:focus:border-black">
                        <option className='text-gray-500' >Choose account type :</option>
                        <option id='freelancer' value="Freelancer">freelancer</option>
                        <option id='buyer' value="Buyer">buyer</option>
                        <option id='seller' value="Seller">seller</option>
                    </select>

                </div>
            </div>

            <div className="flex -mx-3 flex-col sm:flex-row">
                <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">Email</label>
                    <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <FiMail />
                        </div>
                        <input type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900" placeholder="Enter your email"
                            id='email'
                            value={initialDataPage1.email}
                            onInput={handleInputPage1}
                            required
                        />
                    </div>
                </div>
                <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">Phone</label>
                    <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <BiPhone />
                        </div>
                        <input type="phone" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900"
                            placeholder="Enter phone number"
                            id='phone'
                            value={initialDataPage1.phone}
                            onInput={handleInputPage1}
                            required
                        />
                    </div>
                </div>
            </div>

            <div className="flex -mx-3 flex-col sm:flex-row">
                <div className="w-full px-3 mb-12">
                    <label htmlFor="" className="text-xs font-semibold px-1">Password</label>
                    <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <RiLockPasswordFill />
                        </div>
                        <input type={`${hide ? "password" : "text"}`} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-s-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900" placeholder="************"
                            id='password'
                            value={initialDataPage1.password}
                            onInput={handleInputPage1}
                            required
                        />

                        <div onClick={() => setHide(!hide)} className='w-10 h-11 flex justify-center items-center bg-gray-400 rounded-e-lg'>
                            {hide ?
                                <AiFillEyeInvisible className='text-black ' size={20} />
                                :
                                <AiFillEye className='text-black ' size={20} />
                            }
                        </div>

                    </div>
                </div>
                <div className="w-full px-3 mb-12">
                    <label htmlFor="" className="text-xs font-semibold px-1">Date Of Birth</label>
                    <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <MdDateRange />
                        </div>
                        <input type="date" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900"
                            placeholder=""
                            id='dob'
                            value={initialDataPage1.dob}
                            onInput={handleInputPage1}
                            required
                        />

                    </div>
                </div>
            </div>

            <div className="flex -mx-3 flex-col sm:flex-row">
                <div className="w-full px-3 mb-12">
                    <label htmlFor="" className="text-xs font-semibold px-1">Address Line 1</label>
                    <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <FaRegAddressBook />
                        </div>
                        <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900" placeholder="Enter your address"
                            id='address1'
                            value={initialDataPage1.address1}
                            onInput={handleInputPage1}
                            required
                        />
                    </div>
                </div>
                <div className="w-full px-3 mb-12">
                    <label htmlFor="" className="text-xs font-semibold px-1">Address Line 2 (optional)</label>
                    <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <FaRegAddressBook />
                        </div>
                        <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900"
                            placeholder="Enter your address"
                            id='address2'
                            value={initialDataPage1.address2}
                            onInput={handleInputPage1}
                        />

                    </div>
                </div>
            </div>

            <div className="flex -mx-3 flex-col sm:flex-row">
                <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">City</label>
                    <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <GiModernCity />
                        </div>
                        <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900" placeholder="Enter your city"
                            id='city'
                            required
                            value={initialDataPage1.city}
                            onInput={handleInputPage1}
                        />
                    </div>
                </div>
                <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">State</label>
                    <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <TbBuildingEstate />
                        </div>
                        <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900"
                            placeholder="Enter your state"
                            id='state'
                            value={initialDataPage1.state}
                            onInput={handleInputPage1}
                        />
                    </div>
                </div>
            </div>

            <div className="flex -mx-3 flex-col sm:flex-row">
                <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">Zip Code / Post Code</label>
                    <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <GiModernCity />
                        </div>
                        <input type="tel" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900" placeholder="Enter your city"
                            id='zipCode'
                            value={initialDataPage1.zipCode}
                            onInput={handleInputPage1}
                        />
                    </div>
                </div>
                <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">Country</label>
                    <select id="country"
                        value={initialDataPage1.country}
                        onChange={handleInputPage1}
                        required
                        className="block w-full p-3 mb-6 text-sm text-black border rounded-lg focus:border-black bg-white dark:placeholder-gray-400   dark:focus:border-black">
                        <option className='text-gray-500'>--please select your Country--</option>

                        {countries.map(country => (
                            <option key={country} value={country}>
                                {country}
                            </option>
                        ))}

                    </select>
                </div>
            </div>

            <div className="flex -mx-3 flex-col sm:flex-row">
                <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">Description</label>
                    <div className="flex justify-end">

                        <textarea type="tel" className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900" placeholder="Write your views..."
                            id='description'
                            value={initialDataPage1.description}
                            onInput={handleInputPage1}
                            required>
                        </textarea>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Page1