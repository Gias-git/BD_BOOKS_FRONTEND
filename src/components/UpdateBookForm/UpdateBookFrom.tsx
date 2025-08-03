import { Button } from "@/components/ui/button"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Textarea } from "../ui/textarea"
// import { useUpdateBookMutation } from "@/redux/Api/baseApi"
import type { IBook } from "@/type"
import { DialogClose } from "../ui/dialog"
import { toast } from "react-toastify"

const genreEnum = ['FICTION', 'NON_FICTION', 'SCIENCE', 'HISTORY', 'BIOGRAPHY', 'FANTASY'] as const;
type Genre = typeof genreEnum[number];

const formSchema = z.object({
    title: z.string(),
    author: z.string(),
    genre: z.enum(genreEnum),
    isbn: z.number(),
    description: z.string(),
    copies: z.number().int().nonnegative(),
    // available: z.boolean(),
})


interface bookProps {
    book: IBook,
    updateBook: (data: any) => Promise<any>
}

const UpdateBookFrom = ({ book, updateBook }: bookProps) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "onSubmit",
        reValidateMode: "onChange",
        defaultValues: {
            title: book.title,
            author: book.author,
            genre: book.genre as Genre,
            isbn: book.isbn,
            description: book.description,
            copies: book.copies
        },
    });




    async function onSubmit(values: z.infer<typeof formSchema>) {

        const booksData = {
            ...values,
            available: true,
            id: book._id
        }

        console.log(booksData);
        const res = await updateBook(booksData);
        console.log(res);

        if (res.error) {
            toast.warning(`ISBN Must Unique`)
        } else {
            form.reset()
            toast.success('Book Updated Successfully!');
        }

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Title */}
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Book Title" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Author */}
                <FormField
                    control={form.control}
                    name="author"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Author</FormLabel>
                            <FormControl>
                                <Input placeholder="Author Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Genre */}
                <FormField
                    control={form.control}
                    name="genre"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Genre</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select genre" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="FICTION">Fiction</SelectItem>
                                    <SelectItem value="NON_FICTION">Non-Fiction</SelectItem>
                                    <SelectItem value="SCIENCE">Science</SelectItem>
                                    <SelectItem value="HISTORY">History</SelectItem>
                                    <SelectItem value="BIOGRAPHY">Biography</SelectItem>
                                    <SelectItem value="FANTASY">Fantasy</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* ISBN */}
                <FormField
                    control={form.control}
                    name="isbn"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>ISBN</FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="978..." min={0} {...field} onChange={(e) => field.onChange(e.target.valueAsNumber)} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Description */}
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Book description..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Copies */}
                <FormField
                    control={form.control}
                    name="copies"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Copies</FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="1" min={0} {...field} onChange={(e) => field.onChange(e.target.valueAsNumber)} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />



                <DialogClose asChild>
                    <Button type="submit">
                        Submit
                    </Button>
                </DialogClose>

            </form>
        </Form>
    )
};

export default UpdateBookFrom;