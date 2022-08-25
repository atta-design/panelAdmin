import React from "react";
import { LoadIndicator } from "devextreme-react/load-indicator";
import { LoadPanel } from "devextreme-react/load-panel";

export default function Indicators() {
  return (
    <div className="container">
      <LoadIndicator id="small-indicator" height={20} width={20} />
      <LoadIndicator id="medium-indicator" height={40} width={40} />
      <LoadIndicator id="large-indicator" height={60} width={60} />
      <LoadPanel shadingColor="rgba(0,0,0,0.4)" visible={true} />
    </div>
  );
}
