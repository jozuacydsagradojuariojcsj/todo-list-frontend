import { Routes, Route } from "react-router";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Layout from "./Layout";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";
import MessageRouter from "./components/messsagesComponents/MessageRouter";

function App() {
  return (
    <>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard2" element={<Dashboard />} />
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile/>} />
            <Route path="/message" element={<MessageRouter/>}/>
            <Route path="/messaging" element={<Messages/>}/>
          </Route>
        </Routes>
    </>
  );
}

export default App;
