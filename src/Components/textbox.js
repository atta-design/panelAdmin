import React from "react";
import { TextBox } from "devextreme-react/text-box";

export default function Textbox() {
  return (
    <div>
      <TextBox mode="email" label="username" />
    </div>
  );
}
