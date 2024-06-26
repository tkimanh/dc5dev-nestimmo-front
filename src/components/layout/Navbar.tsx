import Link from "next/link";
import DrawerPost from "../post/DrawerPost";

const Navbar = () => {
    return ( 
        <nav className="flex justify-between p-5">
            <Link href="/">Post list</Link>
            <DrawerPost />
        </nav>
     );
}
 
export default Navbar;