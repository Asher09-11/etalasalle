import React from 'react';
import withAuth from "../components/authorization";
import ProductListAdmin from '../components/showallproduct';
import UploadImage from '../components/submitbutton';

const AdminPage = () => {
  return (
    <div className="justify-center items-center h-screen">
        <h1 className='text-[30px] font-bold mt-10'>Halaman Admin</h1>
        <ProductListAdmin />
        <UploadImage />
    </div>
 
  )
};

export default withAuth(AdminPage);