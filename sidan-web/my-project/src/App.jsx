import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/homePage/Home"
import Projects from "./pages/projectsPage/Projects"
import About from "./pages/aboutPage/About"
import Contact from "./pages/contactPage/Contact"
import ProjectDetails from "./pages/projectDetailsPage/ProjectDetails"
import Navbar from "./components/Navbar"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import Footer from "./components/Footer"
import AdminLogin from "./pages/Admin/AdminLogin"
import Dashboard from "./pages/Admin/Dashboard"
import PrivateRoute from "./pages/Admin/PrivateRoute"
import AddProject from "./pages/Admin/AddProject"


function App() {

    const theme = useSelector((state) => state.theme); // Assuming 'mode' is 'light' or 'dark'
    useEffect(() => {
        if (theme.mode === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }, [theme.mode]);
    
    
    const excludeNavbarFooter = ["/admin-login", "/admin-dashboard", "/addProject"];

 
  return (
    <div className="app bg-backgroundLight dark:bg-backgroundDark relative ">
      <BrowserRouter >
          
            <div className="max-w-5xl mx-auto ">
            {!excludeNavbarFooter.includes(window.location.pathname) && <Navbar />}

                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/project/:id" element={<ProjectDetails />} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact />} />
                  
                    <Route path="/admin-login" element={<AdminLogin />} />
                    
                    /*PRIVATE ROUTES */
                    <Route element={<PrivateRoute/>}>
                 
                       <Route path="/admin-dashboard" element={<Dashboard />} />
                       <Route path="/addProject" element={<AddProject />} />
                    </Route>

                </Routes>

                {!excludeNavbarFooter.includes(window.location.pathname) && <Footer />}
            </div>
        </BrowserRouter>
    </div>
  )
}

export default App
