// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Signup from "./Pages/signup";
// import Home from "./Pages/HomePage";
// import Login from "./Pages/Login";
// import Dashboard from "./Pages/Dashboard";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Signin from "./Pages/Login";
import Signup from "./Pages/signup";
import Blog from "./Pages/Blog";
import Blogs from "./Pages/Blogs";
import NewBlog from "./Pages/NewBlog";

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/new-blog" element={<NewBlog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

