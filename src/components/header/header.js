import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Recent Posts</span>
        <span className="headerTitleLg">Blogs</span>
      </div>
      <img
        className="headerImg"
        src="https://free4kwallpapers.com/uploads/originals/2018/01/24/tulips-garden-4k-wallpaper.jpg"
        alt=""
      />
    </div>
  )
}
