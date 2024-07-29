import Image from "next/image";
import NavLinks from "./nav-links";

export default function NavBar() {
  return (
    <header className="flex-row justify-around w-full">
      <Image unoptimized src="/logo.gif" alt="logo" width={200} height={100} />
      <NavLinks />
    </header>
  );
}
