const Header = ({ data }) => {
    console.log('data from Header:', data)
  return (
    <div className="header-section">
      <p>{data.header}</p>
    </div>
  );
}
export default Header;