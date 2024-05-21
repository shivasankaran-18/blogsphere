import zod from "zod";
export declare const signupInput: zod.ZodObject<{
    email: zod.ZodString;
    name: zod.ZodString;
    password: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    email: string;
    name: string;
    password: string;
}, {
    email: string;
    name: string;
    password: string;
}>;
export declare const siginInput: zod.ZodObject<{
    email: zod.ZodString;
    password: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const createBlogInput: zod.ZodObject<{
    title: zod.ZodString;
    content: zod.ZodString;
    date: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    title: string;
    content: string;
    date: string;
}, {
    title: string;
    content: string;
    date: string;
}>;
export declare const updateBlogInput: zod.ZodObject<{
    title: zod.ZodString;
    content: zod.ZodString;
    id: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    title: string;
    content: string;
    id: string;
}, {
    title: string;
    content: string;
    id: string;
}>;
export type signupInput = zod.infer<typeof signupInput>;
export type siginInput = zod.infer<typeof siginInput>;
export type createBlogInput = zod.infer<typeof createBlogInput>;
export type updateBlogInput = zod.infer<typeof updateBlogInput>;
