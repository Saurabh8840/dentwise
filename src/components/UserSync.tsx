"use client"
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { syncUser } from "@/lib/actions/users";

export function UserSync(){

    const {isSignedIn,isLoaded}=useUser();

    useEffect(()=>{
        const handleUserSync=async()=>{
            if(isLoaded && isSignedIn){
                try {
                    await syncUser();

                } catch (error) {
                    console.log("Failed to sync user",error);
                }
            }
        };

        handleUserSync();
    },[isLoaded,isSignedIn]);

    return null;

}