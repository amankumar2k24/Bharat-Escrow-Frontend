import React from 'react'

const GetInTouch = () => {
    return (
        <>
            <div className='bg-gray-100 container mb-10 mx-auto py-5 flex  flex-col justify-center items-center'>

                <h1 className=' hoverEffect text-3xl sm:text-4xl md:text-5xl mb-10 text-center font-bold'>
                    Get in Touch
                </h1>

                <div className='py-5 flex flex-col sm:flex-row justify-center gap-24 w-full sm:flex-wrap items-center'>
                    {/* left  */}
                    <iframe
                        title='map'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218.96412105256246!2d77.07323157128543!3d28.586996230465697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bee299b98b5%3A0xd5e467baf55d19a8!2sE%20596%2C%20Rd%20No.%20224%2C%20Sector%207%2C%20Block%20F%2C%20Palam%20Extension%2C%20Palam%2C%20New%20Delhi%2C%20Delhi%2C%20110077!5e0!3m2!1sen!2sin!4v1694668395599!5m2!1sen!2sin"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className=' h-[300px] w-full px-4 md:w-[400px]'
                    />

                    {/* right  */}
                    <div className='w-full sm:w-[400px] px-4 sm:px-0 h-[200px] gap-5'>
                        <div className='flex flex-col gap-5'>
                            <div className='text-3xl  font-bold text-black'>Head office</div>
                            <p className='text-xl text-[#000]'>E596, 4 floor, Daani plaza, Ramphal chowk, sector 7, Dwarka, New Delhi 110077</p>
                        </div>
                        <div>
                            <span>Phone :</span> <a href='tel:+8368436501'>8368436501 </a> <br />
                            <span>Email :</span> <a href='https://bharatescrow.com/'>Info@bharatescrow.com</a>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default GetInTouch