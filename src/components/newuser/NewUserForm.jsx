import "./NewUserForm.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

export default function NewUserForm({ addUser }) {
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [age, setage] = useState();
  const [from, setfrom] = useState();
  const [image, setimage] = useState();
  const [job, setjob] = useState();
  const [gender, setgender] = useState();
  const [id, setid] = useState(uuidv4());
  const [user, setUser] = useState([]);

  const Dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    Dispatch(addUser(user));
  };

  const Submit = (e) => {
    user.push({
      firstName: firstName,
      lastName: lastName,
      age: age,
      from: from,
      image: image,
      job: job,
      gender: gender,
      id: id,
    });
    setfirstName();
    setlastName();
    setgender();
    setimage();
    setfrom();
    setage();
    setjob();
    console.log(user);
  };

  return (
    <div className="modal-wrapper">
      <div className="overlay">
        <div className="modal">
          <h2>Create New User</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Image URL:</span>
              <input
                type="url"
                onChange={(e) => setimage(e.target.value)}
                required
              />
            </label>
            <label>
              <span>First Name:</span>
              <input
                type="text"
                onChange={(e) => setfirstName(e.target.value)}
                required
              />
            </label>
            <label>
              <span>Last Name:</span>
              <input
                type="text"
                onChange={(e) => setlastName(e.target.value)}
                required
              />
            </label>
            <label>
              <span>Age:</span>
              <input
                type="number"
                onChange={(e) => setage(e.target.value)}
                required
              />
            </label>
            <label>
              <span>From:</span>
              <input
                type="text"
                onChange={(e) => setfrom(e.target.value)}
                required
              />
            </label>
            <label>
              <span>Job:</span>
              <input
                type="text"
                onChange={(e) => setjob(e.target.value)}
                required
              />
            </label>
            <div className="gender">
              <span>Gender:</span>
              <label>
                <small>Male</small>
                <input
                  type="radio"
                  onChange={(e) => setgender(e.target.value)}
                  required
                  name="gender"
                  value="male"
                />
              </label>
              <label>
                <small>Female</small>
                <input
                  type="radio"
                  onChange={(e) => setgender(e.target.value)}
                  required
                  name="gender"
                  value="female"
                />
              </label>
            </div>
            <button onClick={(e) => Submit(e)} className="modal-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
