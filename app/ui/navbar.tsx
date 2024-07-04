import Image from "next/image";
import NavLinks from "./nav-links";

export default function NavBar() {
  return (
    <header>
      <Image unoptimized src="/logo.gif" alt="logo" width={400} height={400} />
      <NavLinks />
    </header>
  );
}
