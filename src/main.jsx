import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import ListedBooks from './pages/ListedBooks';
import PagesToRead from './pages/PagesToRead';
// import Book from './components/Book';
// import BooksSection from './components/BooksSection';
// import ReadBooks from './components/ReadBooks';
import Book from './components/Book';
import ReadBooks from './components/ReadBooks';
import WishlistBooks from './components/WishlistBooks';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/listed',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/books.json'),
        children: [
          {
            path: '',
            index: true,
            element: <ReadBooks></ReadBooks>,
            loader: () => fetch('/books.json'),
          },
          {
            path: 'wishlistBooks',
            element: <WishlistBooks></WishlistBooks>,
            loader: () => fetch('/books.json'),
          }
        ]
      },
      {
        path: '/pages',
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch('/books.json'),
      },
      // {
      //   path: '/booksection',
      //   element: <BooksSection></BooksSection>,
      //   loader: () => fetch('https://ayub40.github.io/books.json/books.json')
      // },
      {
        path: '/book/:bookId',
        element: <Book></Book>,
        // loader: ({ params }) => fetch(`https://ayub40.github.io/books.json/books.json/${params.id}`),
        loader: () => fetch('/books.json'),
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
            loader: () => fetch('/books.json'),
          }
        ]
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
