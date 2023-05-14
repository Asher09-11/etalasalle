import React from "react";
import { Link } from "react-router-dom";
import ProductListView from "../components/view";

function Makanan() {
  return (
    <>
      <header className="mx-auto pt-6 pb-1 px-10 bg-[#1A3A23] text-white">
        <nav className="flex justify-between items-center">
          <h1 className="text-xl font-bold">
            <Link to={`/categories`}>
              <span className="font-normal">eta</span>lasalle
            </Link>
            
          </h1>
          <nav className="flex gap-20">
                    Makanan dan Minuman
            <Link to={`/aksesoris`}>
                    Aksesoris
            </Link>
            <Link to={`/lainnya`}>
                    Lainnya
            </Link>
          </nav>
          <div className="flex gap-10">
            <Link to={`/jual`}>
              <div className="bg-[#307543] px-10 rounded-lg text-lg text-white">Jual</div>
            </Link>
            
          </div>
        </nav>
      </header>
      <div className="container">
        {/* <div className="mx-auto mt-2 pr-4 h-8 w-[500px] flex rounded-lg border-[1px] border-[#1A3A23] justify-end items-center">
          <a href="#"><img src="./assets/img/iconSearch.png" alt="" /></a>
        </div> */}
      </div>
      {/* content */}
      <div className="container mx-auto mt-20">
        <h2 className="font-bold text-lg">
            Makanan dan Minuman
          </h2>
        <div>
          <ProductListView type="Makanan & Minuman" />
        </div>
      </div>
    </>
  );
}

export default Makanan;
