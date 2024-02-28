import { Link } from "react-router-dom";

export const WikiLinks = ({ entries }) => {
  return (
    <ul>
      {entries.map((entry) => {
        return (
          <li key={entry.id}>
            <Link to={`/wiki/${entry.id}`}>{entry.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
