import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import { FaUserAlt } from "react-icons/fa";
import UserCard from "./components/UserCard";
import { useState } from "react";

function App() {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="container mx-auto w-3/4">
          <Link to='addUser'>
            <button className="btn btn-accent mb-5">
              New User <FaUserAlt className="ml-3" />
            </button>
          </Link>
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <UserCard
                    key={user._id}
                    user={user}
                    index={index}
                    users={users}
                    setUsers={setUsers}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
