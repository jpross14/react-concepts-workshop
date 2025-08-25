import MyButton from "@/components/MyButton";
import Profile from "@/components/Profile";

const Component = () => {
    return (
        <div className="flex flex-col justify-center items-center text-3xl">
            <h1 className="mt-10 mb-5">Welcome to my app</h1>
            <MyButton />
            <MyButton />
            <Profile />
        </div>
    );
}

export default Component;