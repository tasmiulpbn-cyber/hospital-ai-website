function Header(props) {
  return (
    <header>
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </header>
  );
}

export default Header;