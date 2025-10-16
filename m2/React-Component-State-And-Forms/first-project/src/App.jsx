import React, { useState, createContext, Suspense } from "react";
import { Provider } from "react-redux";

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
import store from "./redux/store/store";
import ErrorBoundary from "./components/ErrorBoundary";

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

function App() {
  return (
    <Provider store={store}>
        <ErrorBoundary>
          <Content />
        </ErrorBoundary>
    </Provider>
  );
}

export default App;
