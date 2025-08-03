import AddBooksForm from "../AddBookForm/AddBookForm";


const AddBooks = () => {
    return (
        <div>
            <h1 className="my-14 text-center text-2xl font-bold ">Add Your Book</h1>
            <div className="w-[500px] rounded-3xl mx-auto border-2 border-gray-200 shadow-md p-10">
                <AddBooksForm></AddBooksForm>
            </div>

        </div>
    );
};

export default AddBooks;