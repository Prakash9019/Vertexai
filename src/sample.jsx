// import React from 'react';
// import { Link, Outlet } from 'react-router-dom';

// const FounderLayout = () => {
//   return (
//     <div className="flex min-h-screen">
//       <aside className="w-64 h-screen bg-gray-800 text-white fixed">
//         <div className="p-4">
//           <h1 className="text-2xl font-bold">My App</h1>
//           <nav className="mt-4">
//             <Link to="/founder/home" className="block py-2 px-4 hover:bg-gray-700">Home</Link>
//             <Link to="/founder/about" className="block py-2 px-4 hover:bg-gray-700">About</Link>
//             <Link to="/founder/contact" className="block py-2 px-4 hover:bg-gray-700">Contact</Link>
//           </nav>
//         </div>
//       </aside>
//       <div className="flex-1 ml-64">
//         <header className="bg-blue-600 text-white p-4 fixed w-full" style={{ marginLeft: '16rem' }}>
//           <h1 className="text-xl">Header</h1>
//         </header>
//         <main className="mt-16 p-4">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default FounderLayout;








// // HomePage.js
// import React from 'react';

// const HomePage = () => {
//   return <div>Home Page Content</div>;
// };

// export default HomePage;

// // AboutPage.js
// import React from 'react';

// const AboutPage = () => {
//   return <div>About Page Content</div>;
// };

// export default AboutPage;

// // ContactPage.js
// import React from 'react';

// const ContactPage = () => {
//   return <div>Contact Page Content</div>;
// };

// export default ContactPage;










// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import FounderLayout from './FounderLayout';
// import HomePage from './HomePage';
// import AboutPage from './AboutPage';
// import ContactPage from './ContactPage';

// const FounderPage = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<FounderLayout />}>
//         <Route path="home" element={<HomePage />} />
//         <Route path="about" element={<AboutPage />} />
//         <Route path="contact" element={<ContactPage />} />
//       </Route>
//     </Routes>
//   );
// };

// export default FounderPage;











// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import FounderPage from './FounderPage';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/founder/*" element={<FounderPage />} />
//         <Route path="/" element={<div>Welcome to the Home Page</div>} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;