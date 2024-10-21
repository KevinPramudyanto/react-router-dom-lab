import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import MailboxList from "./components/MailboxList";
import MailboxForm from "./components/MailboxForm";
import MailboxDetails from "./components/MailboxDetails";
import NavBar from "./components/NavBar";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (boxholder, boxSize) =>
    setMailboxes((prevMailboxes) => [
      ...prevMailboxes,
      { _id: prevMailboxes.length + 1, boxSize: boxSize, boxholder: boxholder },
    ]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
        <Route path="*" element={<h1>Not Found!</h1>} />
      </Routes>
    </>
  );
};

export default App;
