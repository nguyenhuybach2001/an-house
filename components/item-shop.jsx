import styles from "../styles/item.module.scss";
import React, { useState } from "react";

function Item() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <img
            className={styles.image}
            style={{ height: 200, cursor: "pointer" }}
            src="/img_item.png"
            
          />

          <div className={styles.title}>
            <h3>cofffe</h3>
            <h3>23k</h3>
          </div>
          <div className={styles.btn}>
            <div className={styles.btn1}>
              <button className={styles.b1}>hot</button>
              <button className={styles.b1}>cold</button>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              viewBox="0 0 16 16"
              className={styles.itemBuy}
            >
              <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
            </svg>
          </div>
        </div>
      </div>
      {open ? (
        <div className={styles.display}>
          <h2> You can scroll the content behind the modal</h2>
          <button className={styles.close} onClick={() => setOpen(false)}>
            Close
          </button>
        </div>
      ) : null}
    </>
  );
}

export default Item;
