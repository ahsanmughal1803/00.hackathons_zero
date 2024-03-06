<<<<<<< HEAD

import Hero from "./components/Hero";
import Newest from "./components/Newest";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero/>
      <Newest/>
    </div>
=======
"use client";
import { CldImage } from 'next-cloudinary';
import { CldUploadButton } from 'next-cloudinary';
import { useState } from 'react';

export type UploadResult={
  info:{
    public_id:string
  }
  event:"success";
}

export default function Home() {
  const [imageId, setImageId]= useState("")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      

      {imageId && (
      <CldImage
        width="400"
       height="300"
       src={imageId}
       sizes="100vw"
       alt="Description of my image"
     />
     )}
    </main>
>>>>>>> 2422d7eb12ffc7747d1c5fe93e5ec04c8300facb
  );
}
