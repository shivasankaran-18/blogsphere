import zod from "zod"


export const signupInput=zod.object({
    email:zod.string().email(),
    name:zod.string(),
    password:zod.string()
})

export const siginInput=zod.object({
    email:zod.string().email(),
    password:zod.string()
})


export const createBlogInput=zod.object({
    title:zod.string(),
    content:zod.string(),
    date:zod.string()
})

export const updateBlogInput=zod.object({
    title:zod.string(),
    content:zod.string(),
    id:zod.string()
})





export type signupInput=zod.infer<typeof signupInput>
export type siginInput=zod.infer<typeof siginInput>
export type createBlogInput=zod.infer<typeof createBlogInput>
export type updateBlogInput=zod.infer<typeof updateBlogInput>