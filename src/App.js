import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './App.css';
import Grid from './Components/DataGrid/DataGrid';
import Buttons from './Components/buttons/Buttons';
import Login from './Pages/Login/login';
import Indicators from './Components/Indicators/Indicator';
import Textbox from './Components/TextBox/textbox';
import TextBoxPassword from './Components/TextBox(password)/textbox(password)';
import ToastComponent from './Components/Toasts/toast';
import PostData from './managers/postData';
import GetData from './managers/getData';
function App() {
  return (
    <div>
      {/* <Grid/> */}
      {/* <Buttons/> */}
      <Login/>
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
