import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import GPTSearch from "./GPTSearch";

const Body = () => {
  
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/gpt-search",
      element: <GPTSearch />,
    },
  ]);
  
  return (
    <div className="overflow-x-hidden">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
