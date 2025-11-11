import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams(); // get ":id" from URL
  return (
    <div>
      <h2>User Profile</h2>
      <p>Viewing user with ID: {id}</p>
    </div>
  );
}
