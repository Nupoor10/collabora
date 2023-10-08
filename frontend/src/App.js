import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import axios from 'axios'; //Axios is used for making HTTP requests from web browsers and Node.js applications.
import { Toaster } from 'react-hot-toast'; //to show notification pop ups if email is already used or password is short etc
import UserProfile from './pages/UserProfile';
import { useAuthContext } from './hooks/useAuthContext';
import OrganizerHomepage from './pages/OrganizerHomepage'
import CollaboratorHome from './pages/CollboratorHome';
import AddProject from './pages/AddProject';
import ProjectInfo from "./pages/project-info/ProjectInfo";

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {
  const { user } = useAuthContext();

  return (
    <>
      <Router>
        {/* <Navbar/> */}
        <Toaster position='bottom-right' toastOptions={{ duration: 5000 }} />
        <Routes>
          <Route path="/contributor" element={<CollaboratorHome />} />
          <Route path="/organisation" element={<OrganizerHomepage />} />
          <Route path='/' element={
            (user?.role === "Contributor") ? 
            <Navigate to="/contributor"/> : <Navigate to="/organisation"/>
          }/>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/userprofile' element={<UserProfile />} />
          <Route path='/collaborator' element={<CollaboratorHome />} />
          <Route path='/add-project' element={<AddProject />} />
          <Route path='/project-info' element={<ProjectInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
