import LinkSection from "./link-section";
export default function Homepage() {
  return (
    <main>
      <h1 className="text-xl">Welcome ~</h1>
      <h2 className="text-lg">The time is </h2>
      <form>
        <input type="text" name="search" placeholder="Search for something..." />
      </form>
      <LinkSection />
    </main>
  );
}