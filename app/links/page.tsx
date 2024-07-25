import Image from "next/image";
export default function Links() {
  return (
    <main>
      <figure>
        <Image src="/images/links.jpg" alt="Links" width={1000} height={1000} />
      </figure>

      <article className="m-auto">
        <h1 className="text-lg m-5">Links</h1>
        <ul className="text-sm pl-5 pb-5">
          <li>
            <a href="https://www.linkedin.com/in/turner-bell-7a66b887">
              LinkedIn Account
            </a>
          </li>
          <li>
            <a href="https://github.com/tacobell1896">GitHub Account</a>
          </li>
          <li>
            <a href="https://twitter.com/infosectacobell">
              Twitter, all thoughts are my own
            </a>
          </li>
        </ul>
      </article>
    </main>
  );
}
