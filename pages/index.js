import HomePage from "./HomePage";
import Navbar from "../components/Navbar";
import About from "./About";
import Contact from "./Contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <About />
      <Contact />
    </div>
  );
}
// import HomePage from "./HomePage";
// import Contact from "./Contact";
// import About from "./About";
// import Navbar from "../components/Navbar"; // Make sure the path to the navbar.jsx is correct

// import { useRouter } from "next/router";

// export default function Home() {
//   const router = useRouter();

//   const renderPage = () => {
//     if (router.pathname === "/") {
//       return <HomePage />;
//     } else if (router.pathname === "/About") {
//       return <About />;
//     } else if (router.pathname === "/Contact") {
//       return <Contact />;
//     } else {
//       return <h1>Page not found</h1>;
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       {renderPage()}
//     </div>
//   );
// }
