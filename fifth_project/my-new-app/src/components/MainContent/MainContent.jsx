import { useState } from 'react';
import styles from './MainContent.module.scss';

const MainContent = () => {
  const list = [ 'popularity','by price','alphabetically'];
  const [select,setSelect] = useState(0);
  const [open, setOpen] = useState(false)
  const changeItemSort = (i) => {
    setSelect(i)
    setOpen(false)
  }

  const categories = [
    'All',
    "Men's",
    'Female',
    'Childish',
    'Box',
    'Accessories',
  ]
  const [categoryActive,setCategoryActive] = useState(0)

   const changeActiveCategory = (index) => {
    setCategoryActive(index)
   }

  return (
    <div className={styles.mainContent}>
      <div className={styles.contentButtons}>
        {categories.map((c,index)=>
         (<li
         key={c}
          onClick = {()=> changeActiveCategory(index)}
          className={categoryActive === index? 'activeMain':''}>
            {c}
          </li>
         
         ))}
      </div>
      <div className={styles.contentSort}>
        <div>
          <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.3138 5C11.3138 5.16927 11.2496 5.31576 11.1213 5.43945C10.9929 5.56315 10.8409 5.625 10.6653 5.625H1.58579C1.41015 5.625 1.25815 5.56315 1.12979 5.43945C1.00143 5.31576 0.937256 5.16927 0.937256 5C0.937256 4.83073 1.00143 4.68424 1.12979 4.56055L5.66954 0.185547C5.79789 0.061849 5.9499 0 6.12554 0C6.30119 0 6.45319 0.061849 6.58154 0.185547L11.1213 4.56055C11.2496 4.68424 11.3138 4.83073 11.3138 5Z" fill="#2C2C2C"/>
          </svg>
        </div>
        <b>Sorting by:</b>
        <span onClick={()=> setOpen(!open)}>{list[select]}</span>
        {
          open &&  (<div>
            <ul>
                {
                  list.map((l,index) =>
                  (<li
                  className={select ===index? 'activeList':'select'}
                    onClick={()=> changeItemSort(index)} 
                    key={l}> {l}</li>))
                }
  
            </ul>
          </div>)
        }
      </div>
    </div>
  )
}

export default MainContent