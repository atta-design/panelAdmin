import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import "./App.css";
import Grid from "./Components/DataGrid/DataGrid";
import Login from "./Pages/Login/login";
import Indicators from "./Components/Indicators/Indicator";
import Textbox from "./Components/textBox/TextBox";
import PostData from "./managers/postData";
import GetData from "./managers/getData";
import { ToastProvider } from "./Components/Toasts/utils/toast/toastProvider";
function App() {
  return (
    <div>
      {/* <Grid/> */}
      {/* <Buttons/> */}
      <ToastProvider>
        <Login />
      </ToastProvider>

      {/* <Indicators/> */}
      {/* <Textbox/> */}
      {/* <TextBoxPassword/> */}
      {/* <ToastComponent/> */}
      {/* <PostData/> */}
      {/* <GetData/> */}
    </div>
  );
}

export default App;
