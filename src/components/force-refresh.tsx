"use client";

import { Router } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function ForceRefresh(){
    const router= useRouter();

    useEffect(() => {
      router.refresh();
    }, [router]);
    
 return<></>
}