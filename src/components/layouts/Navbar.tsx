import { MenuIcon } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";


const navItems = [
    { label: "Books", to: "/" },
    { label: "Add Book", to: "/AddBook" },
    { label: "Borrow Summary", to: "/Borrow-Summary" },
];

export default function Navbar() {
    return (
        <nav className="w-full border-b bg-white shadow-sm">
            <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <h1 className="text-2xl font-bold">BD <span className="text-red-700">  BOOKS </span> </h1>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                        >
                            {({ isActive }) => (
                                <span className={isActive ? "text-red-500" : ""}>{item.label}</span>
                            )}

                        </NavLink>
                    ))}
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="lg">
                                <MenuIcon className="h-8 w-8" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <div className="flex flex-col mx-11 space-y-4 mt-20">
                                {navItems.map((item) => (
                                    <NavLink
                                        key={item.to}
                                        to={item.to}
                                        className={({ isActive }) =>
                                            `text-lg px-2 font-medium transition ${isActive ? "bg-red-600 text-white px-6 py-2" : "text-gray-800 hover:text-black"
                                            }`
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
