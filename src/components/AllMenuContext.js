import { createContext } from "react"
import React,{useContext,useEffect,useState} from "react"
import Loader from "./Loader"


export const AllMenuContext=React.createContext()

export const AllMenus=(props)=>{
    let [menu, setMenu] = useState([]) 
    let [loading, setLoading]=useState(false) 
    async function getAllMenus(){
        setLoading(true)
        const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
          let response = await fetch(API_URL)
          let data = await response.json()
          setMenu(data.meals)
          setLoading(false)
        
    }
    useEffect(()=> {
        getAllMenus();
        
     }, [])


    return (
        <AllMenuContext.Provider value={menu}>
           {!loading ? props.children : <Loader/>}
        </AllMenuContext.Provider>
    )
}