import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './App.css';
import Grid from './Components/DataGrid/DataGrid';
import Buttons from './Components/buttons/Buttons';
import Login from './Components/Login/login';
import Indicators from './Components/Indicators/Indicator';
import Textbox from './Components/TextBox/textbox';
import TextBoxPassword from './Components/TextBox(password)/textbox(password)';
import ToastComponent from './Components/Toasts/toast';
function App() {
  return (
    <div className="App">
      {/* <Grid/> */}
      {/* <Buttons/> */}
      {/* <Login/> */}
      <Indicators/>
      {/* <Textbox/> */}
      {/* <TextBoxPassword/> */}
      {/* <ToastComponent/> */}
    </div>
  );
}

export default App;
