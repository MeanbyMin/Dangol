import React, { useEffect } from "react";
import { authService } from "fbase";
import { useState } from "react";
import AppRouter from "./Router";

function App() {
  // const [userObj, setUserObj] = useState(null);
  // useEffect(() => {
  //   authService.onAuthStateChanged((user) => {
  //     if (user) {
  //     }
  //   });
  // });
  return (
    <>
      <AppRouter />
      {/* <footer className="footer">
        &copy; {new Date().getFullYear()} Sangnam
      </footer> */}
    </>
  );
}

export default App;
