import React,{useEffect,useState} from 'react'
import axios from "axios";
function Table() {
      const getdata = axios.get("https://irdai-server.onrender.com/api/fetchppm");
      const [data,setData] = useState([])
      useEffect( () => {
      (  async function datas (){
        
        if (!data) {
            return null;
        } else {
              try {
                const token = localStorage.getItem('token');
     console.log("token",token);
      getdata.then((response) => {
        setData(response.data)
      })
          } catch (err) {
            console.log('pages auth in error');
            console.log(err);
          }
        }
        
        })();
      },[]);
  return (
   <>
   
<div className='px-20 pt-40 pb-80'>
   <div className="relative overflow-x-auto shadow-2xl sm:rounded-lg py-10 px-10">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-white">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Registration no:
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Bank
                </th>
                <th scope="col" class="px-6 py-3">
                    Phone no
                </th>
                <th scope="col" class="px-6 py-3">
                    PPM
                </th>
                <th scope="col" class="px-6 py-3">
                 Annual Due
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        {data.length==0?<div>loading</div>:    <tbody>
            {data.map(item =>{
                return(
                    <>
                     <tr class="bg-white border-b hover:bg-gray-100" key={item.id}>
                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                      {item.user.registration_number}
                    </th>
                    <td class="px-6 py-4">
                    {item.user.name}
                    </td>
                    <td class="px-6 py-4">
                    {item.user.bank}
                       
                    </td>
                    <td class="px-6 py-4">
                    {item.user.phone_number}

                    </td>
                    <td class="px-6 py-4">
                    {item.ppm}

                    </td>
                    <td class="px-6 py-4">
                    {item.ppm>=350?1500:0}
                    </td>
                    <td class="px-6 py-4 text-right">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                  </tr>
                    </>
                   
                )
            })}
        </tbody>}
    
    </table>
   </div>
</div>
   


   </>
  )
}

export default Table