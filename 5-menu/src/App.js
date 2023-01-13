import './App.css';
import React, { useState } from 'react';
import items from './Data';
import Categories from './components/Categories';
import Menu from './components/Menu';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories,setCategories] = useState([]);

  function filterItems(category){
    if(category === 'all'){
      setMenuItems(items);
      return;
    }
      const newItems = items.filter((item)=> item.category === category)
      setMenuItems(newItems);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItems}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  );
}

export default App;
