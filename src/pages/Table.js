import React,{useEffect,useState,useCallback} from 'react'
import axios from "axios";
function Table() {
    //https://irdai-server.onrender.com
      const getdata = axios.get("https://irdai-server.onrender.com/api/fetchppm");
      const [data,setData] = useState([])
      const [Credits,setCredits] = useState(0)

 
    const func = useCallback(async ()=>{
        try {
            const token = localStorage.getItem('token');
    console.log("token",token);
    axios.get("https://irdai-server.onrender.com/api/fetchppm").then((response) => {
    setData(response.data)
    })
      } catch (err) {
        console.log('pages auth in error');
        console.log(err);
      }
    })
      
  useEffect(() => {
  
    func();
  }, []);
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
                {/* <th scope="col" class="px-6 py-3">
                    Distraction
                </th> */}
                <th scope="col" class="px-6 py-3">
                 Annual Due
                </th>
                <th scope="col" class="px-6 py-3">
                 Credits
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
                    {/* <td class="px-6 py-4">
                    {item.distraction}
                    </td> */}
                    <td class="px-6 py-4">
                    {1000+item.fine}
                    </td>
                    <td class="px-6 py-4">
                    {Credits}
                    </td>
                 
                    <td class="px-6 py-4 text-right">
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded" 
                    onClick={()=>{setCredits(1000)}}
                    >
  Update Credits
</button>                          </td>
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