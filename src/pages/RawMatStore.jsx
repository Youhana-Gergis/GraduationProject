import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/RawMatStore.css';
import pdf from '../assets/pdf.png';
import excel from '../assets/excel.png';
import download from '../assets/download.png';
import { FiEdit , FiTrash2} from "react-icons/fi";
const RawMatStore = () => {
  return (
    <>
    <Sidebar />
    <div className='RMStore text-right p-5 ml-3'>
        <h1 className=' text-2xl mb-6'>اضافه اصناف</h1>
        <div className='body flex justify-between flex-row-reverse'>
            <div className='down relative'>
                <input type="file" className=' bottom-0 pt-14 w-[210px] h-[200px] opacity-0'/>
                <img src={download} alt='' className=' absolute top-0 w-[210px] h-[200px] z-[-1]'/>
            </div>
            <div className='all-inputs m-2 flex justify-between'>
                <div className='inputs'>
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
          <button>اضافه</button>
        </div>
    </div>
        <div className='tables ml-3'>
            <div className='storage'>
                <div className='head flex justify-between mb-3'>
                    <div className='search'>
                        <input className='border-2 border-solid text-right p-1 mr-1 border-slate-500 rounded-lg outline-none' type="search" placeholder='ابحث عن'/>
                        <button className='text-[14px] border-transparent bg-[#002D62] text-[#FFF] cursor-pointer py-[0.5em] px-[2em] rounded-2xl' placeholder="ابحث عن">بحث</button>
                    </div>
                    <div className='flex'>
                        <img className='img1 cursor-pointer' src={pdf} style={{width:"30px", height:"30px"}} alt="" />
                        <img className='img2 ml-1 cursor-pointer' src={excel} style={{width:"30px", height:"30px"}} alt="" />
                        <h1 className='ml-4'>اصناف المخزن</h1>
                    </div>
                </div>
                <div className='table'>
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
        </div>
    </>
  )
}

export default RawMatStore
