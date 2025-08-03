import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10 -mb-6">
      <div className="max-w-6xl mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <p className="text-sm text-center sm:text-left">
          © {new Date().getFullYear()} BD BOOKS. All rights reserved.
        </p>
        <div className="mt-4 sm:mt-0 flex justify-center space-x-6">
            <Link to='/' className="text-sm hover:text-gray-400">Books</Link>
            <Link to='/AddBook' className="text-sm hover:text-gray-400">AddBook</Link>
            <Link to='/Borrow-Summary' className="text-sm hover:text-gray-400">Borrow-Summary</Link>
        </div>
      </div>
    </footer>
  );
}
