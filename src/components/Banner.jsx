import { Link } from 'react-router-dom';
import image from '../assets/pngwing 1.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200 rounded-3xl">
            <div className="hero-content flex-col lg:flex-row-reverse gap-40">
                <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                <div className=''>
                    <h1 className="text-5xl font-bold mb-5">Books to freshen up <br /> your bookshelf</h1>

                    <Link to='/listed' className="btn bg-[#23BE0A] px-7 py-2 text-white text-xl font-bold mt-3 text-center">View The List</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;