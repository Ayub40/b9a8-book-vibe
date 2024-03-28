import { useEffect, useState } from "react";
// import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localstorage";
import ReadBooks from "../components/ReadBooks";
import { data } from "autoprefixer";


// -------------------------------------------------------------------
const ListedBooks = () => {
    const books = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const [tabIndex, setTabIndex] = useState(0);

    const handleBookFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(book => book.rating === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(book => book.totalPages === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }


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

    return (
        <div className="max-w-6xl mx-auto mt-5">
            <div className="border bg-[#1313130D] py-8 rounded-2xl text-center text-3xl font-bold">
                <h2>Books</h2>
            </div>

            <div className="mt-6 border mb-5">
                <details className="dropdown pl-64 pr-10  ml-64">
                    <summary className="m-1 btn px-7">Sort By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleBookFilter('all')}><a>Rating</a></li>
                        <li onClick={() => handleBookFilter('all')}><a>Number of pages</a></li>
                        <li onClick={() => handleBookFilter('all')}><a>Publishing Year</a></li>
                    </ul>
                </details>
            </div>

            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800 mt-10">
                <Link
                    onClick={() => setTabIndex(0)}
                    to=''
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Read Books</span>
                </Link>

                <Link
                    onClick={() => setTabIndex(1)}
                    to={`wishlistBooks`}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Wishlist Books</span>
                </Link>
            </div>
            <Outlet></Outlet>

            {/* <div>
                {
                    displayJobs.map(book => <ReadBooks key={book.bookId} books={book}></ReadBooks>)
                }
            </div> */}

            {/* 
            <div>
                <ul>
                    {
                        displayJobs.map(book => <li key={book.bookId}> <span>{book.bookName} {book.company_name}:{book.remote_or_onsite}</span> </li>)
                    }
                </ul>
            </div> */}

            {/* <div>
                <ul>
                    {
                        displayJobs.map(job => <li key={job.id}> <span>{job.job_title} {job.company_name}:{job.remote_or_onsite}</span> </li>)
                    }
                </ul>
            </div> */}




            {/* <div className="border mt-5">
                <div className="dropdown  ml-96 pl-36 pr-5  items-end ">
                    <div tabIndex={0} role="button" className="btn m-1 items-center p-7 py-2">Sort By</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Publishing Year</a></li>
                    </ul>
                </div>
            </div> */}
        </div>
    );
};

export default ListedBooks;