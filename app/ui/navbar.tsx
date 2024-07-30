import Image from "next/image";
import NavLinks from "./nav-links";

export default function NavBar() {
  return (
    <header className="flex flex-col md:flex-row justify-around w-full round-pixel">
      <Image
        unoptimized
        src="/logo.gif"
        alt="logo"
        width={0}
        height={0}
        style={{ width: "30%", height: "30%", margin: "auto" }}
      />
      <NavLinks />
    </header>
  );
}
