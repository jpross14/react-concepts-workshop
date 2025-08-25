function PropsAndInterfaceExample() {
    return (
        <div className="mt-10 flex flex-col justify-center items-center">
            <h1 className="text-3xl">Props And Interace Example</h1>
            <section className="flex space-x-5 mt-5">
                <Avatar person="example1" size={200} image="https://i.pinimg.com/736x/db/c8/d0/dbc8d0d574c020eebd0e498c8a93c095.jpg"/>
                <Avatar person="example2" size={150} image="https://pbs.twimg.com/profile_images/1903938843516276736/F3XjGgcD_400x400.jpg"/>
                <Avatar person="example3" size={100} image="https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/484568287_967547285572599_981322485402530907_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF-JHybFdQ9pK8MT6FN0sDRUnnjouJbrPJSeeOi4lus8mqIhFmRHqFbxXaoUfJSQ5UYCLUgjBkUslD1JTtwi4X_&_nc_ohc=7-_Z-1jDhTgQ7kNvwGi7mNV&_nc_oc=AdlKIqOdMZYeVcAcbhq9_gZjF_75V7iVP9_ClwUOI9PpKuhzb95x2_gz-Iy-rGN6MK8lnpmwMkJvfy0HKT8ZfALX&_nc_zt=23&_nc_ht=scontent.fceb2-2.fna&_nc_gid=abtlQKVV6JQQRQg4aI6KSQ&oh=00_AfXD_rzdvuEFmK7lZqKSxMqVg7N5TEpvPkkRd8I31bFT1Q&oe=68B233DC"/>
            </section>
        </div>
    );
}

interface Props {
    person: string;
    size: number;
    image: string;
}
function Avatar({person, size, image}: Props) {
  return (
    <div className="flex flex-col justify-end items-center">
        <img
        className="object-fill rounded-full"
        src={image}
        alt={person}
        width={size}
        height={size}
        />
        <h1 className="text-xl mt-5 font-semibold">{person}</h1>
    </div>
  );
}
export default PropsAndInterfaceExample;