import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import UserList from "./components/userlist/UserList";
import NewUserForm from "./components/newuser/NewUserForm";
import { addUser } from "./features/counter/counterSlice";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user];
    });
    setShowModal(false);
  };

  const closeModal = (e) => {
    if (e.target.classList.value === "overlay") setShowModal(false);
    if (e.key === "Escape") setShowModal(false);
  };

  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar usersLength={users.length} />
      <main>
        {!users.length && (
          <div className="no-users">
            <h2>No users</h2>
          </div>
        )}
        <UserList users={users} />
      </main>
      <Footer />
      {showModal && <NewUserForm addUser={addUser} />}
      <button onClick={() => setShowModal(true)} className="create-user">
        Create User
      </button>
    </div>
  );
}
