import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  link,
}: {
  link: { url: string; title: string };
}) {
  const pathname = usePathname();

  return (
    <Link className={`p-1 ${pathname === link.url && "border-b-2 border-slate-950"}`} href={link.url}>
      {link.title}
    </Link>
  );
}
