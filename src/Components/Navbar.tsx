import { NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex bg-[#202025] w-3/4 m-auto py-10 justify-center ">
            <div className="flex items-center justify-between w-full px-4 py-3 ">
                <div className=" flex text-white font-bold text-4xl">Akash</div>
                <div className="flex w-2/4 h-auto justify-between py-5">
                    <NavLink className="py-2 mx-5 text-2xl text-white hover:text-amber-500 hover:underline" to="/">Home</NavLink>
                    <NavLink className="py-2 mx-5 text-2xl text-white hover:text-amber-500 hover:underline" to="/skills">Skills</NavLink>
                    <NavLink className="py-2 mx-5 text-2xl text-white hover:text-amber-500 hover:underline" to="/projects">Projects</NavLink>
                    <NavLink className="py-2 mx-5 text-2xl text-white hover:text-amber-500 hover:underline" to="/blogs">Blogs</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;