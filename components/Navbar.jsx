import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#7D1E6A",
          height: 50,
        }}
      >
        <h2 style={{ marginRight: "10px" }}>Team Up</h2>
        <ul style={{ display: "flex", listStyle: "none", padding: 0 }}>
          <li style={{ marginRight: "20px" }}>
            <Link href="/">Home</Link>
          </li>
          <li style={{ marginRight: "20px" }}>
            <Link href="/About">About</Link>
          </li>
          <li>
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
