import Item from "../components/item-shop";
import styles from "../styles/shop.module.scss";

const Shop = () => {
  return (
    <>
      <div className={styles.intro}>
        <img src="/intro_shop.png" />
      </div>
      <hr />
      <div className={styles.tab_bar}>
        <div className={styles.tab_item}>
          <div className={styles.nav_tab}>
            <div className={styles.tab}>Popular</div>
            <div className={styles.tab}>Newest </div>
            <div className={styles.tab}>Ratest </div>
            <div className={styles.tab}>All</div>
          </div>
          <div className={styles.btn_search}>
            <input placeholder="Search"></input>
            <img src="/iconSearch.png" />
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
      <div className={styles.btn}>
        <button className={styles.b}>Tải thêm</button>
      </div>
      <div className={styles.icon_shop}>
      <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            viewBox="0 0 16 16"
            className={styles.itemBuy}
          >
            <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
          </svg>
      </div>
    </>
  );
};

export default Shop;
