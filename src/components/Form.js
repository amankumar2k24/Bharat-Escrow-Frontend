import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { SERVER_URL } from '../constants';
import axios from 'axios';

const ContactForm = () => {
    const [initialData, setInitialData] = useState({
        email: "",
        name: "",
        phone: "",
        textarea: "",
    })

    const handleInput = (event) => {
        const { value, id } = event.target;
        setInitialData((prevState) => ({ ...prevState, [id]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!initialData.email) return toast.error("Email is missing")
        else if (!/^[a-z0-9.]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(initialData.email)) return toast.error("Please enter the correct email")
        else if (!initialData.name) return toast.error("Name is missing")
        else if (!initialData.phone) return toast.error("Phone no. is missing")
        else if (initialData.phone.length !== 10 || !/^[0-9]{10}$/) return toast.error("Phone number should be a 10-digit number")
        else if (!initialData.textarea) return toast.error("Textarea is missing")
        else {
            axios.post(`${SERVER_URL}/contact/create-user`, initialData).then((res) => {
                toast.success("Thank you for contacting us, We will get to back shortly!")
                // console.log(res.data)
                if (res) {
                    setInitialData({
                        email: "",
                        name: "",
                        phone: "",
                        textarea: "",
                    })
                }
            }).catch((err) => console.log(err))
        }
    }

    return (
        <>
            <form>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="email" name="_replyto" id="email" value={initialData.email} className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"

                        onChange={handleInput}
                    />
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Email address
                    </label>
                </div>


                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="Your Name :-" id="name" value={initialData.name} className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            onChange={handleInput}
                        />
                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Your Name
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="tel" name="Phone Number :-" id="phone" value={initialData.phone} className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            onChange={handleInput}
                        />
                        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Phone number
                        </label>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <textarea type="text" name="Textarea" id="textarea" value={initialData.textarea} className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            onChange={handleInput}
                        />
                        <label htmlFor="Textarea" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Textarea
                        </label>
                    </div>
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center yellow dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                    onClick={handleSubmit}
                >

                    Submit
                </button>
            </form>

        </>
    )
}

export default ContactForm