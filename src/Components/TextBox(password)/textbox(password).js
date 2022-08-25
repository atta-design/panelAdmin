import React from "react";
import "devextreme/dist/css/dx.light.css";

import { TextBox } from "devextreme-react/text-box";

const TextBoxPassword = () => {
  return <TextBox label="password" mode="password"  width={300}/>;
};

export default TextBoxPassword;
