import Image from "next/image";
import GithubPortfolio from "./github-portfolio";
export default function Portfolio() {
  return (
    <main>
      <article className="m-auto">
        <Image
          src="/images/portfolio.png"
          alt="Portfolio"
          width={2000}
          height={1000}
        />
        <h1 className="text-lg m-5">Portfolio</h1>
        <p className="text-sm m-5">
          I believe that the best way to learn is by doing. Listed below are
          projects that I work on in my spare time in order to learn more and
          keep my skills sharp:
        </p>
        <GithubPortfolio />
      </article>
    </main>
  );
}
