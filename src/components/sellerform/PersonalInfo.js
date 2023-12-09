import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectForm, setFormValue } from '../../store/slice/formSlice';
import { toast } from 'react-toastify';

const allLanguages = [
    'English',
    'Spanish',
    'French',
    'German',
    'Chinese',
    "Hindi"
];

const PersonalInfo = () => {
    const [productImg, setProductImg] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const personalInfo = useSelector((state) => state.form.personalInfo)
    console.log(personalInfo)

    //validations
    const validation = () => {
        if (!personalInfo.fullName) return { isError: false, message: "Name is missing" }
        else if (!personalInfo.password) return { isError: false, message: "Password is missing" }
        else if (!personalInfo.description) return { isError: false, message: "Description is missing" }
        else if (personalInfo.languages.length === 0) return { isError: false, message: "Languages is missing" }
        else if (!personalInfo.profilePicture) return { isError: false, message: "Profile Picture is missing" }
        else {
            return { isError: true }
        }
    }

    //to change in the input field
    const handleInputChange = (key, value) => {
        dispatch(setFormValue({ section: "personalInfo", key, value }))
    }

    const handleFileInput = (e) => {
        const selectedFile = e.target.files[0]
        TransformFile(selectedFile)
        // if (selectedFile) {
        //     handleInputChange("profilePicture", e.target.files[0])
        // }
        const localImageUrl = window.URL.createObjectURL(selectedFile);
        dispatch(setFormValue({ section: "personalInfo", key: "profilePicture", value: localImageUrl }))
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


    //to move on to next page
    const handleContinue = () => {
        if (validation().isError) {
            navigate("/sellingOnboarding/professional-info")
        } else {
            toast.error(validation().message)
        }
    }

    //for language that i have select
    const toggleLanguage = (currentLanguages, lang) => {
        const index = currentLanguages.indexOf(lang);

        if (index === -1) {
            return [...currentLanguages, lang];
        } else {
            return currentLanguages.filter((bhasa) => bhasa !== lang);
        }
    }


    return (
        <div className='mt-36 md:mt-32 pb-10 container mx-auto w-full flex justify-center px-4'>
            <div className='max-w-[1024px] w-full rounded-lg'>
                {/* form  */}

                <div className='bg-gray-600 w-full text-center rounded-t-lg text-white leadt py-5 mt-8  '>
                    <div className='font-bold uppercase text-3xl sm:text-4xl md:text-4xl '>
                        Personal Info
                    </div>
                    <p className='px-2 sm:px-10 text-sm sm:text-base text-gray-300'>Tell us a bit about yourself. This information will appear on your public profile, so that potential buyers can get to know you better. </p>
                </div>

                <form className="w-full px-10 pb-4 flex rounded-b-lg justify-between flex-col bg-gradient-to-r from-[rgb(1,66,106)] to-[#096aa6]">
                    {/* //full name  */}
                    <div className="md:flex md:items-center mb-6 mt-10">
                        <div className="md:w-1/3">
                            <label className="block text-slate-200 font-bold mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                Full Name
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-600"
                                id="fullName"
                                type="text"
                                placeholder='Enter your name'
                                value={personalInfo.fullName || ""}
                                onChange={(e) => handleInputChange("fullName", e.target.value)}
                            />
                        </div>
                    </div>
                    {/* // password  */}
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-slate-200 font-bold mb-1 md:mb-0 pr-4" htmlFor="password">
                                Password
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-600"
                                id="password"
                                type="password"
                                placeholder="******************"
                                value={personalInfo.password || ""}
                                onChange={(e) => handleInputChange("password", e.target.value)}
                            />
                        </div>
                    </div>
                    {/* //description */}
                    <div className="md:flex md:items-center mb-6 mt-2">
                        <div className="md:w-1/3">
                            <label className="block text-slate-200 font-bold mb-1 md:mb-0 pr-4" htmlFor="textarea">
                                Description
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full h-40 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-600"
                                id="textarea"
                                type="text"
                                value={personalInfo.description || ""}
                                onChange={(e) => handleInputChange("description", e.target.value)}
                            />
                        </div>
                    </div>
                    {/* Lanuages   */}
                    <div className="md:flex md:items-center mb-6 mt-2">
                        <div className="md:w-1/3">
                            <label className="block text-slate-200 font-bold mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                Languages
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <div className='flex flex-row flex-wrap gap-2'>
                                {/* Render checkboxes for each language */}
                                {allLanguages.map((lang, index) => (
                                    <div className='mr-2 text-gray-50' key={index}>
                                        <input className='cursor-pointer'
                                            type="checkbox"
                                            id={lang.toLowerCase()}
                                            value={lang.toLowerCase()}
                                            defaultChecked={personalInfo.languages.filter((item) => item == lang).length == 0 ? false : true}
                                            onChange={() => handleInputChange('languages', toggleLanguage(personalInfo.languages, lang))}
                                        />
                                        <label className='ml-[2px]' htmlFor={lang.toLowerCase()}>{lang}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                    {/* //profile photo   */}
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-slate-200 font-bold mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                                Profile Picture
                            </label>
                        </div>

                        <div className="flex items-center w-2/3">
                            <label htmlFor="profilePicture" className="flex flex-col items-center justify-center w-48 h-48 rounded-[50%] border-2 border-gray-300 border-dashed cursor-pointer bg-gray-200 ">
                                {/* //box image is showing  */}
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    {personalInfo.profilePicture ?
                                        <img className='w-[200px] h-[200px] object-cover rounded-full' src={personalInfo.profilePicture} alt='product Img!' />
                                        :
                                        <>
                                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or JPEG</p>
                                        </>

                                    }
                                </div>

                                <input className="hidden"
                                    id="profilePicture"
                                    type="file"
                                    onChange={handleFileInput}
                                />
                            </label>
                        </div>
                    </div>
                </form>
                {/* //button  */}
                <div className='flex justify-center mt-6 text-white font-bold '>
                    <button className={`w-[150px] py-2 bg-gray-600 hover:bg-gray-700 rounded-lg`}
                        onClick={handleContinue}
                    >Continue
                    </button>
                </div>

            </div>

        </div>
    )
}

export default PersonalInfo