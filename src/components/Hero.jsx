import logo from "./Sources/logo.png"
export default function Hero() {
  return (
    <div className="Hero">
      
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="Herotext">Finance Manager</div>
    </div>
  );
}
