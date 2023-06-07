import {BiCart} from 'react-icons/bi';
import styles from './Header.module.scss';
import MainContent from '../MainContent/MainContent';
import basket from '../../icons/basket.svg'
const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <div className={styles.headerLogo}>
            <a href='/' className={styles.headerLogoLink}>
              <h3>
                <span>This is</span> my T-Shirts
              </h3>
              <span>
                only originals things
              </span>
            </a>
        </div>
        <a href='/' className={styles.cartWrapper}>
          <p className={styles.cartPrice}>520 $</p>
          <div className={styles.cartBorder}></div>
          <div className={styles.cartBasket}>
           <img className={styles.basketImg} src={basket}/>
            <span>3</span>
          </div>
        </a>
      </header>
    </div>
  )
}

export default Header