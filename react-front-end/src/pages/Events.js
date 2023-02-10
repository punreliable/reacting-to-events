import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  { id: "e1", title: "One Event" },
  { id: "e2", title: "Some Event" },
  { id: "e3", title: "Another Event" },
];

const EventsPage = () => {
  const title = "Events";
  return (
    <div className="container">
      <h1>Welcome to the {title} Page</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsPage;
