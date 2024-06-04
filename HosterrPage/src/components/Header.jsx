import { FiAlignJustify } from "react-icons/fi";

function Header(){
    return (
        <div className="flex justify-between ">
            <div className="flex item-center justify-center gap-2">
                 <img src="" alt="logo" srcset="" />
                 <button className="bg-gradient-to-r from-orange-400 to-red-300 rounded-2xl p-1 text-xs text-white">Hosting is hiring</button>
            </div>
            <ul className="hidden lg:flex justify-between items-center ">
                <li><a href="">Plans</a></li>
                <li><a href="">Find Domain</a></li>
                <li><a href="">Why Hoster</a></li>
            </ul>
            <div>
                <a href="">Sign In</a>
                <button>Join Waitlist</button>
            </div>
            <div className="lg:hidden">
                 <FiAlignJustify />
            </div>
        </div>
    )
}

export default Header