import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import EventsRootLayout from "./pages/EventsRoot";
import EditEventPage from "./pages/EditEvent";
import EventDetailPage from "./pages/EventDetail";
import EventsPage from "./pages/Events";
import HomePage from "./pages/Home";
import NewEventPage from "./pages/NewEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
          },
          {
            path: ":eventId",
            element: <EventDetailPage />,
          },
          {
            path: "new",
            element: <NewEventPage />,
          },
          {
            path: ":eventId/edit",
            element: <EditEventPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
