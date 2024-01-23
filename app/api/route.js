import { NextResponse } from "next/server";
import {CDB} from '@/lib/config/db'
import Todo from "@/components/Todo";
import Todomodel from "@/models/Todomodel";


const LocalDB = async()=>{
    await CDB();
}
LocalDB()

export async function POST(request){

    const {title,description} = await request.json()

    await Todomodel.create({
      
      title,description
    })
    return NextResponse.json({msg:"hiii from api"},{status:201})
}

export async function GET(request){
const todos = await Todomodel.find({});
return NextResponse.json({todos})
}

export async function DELETE(request){
 const id = request.nextUrl.searchParams.get("id")
 await Todomodel.findByIdAndDelete(id)
  return NextResponse.json({msg:"Todo deleted"},{status:200})
  }
  export async function PUT(request){
    const id = request.nextUrl.searchParams.get("id")
    await Todomodel.findByIdAndUpdate(id,{
      $set:{
        isComplete:true
      }
    })
     return NextResponse.json({msg:"Todo Updated"},{status:200})
     }