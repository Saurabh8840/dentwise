"use client"

import { getDoctors, updateDoctor } from "@/lib/actions/doctor";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query"
import { createDoctor } from "@/lib/actions/doctor";


export function useGetDoctors(){
    const result=useQuery({
       queryKey:["getDoctors"],
       queryFn:getDoctors,
    })

    return result;
}

//create doctor 

export function useCreateDoctor() {
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: createDoctor,
    onSuccess: () => {
      // invalidate related queries to refresh the data
      queryClient.invalidateQueries({ queryKey: ["getDoctors"] });
    },
    onError: (error) => console.log("Error while  creating a doctor"),
  });

  return result;
}


export function useUpdateDoctor(){
   const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: updateDoctor,
    onSuccess: () => {
      // invalidate related queries to refresh the data
      queryClient.invalidateQueries({ queryKey: ["getDoctors"] });
    },
    onError: (error) => console.log("Error while  creating a doctor"),
  });

  return result;

}
