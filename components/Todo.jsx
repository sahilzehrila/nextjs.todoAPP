import React from 'react'

const Todo = ({title,description,complete,id,mongoId,d,u}) => {
  return (
    <>
      <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-blue-400 whitespace-nowrap ">
                    {id+1}
                </th>
                <td className={`px-6 py-4 font-medium text-pink-600 ${complete && 'line-through'}`}>
                           {title}
                         </td>
                         <td className={`px-6 py-4 font-medium text-pink-600 ${complete && 'line-through'}`}>
                          {description}
                         </td>
                         <td className={`px-6 py-4 font-medium text-pink-600 ${complete ? 'line-through' : ''}`}>
                           {complete ? 'complete' : 'un-complete'}
                         </td>

                <td>
                <button onClick={()=>d(mongoId)} className='bg-pink-600 text-white px-12 py-3  hover:bg-pink-500 text-white transition-all duration-300 '>
  Delete
</button>
{! complete && <button onClick={()=>u(mongoId)} className='bg-green-600 hover:bg-green-400  text-white px-12 py-3  hover:bg-blue-500 text-white transition-all duration-300 ml-2'>
 Update
</button>}
                </td>
            </tr>
       

    </>
  )
}

export default Todo
