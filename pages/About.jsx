import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "white" }}>
      <Navbar />
      <div style={{ margin: "0 auto", maxWidth: "800px", padding: "20px" }}>
        <h1
          style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}
        >
          About Us
        </h1>
        <p style={{ fontSize: "18px", marginBottom: "20px" }}>
          Welcome to Team Up, your go-to platform for finding sports games and
          meetups happening near you. Our mission is to connect sports
          enthusiasts like you, making it easier for you to enjoy your favorite
          sports, stay active, and build lasting friendships through sports.
        </p>
        <h2
          style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}
        >
          Our Story
        </h2>
        <p style={{ fontSize: "18px", marginBottom: "20px" }}>
          Team Up was born out of a shared love for sports and the desire to
          create a community where sports enthusiasts could come together to
          discover new activities and events. As avid athletes ourselves, we
          understand the joy and excitement that sports bring, and we wanted to
          share that experience with others.
        </p>
        <h2
          style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}
        >
          What We Do
        </h2>
        <p style={{ fontSize: "18px", marginBottom: "20px" }}>
          At Team Up, we believe that sports have the power to unite people and
          transcend barriers. Our platform allows you to browse a diverse range
          of sports games and meetups in your local area, from traditional team
          sports like soccer and basketball to individual activities like
          running, hiking, and cycling.
        </p>
        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default AboutPage;
