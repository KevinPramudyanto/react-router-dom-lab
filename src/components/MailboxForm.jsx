import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailboxForm = (props) => {
  const [boxholder, setBoxholder] = useState("");
  const [boxSize, setBoxSize] = useState("Small");
  const navigate = useNavigate();

  const handleBoxholderChange = (event) => setBoxholder(event.target.value);
  const handleBoxSizeChange = (event) => setBoxSize(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBox(boxholder, boxSize);
    setBoxholder("");
    setBoxSize("Small");
    navigate("/mailboxes");
  };

  return (
    <>
      <h1>New Mailbox</h1>
      <form action="/mailboxes" onSubmit={handleSubmit}>
        <h3>Enter a Boxholder:</h3>
        <input
          name="boxholder"
          placeholder="Boxholder name"
          value={boxholder}
          onChange={handleBoxholderChange}
        />
        <h3>Select a Box Size:</h3>
        <select name="boxsize" value={boxSize} onChange={handleBoxSizeChange}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MailboxForm;
