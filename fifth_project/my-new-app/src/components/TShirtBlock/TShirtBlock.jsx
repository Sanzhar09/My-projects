import React, { useState } from 'react'
import styles from './TShirtBlock.module.scss'
import shirt from '../../images/shirt.jpg'
const TShirtBlock = ({title,price,imgUrl,sizes,types}) => {
  const typesName = ['Хлопок', 'Синтетика']
  const [activeType,setActiveType] = useState(0)
  const [activeSize,setActiveSize] = useState(0)
  const [ count,setCount] = useState(0)
  const someFunc = () => {
    setCount(count+1)
  }
  return (
    <div className={styles.mainBlock}>
      <div className={styles.firstBlock}>
        <img src={shirt} className={styles.shirtImage}/>
        <h2 className={styles.titleName}> {title}</h2>
      </div>
      <div className={styles.secondBlock}>
        <ul className={styles.blocks}>
          {typesName.map((type,index)=>
          <li
            onClick={()=>setActiveType(index)}
          className={activeType ===index? 'activeType': ''}>{type}</li> )}
        </ul>
        <ul className={styles.blocks}>
          {sizes.map((size,index)=>
           (<li 
            onClick={()=>setActiveSize(index)}
            className={activeSize ===index? 'activeSize': ''}>{size}</li>
           ))}
        </ul>
      </div>
      <div className={styles.thirdBlock}>
          <span className={styles.price}>from <span className={styles.priceBlock}>${price}</span></span>
          <button onClick={someFunc} className={styles.addButton}> 
          <span className={styles.plusButton}>+</span> Add to cart <span className={styles.countButton}>{count}</span> </button>
      </div>
    </div>

  )
}

export default TShirtBlock