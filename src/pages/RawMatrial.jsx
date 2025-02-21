import React from 'react';
import Sidebar from '../components/Sidebar';
import { FiEdit , FiTrash2} from "react-icons/fi";
import '../styles/RawMatrial.css';
const RawMatrial = () => {
  return (
    <>
    <Sidebar />
    <div className='raw-mat text-right p-5 ml-3'>
        <h1 className=' text-2xl mb-6'>مخزن الخامات</h1>
        <div className='body flex text-center'>
            <div className='all-inputs m-2 flex justify-between w-full'>
                <div className='inputs '>
                    <div className='input flex flex-col mb-4'>
                        <label>الوحده</label>
                        <input type="text" />
                    </div>
                    <div className='input flex flex-col'>
                        <label>الحد الادني</label>
                        <input type="text" />
                    </div>
                </div>
                <div className='inputs max-w-screen-sm:ml-0'>
                    <div className='input flex flex-col mb-4'>
                        <label>اسم القطعه</label>
                        <input type="text" />
                    </div>
                    <div className='input flex flex-col'>
                        <label>القسم</label>
                        <input type="text" />
                    </div>
                </div>
            </div>
        </div>
        <div className="footer">
            <label>الملاحظات</label>
          <button> + انشاء الملاحظات </button>
        </div>
    </div>
    <div className='table-store ml-3'>
        <div className='head-table flex justify-between'>
            <div className='search'>
                <input className='border-2 border-solid text-right p-1 mr-1 border-slate-500 rounded-lg outline-none' type="search" placeholder='ابحث عن'/>
                <button className='text-[14px] border-transparent bg-[#002D62] text-[#FFF] cursor-pointer py-[0.5em] px-[2em] rounded-2xl' placeholder="ابحث عن">بحث</button>
            </div>
            <div className='text-tab flex'>
                <h1 className='text-2xl'>القطعه الحاليه</h1>
            </div>
        </div>
        <div className="tab" style={{overflowX:"auto"}}>
            <table>
                <tr style={{borderBottom:"1px solid #000"}}>
                    <th>
                        كود العنصر
                        <input type="radio" className=' cursor-pointer m-1'/>
                    </th>
                    <th>
                        اسم العنصر
                        <input type="radio" className=' cursor-pointer m-1'/>
                    </th>
                    <th>
                        الكميه الحاليه
                        <input type="radio" className=' cursor-pointer m-1'/>
                    </th>
                    <th>
                        الحد الادني
                        <input type="radio" className=' cursor-pointer m-1'/>
                    </th>
                    <th>
                        الوحده
                        <input type="radio" className=' cursor-pointer m-1'/>
                    </th>
                </tr>
                <tr>
                    <td>43/1</td>
                    <td>اكياس نايلون</td>
                    <td>1500</td>
                    <td>1500</td>
                    <td>كيلو جرام</td>
                    <td className='flex p-[12px] justify-evenly' >
                        <FiEdit style={{background:"#002D62",color:"#FFF",fontSize:"25px",padding:"5px",borderRadius:"10px",cursor:"pointer"}} />
                        <FiTrash2 style={{background:"#002D62",color:"#FFF",fontSize:"25px",padding:"5px",borderRadius:"10px",cursor:"pointer"}}/>
                    </td>
                </tr>
                <tr>
                    <td>43/1</td>
                    <td>اكياس نايلون</td>
                    <td>1500</td>
                    <td>1500</td>
                    <td>كيلو جرام</td>
                    <td className='flex p-[12px] justify-evenly' >
                        <FiEdit style={{background:"#002D62",color:"#FFF",fontSize:"25px",padding:"5px",borderRadius:"10px",cursor:"pointer"}} />
                        <FiTrash2 style={{background:"#002D62",color:"#FFF",fontSize:"25px",padding:"5px",borderRadius:"10px",cursor:"pointer"}}/>
                    </td>
                </tr>
                <tr>
                    <td>43/1</td>
                    <td>اكياس نايلون</td>
                    <td>1500</td>
                    <td>1500</td>
                    <td>كيلو جرام</td>
                    <td className='flex p-[12px] justify-evenly' >
                        <FiEdit style={{background:"#002D62",color:"#FFF",fontSize:"25px",padding:"5px",borderRadius:"10px",cursor:"pointer"}} />
                        <FiTrash2 style={{background:"#002D62",color:"#FFF",fontSize:"25px",padding:"5px",borderRadius:"10px",cursor:"pointer"}}/>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    </>
  )
}

export default RawMatrial
