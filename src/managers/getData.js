import React, { useEffect } from "react";
import axios from "axios";
import '../App.css'

export default function GetData() {
  useEffect(() => {
    axios
      .get("https://api-portal.saeedsafaee.ir/Account/Login")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <h1> GET DATA </h1>
    </div>
  );
}
