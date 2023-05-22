import "./BuyAlbum.css";
import { FaCartPlus, FaBandcamp } from "react-icons/fa";

export default function BuyAlbum(props) {
  return (
    <div className="buyalbum-container">
      <a href={props.title} className="linktobuy">
        <FaBandcamp />
        <p className="buy-text">Buy it on Bandcamp</p>
        <FaCartPlus />
      </a>
    </div>
  );
}
