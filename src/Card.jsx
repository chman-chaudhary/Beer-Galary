import React from 'react'

export default function Card({ data }) {
    return (
        <div className='border-2 border-black w-64 p-4 bg-[#DFE0E2] rounded-xl'>
            <img src={data.image} alt="Image" className='h-48 w-64' />
            <h2 className='text-2xl font-semibold text-center my-2'>{data.name}</h2>
            <div className='flex justify-between'>
                <p className='font-medium text-md'>{data.price}</p>
                <p className='font-medium text-md'><i className="fa-solid fa-star icon"></i> {data.rating.average.toFixed(1)} ({data.rating.reviews})</p>
            </div>
        </div>
    )
}
