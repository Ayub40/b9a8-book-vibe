import Banner from "../components/Banner";
import BooksSection from "../components/BooksSection";

const Home = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Banner></Banner>
            <BooksSection></BooksSection>
        </div>
    );
};

export default Home;