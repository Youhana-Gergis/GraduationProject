import React from 'react'
import Sidebar from '../components/Sidebar';
import imgprofile from '../assets/profile.jpg';
import '../styles/EmployeeData.css';
const EmployeeData = () => {
  return (
    <>
        <Sidebar />
        <div className="emp-data p-[10px]">
            <h1>بيانات الموظف</h1>
            <div className='info-emp flex justify-between align-middle mb-12'>
                <div className='input-info'>
                    <div className='input flex flex-col w-full mb-6'>
                        <label>الاسم</label>
                        <input type="text" />
                    </div>
                    <div className='input flex flex-col mb-6'>
                        <label>التوقيع</label>
                        <input type="text" />
                    </div>
                    <div className='input flex flex-col mb-6'>
                        <label>الشركة</label>
                        <input type="text" className='text-center' />
                    </div>
                </div>
                <div className='edit-photo mr-10'>
                    <img src={imgprofile} alt="" width={150} height={150} style={{borderRadius:"20px"}} />
                    <div className='input flex flex-col'>
                        <label>رقم التليفون</label>
                        <input type="text"/>
                    </div>
                </div>
            </div>
            <div className='div2 mt-10'>
                <div className='eff-emp'>
                    <div className='text-title'>
                        <h1>كفاءات الموظف</h1>
                    </div>
                    <div className='text-body font-bold'>
                        <h3>حسابات</h3>
                        <h3>مبيعات</h3>
                        <h3>مخازن</h3>
                        <h3>مشتريات</h3>
                        <h3>تصنيع للتغير</h3>
                    </div>
                </div>
                <div className='manage'>
                    <h1>القسم</h1>
                    <input type="text" />
                </div>
            </div>
        </div>
    </>
  )
}

export default EmployeeData
