import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setFormValue } from '../../store/slice/formSlice'
import { toast } from 'react-toastify'

const ProfessionalInfo = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const professionalInfo = useSelector((state) => state.form.professionalInfo)
    console.log(professionalInfo)

    //validations
    const validation = () => {
        if (!professionalInfo.occupation) return { isError: false, message: "Occupation is missing" }
        else if (!professionalInfo.skills) return { isError: false, message: "Skills is missing" }
        else if (!professionalInfo.education) return { isError: false, message: "Education is missing" }
        else if (!professionalInfo.personalWebsite) return { isError: false, message: "Personal Website is missing" }
        else {
            return { isError: true }
        }
    }

    //to change in the input field
    const handleInputChange = (key, value) => {
        dispatch(setFormValue({ section: "professionalInfo", key, value }))
    }

    //to move on to next page
    const handleContinue = () => {
        if (validation().isError) {
            navigate("/sellingOnboarding/account-security")
        } else {
            toast.error(validation().message)
        }
    }

    return (
        <div className='mt-36 md:mt-32 pb-10 container mx-auto w-full flex justify-center font-roboto px-4'>
            <div className='max-w-[1024px] w-full rounded-lg'>
                {/* form  */}

                <div className=' bg-gray-600 w-full rounded-t-lg text-center text-white leadt py-5 mt-8  '>
                    <div className='font-bold uppercase text-3xl sm:text-4xl md:text-4xl'>
                        Professional Info
                    </div>
                    <div className=' w-full'>
                        <p className='px-2 sm:px-10 text-sm sm:text-base text-gray-300'>This is your time to shine. Let potential buyers know what you do best and how you gained your skills, certifications and experience.</p>
                    </div>
                </div>

                {/* //form  */}
                <form className="w-full px-10 pb-4 flex rounded-b-lg justify-between flex-col bg-gradient-to-r from-[rgb(1,66,106)] to-[#096aa6]">
                    {/* occupation  */}
                    <div className="md:flex md:items-center mb-6 mt-10">
                        <div className="md:w-1/3">
                            <label className="block text-slate-200 font-bold mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                Your Occupation
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-600"
                                id="occupation"
                                type="text"
                                placeholder='Enter your occupation'
                                value={professionalInfo.occupation}
                                onChange={(e) => handleInputChange("occupation", e.target.value)}

                            />
                        </div>
                    </div>
                    {/* // skills  */}
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-slate-200 font-bold mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                                Skills
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-600"
                                id="skills"
                                type="text"
                                placeholder="Enter your skills"
                                value={professionalInfo.skills}
                                onChange={(e) => handleInputChange("skills", e.target.value)}
                            />
                        </div>
                    </div>
                    {/* //education */}
                    <div className="md:flex md:items-center mb-6 mt-2">
                        <div className="md:w-1/3">
                            <label className="block text-slate-200 font-bold mb-1 md:mb-0 pr-4" htmlFor="textarea">
                                Education
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-600"
                                id="education"
                                type="text"
                                placeholder="Enter your education"
                                value={professionalInfo.education}
                                onChange={(e) => handleInputChange("education", e.target.value)}
                            />

                        </div>
                    </div>
                    {/* //personal website */}
                    <div className="md:flex md:items-center mb-6 mt-2">
                        <div className="md:w-1/3">
                            <label className="block text-slate-200 font-bold mb-1 md:mb-0 pr-4" htmlFor="textarea">
                                Personal Website
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-600"
                                id="personalWebsite"
                                type="text"
                                placeholder="Enter your website link"
                                value={professionalInfo.personalWebsite}
                                onChange={(e) => handleInputChange("personalWebsite", e.target.value)}
                            />

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

export default ProfessionalInfo