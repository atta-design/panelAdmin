import React, { useState } from "react";

import "devextreme/dist/css/dx.light.css";

import { Button } from "devextreme-react/button";
import { Toast, Position } from "devextreme-react/toast";

function ToastComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const showCustomMessage = () => {
    setIsVisible(true);
  };
  const onHiding = () => {
    setIsVisible(false);
  };
  return (
    <div id="container" className="container">
      <div id="buttons">
        <Button text="Show custom message" onClick={showCustomMessage}/>
      </div>
      <Toast
        visible={isVisible}
        type="info"
        message="You logged in !!!"
        onHiding={onHiding}
      >
        <Position my="top" at="bottom" of="#container" />
      </Toast>
    </div>
  );
}

export default ToastComponent;
