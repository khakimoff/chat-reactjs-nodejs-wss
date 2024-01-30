import logo from "../../assets/messenger.png";

function Logo({ width = "auto", height = "auto" }) {
  return <img src={logo} style={{ width: width, height: height }} alt="logo" />;
}

export default Logo;
