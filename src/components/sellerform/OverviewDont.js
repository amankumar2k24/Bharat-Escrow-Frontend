import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const OverviewDont = () => {
    const [disabledButton, setDisabledButton] = useState(true)
    const navigate = useNavigate()

    return (
        <section className=' relative container mx-auto mt-40 max-w-2xl flex justify-center px-4 md:px-0 '>
            <div>
                <h5 className="py-4 text-lg sm:text-2xl px-2 font-bold tracking-tight rounded-t bg-gray-600 w-full text-center text-white">
                    Moving forward, let's consider what to avoid.
                </h5>

                <div className="block p-6 border rounded-b shadow bg-[#01426a] border-[#01426a]">
                    <p className="font-normal text-md sm:text-lg text-slate-100">
                        At Bharat Escrow, your success is significant. Adhere to our community standards by avoiding the following.</p>
                    <ol className='mt-5 text-slate-300 list-decimal px-4 flex flex-col gap-y-2 '>
                        <li>
                            Maintain transparency by avoiding any misleading or inaccurate information regarding your identity.</li>
                        <li>
                            Kindly refrain from suggesting or engaging in external communication or payment methods; all transactions should be conducted within the Bharat Escrow platform.  </li>
                        <li>
                            Creating multiple accounts is not permitted; please refrain from doing so.                    </li>
                        <div className="flex my-4 ">
                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 mt-1 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                onClick={() => setDisabledButton(!disabledButton)}
                            />
                            <div className='flex flex-col'>
                                <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-white">Want to create your paid services?</label>
                                {disabledButton ?
                                    <div className="ms-2 text-sm font-medium text-red-500">Please select to continue</div>
                                    :
                                    null}
                            </div>
                        </div>
                    </ol>

                    {/* //button  */}
                    <div className='flex flex-col sm:flex-row justify-center gap-x-2 '>
                        <Link to="/sellingOnboarding/personal-info" className='flex justify-center text-white font-bold  '>
                            <button className={`w-[150px] py-2 bg-gray-600 ${disabledButton ? "" : "hover:bg-gray-700"} rounded-lg`}
                                disabled={disabledButton}
                            >Continue
                            </button>
                        </Link>
                        <button className={`w-[150px] py-2 bg-gray-600 text-white hover:bg-gray-700 rounded-lg`}
                            onClick={() => navigate(-1)}
                        >Go Back
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OverviewDont