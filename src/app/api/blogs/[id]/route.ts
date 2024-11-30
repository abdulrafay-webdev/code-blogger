import { NextResponse } from "next/server";
import { blogs } from "../../blogsdata";

export async function GET(req:Request,{params}:{params:{id:string}}){
    const {id}=params;
    const item = blogs.find((item)=>item.id===parseInt(id))

    if(!item){
        return NextResponse.json({error:"blog not found"},{status:404})
    }

    return NextResponse.json(item)
}