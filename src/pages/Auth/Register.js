import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from "axios"
import { toast } from 'react-toastify'
import { SERVER_URL } from '../../constants'
import Page1 from '../../components/RegistrationPages/Page1'
import Page2 from '../../components/RegistrationPages/Page2'
import FormData from 'form-data';



const Register = () => {
    // const [step, setStep] = useState(1);
    const [productImg, setProductImg] = useState("")
    const navigate = useNavigate()
    const [changePage, setChangePage] = useState(false)
    const [initialDataPage1, setInitialDataPage1] = useState({
        username: "",
        role: "",
        email: "",
        phone: "",
        password: "",
        dob: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        description: ""
    })
    const [initialDataPage2, setInitialDataPage2] = useState({
        adhaar: "",
        pan: "",
        imageURL: "",
        companyKYC: "",
        directKYC: "",
        buisnessBanking: ""
    })

    // To handle InputPage1 
    const handleInputPage1 = (event) => {
        const { value, id } = event.target
        setInitialDataPage1(preVal => ({ ...preVal, [id]: value }))
    }

    // To handle InputPage2 
    const handleInputPage2 = (event) => {
        const { value, id } = event.target
        setInitialDataPage2(preVal => ({ ...preVal, [id]: value }))
    }

    // To handle File Input Image 
    const handleFileInput = (e) => {
        const selectedFile = e.target.files[0];
        TransformFile(selectedFile)
        if (selectedFile) {
            setInitialDataPage2((prevData) => ({ ...prevData, imageURL: selectedFile }));
        }
    }

    // This code is used to generate base64 and with the help of TransformFile function the image are showing on the screen
    const TransformFile = (selectedFile) => {
        const reader = new FileReader();

        if (selectedFile) {
            reader.readAsDataURL(selectedFile);
            reader.onloadend = () => {
                setProductImg(reader.result)
            }
        } else {
            setProductImg("")
        }
    }

    const validationPage1 = () => {
        if (initialDataPage1.username.length === 0) return { isError: false, message: "Username is missing" }
        else if (initialDataPage1.role === "") return { isError: false, message: "Role is not selected" }

        else if (initialDataPage1.email.length === 0) return { isError: false, message: "Email is missing" }
        else if (!/^[a-z0-9.]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(initialDataPage1.email)) return { isError: false, message: "Please enter the correct email " }


        else if (initialDataPage1.phone.length <= 0) return { isError: false, message: "Phone is missing" }
        else if (initialDataPage1.phone.length !== 10 || !/^\d{10}$/.test(initialDataPage1.phone))
            return { isError: false, message: "Phone number should be a 10-digit number" }

        else if (initialDataPage1.password.length === 0) return { isError: false, message: "Password is missing" }
        else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@]).{8,16}/.test(initialDataPage1.password)) {
            alert("Password should contain 8 character with one uppercase, one lowercase, one digit, @ symbol")
            return { isError: false, message: "Please enter the correct password" }
        }

        else if (initialDataPage1.dob.length === 0) return { isError: false, message: "Date of Birth is missing" }
        else if (initialDataPage1.address1.length === 0) return { isError: false, message: "Address-1 is missing" }
        else if (initialDataPage1.city.length === 0) return { isError: false, message: "City is missing" }

        else if (initialDataPage1.zipCode.length === 0) return { isError: false, message: "Zip-Code is missing" }
        else if (!/[0-9]{6}$/.test(initialDataPage1.zipCode)) return { isError: false, message: "Zip code should be six digit number" }

        else if (initialDataPage1.country.length === 0) return { isError: false, message: "Country is missing" }

        // else if (initialDataPage1.adhaar.length === 0) return { isError: false, message: "Adhaar is missing" }
        // else if (!/[0-9]{12}$/.test(initialDataPage1.adhaar)) return { isError: false, message: "Adhaar should be twelve digit number" }

        else if (initialDataPage1.description.length === 0) return { isError: false, message: "Description is missing" }
        else {
            return { isError: true }
        }
    }

    const validationPage2 = () => {
        if (initialDataPage2.adhaar.length === 0) return { isError: false, message: "Adhaar is missing" }
        else if (!/[0-9]{12}$/.test(initialDataPage2.adhaar)) return { isError: false, message: "Adhaar should be twelve digit number" }
        else if (initialDataPage2.pan.length === 0) return { isError: false, message: "Pan is missing" }
        else if (initialDataPage2.companyKYC.length === 0) return { isError: false, message: "Company KYC is missing" }
        else if (initialDataPage2.directKYC.length === 0) return { isError: false, message: "Direct KYC is missing" }
        else if (initialDataPage2.buisnessBanking.length === 0) return { isError: false, message: "Business Banking is missing" }
        // else if (initialDataPage2.cancelledCheck.length === 0) return { isError: false, message: "Cancelled Check Image is missing" }
        else {
            return { isError: true }
        }
    }

    //to handle Proceed to register
    const handleProceedToRegister = async () => {
        if (validationPage1().isError) {
            setChangePage(true)
        } else {
            toast.error(validationPage1().message)
        }
    }

    //to handle final register from
    const handleRegister = async () => {
        if (validationPage2().isError) {

            //FormData---------------------------------------->
            const formData = new FormData();
            // console.log(formData)

            // formData.append("username", initialDataPage1.username);
            // formData.append("role", initialDataPage1.role);
            // formData.append("email", initialDataPage1.email);
            // formData.append("phone", initialDataPage1.phone);
            // formData.append("password", initialDataPage1.password);
            // formData.append("dob", initialDataPage1.dob);
            // formData.append("address1", initialDataPage1.address1);
            // formData.append("address2", initialDataPage1.address2);
            // formData.append("city", initialDataPage1.city);
            // formData.append("state", initialDataPage1.state);
            // formData.append("zipCode", initialDataPage1.zipCode);
            // formData.append("country", initialDataPage1.country);
            // formData.append("description", initialDataPage1.description);
            // formData.append("adhaar", initialDataPage1.adhaar);
            // formData.append("pan", initialDataPage2.pan);
            // formData.append("companyKYC", initialDataPage2.companyKYC);
            // formData.append("directKYC", initialDataPage2.directKYC);
            // formData.append("buisnessBanking", initialDataPage2.buisnessBanking);
            // formData.append("imageURL", initialDataPage2.imageURL);
            // console.log(formData)



            // Append other data
            Object.keys(initialDataPage1).forEach((key) => {
                formData.append(key, initialDataPage1[key]);
            });

            Object.keys(initialDataPage2).forEach((key) => {
                formData.append(key, initialDataPage2[key]);
            });

            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            };
            //FormData---------------------------------------->

            try {
                let res = await axios.post(`${SERVER_URL}/user/create-user`, formData, config)
                console.log(res)
                if (res) {
                    navigate("/login")
                    toast.success(res.data.message)
                }
            } catch (err) {
                // console.log(err.response ? err.response.data : err);
                toast.success(err.response.data.message)
            }
        } else {
            toast.error(validationPage2().message)
        }
    }


    return (
        <>
            <section className="registerForm">
                <div className='bg-gray-600'>
                    <div className=" border border-t-2 border-x-0 border-b-0 border-white bg-gradient-to-r row from-[rgb(1,66,106)] to-[#096aa6] flex items-center justify-center px-5 py-3 mt-8 sm:mt-0 pt-[5.8rem]">
                        <div className="max-w-[1000px] bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
                            <div className="md:flex w-full">
                                <div className="w-full  py-5 px-5 md:px-10">

                                    {/* TopData  */}
                                    <div className="text-center mb-10">
                                        <h1 className="font-bold text-2xl sm:text-3xl text-gray-900">REGISTRATION FORM</h1>
                                        {changePage ?
                                            <p className='text-sm sm:text-md md:text-lg'>Enter your banking information</p>
                                            :
                                            <p className='text-sm sm:text-md md:text-lg'>Enter your basic information</p>
                                        }
                                    </div>
                                    <div>
                                        {/* CurrentPage  */}
                                        {changePage ?
                                            < Page2 initialDataPage2={initialDataPage2} productImg={productImg} handleFileInput={handleFileInput} handleInputPage2={handleInputPage2} />
                                            :
                                            < Page1 initialDataPage1={initialDataPage1} handleInputPage1={handleInputPage1} />

                                        }

                                        {/* Bottom Data  */}
                                        {changePage ?
                                            (
                                                <div className="flex -mx-3 flex-col sm:flex-row">
                                                    <div className="w-full px-3 mb-5">
                                                        <button className="block w-full max-w-xs mx-auto bg-[#096aa6] transition-all 0.5s ease-in-out hover:bg-[rgb(1,66,106)] text-white rounded-lg px-3 py-3 font-semibold"
                                                            onClick={handleRegister}
                                                        >
                                                            REGISTER NOW
                                                        </button>
                                                    </div>
                                                </div>
                                            )
                                            :
                                            (
                                                <div className="flex -mx-3 flex-col sm:flex-row">
                                                    <div className="w-full px-3 mb-5">
                                                        <button className="block w-full max-w-xs mx-auto bg-[#096aa6] transition-all 0.5s ease-in-out hover:bg-[rgb(1,66,106)] text-white rounded-lg px-3 py-3 font-semibold"
                                                            onClick={handleProceedToRegister}
                                                        >
                                                            PROCEED TO REGISTER
                                                        </button>
                                                    </div>
                                                </div>
                                            )
                                        }

                                        <div className="text-black text-center ">Already have an account? <br />
                                            <div className='flex flex-col-reverse justify-center sm:justify-between sm:flex-row'>
                                                <div className='whitespace-nowrap mb-2 flex justify-center sm:justify-normal text-gray-500 text-[13px]'>Page 2/2</div>
                                                <NavLink to="/login" className=' cursor-pointer text-[#096aa6] hover:text-[rgb(1,66,106)]' >Login now</NavLink>
                                                <div className='sm:mr-14'>{ }</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register