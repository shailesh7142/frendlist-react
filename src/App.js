import logo from './logo.svg';
import './App.css';
import FriendList from './component/FriendList';
import {Provider} from 'react-redux';
import store from './store';


function App() {
  return (
    <div className="App">
      {/* <Provider store={store}> */}
      <FriendList />
      {/* </Provider> */}
    
    </div>
  );
}

export default App;