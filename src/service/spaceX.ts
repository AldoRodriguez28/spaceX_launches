
import {type Doc, type APISpaceXResponose } from "../types/api";

export const getLauncheById = async ({id}: {id:string}) =>{
 
    const response = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);  

        const launches = (await response.json()) as Doc

return launches;
}

export const getLantestLaunches = async () =>{
 
        const response = await fetch('https://api.spacexdata.com/v5/launches/query',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            options: {
                sort:{
                    date_unix:'asc'
                },
                limit: 12,
            }
        })
    });  
        if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            const {docs: launches} = (await response.json()) as APISpaceXResponose
   
    return launches;
}

