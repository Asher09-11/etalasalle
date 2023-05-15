import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState("");

  // axios.get;
  // axios.post;
  // axios.patch;
  // axios.delete;
  const getdata = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/product/${id}`);
      setData(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getdata();
  }, []);
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


        <div class="container mx-auto mt-24 justify-center">
            <div class="flex gap-8">
                <img src={data.url} alt={data.name} class="w-[500px]"/>
                <div class="flex gap-8 ml-20">
                <ul class="space-y-8 text-start">
                    <li><h4 class="font-bold text-xl">{data.name}</h4></li>
                    <li><h4 class="font-bold text-xl">{data.price}</h4></li>
                    <li><h4 class="font-normal">{data.type}</h4></li>
                    <li><h4 class="font-normal">{data.contactname}</h4></li>
                    <li><h4 class="font-normal">{data.contactnumber}</h4></li>
                    <li><h4 class="font-normal">{data.description}</h4></li>
                </ul>
                </div>
            </div>
            <div class="text-end mt-10">
                <button
                onClick={() => window.open("https://wa.me/"+data.contactnumber)}
                className="bg-[#307543] py-1 px-5 rounded-lg text-xl text-white"
                rel="noopener noreferrer"
                >
                Hubungi Penjual
                </button>
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
};

export default DetailPage;
