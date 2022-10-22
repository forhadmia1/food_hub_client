import React from 'react';
import Modal from 'react-modal';
import Rating from 'react-rating';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import swal from 'sweetalert';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const customStyles = {
    content: {
        minWidth: '30%',
        maxWidth: '95%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const ReviewModal = ({ modalIsOpen, setIsOpen, reload, setReload }) => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const [review, setReview] = useState({ name: user.displayName, image: user.photoURL, email: user.email, rating: 0, comment: '' })

    const handleRating = (value) => {
        const newReview = { ...review };
        newReview.rating = value;
        setReview(newReview)
    }
    const handleComment = (e) => {
        const newReview = { ...review };
        newReview.comment = e.target.value;
        setReview(newReview)
    }
    const handleSubmit = () => {
        if (review.rating && review.comment) {
            setError('')
            fetch('https://foodhub-pi.vercel.app/api/v1/review', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(review)
            }).then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
                if (res.status === 200) {
                    swal({
                        title: "Thank You!",
                        text: "Successfully add review",
                        icon: "success",
                        buttons: false,
                        timer: 2000
                    })
                } else {
                    swal({
                        title: "Opps!",
                        text: "Something Went Wrong!",
                        icon: "warning",
                        buttons: false,
                        timer: 2000
                    })
                }
                setReload(!reload)
                setIsOpen(false)
            })
        } else {
            if (review.rating === 0) {
                setError('Please add a rating!')
            }
            if (!review.comment) {
                setError("Please give feedback!")
            }
        }
    }

    function closeModal() {
        setIsOpen(false);
    }

    Modal.setAppElement('#root');

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                shouldCloseOnOverlayClick={false}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div>
                    <div className='flex gap-5'>
                        <p className='font-bold'>Rating:</p>
                        <div>
                            <Rating
                                onChange={handleRating}
                                className='text-2xl text-yellow-500'
                                fullSymbol={<AiFillStar />}
                                emptySymbol={<AiOutlineStar />}
                                initialRating={review.rating}
                            />
                        </div>
                    </div>
                    <div>
                        <p className='font-bold'>Comment:</p>
                        <textarea onChange={handleComment} className='border-2 w-full border-slate-400 rounded p-2' cols="30" rows="5" value={review.comment}></textarea>
                    </div>
                    <div className='flex justify-between mt-3'>
                        <span className='text-sm text-red-400'>{error}</span>
                        <button onClick={handleSubmit} className='bg-yellow-400 px-4 py-1 rounded font-bold'>Submit</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default ReviewModal;