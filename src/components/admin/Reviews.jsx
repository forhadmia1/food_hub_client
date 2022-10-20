import React, { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Rating from 'react-rating';
import swal from 'sweetalert';



const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const [reload, setReload] = useState(false)
    useEffect(() => {
        fetch('http://localhost:5000/api/v1/review/all')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reload])

    const handleAprroved = (id) => {
        swal({
            title: "Are you sure?",
            text: "You want approved review",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/api/v1/review/${id}`, {
                        method: 'PUT'
                    }).then(res => {
                        if (res.status === 200) {
                            swal({
                                title: "Great!",
                                text: "Successfully Approved review",
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

    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "You want to delete review",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/api/v1/review/${id}`, {
                        method: 'DELETE'
                    }).then(res => {
                        if (res.status === 200) {
                            swal({
                                title: "Great!",
                                text: "Successfully delete review",
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
        <div className='w-full px-5 py-5'>
            <table className='w-full border-2 border-slate-300 rounded'>
                <thead className='bg-yellow-500'>
                    <tr>
                        <th className='text-start  py-1 px-2'>Name</th>
                        <th className='text-start py-1 px-2'>Rating</th>
                        <th className='text-start py-1 px-2'>Comment</th>
                        <th className='text-start py-1 px-2'>Action</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        reviews.map(review => <tr
                            key={review._id}
                            className='border-t-2'>
                            <td className='py-1 px-2'>{review.name}</td>
                            <td className='py-1 px-2'>
                                <Rating
                                    className='text-yellow-500'
                                    fullSymbol={<AiFillStar />}
                                    emptySymbol={<AiOutlineStar />}
                                    initialRating={review.rating}
                                    readonly
                                />
                            </td>
                            <td className={`py-1 px-2`}>{review.comment}</td>
                            <td className='py-1 px-2 flex gap-2'>
                                <button onClick={() => handleAprroved(review._id)} className='px-2 py-1 bg-orange-400 hover:bg-orange-500 rounded disabled:bg-slate-600' {...review.approved && { disabled: true }}>Approved</button>

                                <button onClick={() => handleDelete(review._id)} className='px-2 py-1 text-white bg-red-500 hover:bg-red-600 rounded ' >Delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
}
export default Reviews;