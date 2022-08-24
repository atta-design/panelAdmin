import React from "react";
import { Button } from "devextreme-react/button";

export default function Buttons() {
  return (
    <div>
      <div>
        <Button text="Login" type="normal" stylingMode="outlined" />
        <Button
          text="Login"
          width={100}
          type="success"
          stylingMode="outlined"
        />
        <Button text="Login" width={120} type="success" stylingMode="text" />
        <Button
          text="Login"
          width={120}
          type="success"
          stylingMode="contained"
        />
      </div>

      <Button text="Login" width={120} type="default" stylingMode="outlined" />
      <Button text="Login" width={120} type="default" stylingMode="contained" />
    </div>
  );
}
