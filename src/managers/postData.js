import React, { useState } from "react";
import axios from "axios";
import { Button } from "devextreme-react/button";

export default function PostData() {
  const [value, setValue] = useState("email@test.com");
    
  
  const [password, setPassword] = useState("100100");

  const Clickhandler = () => {
    axios
      .post("https://api-portal.saeedsafaee.ir/Account/Login", {
        username: value,
        password: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <Button
        text="Login"
        type="default"
        stylingMode="outlined"
        onClick={Clickhandler}
      />
    </div>
  );
}
