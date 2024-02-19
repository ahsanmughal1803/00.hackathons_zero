import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart } from "@/components/icons/heart";
import Link from "next/link";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloudinary Photos App",
  description: "Photo app with next js 14",
};

function SideMenu(){
  return(
    <div className="pb-12 w-1/3">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Manage
          </h2>
          <Button 
          asChild
          variant="secondary" 
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
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="border-b px-4 container mx-auto">
          <div className="flex h-16 items-center ">
            PHOTO APP
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
