import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-xl md:text-3xl font-bold tracking-tight md:tracking-tighter leading-tight mb-16 mt-4">
      <Link href="/" className="hover:underline">
        Mieux manger.
      </Link>
    </h2>
  );
};

export default Header;
