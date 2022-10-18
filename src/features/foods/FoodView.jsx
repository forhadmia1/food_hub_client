import React, { useEffect } from 'react';
import CartView from '../carts/CartView';
import Newsletter from '../../components/Home/Newsletter'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFoods } from './foodSlice';
import FoodCard from './FoodCard';
import Footer from '../../components/Home/Footer';


const FoodView = () => {
    const [category, setCategory] = useState('')
    const [keyword, setKeyword] = useState('')
    const { isLoading, allFoods, error } = useSelector(state => state.foods)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFoods(`?category=${category}`))
    }, [category])

    const handleSearch = () => {
        setCategory(null)
        dispatch(fetchFoods(`/byname?name=${keyword}`))
    }


    return (
        <div className='sticky top-10 h-screen'>
            <div className='grid md:grid-cols-4 gap-5 mt-12 md:mt-16 md:mx-20 px-4 md:px-0'>
                <div className='px-6 text-xl font-semibold hidden md:block sticky top-10 h-screen'>
                    <ul className="menu bg-base-100 w-56 gap-2">
                        <li
                            className={` hover:bg-slate-200 px-4 py-2 rounded cursor-pointer ${category === '' && 'bg-slate-200'}`}
                            onClick={() => setCategory('')}
                        >All
                        </li>
                        <li
                            className={` hover:bg-slate-200 px-4 py-2 rounded cursor-pointer ${category === 'desserts' && 'bg-slate-200'}`}
                            onClick={() => setCategory('desserts')}
                        >Desserts
                        </li>
                        <li
                            className={` hover:bg-slate-200 px-4 py-2 rounded cursor-pointer ${category === 'dinner' && 'bg-slate-200'}`}
                            onClick={() => setCategory('dinner')}
                        >Dinner
                        </li>
                        <li
                            className={` hover:bg-slate-200 px-4 py-2 rounded cursor-pointer ${category === 'drink' && 'bg-slate-200'}`}
                            onClick={() => setCategory('drink')}
                        >Drink
                        </li>
                        <li
                            className={` hover:bg-slate-200 px-4 py-2 rounded cursor-pointer ${category === 'meat' && 'bg-slate-200'}`}
                            onClick={() => setCategory('meat')}
                        >Meat
                        </li>
                        <li
                            className={` hover:bg-slate-200 px-4 py-2 rounded cursor-pointer ${category === 'starters' && 'bg-slate-200'}`}
                            onClick={() => setCategory('starters')}
                        >Starters
                        </li>
                    </ul>
                </div>
                <div className='col-span-2'>
                    <div className="flex items-center justify-center">
                        <div className="flex border-2 rounded-full w-full px-4">
                            <input onChange={(e) => setKeyword(e.target.value)} type="text" className=" w-full focus:outline-none px-2 py-2" placeholder="Search..." />
                            <button onClick={handleSearch} className="flex items-center px-4 border-l">
                                <svg className="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='mb-8'>
                        {isLoading ? <h1>Loading....</h1> :
                            <div className='mt-4 gap-10 flex flex-col'>
                                {allFoods.length > 0 ? allFoods.map(food => <FoodCard
                                    key={food._id}
                                    food={food}
                                />) : <h2>No Results Found</h2>}
                            </div>}
                    </div>
                </div>
                <div className='px-2 hidden md:block sticky top-10 h-screen'>
                    <h2 className='text-4xl font-bold'>Your Order</h2>
                    <CartView />
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    );
};

export default FoodView;