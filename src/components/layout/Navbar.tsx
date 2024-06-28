import Link from "next/link";
import DrawerCategory from "../category/DrawerCategory";
import DrawerPost from "../post/DrawerPost";
const Navbar = () => {
  return (
    <nav className="flex justify-between p-5">
      <Link href="/posts">Post list</Link>
      <Link href="/category">Category list</Link>
      <DrawerPost />
      <DrawerCategory />
    </nav>
  );
};

export default Navbar;
