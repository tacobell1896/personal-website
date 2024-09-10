import Image from "next/image";
export default function Achievements() {
  return (
    <main>
      <figure>
        <Image
          src="/images/achievements.jpg"
          alt="Achivements"
          width={2000}
          height={1000}
        />
      </figure>

      <article className="m-auto">
        <h1 className="text-lg m-5">Achievements</h1>
        <ul className="text-sm pl-5 pb-5">
          <li>
            Placed 3rd in Ohio Region 10 Business Professionals of America Web
            Site Design Competition
          </li>
          <li>
            Placed in top ten rankings at the Ohio State Business Professionals
            of America Extemporaneous Speech Competition
          </li>
          <li>Internet Core Competency Certification Global Standard 4</li>
          <li>
            Microsoft Technical Associate Database Fundamentals Certification
          </li>
          <li>
            Placed First as a team at Ohio Collegiate Cyber Defense Competition
            (Linux Administator for Team at Cuyahoga Community College)
          </li>
        </ul>
      </article>
    </main>
  );
}
