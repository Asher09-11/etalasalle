import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>
      <header className="container mx-auto mt-5">
        <nav className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-[#1A3A23]"><span className="font-normal text-[#307543]">eta</span>lasalle</h1>
          <div className="flex gap-10">
            <Link to={`/adminlogin`}>
                    Admin
            </Link>
          </div>
        </nav>
      </header>

      {/* landing page */}
      <div className="container mx-auto">
        <div className="mt-40 text-center">
          <p className="font-semibold text-2xl">Selamat Datang di</p>
          <h1 className="text-8xl font-bold text-[#1A3A23]"><span className="font-normal text-[#307543]">eta</span>lasalle</h1>
          <p className="mt-4 text-sm text-[#718075]">
            Platform yang memfasilitasi setiap warga Unika De La Salle Manado <br />
            dalam melakukan penggalangan dana.
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-10">
          <Link to={`/jual`}>
            <div className="bg-[#307543] py-1 px-20 rounded-lg text-xl text-white">Jual</div>
          </Link>
          <Link to={`/categories`}>
            <div className="bg-[#307543] py-1 px-20 rounded-lg text-xl text-white">Beli</div>
          </Link>
        </div>
      </div>

      {/* footer */}
      <footer>
        <nav className="flex justify-center gap-20 mt-36">
            <Link to={`/makanan`}>
                    Makanan dan Minuman
            </Link>
            <Link to={`/aksesoris`}>
                    Aksesoris
            </Link>
            <Link to={`/lainnya`}>
                    Lainnya
            </Link>
        </nav>
      </footer>
    </>
  );
}

export default LandingPage;
