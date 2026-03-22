import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");

  return (
    <div className="container">
      <div className="card">
        <h2>Contact Me 📞</h2>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <button onClick={() => alert(`Hello ${name}! 😊`)}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Contact;