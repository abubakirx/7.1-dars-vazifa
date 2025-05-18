import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Home() {
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Crud App with JSON Server</h2>
      <Link to="/Create" className="btn btn-server my-3">
        Create +
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id || index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={'/edit/${}'} className="btn btn-sm btn-primary">Edit</Link>
                <Link className="btn btn-sm btn-danger ms-2">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
