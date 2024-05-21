
import { blog_type } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./Card"
import { catchPhrases } from "../phrases"

import { useNavigate } from "react-router-dom"

export const FullBlog = ({ blog }: {blog: blog_type}) => {
    const navigate=useNavigate();

   


    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
                <div className="col-span-8 flex flex-col justify-center gap-10">
                    <div >
                        <div className="text-5xl font-extrabold">
                            {blog.title}
                        </div>
                        <div className="text-slate-500 pt-2">
                            Posted on {blog.publishedDate}
                        </div>
                        <div className="pt-4">
                            {blog.content}
                        </div>
                    </div>
                   
                    <div className="flex justify-center ">
                    <button type="button" onClick={()=>navigate("/blogs")}className=" w-3/12 text-white bg-blue-700  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2  ">Back</button>

                    </div>
                </div>
                <div className="col-span-4">
                    <div className="text-slate-600 text-lg">
                        Author
                    </div>
                    <div className="flex w-full">
                        <div className="pr-4 flex flex-col justify-center">
                            <Avatar size="big" name={blog.author.name || "Anonymous"} />
                        </div>
                        <div>
                            <div className="text-xl font-bold">
                                {blog.author.name|| "Anonymous"}
                            </div>
                            <div className="pt-2 text-slate-500">
                                {catchPhrases[Math.floor(Math.random()*10)]}
                            </div>
                        </div>
                    </div>  
                </div>
                
            </div>
        </div>
    </div>
}
