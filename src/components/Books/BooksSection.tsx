import { useDeleteBookMutation, useGetBooksQuery } from "@/redux/Api/baseApi";
import type { IBook } from "@/type";
import { Link } from "react-router";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { toast } from "react-toastify";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog';
import { Trash2 } from "lucide-react";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "../ui/pagination";
import { useState } from "react";
import Loader from "../skleton/Loader"


const BooksSection = () => {
    const [page, setPage] = useState(1);
    const [deletingBookId, setDeletingBookId] = useState<string | null>(null);

    const { data, isLoading } = useGetBooksQuery({ page })

    const totalPages = data?.meta?.totalPages || 1;

    const [deleteBook] = useDeleteBookMutation();

    const handleDeleteBook = async (id: string) => {
        setDeletingBookId(id);
        const result = await deleteBook(id);
        setDeletingBookId(null);
        if (result.data?.message) {
            toast.success(`${result.data?.message}`);
        } else {
            toast.error('Failed to delete the book.');
            console.error(result.error);
        }

    }
    console.log(data?.data)
    return (
        <div>
            {isLoading ? (
                <Loader></Loader>
            ) : (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Available</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Author</TableHead>
                            <TableHead>Genre</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data?.data?.map((book: IBook) => (
                            <TableRow key={book._id} >
                                <TableCell className="w-3"><span
                                    className={`inline-block w-3 h-3 rounded-full ${book.available ? 'bg-green-500' : 'bg-red-500'
                                        }`}
                                    title={book.available ? 'Available' : 'Not Available'}
                                ></span></TableCell>
                                <TableCell>{book.title}</TableCell>
                                <TableCell>{book.author}</TableCell>
                                <TableCell>{book.genre}</TableCell>
                                <TableCell className="text-right">
                                    <div className='flex justify-end gap-2 items-center'>
                                        {/* Delete Button */}

                                        <AlertDialog>
                                            <AlertDialogTrigger className='text-black  rounded-lg px-4 py-2'>

                                                {deletingBookId === book._id ? (
                                                    <span className="text-sm text-gray-500">Deleting...</span>
                                                ) : (
                                                    <Trash2 />
                                                )}

                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                    <AlertDialogAction onClick={() => handleDeleteBook(book._id)}>
                                                        Continue
                                                    </AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                        <Link
                                            to={`/book/${book._id}`}
                                            className="text-blue-600 hover:underline"
                                        >
                                            View Details
                                        </Link>
                                    </div>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}

            <Pagination>
                <PaginationContent>


                    <PaginationItem className="cursor-pointer">
                        <PaginationPrevious onClick={() => setPage((prev) => Math.max(prev - 1, 1))} />
                    </PaginationItem>


                    {[...Array(totalPages)].map((_, i) => (
                        <PaginationItem key={i} className="cursor-pointer">
                            <PaginationLink
                                isActive={i + 1 === page}
                                onClick={() => setPage(i + 1)}
                            >
                                {i + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}

                    <PaginationItem className="cursor-pointer">
                        <PaginationNext
                            onClick={() =>
                                setPage((prev) => Math.min(prev + 1, totalPages))
                            }
                        />
                    </PaginationItem>

                </PaginationContent>
            </Pagination>
        </div>

    );
};

export default BooksSection;