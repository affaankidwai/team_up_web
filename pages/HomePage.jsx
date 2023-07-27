import Image from "next/image";

export default function HomePage() {
  return (
    <div
      style={{
        backgroundColor: "#58287F",
        height: "98vh",
      }}
    >
      <div>
        <h2
          style={{
            fontSize: 30,
            // fontWeight: "bold",
            color: "white",
          }}
        >
          Discover Sports Games and Meetups Near You
        </h2>
        <h2
          style={{
            fontSize: 30,
            // fontWeight: "bold",
            color: "white",
          }}
        >
          Connecting Sports Enthusiasts, One Game at a Time
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div style={{ flex: 1, padding: 50, marginTop: 80 }}>
            <p
              style={{
                fontSize: 28,
                // fontWeight: "bold",
                color: "white",
              }}
            >
              Welcome to Team Up, the app that makes it easier than ever to find
              sports games and meetups happening in your local area. Whether you
              are a seasoned athlete or just looking to get active, Team Up
              brings sports enthusiasts together for a fun and social
              experience.
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <Image
              src="/assets/images/hey.png"
              alt="Image of APP"
              width={600}
              height={400}
            />
          </div>
        </div>
        <div style={{ display: "flex", padding: 30 }}>
          <a
            href="https://www.appstore.com/your-app-url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/images/playstore.png"
              alt="Image of APP"
              width={270}
              height={170}
            />
          </a>
          <a
            href="https://www.appstore.com/your-app-url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/images/appstore.png"
              alt="Image of APP"
              width={250}
              height={150}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
