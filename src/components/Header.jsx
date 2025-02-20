const Header = ({ data }) => {
    console.log('data from Header:', data)
  return (
    <h1>
    <div className="header-section">
      <p>{data.header}</p>
    </div>
    </h1>
  );
}
export default Header;