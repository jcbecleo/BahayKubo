import Container from "../Container";
import Logo from "./Logo"
import Search from "../navbar/Search"
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";

interface NavbarProps {
    currentUser?: SafeUser | null;
}

const NavBar:React.FC<NavbarProps> = ({
    currentUser
}) => {
    console.log({currentUser});
    return (
        <div className="fixed-w-full bg-white z-10s">
            <div className=" py-4 border-b-[1px]">
                <Container>
                    <div className="pl-10 flex flex-row items-center justify-between gap-3 md:gap-0">
                        <Logo/>
                        <Search/>
                        <UserMenu currentUser={currentUser}/>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default NavBar;