import React, { useState } from "react";
import { addUser } from "./userReducer";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export default function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefoult();
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }));
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Add New User</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="from-control"
              placeholder="enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              className="from-control"
              placeholder="enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>{" "}
          <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
}
