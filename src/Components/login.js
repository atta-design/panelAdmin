import React, { useState } from "react";
import TextBox from "devextreme-react/text-box";
import { Button } from "devextreme-react/button";
import "../App.css";

import axios from "axios";

export default function Login() {
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");

  const onValueChange = (value) => {
    setValue(value);
  };
  const onPasswordChange = (password) => {
    setPassword(password);
  };

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
    <div className="form_container">
      <h1>Login page</h1>
      <div className="login_container">
        <TextBox
          value={value}
          mode="email"
          label="user name"
          maxLength={20}
          showClearButton={true}
          onValueChange={onValueChange}
          valueChangeEvent="input"
          labelMode="floating"
        />
        <TextBox
          value={password}
          mode="password"
          label="password"
          maxLength={20}
          showClearButton={true}
          onValueChange={onPasswordChange}
          valueChangeEvent="input"
          labelMode="floating"
        />
      </div>
      <Button
        text="Login"
        type="default"
        stylingMode="outlined"
        onClick={Clickhandler}
      />
    </div>
  );
}
