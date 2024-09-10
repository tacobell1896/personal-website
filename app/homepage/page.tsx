import LinkSection from "./link-section";
import Clock from "./clock";
export default function Homepage() {
  return (
    <main>
      <h1 className="text-xl">Welcome ~</h1>
      <h2 className="text-lg">
        The time is <Clock />
      </h2>
      <form action="https://google.com/search" method="get">
        <input type="text" name="q" placeholder="Search for something..." />
        <button type="submit">Search</button>
      </form>
      <LinkSection />
    </main>
  );
}
