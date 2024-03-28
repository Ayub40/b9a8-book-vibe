import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication, getWishlistBook } from "../utility/localstorage";


const WishlistBooks = () => {

    const books = useLoaderData()

    // const [wishBooks, setwishBooks] = useState([]);
    const [wishBooks, setwishBooks] = useState([]);
    const [displayBooks, setdisplayBooks] = useState([]);



    useEffect(() => {
        // const storedJobIds = getStoredJobApplication();
        const storedJobIds = getWishlistBook();
        if (books.length > 0) {

            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            // console.log(jobs, storedJobIds, jobsApplied);

            // another way
            const jobsApplied = [];
            for (const bookId of storedJobIds) {
                const book = books.find(book => book.bookId === bookId);
                if (book) {
                    jobsApplied.push(book)
                }
            }
            console.log(books, storedJobIds, jobsApplied);

            setwishBooks(jobsApplied);
            setdisplayBooks(jobsApplied);
            // console.log(jobs, storedJobIds, jobsApplied);

        }
    }, [])


    const { bookId, image, bookName, author, tags, yearOfPublishing, publisher, totalPages, category, rating } = books;

    return (
        <div to={`/book/${bookId}`} className="card card-side bg-base-100 sm:pl-1 lg:pl-6 flex flex-col lg:flex-row  border">

            {/* <div>
            {
                displayBooks.map(book => <li key={book.bookId}> <span>{book.bookName} {book.company_name}:{book.remote_or_onsite}</span> </li>)
            }
        </div> */}

            <div>
                {
                    displayBooks.map(book =>

                        <div className="border card card-side bg-base-100 sm:pl-1 lg:pl-6 flex flex-col lg:flex-row mb-4 mt-2"
                            key={book.bookId}>
                            <figure><img className="w-[287px] lg:w-[130px] border border-[#1313130D] bg-[#1313130D] px-3 py-4 rounded" src={book.image} alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{book.bookName}</h2>
                                <h2>By: {book.author}</h2>

                                <div className="flex gap-4">
                                    <div className="rating gap-2">
                                        <h2>Tag:</h2>
                                        {/* <i className="fa-solid fa-star text-amber-400"></i> */}
                                        <p>{book.tags}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        {/* <i className="fa-regular fa-eye"></i> */}
                                        <p></p>
                                    </div>
                                    <div className="flex gap-2">
                                        {/* <i className="fa-regular fa-heart"></i> */}
                                        <p>Year of Publishing:</p>
                                        <p>{book.yearOfPublishing}</p>
                                    </div>
                                </div>
                                <div className="card-actions gap-6">
                                    <h3 className="text-lg">Publisher: {book.publisher}</h3>
                                    <div className="flex gap-3">
                                        {/* <img src="Images/Frame (2).png" alt=""> */}
                                        <p>Delivery Fee : Free</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="rating gap-2">
                                        <h2 className="border bg-[#328EFF] rounded-full px-3 py-2">Category: {book.category} </h2>
                                        {/* <i className="fa-solid fa-star text-amber-400"></i> */}
                                        {/* <p>{book.tags}</p> */}
                                    </div>
                                    <div className="flex gap-2">
                                        {/* <i className="fa-regular fa-eye"></i> */}
                                        <p className="bg-[#FFAC33] border rounded-full px-3 py-2">Rating: {book.rating}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        {/* <i className="fa-regular fa-heart"></i> */}
                                        <button className="bg-[#23BE0A] rounded-full px-2 py-2 text-white text-base">View Details</button>
                                    </div>
                                </div>

                            </div>
                        </div>)}
            </div>
        </div>
    );
};

export default WishlistBooks;



