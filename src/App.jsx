import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import MailboxList from "./components/MailboxList";
import MailboxForm from "./components/MailboxForm";
import MailboxDetails from "./components/MailboxDetails";
import NavBar from "./components/NavBar";

const App = () => {
  const [mailboxes, setMailboxes] = useState([
    {
      _id: 1,
      boxSize: "Small",
      boxholder: "Alex",
    },
    {
      _id: 2,
      boxSize: "Medium",
      boxholder: "Beta",
    },
    {
      _id: 3,
      boxSize: "Large",
      boxholder: "Charlie",
    },
  ]);

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
      </Routes>
    </>
  );
};

export default App;
