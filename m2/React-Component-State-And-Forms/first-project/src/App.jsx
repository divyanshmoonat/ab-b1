import React, { useState, createContext, Suspense } from "react";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Header from "./components/Header";
import Timer from "./components/Timer";
import Form from "./components/Form";
import Counter from "./components/Counter";
import ClassDemo from "./components/ClassDemo";
import Todo from "./components/Todo";
// import Home from "./pages/Home";
// import ContactUs from "./pages/ContactUs";
// import AboutUs from "./pages/AboutUs";

const Home = React.lazy(() => import("./pages/Home"));
const ContactUs = React.lazy(() => import("./pages/ContactUs"));
const AboutUs = React.lazy(() => import("./pages/AboutUs"));

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import ProductDetails from "./components/ProductDetails";
import NotFound from "./pages/NotFound";
import A from "./components/A";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetails />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export const Context = createContext();

function App() {
  const [data, setData] = useState({
    name: "Peter",
    age: 10,
  });

  return (
    <Suspense fallback={<h1>Loading....</h1>}>
      <Context.Provider value={{ data, setData }}>
        {/* <div>
        <A />
      </div> */}
        <RouterProvider router={router} />
      </Context.Provider>
    </Suspense>
  );
}

export default App;
