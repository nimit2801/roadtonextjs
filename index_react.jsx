const app = document.getElementById('app');
const Header = ({title}) => {
  return <h1>{title ? title: 'React was always 💙'}</h1>;
};



function HomePage() {
  
  const [likes, setLikes] = React.useState(0);
  const handleClick = () => {
    setLikes(likes+1)
  };

  const names = ['Nimit Savant', 'Shreya Paradkar', 'Ashwin Adiga']
  return (
    <div>
      <Header title = "React 💙"/>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
ReactDOM.render(<HomePage />, app);
