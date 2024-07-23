import React,{useContext, useState,useEffect} from 'react'
import Pagination from './Pagination'
import CardDish from './CardDish'
import { AllMenuContext } from './AllMenuContext'

function FilteredDishes(props) {


    async function getAllTheCategories(){
        const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php"
          let response  = await fetch(API_URL)
          let categoryData = await response.json()
          setMenuCategory(categoryData.categories)
    }
    async function getOnlyOneDish(){
        const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
          let response  = await fetch(API_URL)
          let singleDishData = await response.json()
          setSingleDish(singleDishData.meals)
         
    } 

   
    useEffect(()=> {
        
   
        getAllTheCategories();
        getOnlyOneDish();
   
    
           }, [])
  







    let allMenus =useContext(AllMenuContext)
    

    // let [allMenus, setAllMenus]=useState(props.allMenus)
let [menuCategory, setMenuCategory] = useState([])
let [singleDish, setSingleDish]=useState([])
let [filteredDishes, setFilteredDishes]=useState([])
let [activeDish, setActiveDish]=useState("Beef")
let [currentPage, setCurrentPage]=useState(1)
let [itemsPerPage, setItemsPerPage]=useState(4)

let indexOfLastDish=currentPage*itemsPerPage;

let indexOfFirstDish=indexOfLastDish-itemsPerPage

let showTheDishesNow=filteredDishes.slice(indexOfFirstDish,indexOfLastDish)

let maxItem=4


let singleDishItems=singleDish.map((item, index)=>{
    if(index<maxItem){
    return (
        <li>
            <img src={item.strMealThumb} className="br-10"alt=""/>
            <h5>{item.strMeal}</h5>
        </li>
    )}
})
  function showFilteredDishesHandler(category){
    setSingleDish([])
    setActiveDish(category)
    let filteredDishesAre = allMenus.filter((item)=>{
        return item.strCategory === category
     }).map((menuItem)=>{
        return (
            <CardDish menuItem={menuItem} />
        )
     })
     setFilteredDishes(filteredDishesAre)
  }

   let allCategories = menuCategory.map((item)=>{
        return(
            <li className={item.strCategory === activeDish ? "active" : ""}onClick={()=>{showFilteredDishesHandler(item.strCategory)}}>{item.strCategory}</li>
          )
    });
    return  (    
            <div className='filtered-dishes'>
            <div className='container'>
                <div className='text-center'>
                   <h2>Choose your dishes</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eaque voluptas inventore maiores tenetur, quisquam modi suscipit animi, aliquid neque cum ab expedita molestias molestiae consequuntur aspernatur iure! Aut, provident.</p>
                </div>
                <div className='filtered-dishes'>
                    <ul>
                        {allCategories}
                    </ul>
                </div>
                <div className="filtered-dishes-results">
                    <ul className="flex flex-wrap gap-30">
                        {singleDishItems}
                        { singleDishItems !=0 || filteredDishes.length !=0 ? showTheDishesNow : 
                        <div className='alert'>
                            <h3>Sorry, No items found</h3>
                            <h4>Please try another dishes</h4>
                            </div>}
                          
                    </ul>
                </div>
              
               <Pagination filteredDishes={filteredDishes}
                   itemsPerPage={itemsPerPage}
                   currentPage={currentPage}
                   setCurrentPage={setCurrentPage}
               ></Pagination>
               </div>
            </div>
  )
}

export default FilteredDishes