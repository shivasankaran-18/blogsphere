import {PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate"
import {Hono} from "hono"
import {verify ,sign} from "hono/jwt";
import secret from "../Secret"
import { createBlogInput,updateBlogInput } from "@shiva_18/common";



const router =new Hono<{
    Bindings:{
        DATABASE_URL:string
    },
    Variables:{
        id:string
    }
}>()


router.use("/*",async (c,next)=>{
    
  
    try{
        const header =c.req.header("authorization") || ""
        const token=header.split(" ")[1] || "";
        const res=await verify(token,secret)
        c.set("id" ,res.id)
        await next();

    }
    catch(err)
    {
        c.status(403);
        c.json({
            msg:"invalid user"
        })

    }
})

router.get("/delete",async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body=await c.req.json();
    await prisma.post.delete({
        where:{
            id:body.id
        }
    })
    return c.text("done")
})


router.get("/details",async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const result=await prisma.user.findUnique({
        where:{
            id:c.get("id") || ""
        }
    })

    return c.json(result)

})


router.post("/new",async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())



    const body=await c.req.json();
    console.log(body);
    const val=createBlogInput.safeParse(body)
    if(!val.success)
    {
        c.status(411);
        return c.json({
          msg:"invalid inputs"
        })
    }



    const res=await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            authorId:c.get("id") || "",
            publishedDate:body.date,
        }
    })

    return c.json({
        id:res.id
    })



})


router.put("/update",async (c)=>{
    
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body=await c.req.json();

    const val=updateBlogInput.safeParse(body)
    if(!val.success)
    {
        c.status(411);
        return c.json({
          msg:"invalid inputs"
        })
    }

    const res=await prisma.post.update({
        where:{id:body.id},
        data:{
            title:body.title,
            content:body.content,
        }
    })

    return c.json({
        id:res.id
    })
    
})

router.get("/bulk" ,async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try{
        const post=await prisma.post.findMany({
            select:{
                title:true,
                content:true,
                id:true,
                publishedDate:true,
                author:{
                    select:{
                        name:true,
                    }
                    
                }
            }
        })
        console.log(post)
        return c.json(post);
    }
    catch(err)
    {
        c.status(411);
        return c.json({
            msg:"error"
        })
    }





  
})


router.get("/:id",async (c)=>{
    const id=c.req.param("id")
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    try{
        const post=await prisma.post.findFirst({
            where:{
                id
            },
            select:{
                title:true,
                content:true,
                id:true,
                authorId:true,
                publishedDate:true,
                author:{
                    select:{
                        name:true
                    }
                }
            }
        })

        return c.json(post);
    }
    catch(err)
    {
        c.status(411);
        return c.json({
            msg:"error"
        })
    }
    




    
  })





















export default router;