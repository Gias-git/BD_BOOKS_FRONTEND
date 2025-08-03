import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useGetBorrowBookQuery } from "@/redux/Api/baseApi";
import Loader from "../skleton/Loader";

interface BorrowedBook {
    book: {
        title: string;
        isbn: string;
    };
    totalQuantity: number;
}
const BorrowSummary = () => {
    const { data, isLoading } = useGetBorrowBookQuery(undefined);

    const borrowData: BorrowedBook[] = data?.data ?? [];
    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-20">Borrow Summary</h1>

            <div className="w-8/12 mx-auto">
                <Table>
                    <TableCaption></TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead >Title</TableHead>
                            <TableHead>ISBN</TableHead>
                            <TableHead className="text-right">TOTAL Quantity</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="mx-auto">
                        {isLoading ? (<Loader></Loader>) : (
                            borrowData.map((book, index) => (<TableRow key={index}>
                                <TableCell className="font-medium">{book.book.title}</TableCell>
                                <TableCell>{book.book.isbn}</TableCell>
                                <TableCell className="text-right">{book.totalQuantity}</TableCell>
                            </TableRow>)
                            )
                        )

                        }


                    </TableBody>
                </Table>
            </div>

        </div>
    );
};

export default BorrowSummary;