import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddItems = () => {
    const [image, setImage] = useState('')
    const handleForm = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const price = e.target.gender.value;
        const description = e.target.father_name.value;
        const category = e.target.mother_name.value;
        const image = e.target.birth_date.value;
        const food = { name, price, description, category, image };
    }
    const handleImage = async (e) => {
        const image = e.target.files[0];
        let body = new FormData()
        body.append('image', image)

        fetch('https://api.imgbb.com/1/upload?key=91720d652f55c64e1aebe71d98a3bfcc', {
            method: "POST",
            body: body
        })
            .then(res => res.json())
            .then(data => setImage(data.data.display_url))
    }

    return (
        <div className='flex gap-5 md:flex-row flex-col w-full'>
            <div className='md:w-80 w-full p-2 flex justify-center items-start md:mt-4'>
                {
                    image ? <img className='w-64 h-64 rounded' src={image} alt="" /> :
                        <label class="w-64 h-64 flex flex-col justify-center items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue bg-[url('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')] bg-cover">
                            <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                            </svg>
                            <input onChange={handleImage} type='file' class="hidden" />
                        </label>
                }
            </div>
            <form onSubmit={handleForm} className='md:w-2/4 w-full px-2 pb-4'>
                <h2 className='text-3xl font-bold my-4 text-slate-700'>Add New Food</h2>
                <div className='flex mt-2 items-center'>
                    <span className='w-48 text-lg font-semibold'>Name:</span> <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name='name' required />
                </div>
                <div className='flex mt-2 items-center'>
                    <span className='w-48 text-lg font-semibold'>Price:</span> <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name='gender' required />
                </div>
                <div className='flex mt-2 items-center'>
                    <span className='w-48 text-lg font-semibold'>Category:</span> <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name='father_name' required />
                </div>
                <div className='flex mt-2 items-start'>
                    <span className='w-48 text-lg font-semibold'>Description:</span>
                    <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="" id="" cols="30" rows="5"></textarea>
                </div>
                <div className='mt-4 flex gap-5 justify-end'>
                    <button type='submit' className={`px-4 py-1 font-semibold bg-amber-400 hover:bg-amber-500 rounded`}>Add Food</button>
                </div>
            </form>
        </div>
    );
};


export default AddItems;