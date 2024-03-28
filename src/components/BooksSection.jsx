import { useEffect, useState } from "react";
import Books from "./Books";
import { useLoaderData } from "react-router-dom";

const BooksSection = () => {

    // const booksection = useLoaderData();
    // console.log(booksection);

    const [books, setBooks] = useState([]);
    const [dataLength, setDataLength] = useState([6]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])

    return (

        <div>
            <div className="text-center mt-6 mb-5">
                <h2 className="text-5xl font-extrabold">Books </h2>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {
                    books.slice(0, dataLength).map(book => <Books key={book.bookId} book={book}></Books>)
                }
            </div>
            {/* <div className={dataLength === jobs.length && 'hidden'}> */}
            <div className={dataLength === books.length ? 'hidden' : ''}>
                <button onClick={() => setDataLength(books.length)} className="btn btn-primary mt-5 mb-5">Show All Books</button>
            </div>
        </div>


        // <section className="max-w-6xl mx-auto py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
        //     <div className="container p-6 mx-auto space-y-8">
        //         <div className="space-y-2 text-center">
        //             <h2 className="text-3xl font-bold">Books</h2>
        //         </div>
        //         <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        //             <article className="flex flex-col dark:bg-gray-50">
        //                 <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
        //                     <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
        //                 </a>
        //                 <div className="flex flex-col flex-1 p-6">
        //                     <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
        //                     <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Convenire</a>
        //                     <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
        //                     <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
        //                         <span>June 1, 2020</span>
        //                         <span>2.1K views</span>
        //                     </div>
        //                 </div>
        //             </article>
        //             <article className="flex flex-col dark:bg-gray-50">
        //                 <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
        //                     <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?2" />
        //                 </a>
        //                 <div className="flex flex-col flex-1 p-6">
        //                     <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
        //                     <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Convenire</a>
        //                     <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
        //                     <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
        //                         <span>June 2, 2020</span>
        //                         <span>2.2K views</span>
        //                     </div>
        //                 </div>
        //             </article>
        //             <article className="flex flex-col dark:bg-gray-50">
        //                 <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
        //                     <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?3" />
        //                 </a>
        //                 <div className="flex flex-col flex-1 p-6">
        //                     <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
        //                     <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Convenire</a>
        //                     <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
        //                     <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
        //                         <span>June 3, 2020</span>
        //                         <span>2.3K views</span>
        //                     </div>
        //                 </div>
        //             </article>

        //         </div>
        //     </div>
        // </section>
    );
};

export default BooksSection;