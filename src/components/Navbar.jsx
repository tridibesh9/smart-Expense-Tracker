import NavElement from "./NavElement";
export default function Navbar() {
  return (
    <div className="Navbar">
      <NavElement className="Navbar" name="Home" id="1" />
      <NavElement className="Navbar" name="Add Expense" id="2" />
      <NavElement className="Navbar" name="Expense List" id="3" />
    </div>
  );
}
