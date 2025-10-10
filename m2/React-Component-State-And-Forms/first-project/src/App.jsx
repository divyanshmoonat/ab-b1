import Footer from "./components/Footer";
import Content from "./components/Content";
import Header from "./components/Header";
import Timer from "./components/Timer";
import Form from "./components/Form";
import Counter from "./components/Counter";
import ClassDemo from "./components/ClassDemo";
import Todo from "./components/Todo";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";

import "./App.css";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
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
]);

function App() {
  return <div>
    <RouterProvider router={router} />
  </div>;
}

export default App;
