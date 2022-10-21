import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { fetchFoods } from '../../features/foods/foodSlice';
import auth from '../../firebase.init';

const Items = () => {
    const navigate = useNavigate()
    const [reload, setReload] = useState(false)
    const { isLoading, allFoods } = useSelector(state => state.foods)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFoods(`?category=`))
    }, [reload, dispatch])

    if (isLoading) {
        return <p>Loading.....</p>
    }

    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "You want to delete food",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/api/v1/foods/${id}`, {
                        method: 'DELETE',
                        headers: {
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    }).then(res => {
                        if (res.status === 401 || res.status === 403) {
                            signOut(auth)
                            navigate('/login')
                        }
                        if (res.status === 200) {
                            swal({
                                title: "Great!",
                                text: "Successfully delete food",
                                icon: "success",
                                buttons: false,
                                timer: 2000
                            });
                            setReload(!reload)
                        }
                    })
                } else {
                    swal("Your file is safe!");
                }
            });
    }

    return (
        <div className='w-full px-5 pb-5'>
            {allFoods.map(food => <div
                key={food._id}
                className='flex px-2  mt-6 '>
                <div className="avatar">
                    <div className="w-24 rounded">
                        <img src={food?.image} alt='' />
                    </div>
                </div>
                <div className='ml-3 w-full'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-cl md:text-2xl'>{food.name}</h2>
                        <p className='text-xl font-bold'>${food.price}</p>
                    </div>
                    <div className='flex flex-col gap-2 justify-between mt-2'>
                        <p className='text-sm text-gray-500'>{food.description}</p>
                        <div className='flex items-end ml-2'>
                            <button onClick={() => handleDelete(food._id)} className="btn-sm px-6 text-white btn-warning rounded-full font-semibold">Delete</button>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    );
};

export default Items;