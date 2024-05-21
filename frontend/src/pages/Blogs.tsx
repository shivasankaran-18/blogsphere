

import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/Card";
import { Skeleton } from "../components/Skeleton";
import { blog_type, useBlogs } from "../hooks";


export const Blogs=()=>{
    const {loading,blogs}=useBlogs()

    if(loading)
    {
        return(
            <div>   
                <Appbar />
                <Skeleton />
                
            </div>
            
        )

     }
   

    return( 
    
    
    <div>
        <Appbar />
    <div  className="flex justify-center">
        <div>

            {blogs.map((blog:blog_type)=>{
                return <BlogCard  id={blog.id} authorName={blog.author.name} title={blog.title} content={blog.content} publishedDate={blog.publishedDate}/>
            })}
            
        </div>
    </div>
</div>
    )

}