import React from 'react'
import { AiOutlineIdcard } from 'react-icons/ai'

const Page2 = ({ initialDataPage2, handleInputPage2, handleFileInput, productImg }) => {
    return (
        <>
            <div className="flex -mx-3 flex-col sm:flex-row">
                {console.log(initialDataPage2)}
                <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">Adhaar Number</label>
                    <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <AiOutlineIdcard />
                        </div>
                        <input type="tel" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900" placeholder="9878-3234-8229"
                            id='adhaar'
                            value={initialDataPage2.adhaar}
                            onInput={handleInputPage2}
                            required
                        />
                    </div>
                </div>
                <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">Pan Number (optional) </label>
                    <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <AiOutlineIdcard />
                        </div>
                        <input type="tel" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900"
                            placeholder="FPJPK8754B"
                            id='pan'
                            value={initialDataPage2.pan}
                            onInput={handleInputPage2}
                            required
                        />
                    </div>
                </div>
            </div>
            <div className="flex -mx-3 flex-col sm:flex-row">
                <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">Company KYC</label>
                    <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <AiOutlineIdcard />
                        </div>
                        <input type="tel" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900"
                            id='companyKYC'
                            value={initialDataPage2.companyKYC}
                            onInput={handleInputPage2}
                            required
                        />
                    </div>
                </div>
                <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">Direct KYC</label>
                    <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <AiOutlineIdcard />
                        </div>
                        <input type="tel" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900"
                            id='directKYC'
                            value={initialDataPage2.directKYC}
                            onInput={handleInputPage2}
                            required
                        />
                    </div>
                </div>
            </div>
            <div className="flex -mx-3 flex-col sm:flex-row">
                <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">Buisness Banking</label>
                    <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <AiOutlineIdcard />
                        </div>
                        <input type="tel" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900"
                            id='buisnessBanking'
                            value={initialDataPage2.buisnessBanking}
                            onInput={handleInputPage2}
                            required
                        />
                    </div>
                </div>
                <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">Cancelled Check</label>
                    <div className="flex cursor-default">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            { }
                        </div>
                        <input className="w-full -ml-10 pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none  text-gray-900"
                            id="imageURL"
                            type="file"
                            accept='image/*'
                            onChange={handleFileInput} />
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center mb-4'>
                {productImg ? (
                    <img className='w-50 h-50' src={productImg} alt='product Img!' />
                ) : (
                    <>
                        <p>Image preview will appear here!</p>
                    </>
                )
                }
            </div>
        </>
    )
}

export default Page2