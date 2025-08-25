import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
        <h1 className="text-3xl font-bold mt-10 mb-5">Welcome to React Concepts Workshop! :D</h1>
        {[
            { label: "Components", href:"/1-components"},
            { label: "Props & Interface", href:"/2-props&interface"},
            { label: "Mapping", href:"/3-mapping"},
            { label: "UseState", href:"/4-usestate"}
        ].map((item) => (
            <Link
            key={item.label}
            href={item.href}
            className="w-75 py-2 my-2 text-xl text-center rounded-lg bg-gray-700/75 hover:bg-[#ff7d61] hover:text-[#00004d] hover:scale-105 transition-all"
            >
                {item.label}
            </Link>
        ))}
    </div>
  );
}
