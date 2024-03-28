import { Link } from "react-router-dom";

const Books = ({ book }) => {
    const { bookId, image, tags, bookName, author, category, rating } = book;
    // console.log(bookId);

    return (
        <Link to={`/book/${bookId}`} className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="mt-4 flex ">
                <h2 className="flex mr-4">{tags} </h2>
                {/* <h2 className="flex">  {tags} </h2> */}
            </div>
            <div className="card-body">
                <h2 className="card-title">{bookName}</h2>
                <p>By:{author}</p>
                <div className="mt-4 flex ">
                    <h2 className="flex mr-4">{category} </h2>
                    <h2 className="flex">  {rating} </h2>
                </div>

                {/* <div className="card-actions">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary bg-[#7E90FE] text-xl font-extrabold">View Details</button>
                    </Link>
                </div> */}
            </div>
        </Link>
    );
};

export default Books;