

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const NavBar = (
    () => {
    const router = useRouter()

    let route: string = router.pathname;
    if (route === "/") route="/home";
    return(
    <div>
          <ul>
            <li className="inline ml-5 mt-5">
              <Link href="https://github.com/realstealthninja">
                
              </Link>
            </li>
            <li className="inline ml-5 mt-5">
              <Link href="https://www.instagram.com/realstealthninja/">
              
              </Link>
            </li>
            <li className="inline ml-5 mt-5">
              <Link href="https://www.youtube.com/channel/UCRBu1hybrrioa8hZc5_Ggig">
                
              </Link>
            </li>
            <li className="inline-block ml-5 mt-2 text-white bg-black opacity-20 pl-5 pr-5 pb-2 pt-2 rounded-xl">
              <Link href="/">home</Link>
            </li>
            <li className="inline-block ml-2 mt-2 text-white bg-black opacity-20 pl-5 pr-5 pb-2 pt-2 rounded-xl">
              <Link href="/mint">Mint</Link>
            </li>
            <li className="inline-block ml-2 mt-2 text-white bg-black opacity-20 pl-5 pr-5 pb-2 pt-2 rounded-xl">
              <Link href="/stake">Stake</Link>
            </li>
          </ul>
        </div>
    )}
);

export default NavBar
