import React from 'react';

const Banner = () => {
    return (
        <div className='w-[95%] md:max-w-227.5 mx-auto'>
            <div className='text-center space-y-3 my-8'>
                <p className='text-3xl md:text-5xl font-bold'>Friends to keep close in your life</p>
                <p className='text-[#64748B] text-sm'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.
                </p>
                <button className="mt-4 px-4 py-2 bg-[#244D3F] text-white rounded-md hover:bg-[#1b3a2f] transition">
                    + Go Back Home
                </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8'>
                <div className='text-center space-y-2 border border-gray-300 rounded-2xl py-4'>
                    <p className='text-2xl md:text-4xl font-semibold text-[#244D3F]'>10</p>
                    <p className='text-[#64748B] font-semibold text-xl'>Totol Friends</p>
                </div>
                <div className='text-center space-y-2 border border-gray-300 rounded-2xl py-4'>
                    <p className='text-2xl md:text-4xl font-semibold text-[#244D3F]'>10</p>
                    <p className='text-[#64748B] font-semibold text-xl'>Totol Friends</p>
                </div>
                <div className='text-center space-y-2 border border-gray-300 rounded-2xl py-4'>
                    <p className='text-2xl md:text-4xl font-semibold text-[#244D3F]'>10</p>
                    <p className='text-[#64748B] font-semibold text-xl'>Totol Friends</p>
                </div>
                <div className='text-center space-y-2 border border-gray-300 rounded-2xl py-4'>
                    <p className='text-2xl md:text-4xl font-semibold text-[#244D3F]'>10</p>
                    <p className='text-[#64748B] font-semibold text-xl'>Totol Friends</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;