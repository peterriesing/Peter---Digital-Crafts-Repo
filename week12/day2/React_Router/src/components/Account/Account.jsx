import { useLocation } from "react-router-dom";

const Account = ({ user }) => {
  const location = useLocation();
  return (
    <div>
      <h3>{user}'s Account</h3>
      <h4>
        Movie: {location.state.name}, Starring:{location.state.author}
      </h4>
    </div>
  );
};

export default Account;
