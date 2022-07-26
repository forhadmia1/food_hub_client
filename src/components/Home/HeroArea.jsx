import React from 'react';

const HeroArea = () => {
    return (
        <div class="hero min-h-screen items-center justify-start px-20 bg-[url('https://img.freepik.com/free-photo/fresh-pizza-with-herbs-sun-dried-tomatoes-gray-table_93675-135263.jpg?w=740&t=st=1658847597~exp=1658848197~hmac=0281671878b7fbdd5486a791e50bed95c5d92e0df442eac34fc3cee3e496005e')]">
            <div class="hero-content text-neutral-content">
                <div class="max-w-md text-slate-800">
                    <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                    <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div className='flex items-center gap-10'>
                        <p className='text-2xl font-semibold'>$<span className='text-4xl font-bold'>14</span>.00</p>
                    <button class="btn btn-primary rounded-full px-8">View Menu</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroArea;