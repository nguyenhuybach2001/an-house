import { Button } from "antd";
import { MinusOutlined, PlusOutlined, CloseOutlined } from "@ant-design/icons";
import styles from "../styles/itemBuy.module.scss";

function ItemBuy(props) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={props.image} />
        <div className={styles.detail}>
          <h1>{props.nameItem}</h1>
          <h2>{props.price}</h2>
        </div>
        <div className={styles.detailCount} >
        <Button icon={<CloseOutlined/>} type="primary" danger  onClick={()=>{props.deleteItem()}}/>
          <div className={styles.count}>
            <Button
              className={styles.button}
              shape="circle"
              icon={<MinusOutlined />}
              onClick={() => {
                props.minusCount();
              }}
              disabled={props.count ==1 ? true:false}
            />
            <p className={styles.index}>{props.count}</p>
            <Button
              className={styles.button}
              shape="circle"
              icon={<PlusOutlined />}
              onClick={() => {
                props.plusCount();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
ItemBuy.defaultProps = {
  image: "img_item.png",
  nameItem: "Hazelnut Latte",
  price: "24k",
};
export default ItemBuy;
