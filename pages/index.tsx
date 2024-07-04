import Image from "next/image";

export default function Home() {
  return (
    <main>
      <figure>
        <Image
          src="/images/home.jpg"
          alt="Home Page Picture"
          width={1000}
          height={1000}
        />
      </figure>
      <article>
        <h2>Who Am I?</h2>
        <p>
          My name is Turner Bell, and I am a software and web developer. I have
          worked with computer programming languages, such as C#, VBA, ASP.NET,
          Android, HTML, CSS, XML, Java, JavaScript, SQL Server and PHP. I have
          also worked with operating systems, such as Microsoft Windows as well
          as Linux Distros including Arch Linux and Linux Mint. I am proficient
          in using software applications, such as Word, Excel, PowerPoint,
          G-Suite Apps, Google Docs, Microsoft Access and Adobe Photoshop.
        </p>
        <p>
          Growing up, I have always been interested in computers and how they
          worked. Learning programming in high school made me consider
          development as a career. I pride myself in my passion in technology,
          work ethic, and honesty, and am always willing to learn new skills. I
          also enjoy designing and developing applications. I analyze and align
          applications based on recent trends to create the most simple and
          accessible application for users.
        </p>
        <p>
          <i>
            The world of technology is always changing, and I aspire to be a
            part of that.
          </i>
        </p>
      </article>
    </main>
  );
}
