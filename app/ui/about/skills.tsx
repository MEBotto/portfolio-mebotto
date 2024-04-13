import Link from "next/link";

const Skills = [
  {
    title: "JavaScript",
    icon: "javascript-plain",
    href: "https://developer.mozilla.org/en-US/docs/Web/javascript",
  },
  {
    title: "TypeScript",
    icon: "typescript-plain",
    href: "https://www.typescriptlang.org/",
  },
  { title: "React JS", icon: "react-plain", href: "https://react.dev/" },
  { title: "Next JS", icon: "nextjs-plain", href: "https://nextjs.org/" },
  { title: "Vite", icon: "vite-plain", href: "https://vitejs.dev/" },
  {
    title: "C#",
    icon: "csharp-plain",
    href: "https://dotnet.microsoft.com/en-us/languages/csharp",
  },
  { title: "C++", icon: "cplusplus-plain", href: "https://isocpp.org/" },
  { title: "C", icon: "c-plain", href: "https://devdocs.io/c/" },
  { title: "HTML", icon: "html5-plain", href: "https://www.w3.org/html/" },
  { title: "CSS", icon: "css3-plain", href: "https://www.w3schools.com/css/" },
  { title: "SASS", icon: "sass-plain", href: "https://sass-lang.com/" },
  {
    title: "Bootstrap",
    icon: "bootstrap-plain",
    href: "https://getbootstrap.com/",
  },
  {
    title: "Tailwind CSS",
    icon: "tailwindcss-plain",
    href: "https://tailwindcss.com/",
  },
  { title: "Node JS", icon: "nodejs-plain", href: "https://nodejs.org/en" },
  {
    title: "Express",
    icon: "express-original",
    href: "https://expressjs.com/",
  },
  { title: "Nest JS", icon: "nestjs-original", href: "https://nestjs.com/" },
  {
    title: "SQL Server",
    icon: "microsoftsqlserver-plain",
    href: "https://learn.microsoft.com/en-us/sql/?view=sql-server-ver16",
  },
  { title: "MySQL", icon: "mysql-plain", href: "https://www.mysql.com/" },
  {
    title: "MongoDB",
    icon: "mongodb-plain",
    href: "https://www.mongodb.com/es",
  },
  {
    title: ".NET",
    icon: "dot-net-plain",
    href: "https://dotnet.microsoft.com/es-es/",
  },
  {
    title: "Firebase",
    icon: "firebase-plain",
    href: "https://firebase.google.com/?hl=es-419",
  },
];

export default function SkillsWrapper() {
  return (
    <>
      {Skills.map((skill) => (
        <Skill key={skill.title} {...skill} />
      ))}
    </>
  );
}

function Skill({
  icon,
  title,
  href,
}: {
  icon: string;
  title: string;
  href: string;
}) {
  return (
    <Link
      className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black flex gap-2 items-center"
      href={href}
    >
      {title}
      <i className={`devicon-${icon} text-2xl`}></i>
    </Link>
  );
}
