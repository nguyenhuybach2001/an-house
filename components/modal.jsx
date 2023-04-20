import React from "react";
import styles from "../styles/modal.module.scss";

function ModalComponent(){
  
  return (
    <div className={styles.container} >
      <div className={styles.button} >
        <button onClick={() => setOpen(true)}>hello</button>
      </div>
      {open ? (
        <div className={styles.display}>
          <h2> You can scroll the content behind the modal</h2>
          <button className={styles.close}
          onClick={()=>setOpen(false)}>Close</button>
        </div>
      ) : null}
    </div>
  );
};

export default ModalComponent;
