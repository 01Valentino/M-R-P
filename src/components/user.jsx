import { useState } from "react";

const Appie = () => {
  const [users, setUsers] = useState([
    "Sarafa",
    "Janet",
    "Ope",
    "Timi",
    "King",
    "Dupe",
  ]);

  const handleAddUser = () => {
    setUsers([...users, "BiOluwatifemi"]);
  };

  const handleRemoveUser = () => {
    setUsers(users.filter((user) => user !== "Dupe"));
  };

  const handleUpdateUser = () => {
    setUsers(
      users.map((user) =>
        user === "Ope"
          ? "Opeyemi"
          : user && user === "Timi"
          ? "Timilehin"
          : user && user === "BiOluwatifemi"
          ? "Bolu"
          : user
      )
    );
  };

  return (
    <div className="mb-20 font-bold flex flex-col justify-center items-center">
      <ul className="mb-2">
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>

      <div className="flex gap-5">
        <button
          className="bg-amber-300 text-white px-5 py-2 rounded-lg hover:cursor-pointer hover:bg-amber-500 transition-all duration-300 ease-in font-bold uppercase"
          onClick={handleAddUser}
        >
          Add user
        </button>
        <button
          className="bg-blue-500 text-white  px-5 py-2 rounded-lg uppercase hover:cursor-pointer hover:bg-blue-700 transition-all duration-300 ease-in font-bold"
          onClick={handleUpdateUser}
        >
          Update User{" "}
        </button>
        <button
          className="bg-red-500 text-white px-5 py-2 rounded-lg uppercase hover:cursor-pointer hover:bg-red-700 transition-all duration-300 ease-in font-bold"
          onClick={handleRemoveUser}
        >
          Remove User{" "}
        </button>
      </div>
    </div>
  );
};

export default Appie;
