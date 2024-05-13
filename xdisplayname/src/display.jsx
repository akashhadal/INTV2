import { useState } from "react";

export default function Display() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [displayName, setDisplayName] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!firstName || !lastName) {
      return;
    }
    setDisplayName(true);
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label >First Name:
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          required
        />
        </label>
        <br />
        <label >Last Name:
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          required
        />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {displayName? <h3>Full Name: {firstName} {lastName}</h3>: <></>}
    </div>
  );
}
