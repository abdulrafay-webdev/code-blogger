import { NextResponse } from "next/server"
import { blogs } from "../blogsdata"

export async function GET(){
    return NextResponse.json(blogs)
}