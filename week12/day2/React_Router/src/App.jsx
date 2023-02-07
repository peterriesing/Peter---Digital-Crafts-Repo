import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import Account from "./components/Account/Account";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import AccountSettings from "./components/Account/AccountSettings";
import AccountUser from "./components/Account/AccountUser";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("Peter");
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/homepage" element={<Homepage user={user} />} />
        <Route path="/account">
          <Route index element={<Account user={user} />} />
          <Route path="settings" element={<AccountSettings />} />
          <Route path=":id" element={<AccountUser />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
