import { FaTimes, FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const UserCard = ({ user, index, users, setUsers }) => {
  const { _id, name, email, gender, status } = user;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "User has been deleted.", "success");
              const remaining = users.filter((us) => us._id !== _id);
              setUsers(remaining);
            }
          });
      }
    });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{gender}</td>
      <td>{status}</td>
      <td>
        <div>
          <Link to={`updateUser/${_id}`}>
            <button className="btn btn-sm mr-4">
              <FaPen />
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-error btn-sm"
          >
            <FaTimes className="text-white" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UserCard;
