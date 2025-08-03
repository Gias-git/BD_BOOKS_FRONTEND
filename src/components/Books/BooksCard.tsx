import { ShoppingBag, Trash2 } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from '../ui/dialog';
import type { IBook } from '@/type';
import { useDeleteBookMutation } from '@/redux/Api/baseApi';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog';
import { toast } from 'react-toastify';
import BorrowBookForm from '../BorrowForm/BorrowForm';
import { DialogTitle } from '@radix-ui/react-dialog';

interface BooksCardProps {
    book: IBook;
}

const BooksCard = ({ book }: BooksCardProps) => {
    const [deleteBook] = useDeleteBookMutation();

    const handleDeleteBook = async (id: string) => {
        await deleteBook(id);
        toast.success('Wow so easy !');
    }
    return (
        <div className="w-full mx-auto bg-white rounded-2xl shadow-md p-6 space-y-4 border flex flex-col justify-between">
            <div className='space-y-2'>
                <h1 className="text-xl font-bold text-gray-800">{book.title}</h1>
                <h2 className="text-lg font-semibold text-gray-800">Author: {book.author}</h2>
                <p className="text-gray-600">
                    Availability:{" "}
                    <span className={book.available ? "text-green-600" : "text-red-600"}>
                        {book.available ? "Available" : "Unavailable"}
                    </span>
                </p>
                <p className="text-gray-600">Copies: {book.copies}</p>
            </div>


            <Dialog>
                <DialogTrigger className='bg-black text-white rounded-lg px-4 py-2 flex mx-auto gap-2'><ShoppingBag></ShoppingBag> Buy Now</DialogTrigger>
                <DialogContent className=' overflow-scroll'>
                    <DialogHeader className='hidden'>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </DialogDescription>
                    </DialogHeader>
                    <BorrowBookForm book={book}></BorrowBookForm>
                </DialogContent>

            </Dialog>


            <div className='flex gap-2'>
                {/* Delete Button */}

                <AlertDialog>
                    <AlertDialogTrigger className='text-white bg-black rounded-lg px-4 py-2'><Trash2>
                    </Trash2></AlertDialogTrigger>
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
            </div>
        </div>
    );
};

export default BooksCard;
