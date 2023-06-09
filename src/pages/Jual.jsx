import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Jual() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [contactname, setContactName] = useState('');
  const [contactnumber, setContactNumber] = useState('');
  const [price, setPrice] = useState("");


  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
    setErrorMsg(null);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleContactNameChange = (event) => {
    setContactName(event.target.value);
    setErrorMsg(null);
  };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleUpload = async () => {
    if (!file) {
      setErrorMsg("Please select an image to upload");
      return;
    }

  
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("type", type);
    formData.append("contactname", contactname);
    formData.append("contactnumber", contactnumber);
    formData.append("price", price);
  
    try {
      const response = await axios.post("http://localhost:5000/product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data.msg);
      setFile(null);
      setPreview(null);
      setTitle("");
      setDescription("");
      setType("");
      setContactName("");
      setContactNumber("");
      setPrice("");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <header className="mx-auto pt-6 pb-1 px-10 bg-[#1A3A23] text-white">
        <nav className="flex justify-between items-center">
          <Link to={`/categories`}>
            <h1 className="text-xl font-bold">
              <span className="font-normal">eta</span>lasalle
            </h1>
          </Link>
            
          
          <nav className="flex gap-20">
            <Link to={`/makanan`}>Makanan dan Minuman</Link>
            <Link to={`/aksesoris`}>Aksesoris</Link>
            <Link to={`/lainnya`}>Lainnya</Link>
          </nav>
        </nav>
      </header>
  
      {/* form */}
      <div className="container mx-auto mt-10">
        <h2 className="font-bold text-lg">Mau Jual Apa Hari ini?</h2>
        <div className="flex mt-10 gap-4 justify-center">
          <ul className="space-y-8 text-end">
            <li>
              <h4 className="font-bold">Nama</h4>
            </li>
            <li>
              <h4 className="font-bold">Kontak</h4>
            </li>
            <li>
              <h4 className="font-bold">Nama Produk</h4>
            </li>
            <li>
              <h4 className="font-bold">Harga</h4>
            </li>
            <li>
              <h4 className="font-bold">Kategori</h4>
            </li>
            <li>
              <h4 className="font-bold">Foto Produk</h4>
            </li>
            <li>
              <h4 className="font-bold">Keterangan</h4>
            </li>
          </ul>
          <ul className="space-y-6">
            <li>
              <div className="pr-4 h-8 w-[500px] flex rounded-lg border-[1px] border-[#1A3A23]">
                <input
                    type="text"
                    name="contactname"
                    value={contactname}
                    onChange={handleContactNameChange}
                    className='w-[500px]'
                />
              </div>
            </li>
            <li>
              <div className="pr-4 h-8 w-[500px] flex rounded-lg border-[1px] border-[#1A3A23]">
                <input
                    type="text"
                    name="contactnumber"
                    value={contactnumber}
                    onChange={handleContactNumberChange}
                    className='w-[500px]'
                />
              </div>
            </li>
            <li>
              <div className="pr-4 h-8 w-[500px] flex rounded-lg border-[1px] border-[#1A3A23]">
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleTitleChange}
                    className='w-[500px]'
                />
              </div>
            </li>
            <li>
              <div className="pr-4 h-8 w-[500px] flex rounded-lg border-[1px] border-[#1A3A23]">
                <input
                    type="number"
                    name="price"
                    value={price}
                    onChange={handlePriceChange}
                    className='w-[500px]'
                />
              </div>
            </li>
            <li>
              <div className="pr-4 h-8 w-[500px] flex rounded-lg border-[1px] border-[#1A3A23]">
                <select name="type" value={type} onChange={handleTypeChange} className='w-[500px]'>
                    <option value="">Pilih Tipe</option>
                    <option value="makanan">Makanan_&_Minuman</option>
                    <option value="aksesoris">Aksesoris</option>
                    <option value="lainnya">Lainnya</option>
                </select>
              </div>
            </li>
            <li>
              <div className="pr-4 h-8 w-[500px] flex rounded-lg border-[1px] border-[#1A3A23] ">
                <input
                    type="file"
                    name="file"
                    onChange={handleFileChange}
                    className='w-[500px]'
                />
              </div>
            </li>
            <li>
              <div className="pr-4 h-[120px] w-[500px] flex rounded-lg border-[1px] border-[#1A3A23]">
                <textarea
                    name="description"
                    value={description}
                    onChange={handleDescriptionChange}
                    className='w-[500px]'
                />
              </div>
            </li>
          </ul>
        </div>
        <div className='justify-center align-middle mx-[580px]'>
            {preview && (
                <img
                className="mt-3"
                src={preview}
                alt="Preview"
                width={400}
                />
            )}
        </div>
        
        <div className="justify-end text-center mt-10 mx-[580px]">
          <div className="bg-[#307543] py-1 justify-center w-[500px] rounded-lg text-xl text-white">
            <button onClick={handleUpload}>Upload</button>
          </div>
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


export default Jual;
