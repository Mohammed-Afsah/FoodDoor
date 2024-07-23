import React from'react';
import Hero from './Hero'
import SpecialDishes from './SpecialDishes';
import FilteredDishes from './FilteredDishes';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './Header';
import {AllMenus} from './AllMenuContext';
import Checkout from './Checkout';
import  AppProvider  from '../Context/AppProvider';
//create a global context which can be shared to children
export const AllMenuContext = React.createContext()

function Menus(){
         return (
        <div>   
        <Router>
            <AppProvider>
            <Header/>
            <Hero />
            <Routes>
                <Route exact path='/'element={<AllMenus>
                 <SpecialDishes/>
                    <FilteredDishes />
                    </AllMenus>
                }/>
                <Route path='/checkout' element={ <Checkout/>}/>
                   
            </Routes> 
            </AppProvider>  
        </Router>
         </div>    
    );
}

export default Menus;