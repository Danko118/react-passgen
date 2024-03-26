import Style from './app.module.scss';
import Passgen from '../components/Passgen/Passgen';
import { useEffect, useState } from 'react';
import { generatePassword } from '../util';

function App() {
  const [password,setPassword] = useState("Пароль.")

  const [isDigits,setDigits] = useState(false);
  const [isLower,setLower] = useState(false);
  const [isUpper,setUpper] = useState(false);
  const [isSymb,setSymb] = useState(false);
  const [count,setCount] = useState(8);

  const [ableToGen,setAbleToGen] = useState(false);
  const [warning,setWarning] = useState(false);

  const [strenghtLevel,SetStrenghtLevel] = useState(0);

    useEffect(()=> {
        SetStrenghtLevel((isDigits? 1 : 0) + (isLower? 1 : 0) + (isUpper? 1 : 0) + (isSymb? 1 : 0) + (count > 10? 1 : 0))
        setAbleToGen(isDigits || isLower || isUpper || isSymb);
    },[count,isDigits,isLower,isSymb,isUpper])

    useEffect(() => {
      setWarning(!ableToGen)
    },[ableToGen])
  

  return (
    <div className={Style.wrapper}>
        <h1>Генератор Пароля</h1>
        <div 
          className={Style.pass} 
          onClick={() => {navigator.clipboard.writeText(password)}}
        >
          {password}
        </div>
        <Passgen 
          isDigits={isDigits}
          setDigits={setDigits}
          isLower={isLower}
          setLower={setLower}
          isUpper={isUpper}
          setUpper={setUpper}
          isSymb={isSymb}
          setSymb={setSymb}
          count={count}
          setCount={setCount}
          strenghtLevel={strenghtLevel}
          warning={warning}
        />
        <div className={Style.buttons}>
          <button 
            disabled={(ableToGen)? false : true}
            onClick={() => setPassword(generatePassword(count,isUpper,isLower,isSymb,isDigits))}
          >
            Сгенерировать
          </button>
        </div>
    </div>
  );
}

export default App;
