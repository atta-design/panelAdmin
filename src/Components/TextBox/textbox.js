import React from "react";
import { TextBox } from "devextreme-react/text-box";

export default function Textbox() {
  return (
    <div className="container">
      <TextBox mode="email" label="username" width={300} />
    </div>
  );
}
