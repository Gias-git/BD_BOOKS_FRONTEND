import type { IBook } from "@/type";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import UpdateBookFrom from "../UpdateBookForm/UpdateBookFrom";
import { PenIcon, ShoppingBag } from "lucide-react";
import BorrowBookForm from "../BorrowForm/BorrowForm";
interface BookDetailsProps {
    booksData: IBook;
}

const BookDetails = ({ booksData }: BookDetailsProps) => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="bg-white shadow-lg rounded-2xl p-6 md:p-10 space-y-6">
                <h1 className="text-3xl font-bold text-gray-800">{booksData.title}</h1>

                <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Description</p>
                    <p className="text-base text-gray-800">{booksData.description}</p>
                </div>

                <div className="grid grid-cols-1  sm:grid-cols-2 gap-6 text-gray-700">
                    <div>
                        <p className="text-sm font-medium text-gray-500">Author</p>
                        <p className="text-lg">{booksData.author}</p>
                    </div>

                    <div>
                        <p className="text-sm font-medium text-gray-500">Genre</p>
                        <p className="text-lg">{booksData.genre}</p>
                    </div>

                    <div>
                        <p className="text-sm font-medium text-gray-500">ISBN</p>
                        <p className="text-lg">{booksData.isbn}</p>
                    </div>

                    <div>
                        <p className="text-sm font-medium text-gray-500">Copies</p>
                        <p className="text-lg">{booksData.copies}</p>
                    </div>

                    <div>
                        <p className="text-sm font-medium text-gray-500">Availability</p>
                        <p className={`text-lg font-semibold ${booksData.available ? 'text-green-600' : 'text-red-600'}`}>
                            {booksData.available ? 'Available' : 'Not Available'}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm font-medium text-gray-500">Published On</p>
                        <p className="text-lg">{new Date(booksData.createdAt).toLocaleDateString()}</p>
                    </div>
                </div>

                <div className='flex gap-2'>

                    {/* Update Button */}

                    <Dialog>
                        <DialogTrigger className='bg-black text-white rounded-lg px-4 py-2'><PenIcon></PenIcon></DialogTrigger>
                        <DialogContent className='h-[80vh] overflow-scroll'>
                            <DialogHeader className='hidden'>
                                <DialogTitle>Are you absolutely sure?</DialogTitle>
                                <DialogDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </DialogDescription>
                            </DialogHeader>
                            <UpdateBookFrom book={booksData}></UpdateBookFrom>
                        </DialogContent>

                    </Dialog>

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
                            <BorrowBookForm book={booksData}></BorrowBookForm>
                        </DialogContent>

                    </Dialog>

                </div>

            </div>
        </div>
    );
};

export default BookDetails;
