import { Key } from "react";
import { links } from "./links";

export default function LinkSection() {
  const linkList = links;
  return (
    <section className="flex flex-col items-center justify-center">
      <ul className="flex flex-col items-center justify-center">
        {linkList?.map((link: { name: string; url: string }, index: Key) => {
          return (
            <li key={index} className="text-sm">
              <a href={link.url}>{link.name}</a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
