import "./App.css";
import SideBar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import { Slide } from "react-awesome-reveal";

function App() {
  return (
    <Router>
      <div style={{
        display
          : "flex"
      }}>
        <Slide direction="left" duration={1000} delay={500}>
          <SideBar />
        </Slide>

        <Dashboard />
      </div>


    </Router>
  );
}

export default App;
