import React from "react";

const Logout = () => {
  const logout = () => {
    sessionStorage.removeItem("uid");
    sessionStorage.removeItem("jwt");

    window.location.reload();
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
        logout()
    }
  }
  return (
    <>
      <i 
      tabIndex="0"
      className="fa-solid fa-arrow-right-from-bracket" onClick={logout} onKeyDown={handleKeyDown}></i>
    </>
  );
};

export default Logout;
