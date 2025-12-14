import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact, contactData } from "./pages/Contact";
import { Movie } from "./pages/Movie";
import { AppLayout } from "./components/layouts/AppLayout";
import { NotFound } from "./pages/NotFound";
import "./App.css";
import { getMovieDetails } from "./api/GetMovieDetails";
import { MovieDetails } from "./components/UI/MovieDetails";
import { getMoviesData } from "./api/GetAPIData";
import { Watchlist } from "./pages/Watchlist";
// import { getMoviesData } from "./api/GetAPIData";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <NotFound />,

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          loader: getMoviesData,
          element: <Movie />,
        },
        {
          path: "/movie/:movieID",
          element: <MovieDetails />,
          loader: getMovieDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData,
        },
        {
          path: "/watchlist",
          element: <Watchlist />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
