import "./styles.css";
import qrCode from "./images/qrcode.png";

export default function App() {
  return (
    <div className="App">
      <div className="qr-box">
        <img className="qr-image" src={qrCode} alt="QRCode" />
        <p className="phead">
          Improve your front-end skills by building projects
        </p>
        <p className="pbody">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}
