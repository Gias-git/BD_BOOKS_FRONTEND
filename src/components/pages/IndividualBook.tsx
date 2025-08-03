import { useGetBookByIdQuery } from "@/redux/Api/baseApi";
import { useParams } from "react-router";
import BookDetails from "../BookDetails.tsx/BookDetails";
import type { IBook } from "@/type";
import Loader from "../skleton/Loader";




const IndividualBook = () => {
    const { id } = useParams()

    const { data = [], isLoading } = useGetBookByIdQuery(id)

    const booksData: IBook = data?.data || [];

    console.log(booksData)
    return (
        <>

            {
                isLoading ? (<Loader></Loader>) : (<BookDetails booksData={booksData}></BookDetails>)
            }

        </>

    );
};

export default IndividualBook;