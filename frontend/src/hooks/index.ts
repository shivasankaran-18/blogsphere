import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../config";



export type blog_type={
    title:string,
    content:string,
    author:{
        name:string
    },
    id:string,
    publishedDate:string,

}


export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<blog_type[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization:`Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(response => {
                setBlogs(response.data);
                setLoading(false);
            })
    }, [])

    return {
        loading,
        blogs
    }
}




