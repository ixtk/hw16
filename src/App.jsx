import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { RootLayout } from "./pages/RootLayout";
import { WikiHome } from "./pages/Home";
import { WikiTopic } from "./pages/Topic";
import { NewTopic } from "./pages/NewTopic";
import { WikiSearchResults } from "./pages/SearchResults";
import { NotFound } from "./pages/NotFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<WikiHome />} />
        <Route path="wiki/:topicId" element={<WikiTopic />} />
        <Route path="wiki/search" element={<WikiSearchResults />} />
        <Route path="wiki/new" element={<NewTopic />} />
        <Route path="*" element={<NotFound />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
