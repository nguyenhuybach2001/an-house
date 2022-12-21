import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <img src="/logo_nav.png" />
        </Link>
      </div>
      <div className="item">
        <Link href="/">Home</Link>
        <Link href="/post">Posts</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
      </div>
      <button class="btn">Sign up</button>

    </nav>
  );
};

export default Navbar;
