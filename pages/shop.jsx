import ItemShop from "../components/item-shop";
import React, { useState, useEffect } from "react";
import styles from "../styles/shop.module.scss";
import { ShopOutlined, LeftCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";
import ItemBuy from "../components/item-buy";

const Shop = () => {
  const listItem = [
    {
      id: 1,
      nameItem: "Hello World",
      price: "12k",
      image: "img_item1.png",
      count: 1,
    },
    {
      id: 2,
      nameItem: "Installation",
      price: "20k",
      image: "img_item.png",
      count: 1,
    },
    {
      id: 3,
      nameItem: "Installation",
      price: "20k",
      image: "img_item.png",
      count: 1,
    },
    {
      id: 4,
      nameItem: "Hello World",
      price: "12k",
      image: "img_item1.png",
      count: 1,
    },
  ];
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);

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
        {listItem.map((val) => (
          <ItemShop
            nameItem={val.nameItem}
            price={val.price}
            onClick={() => {
              setList((prevArray) => [...prevArray, ...[val]]),
                console.log(list.id);
            }}
          />
        ))}
      </div>
      <div className={styles.btn}>
        <button className={styles.b}>Tải thêm</button>
      </div>
      <div className={styles.icon_shop}>
        <p className={styles.index}>0</p>
        <ShopOutlined
          className={styles.itemBuy}
          onClick={() => {
            setOpen(true), console.log(list);
          }}
        />
      </div>
      <Modal centered closable={false} open={open} footer={null} width={700}>
        <div className={styles.pay_detail}>
          <LeftCircleFilled
            style={{ fontSize: 30, position: "absolute" }}
            onClick={() => setOpen(false)}
          />
          <div className={styles.pay_nav}>
            <h1>Giỏ hàng</h1>
            <img
              width={350}
              style={{ marginTop: "-40px" }}
              src="logo_nav.png"
            />
          </div>
          <div className={styles.list_buy}>
            {list?.length > 0 ? (
              list?.map((item) => (
                <ItemBuy
                  nameItem={item.nameItem}
                  price={item.price}
                  image={item.image}
                  deleteItem={() => {
                    setList((prevList) =>
                      prevList.filter((value) => value.id !== item.id)
                    );
                  }}
                  plusCount={() => {
                    setList((prevState) =>
                      prevState.map((list) =>
                        list.id === item.id
                          ? { ...list, count: item.count + 1 }
                          : list
                      )
                    );
                  }}
                  minusCount={() => {
                    setList((prevState) =>
                      prevState.map((list) =>
                        list.id === item.id
                          ? { ...list, count: item.count - 1 }
                          : list
                      )
                    );
                  }}
                  count={item.count}
                />
              ))
            ) : (
              <h2>Bạn chưa chọn đồ.</h2>
            )}
          </div>
          <div>
            <h1>Total:{}</h1>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Shop;
