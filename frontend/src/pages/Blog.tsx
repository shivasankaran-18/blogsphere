import { useRecoilStateLoadable, } from "recoil";
import { Appbar } from "../components/Appbar";
import { FullBlog } from "../components/FullBlog";
import { Spinner } from "../components/Spinner";
import {useParams} from "react-router-dom";
import {  fullBlog } from "../atom";



// atomFamilies/selectorFamilies
export const Blog = () => {
    const { id =""} = useParams() ;
    const [blog,]=useRecoilStateLoadable(fullBlog(id));

    if (blog.state=="loading") {
        return <div>
            <Appbar />
        
            <div className="h-screen flex flex-col justify-center">
                
                <div className="flex justify-center">
                    <Spinner />
                </div>
            </div>
        </div>
    }

    console.log(blog.contents)
    return <div>
        <FullBlog blog={blog.contents} />
    </div>
}