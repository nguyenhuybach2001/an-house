const Footer = () => {
  return (
    <footer>
      <div className="line">
        <img
          style={{ width: "100%", height: 2, margin: "auto 0" }}
          src="/line.png"
        />
        <img
          style={{ padding: "0 6%", width: 141, height: 127 }}
          src="/logo_footer.png"
        />
        <img
          style={{ width: "100%", height: 2, margin: "auto 0" }}
          src="/line.png"
        />
      </div>
      <div className="item">
        <div className="item_left">
          <img style={{width:"40%"}} src="/instagram.png" />
          <img style={{width:"40%"}} src="/facebook.png" />
        </div>
        <div className="item_right">
          <img style={{width:"40%"}} src="/address.png" />
          <img style={{width:"40%", paddingBottom:9}} src="/telephone.png" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
