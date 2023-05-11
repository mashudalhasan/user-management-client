import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateUser = () => {
  const user = useLoaderData();
  const { _id, name, email, gender, status } = user;

  const handleUpdateUser = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const gender = form.gender.value;
    const status = form.status.value;
    const updatedUser = { name, email, gender, status };
    console.log(updatedUser);

    // send data to the server
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "User Updated Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };
  return (
    <div className="flex justify-center items-center h-full w-3/4 container mx-auto">
      <div className=" w-full my-5">
        <Link to="/">
          <button className="btn btn-accent mb-5">
          <FaArrowLeft className="mr-3" /> All User
          </button>
        </Link>
        <h2 className="text-5xl font-semibold text-center">Update User: {name}</h2>
        <p className="mt-3 text-gray-500 text-center">
          Use the below form to update your account
        </p>
        <form onSubmit={handleUpdateUser}>
          <div className="mt-10">
            {/* Name */}
            <div className="form-control w-full mb-8">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Enter your name here"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* Email */}
            <div className="form-control w-full mb-8">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  name="email"
                  defaultValue={email}
                  placeholder="Enter your name here"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* Gender */}
            <div className="form-control w-full mb-8">
              <label className="label">
                <span className="label-text">Gender</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="gender"
                  defaultValue={gender}
                  placeholder="Male/Female"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* Status */}
            <div className="form-control w-full mb-8">
              <label className="label">
                <span className="label-text">Status</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="status"
                  defaultValue={status}
                  placeholder="Active/Inactive"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input type="submit" value="Update" className="btn btn-block" />
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
