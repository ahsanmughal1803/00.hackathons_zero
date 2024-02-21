"use client";

import { useRouter } from "next/router";
import { useEffect } from "react";

export function ForceRefresh(){
    const router= useRouter();

    useEffect(() => {
      router.push(router.pathname);
    }, []);
    
 return<></>
}