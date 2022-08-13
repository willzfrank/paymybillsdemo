import './App.css';
import { Center } from './component/Center/Center';
import Rightbar from './component/Rightbar/Rightbar';
import Sidebar from './component/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Center />
      <Rightbar />
    </div>
  );
}

export default App;
