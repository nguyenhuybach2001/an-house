import styles from "../styles/item.module.scss";
import React, { useState } from "react";
import { Modal } from "antd";
import { LeftCircleFilled, ShoppingCartOutlined } from "@ant-design/icons";

function ItemShop(props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <img
            className={styles.image}
            style={{ height: 200, cursor: "pointer" }}
            src="/img_item.png"
            onClick={() => setOpen(true)}
          />

          <div className={styles.title}>
            <h3>{props.nameItem}</h3>
            <h3>{props.price}</h3>
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
              onClick={props.onClick}
            >
              <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
            </svg>
          </div>
        </div>
      </div>
      <Modal centered closable={false} open={open} footer={null} width={700}>
        <div className={styles.item_detail}>
          <LeftCircleFilled
            style={{ fontSize: 30, position: "absolute" }}
            onClick={() => setOpen(false)}
          />
          <div className={styles.item_nav}>
            <img
              width={300}
              height={400}
              style={{ borderRadius: "10px" }}
              src="img_item1.png"
            />
            <div>
              <img
                width={350}
                style={{ marginTop: "-40px" }}
                src="logo_nav.png"
              />
              <div className={styles.content}>
                <h1>{props.nameItem}</h1>
                <h1>{props.price}</h1>
                <hr style={{ margin: "20px 0", width: "290px" }} />
                <p>
                  Frappuccino® Roast coffee, milk and ice all come together for
                  a mocha flavor that'll leave you wanting more. To change
                  things up, try it affogato-style with a hot espresso shot
                  poured right over the top. 370 calories, 51g sugar, 15g fat
                  Full nutrition & ingredients list
                </p>
                <ShoppingCartOutlined
                  className={styles.btnBuy}
                  onClick={() => {
                    setOpen(false);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ItemShop;
