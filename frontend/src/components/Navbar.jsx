import { NavigationMenu,NavigationMenuList,NavigationMenuItem,NavigationMenuLink } from "./ui/navigation-menu";
import { BrowserRouter,Link } from "react-router-dom";

function Navbar(){

    return(
        <>
            <div className="justify-center flex sticky top-0 z-50">
                <nav className="p-3 border-b  w-full bg-black text-white justify-center flex  justify-between" >
                        <NavigationMenu>
                            
                            <NavigationMenuList>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link to="/">Home</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                    <Link to="/tasks">Tasks</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                               

                            </NavigationMenuList>

                        </NavigationMenu>
                </nav>
            </div>

        
        </>
    )
}

export default Navbar;