import {useState} from 'react';
const Header = ({title}) => {
  return <h1>{title ? title: 'React was always 💙'}</h1>;
};



export default function HomePage () {
  
  const [likes, setLikes] = useState(0);
  const handleClick = () => {
    setLikes(likes+1)
  };

  const names = ['Nimit Savant', 'Shreya Paradkar', 'Ashwin Adiga']
  return (
    <div>
      <Header title = "Develop. Preview. Ship. 🚀"/>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
