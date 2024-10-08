import { Key } from "react";

export default async function GithubPortfolio() {
  const url = `https://api.github.com/users/tacobell1896/repos`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return (
    <ul className="m-auto ">
      {data.map(
        (repo: {
          id: Key | null | undefined;
          html_url: string | undefined;
          name: string | null | undefined;
          description: string | null | undefined;
        }) => (
          <li key={repo.id} className="round-pixel m-5 p-5">
            Repo: <a href={repo.html_url}>{repo.name}</a>
            {repo.description ? (
              <p>Description: {repo.description}</p>
            ) : null}{" "}
          </li>
        ),
      )}
    </ul>
  );
}
