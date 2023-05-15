import React from "react";
import { Link } from "react-router-dom";
import ProductListNewest from "../components/shownewest";
import ProductListPreview from "../components/preview";

function HomePage() {
  return (
    <>
      <header className="mx-auto pt-6 pb-1 px-10 bg-[#1A3A23] text-white">
        <nav className="flex justify-between items-center">
          <h1 className="text-xl font-bold">
            <Link to={`/`}>
              <span className="font-normal">eta</span>lasalle
            </Link>
            
          </h1>
          <nav className="flex gap-20">
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
        <h2 className="font-bold text-lg">Terbaru</h2>
        <div>
          <ProductListNewest />
        </div>
      </div>
      <div className="container mx-auto mt-20">
        <h2 className="font-bold text-lg">
          <Link to={`/makanan`}>
            Makanan dan Minuman
          </Link>
          </h2>
        <div>
          <ProductListPreview type="Makanan & Minuman" />
        </div>
      </div>
      <div className="container mx-auto mt-20">
        <h2 className="font-bold text-lg">
          <Link to={`/aksesoris`}>
            Aksesoris
          </Link>
        </h2>
        <div>
        <ProductListPreview type="Aksesoris" />
        </div>
      </div>
      <div className="container mx-auto mt-20">
        <h2 className="font-bold text-lg">
          <Link to={`/lainnya`}>
            Lainnya
          </Link>
        </h2>
        <div>
          <ProductListPreview type="Lainnya" />
        </div>
      </div>
      <footer class="mt-40 mb-5 border-t-4">
        <div class="container py-16 mx-auto flex justify-between gap-24">
          <div class="my-auto">
            <div>
              <Link to={`/categories`}>
                <h1 class="text-2xl font-bold text-[#1A3A23]"><span class="font-normal text-[#307543]">eta</span>lasalle</h1>
              </Link>
              <p class="mt-6 text-xs text-[#718075]">
                Platform yang memfasitilasi setiap warga Unika De La Salle <br />
                Manado dalam melakukan penggalangan dana.
              </p>
            </div>
          </div>

          <div>
            <h4 class="text-lg font-bold text-[#1A3A23]">Produk</h4>
            <ul class="space-y-4 mt-6 text-[#718075]">
              <li><Link to={'/makanan'}>Makanan & Minuman</Link></li>
              <li><Link to={'/aksesoris'}>Aksesoris</Link></li>
              <li><Link to={'/lainnya'}>Lainnya</Link></li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-bold text-[#1A3A23]">Hubungi Kami</h4>
            <ul class="space-y-4 mt-6 text-[#718075]">
              <li><a href="https://github.com/yeremialucky">20013022@unikadelasalle.ac.id</a></li>
              <li><a href="https://github.com/Asher09-11">21013009@unikadelasalle.ac.id</a></li>
            </ul>
          </div>
        </div>
        <h5 class="text-center text-[#BDBBBB] font-bold justify-center">COPYRIGHT @2023 | I/O DEVELOPMENT</h5>
      </footer>
    </>
  );
}

export default HomePage;
