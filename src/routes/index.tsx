import App from "@/App";
import AddBooks from "@/components/pages/AddBooks";
import AllBooks from "@/components/pages/AllBooks";
import BorrowSummary from "@/components/pages/BorrowSummary";
import IndividualBook from "@/components/pages/IndividualBook";

import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: AllBooks
            },
            {
                path: "AddBook",
                Component: AddBooks
            },
            {
                path: "Borrow-Summary",
                Component: BorrowSummary
            },
            {
                path: "Borrow-Summary",
                Component: BorrowSummary
            },
            {
                path: "book/:id",
                Component: IndividualBook
            },
        ]
    },
]);


export default router;