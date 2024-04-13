import Link from "next/link";

export default function SkillsWrapper() {
  return (
    <>
      <Skill title="JavaScript" icon="javascript-plain" href="https://developer.mozilla.org/en-US/docs/Web/javascript"/>
      <Skill title="TypeScript" icon="typescript-plain" href="https://www.typescriptlang.org/"/>
      <Skill title="React JS" icon="react-plain" href="https://react.dev/"/>
      <Skill title="Next JS" icon="nextjs-plain" href="https://nextjs.org/"/>
      <Skill title="Vite" icon="vite-plain" href="https://vitejs.dev/"/>
      <Skill title="C#" icon="csharp-plain" href="https://dotnet.microsoft.com/en-us/languages/csharp"/>
      <Skill title="C++" icon="cplusplus-plain" href="https://isocpp.org/"/>
      <Skill title="C" icon="c-plain" href="https://devdocs.io/c/"/>
      <Skill title="HTML" icon="html5-plain" href="https://www.w3.org/html/"/>
      <Skill title="CSS" icon="css3-plain" href="https://www.w3schools.com/css/"/>
      <Skill title="SASS" icon="sass-plain" href="https://sass-lang.com/"/>
      <Skill title="Bootstrap" icon="bootstrap-plain" href="https://getbootstrap.com/"/>
      <Skill title="Tailwind CSS" icon="tailwindcss-plain" href="https://tailwindcss.com/"/>
      <Skill title="Node JS" icon="nodejs-plain" href="https://nodejs.org/en"/>
      <Skill title="Express" icon="express-original" href="https://expressjs.com/"/>
      <Skill title="Nest JS" icon="nestjs-original" href="https://nestjs.com/"/>
      <Skill title="SQL Server" icon="microsoftsqlserver-plain" href="https://learn.microsoft.com/en-us/sql/?view=sql-server-ver16"/>
      <Skill title="MySQL" icon="mysql-plain" href="https://www.mysql.com/"/>
      <Skill title="MongoDB" icon="mongodb-plain" href="https://www.mongodb.com/es"/>
      <Skill title=".NET" icon="dot-net-plain" href="https://dotnet.microsoft.com/es-es/"/>
      <Skill title="Firebase" icon="firebase-plain" href="https://firebase.google.com/?hl=es-419"/>
    </>
  );
}

function Skill({ icon, title, href }: { icon: string; title: string, href: string }) {
  return (
    <Link className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black flex gap-2 items-center" href={href}>
      {title}
      <i className={`devicon-${icon} text-2xl`}></i>
    </Link>
  );
}
