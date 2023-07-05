import { useState } from "react";
import axios from "axios";
const From = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const fromHandler = (e) => {
    e.preventDefault();
    // check any field empty or not

    if (first_name !== "" && last_name !== "" && email !== "") {
      // check email with regex

      const emailPatten = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

      if (!emailPatten.test(email)) {
        alert("Please enter correct email address");
        return;
      }

      axios.post("http://localhost:3002/insert", {
        first_name,
        last_name,
        email,
      });
    } else {
      alert("please fill all details");
    }
  };
  return (
    <>
      <form
        onSubmit={fromHandler}
        style={{ display: "flex", gap: 10, flexDirection: "column" }}
      >
        <label>First name</label>
        <input
          type="text"
          name="first_name"
          onChange={(e) => setFirst_name(e.target.value)}
          placeholder="Enter First Name"
        />
        <label>Last name</label>
        <input
          type="text"
          name="last_name"
          onChange={(e) => setLast_name(e.target.value)}
          placeholder="Enter Last Name"
        />

        <label>Email name</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email "
        />

        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default From;
