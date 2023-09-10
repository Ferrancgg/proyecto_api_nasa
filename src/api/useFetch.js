import { useEffect, useState } from "react"

useEffect

const useFetch=(url)=>{

const [data,setData]=useState("")
const [loading, setLoading]=useState(true)

useEffect(()=>{
    setLoading(true)
    // fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=vM6LOdhWFgosMgj5S5xzNPFj5KIJeGviD4FbsaIe`)
    fetch(url)
    .then((result)=>result.json())
    .then((res)=>setData(res))
    .finally(()=>setLoading(false))
},[url])


    return {data, loading}

}

export default useFetch