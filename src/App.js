import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';

function App() {
  const user = "Faizan";

  return (
    <div className="app">
      {!user ? <h1>Login</h1> : 
      <>
        <Header/>
        <div className="app_body">
            <Sidebar/>
            <Feed />
            <Widget />
        </div>
      </>
}
    </div>
  );
}

export default App;
