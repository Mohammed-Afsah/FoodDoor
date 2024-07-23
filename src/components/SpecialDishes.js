import React,{useContext, useState} from 'react'
import CardDish from './CardDish';
import POpup from './POpup';
import { AllMenuContext } from './AllMenuContext'; 
import AddToCart from './AddToCart';
function SpecialDishes(props) {

  let [showPopup, setShowPopup]=useState(false)
  let [currentDish, setCurrentDish]=useState('')
  let [addToCartItem,setAddToCartItem]=useState([])

  const  allMenus = useContext(AllMenuContext)
 
  

  function showPopupHandler(dishName){
   
    setShowPopup(true);
    setCurrentDish(dishName);
  }

function closePopupHandler(){
  setShowPopup(false);
}

function addToCartHandler(addToCartImg,addToCartTitle){
     setAddToCartItem(
      [
        ...addToCartItem,
        {
          "img": addToCartImg,
          "title": addToCartTitle
        }
      ]
     )
}
let maxSpecialDishes=8;
let specialMenus=allMenus.map((menuItem, index) => {
  if(index < maxSpecialDishes) {
    return(
      <CardDish menuItem={menuItem}
      showPopup={showPopupHandler}/>
    )
  }
})

  return (
    
      <section className='special-dishes'>
        {showPopup && <POpup
         closePopup={closePopupHandler}
        currentDish={currentDish}
        addToCartHandler={addToCartHandler}
        
        ></POpup>}
             <div className='container'>
              <AddToCart addToCartItem={addToCartItem}/>
                  <div className='special-dishes-content text-center'>
                     <h2>Our Special Dishes</h2>
                     <p>“Food for us comes from our relatives, whether they have wings or fins or roots. That is how we consider food. Food has a culture. It has a history. It has a story. It has relationships.”</p>
                   </div>
             <div className='special-dishes-list'>
              <ul className='flex flex-wrap gap-30'>
                    {specialMenus} 
              </ul>
              </div>
          </div>
      </section>
  )
}

export default SpecialDishes