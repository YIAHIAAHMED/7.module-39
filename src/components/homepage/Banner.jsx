import React from 'react';
import bookImg from '../../assets/pngwing 1.png'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-8 container mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse w-full">
                <img
                    alt="Tailwind CSS hero component"
                src={bookImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">Books to Freshen up <br></br>youur booksshelf!</h1>
                    
                    
                    <button className="btn btn-success">View the list</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;