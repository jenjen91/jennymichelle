import { Routes, Route, Outlet, Link } from "react-router-dom";
import Container from '@mui/material/Container';
import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './ResponsiveAppBar.jsx';
import { pages } from "./pages/pages.js";
import Home from "./pages/Home.js";

function App() {
  return (
    <div classname="app">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {pages.map((page, index) => (
          <Route key={index} path={page.path} element={page.element} />
          ))}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  </div>
  );
}

function Layout() {
  return (
      <div>
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

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
