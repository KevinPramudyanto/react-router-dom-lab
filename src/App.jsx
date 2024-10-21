import { Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />
        <Route path="/mailboxes" element={<MailboxList />} />
        <Route path="/new-mailbox" element={<MailboxForm />} />
        <Route path="/mailboxes/:mailboxId	" element={<MailboxDetails />} />
      </Routes>
    </>
  );
};

export default App;
