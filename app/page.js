'use client'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'
import Todo from '@/components/Todo'
import { toast } from 'react-toastify'
import axios from 'axios'


export default function Home() {
  const [Form , SetForm] = useState({
    title:'',
    description:'',
  })
  const [AllTodos , SetAllTodos] = useState([])

  const setTitile = (e)=>SetForm({...Form,['title']:e.target.value})
  const setdescription = (e)=>SetForm({...Form,['description']:e.target.value})
  const reset = (e)=>SetForm({
    title:'',
    description:''
  })
  const FetchTodos = async()=>{

    try{
      const response = await axios.get(`/api`);
      SetAllTodos(response.data.todos)


    }catch(e){
       toast.error(e)
    }
  }

  const DeleteTodo = async(id)=>{

    try{
      const response =  axios.delete(`/api`,{
        params:{
          id:id
        }
      });
      toast.success((await response).data.msg)
     
      

await FetchTodos()
    }catch(e){
toast.error(e)
    }
  }
  const UpdateTodo = async(id)=>{

    try{
      const response =  axios.put(`/api`,{},{
        params:{
          id:id
        }
      });
      toast.success((await response).data.msg)
     
      

await FetchTodos()
    }catch(e){
toast.error(e)
    }
  }


  const SubmitHandel = async(e)=>{
    e.preventDefault();
    try{
      const response =  axios.post(`/api`,Form);
      toast.success(response)
        toast.success("Todo-list Created")
reset()


await FetchTodos()

    }catch(e){
toast.error(e)
    }
  }

  useEffect(()=>{
    FetchTodos()
  },[])

  return (
<>
<section className='w-full md:w-[70%] py-3 px-2 shadow-md mx-auto'>
<form>
<div className='mt-10'>
    <input type="text" value={Form.title} onChange={setTitile} className='w-full px-3  py-2 h-10 outline-none  border-2 border-pink-500' placeholder='Enter title'/>
    
  </div>
  <div className='mt-3'>
    <textarea value={Form.description} onChange={setdescription}  type="text" className='w-full px-3  py-2  outline-none  border-2 border-pink-500' placeholder='Enter description' rows={10} cols={30}/>
    
  </div>
  <button onClick={SubmitHandel} className='bg-pink-400 text-white px-8 py-3 rounded-full hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300'>
  Add Todo
</button>
<button onClick={SubmitHandel} className='bg-blue-400 ml-6  text-white px-8 py-3 rounded-full hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300'>
 Refresh
</button>

</form>
<div className='py-10'>


<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
   

<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase   dark:text-blue-400">
            <tr>
                <th scope="col" className="px-6 py-3 font-medium text-pink-600 whitespace-nowrap">
                   Number
                </th>
                <th scope="col" className="px-6 py-3">
                   Title
                </th>
                <th scope="col" className="px-6 py-3">
                    description
                </th>
                <th scope="col" className="px-6 py-3">
                   Status
                </th>
                <th scope="col" className="px-6 py-3 ">
                 Delete/update
                </th>
            </tr>
        </thead>
        <tbody>
         {
                AllTodos.length>0 &&   AllTodos.map((c,i)=>{
          return <Todo key={i} id={i} complete={c.isComplete} description={c.description} title={c.title}mongoId={c._id} d={DeleteTodo}u={UpdateTodo} />
         })
         }
          
          
        </tbody>
    </table>
</div>

</div>

  
</div>
</section>

</>
  )
}
