import LinkSection from "./link-section";
import Clock from "./clock";
export default function Homepage() {
  return (
    <main>
      <h1 className="text-xl text-center">Welcome ~</h1>
      <h2 className="text-lg text-center">
        The time is <Clock />
      </h2>
      <LinkSection />
    </main>
  );
}
