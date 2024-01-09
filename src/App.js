// Importing necessary dependencies
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Container from '@mui/material/Container';
import './App.css';
import ResponsiveAppBar from './ResponsiveAppBar.js';
import { pages } from "./pages/pages.js";
import Home from "./pages/Home.js";

// Main component - App
function App() {
  return (
    <div classname="app">
      {/* Defining the routes */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Mapping through the pages array and creating routes dynamically */}
          {pages.map((page, index) => (
            <Route key={index} path={page.path} element={page.element} />
          ))}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

// Layout component
function Layout() {
  return (
    <div>
      {/* Rendering the responsive app bar */}
      <ResponsiveAppBar />
      
      <Container sx={{marginTop: '30px'}}>
        {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
        <Outlet />
      </Container>
    </div>
  );
}

// NoMatch component
function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        {/* Link to navigate back to the home page */}
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

// Exporting the App component as the default export
export default App;
