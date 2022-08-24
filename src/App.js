import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './App.css';
import Grid from './Components/DataGrid';
import Buttons from './Components/Buttons';
import Login from './Components/login';
import Indicators from './Components/Indicator';
import Textbox from './Components/textbox';
import TextBoxPassword from './Components/textbox(password)';
import ToastComponent from './Components/toast';
function App() {
  return (
    <div className="App">
      {/* <Grid/> */}
      {/* <Buttons/> */}
      {/* <Login/> */}
      {/* <Indicators/> */}
      {/* <Textbox/> */}
      {/* <TextBoxPassword/> */}
      <ToastComponent/>
    </div>
  );
}

export default App;
