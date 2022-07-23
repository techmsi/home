import { Routes, Route, Outlet, NavLink } from 'react-router-dom';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
);

function Layout() {
  return (
    <div className="page-links" data-area="pages">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <Outlet />
    </div>
  );
}

const Home = () => (
  <p className="intro">
    Want a developer that pays attention to your needs? You've found them! Check
    out some of the projects listed here.
  </p>
);

const About = () => (
  <p className="intro">
    Over 20 years of experience creating beautiful web experiences.
  </p>
);

function NoMatch() {
  return (
    <div>
      <h2>Oops!</h2>
      <Link to="/">Return home</Link>
    </div>
  );
}
