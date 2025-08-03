// import { useAppSelector } from "@/hooks/hooks";

import BooksSection from "../Books/BooksSection";
import { Slider } from "../Slider/Slider";
// import { selectBooks } from "@/redux/Books/BookSlice";


const AllBooks = () => {

    return (
        <div className="">
            <div>
                <Slider></Slider>
            </div>
            <div className="w-10/12 mx-auto ">
                <h1 className="text-4xl font-bold my-6">All Books</h1>
                <BooksSection></BooksSection>
            </div>
        </div>
    );
};

export default AllBooks;