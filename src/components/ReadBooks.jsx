import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localstorage";
// import PagesToRead from "../pages/PagesToRead";

const ReadBooks = ({ }) => {

    const books = useLoaderData()

    // const [appliedJobs, setAppliedJobs] = useState([]);
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);



    useEffect(() => {
        // const storedJobIds = getStoredJobApplication();
        const storedJobIds = getStoredJobApplication();
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

            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
            // console.log(jobs, storedJobIds, jobsApplied);

        }
    }, [])


    const { bookId, image, bookName, author, tags, yearOfPublishing, publisher, totalPages, category, rating } = books;


    return (
        <div to={`/book/${bookId}`} className="card card-side bg-base-100 sm:pl-1 lg:pl-6 flex flex-col lg:flex-row ">

            {/* <div>
                {
                    displayJobs.map(book => <li key={book.bookId}> <span>{book.bookName} {book.company_name}:{book.remote_or_onsite}</span> </li>)
                }
            </div> */}

            <div>
                {
                    displayJobs.map(book =>

                        <div className="border  card card-side bg-base-100 sm:pl-1 lg:pl-6 flex flex-col lg:flex-row mb-4"
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

export default ReadBooks;


// <div class="card card-side bg-base-100 sm:pl-1 lg:pl-6 flex flex-col lg:flex-row border">
//     <figure><img class="w-[287px] lg:w-[188px]" src="Images/5.png" alt="Movie" /></figure>
//     <div class="card-body">
//         <div class="flex gap-4">
//             <div class="rating gap-2">
//                 <i class="fa-solid fa-star text-amber-400"></i>
//                 <p>5.0</p>
//             </div>
//             <div class="flex gap-2">
//                 <i class="fa-regular fa-eye"></i>
//                 <p>20</p>
//             </div>
//             <div class="flex gap-2">
//                 <i class="fa-regular fa-heart"></i>
//                 <p>200</p>
//             </div>
//         </div>
//         <h2 class="card-title">World Cup Flags Football</h2>
//         <p>Dolor sit amet consectetur. Ut urna diam quis sagittis. </p>
//         <div class="card-actions gap-6">
//             <h3 class="text-lg font-extrabold text-[#FF4240]">Price - $22.00</h3>
//             <div class="flex gap-3">
//                 <img src="Images/Frame (2).png" alt="">
//                     <p>Delivery Fee : Free</p>
//             </div>
//         </div>
//     </div>
// </div>