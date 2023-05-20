import './App.css';
// import Router from "./components/router";
import Header from "./pages/Header";
// import PageContent from "./Components/PageContent";
import SideBar from "./pages/SideBar";
// import Products from "./pages/Products";
// import { RouterProvider } from "react-router-dom";
import Router from './Router';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="App">
        <div className="SideBarAndPageContent">
          <SideBar></SideBar>
          <div className="PageContent">
            <Router></Router>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
