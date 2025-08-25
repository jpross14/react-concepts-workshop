import Image from "next/image";

const user = {
  name: "Benigno Aquino Jr.",
  description:
    "a Filipino politician who served as a senator of the Philippines and governor of the province of Tarlac.",
  imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDq-ziPKhSJb6x-XWayI64-fqqrdSNAGwLhQKbUofra1CrLfFSoKm29udUKzO6nYF3Gw4&usqp=CAU",
};

export default function Profile() {
  return (
    <main className="mt-5 flex flex-col items-center">
      <h1>{user.name}</h1>
      <h2 className="text-base">{user.description}</h2>
      <Image
        className="size-50 object-cover rounded-full mt-5"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        width={200}
        height={200}
      />
    </main>
  );
}
