import React from "react";
import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  return (
    <>
      {selectedBox && (
        <>
          <h1>Mailbox {selectedBox._id}</h1>
          <h2>Details</h2>
          <p>Boxholder: {selectedBox.boxholder}</p>
          <p>Box Size: {selectedBox.boxSize}</p>
        </>
      )}
      {!selectedBox && <h1>Mailbox Not Found!</h1>}
    </>
  );
};

export default MailboxDetails;
