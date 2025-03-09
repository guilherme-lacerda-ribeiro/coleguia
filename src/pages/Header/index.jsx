const Header = ({ children }) => {
  return (
    <header className="flex justify-between">
      <h2>guilherme-lacerda-ribeiro</h2>
      {children}
    </header>
  )
}
export default Header