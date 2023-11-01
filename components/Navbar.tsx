import Container from "@/components/ui/Container";
import Link from "next/link";
import MainNav from "./Main-Nav";
import NavbarActions from "./NavbarActions";

const Navbar = async () => {
  return (
    <div className="border-b bg-[#1B1F20] text-white">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">EWear</p>
          </Link>
          <MainNav />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
