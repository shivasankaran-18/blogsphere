import {Hono} from "hono"
import {PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from '@prisma/extension-accelerate'
import {sign,verify} from "hono/jwt";
import secret from "../Secret"
import { siginInput, signupInput } from "@shiva_18/common";



const router=new Hono<{
    Bindings:{
        DATABASE_URL:string
    }
}>();




router.post("/signup",async (c)=>{

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL ,
    }).$extends(withAccelerate())
    
    const body=await c.req.json();
    
    const val=signupInput.safeParse(body)
    if(!val.success)
    {
        c.status(411);
        return c.json({
          msg:"invalid inputs"
        })
    }
    try{
    
      const res=await prisma.user.create({
        data:{
          email:body.email,
          name:body.name,
          password:body.password
    
        }
      })
    
      const token=await sign({id:res.id},secret)
    
      return c.json({token:token}); 

    }
    catch(err)
    {
      c.status(411);
      c.json({msg:"error"})
    }

    
    
  })
  
  router.post("/signin",async (c)=>{
    
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    const body=await c.req.json();

    const val=siginInput.safeParse(body)
    if(!val.success)
    {
        c.status(411);
        return c.json({
          msg:"invalid inputs"
        })
    }
  
    const res=await prisma.user.findUnique({
      where:{
        email:body.email,
        password:body.password
      }
    })
  
    if(!res)
    {
        c.status(403);
        return c.json({
          msg:"user doesn't exist",
        })
    }
    const token=await sign({id:res.id},secret);
    return c.json({
      token
    })
  
  })


  export default router