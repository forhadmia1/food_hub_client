import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FoodCard from '../../features/foods/FoodCard';
import { fetchFoods } from '../../features/foods/foodSlice';
import Loading from '../Loading';

const ShowFoods = ({ category }) => {
    const { isLoading, foods, error } = useSelector(state => state.foods)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFoods(category))
    }, [category])

    if (isLoading) {
        return <Loading />
    }
    return (
        <>
            <div className='mt-4 gap-10 flex flex-col'>
                {foods.map(food => <FoodCard />)}
            </div>
        </>
    );
};

export default ShowFoods;