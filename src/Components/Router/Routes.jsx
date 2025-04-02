import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import Login from "../auth/Login";
import Register from "../auth/Register";
import MealPlanner from "../pages/MealPlanner";
import GroceryList from "../pages/GroceryList";
import Recipes from "../pages/Recipes";
import About from "../pages/About";
import Contact from "../pages/Contact";

let myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/home", element: <Home /> }, // Landing Page
      { path: "/login", element: <Login /> }, // User Login
      { path: "/register", element: <Register /> }, // User Registration
      { path: "/meal-planner", element: <MealPlanner /> }, // Meal Planner Page
      { path: "/grocery-list", element: <GroceryList /> }, // Grocery List Page
      { path: "/recipes", element: <Recipes /> }, // Recipe Browsing Page
      { path: "/about", element: <About /> }, // About Aharam Bites
      { path: "/contact", element: <Contact /> }, // Contact Us Page
    ],
  },
]);

export default myRoutes;
