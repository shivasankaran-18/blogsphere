import { Avatar } from "./Card"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
export const Appbar = () => {
    const navigate=useNavigate();
    function fn()
    {
        localStorage.clear();
        navigate("/signin")

    }

    return <div className="border-b flex justify-between px-10 py-4 bg-gray-50">
        <Link to={'/blogs'} className=" flex flex-col justify-center cursor-pointer">
            
            <img  className="w-3/12 max-h-80"src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*jfdwtvU6V6g99q3G7gq7dQ.png"></img>
                 
        </Link>
        <div className="pt-3">
            <Link to={`/publish`} >
                <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">New</button>
            </Link>
            
            <button type="button" onClick={fn}className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Log out</button>
        

            <Avatar size={"big"} name="Shiva" />
        </div>
    </div>
}