import React from "react";
import { Link } from "react-router-dom";

const MailboxList = (props) => {
  return (
    <>
      <h1>Mailbox List</h1>
      <ul>
        {props.mailboxes.map((mailbox, idx) => (
          <li key={idx} className="mail-box">
            <Link to={`/mailboxes/${mailbox._id}`}>Mailbox {mailbox._id}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MailboxList;
