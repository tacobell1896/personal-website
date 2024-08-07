import { Key } from "react";
import links from ".links.json";

export default function LinkSection() {
  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-lg">Links</h1>
      <ul className="flex flex-col items-center justify-center">
        <li className="text-sm">
          <a href="{link.url}">{link.name}</a>
        </li>
      </ul>
    </section>
  );
}
