import { useState } from "react";

function RegForm({ regform }) {
  const [name, setName] = useState(regform.name);
  const [email, setEmail] = useState(regform.email);
  const [submitData, setsubmitData] = useState(null);
  const [searchquery, setsearchquery] = useState("");

  const [users, setUsers] = useState([
    { id: 1, name: "prava", email: "prava@gmail.com" },
    { id: 2, name: "anu", email: "anu@gmail.com" }
  ]);

  function handlesubmit(e) {
    e.preventDefault();

    const newuser = {
      id: users.length + 1,   
      name: name,
      email: email
    };

    setsubmitData(newuser);
    setUsers([...users, newuser]); 

    // optional: clear form
    setName("");
    setEmail("");
  }

  return (
    <div>
      {/* Form */}
      <form onSubmit={handlesubmit}>
        <p>Default Name: {regform.name}</p>
        <input
          type="text"
          placeholder="Enter the name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Default Email: {regform.email}</p>
        <input
          type="email"
          placeholder="Enter the email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {/* Submitted Data */}
      {submitData && (
        <div style={{ marginTop: "10px" }}>
          <h3>Submitted Data:</h3>
          <p>Name: {submitData.name}</p>
          <p>Email: {submitData.email}</p>
        </div>
      )}

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search users"
        value={searchquery}
        onChange={(e) => setsearchquery(e.target.value)}
      />

      {/* Filtered Users */}
      <div style={{ marginTop: "10px" }}>
        {users
          .filter((user) =>
            user.name.toLowerCase().startsWith(searchquery.toLowerCase())
          )
          .map((user) => (
            <div key={user.id}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default RegForm;