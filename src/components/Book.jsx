import { useLoaderData, useParams } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { saveJobApplication } from "../../utility/localstorage";
import { saveJobApplication, saveWishlistBook } from "../utility/localstorage";


const Book = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const idInt = parseInt(bookId);
    const book = books.find(book => book.bookId === idInt);
    console.log(book);


    const { cover, image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;

    const handleApplyJob = () => {
        // saveJobApplication(idInt);
        saveJobApplication(idInt);
       
        // toast('You have applied successfully');
    }

    const handleWishlist = () => {
        // saveWishlistBook(idInt);
        saveWishlistBook(idInt);
        toast('You have applied successfully');
    }

    // console.log(book);
    // const { id } = useParams();
    // const idInt = parseInt(id);
    // const book = books.find(b => b.id === id);
    // console.log(id);

    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">


                <div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div className="lg:col-start-2">
                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">{bookName}</h3>
                            <p className="mt-3 text-lg dark:text-gray-600">By: {author}</p>
                            <p className="border-y-4 border-dotted">{category}</p>
                            <p>Review:{review}</p>

                            <div>
                                <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
                                    <h3>Tag</h3>
                                    {
                                        tags.map(tag => (<a key={tag}
                                            rel="noopener noreferrer"
                                            href="#"
                                            className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">{tag}</a>))
                                    }
                                </div>
                            </div>
                            <hr />

                            <div className="flex gap-16">
                                <div>
                                    <ul>
                                        <li>Number of Pages: </li>
                                        <li>Publisher:  </li>
                                        <li>Year of Publishing:  </li>
                                        <li>Rating:  </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li> {totalPages}</li>
                                        <li>{publisher}</li>
                                        <li> {yearOfPublishing}</li>
                                        <li> {rating}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex gap-8 mt-5">
                                <button onClick={handleApplyJob} className="btn border border-[#131313] rounded px-7 py-4">Read</button>
                                <button onClick={handleWishlist} className="btn border bg-[#50B1C9] rounded px-4 py-2 text-xl font-semibold text-white">Wishlist</button>
                            </div>
                        </div>
                        <ToastContainer />
                        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1 bg-[#1313130D] ">
                            <img src={cover} alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Book;


