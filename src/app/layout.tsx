import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart } from "@/components/icons/heart";
import Link from "next/link";
import cloudinary from "cloudinary"
import { Folder } from "./albums/page";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloudinary Photos App",
  description: "Photo app with next js 14",
};

 async function SideMenu(){

  const {folders} = (await cloudinary.v2.api.root_folders()) as{
    folders: Folder[]
 }

  return(
    <div className="pb-12 w-1/3">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Manage
          </h2>
          <Button 
          asChild
          variant="ghost" 
          className="w-full justify-start flex gap-2" >
            <Link href="/gallery">
          <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="w-6 h-6">
          <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
           </svg>
              Gallery
              </Link>
            </Button>
            <Button asChild
             variant="ghost" className="w-full justify-start gap-2">
              <Link href="/albums">
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6">
            <path 
            strokeLinecap="round" 
            strokeLinejoin="round"
             d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
            </svg>
               Albums
               </Link>
            </Button>
            {folders.map((folder) => (
            <Button variant="ghost"
             asChild
             key={folder.name} className="w-full justify-start flex gap-2"> 
              <Link className="pl-8" href={`/albums/${folder.path}`}>{folder.name}</Link>
              </Button>
              ))}
          <Button asChild variant ="ghost" className="w-full justify-start flex gap-2">
            <Link href="/favorites">
              <Heart />
              Favorite
              </Link>
            </Button>
          </div>
        </div>
        </div>
        
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        <div className="border-b px-4 container mx-auto">
          <div className="flex h-16 items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
         <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
          </svg>
           WebDevCody Photos
            <div className="ml-auto flex items-center space-x-4">
            <Avatar>
             <AvatarImage 
             src="https://github.com/shadcn.png" 
             alt="@shadcn" />
             <AvatarFallback>CN</AvatarFallback>
             </Avatar>
            </div>
          </div>
        </div>
        <div className="flex">
        <SideMenu/>
        <div className="w-full px-4 pt-10">{children}</div>
        </div>
        </body>
    </html>
  );
}
