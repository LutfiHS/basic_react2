import { RouterProvider, useRoutes } from "react-router-dom";
import { routeList } from "./routes/routeList";

function App() {
  // let element = useRoutes(routeList);
  // return element;

  return (
    <RouterProvider router={routeList} fallbackElement={<p>loading...</p>} />
  );
}

export default App;
