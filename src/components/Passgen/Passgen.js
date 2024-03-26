import React, { useEffect } from 'react';
import Style from './Passgen.module.scss'
import Checkbox from '../Checkbox/Checkbox';
import Slider from '../Slider/Slider';

const Passgen = ({
        isDigits,
        setDigits,
        isLower,
        setLower,
        isUpper,
        setUpper,
        isSymb,
        setSymb,
        count,
        setCount,
        strenghtLevel,
        warning
    }) => {

    useEffect(() => {
        document.documentElement.style.setProperty("--accent-color","#" + strenghtLevelColor[strenghtLevel])
    },[strenghtLevel])
    
    let strenghtLevelText = ["НЕЗАЩИЩЕННЫЙ","СЛАБЫЙ","ПРИЕМЛЕМЫЙ","НОРМАЛЬНЫЙ","ХОРОШИЙ","СИЛЬНЫЙ"]
    let strenghtLevelColor = ["858391","ff7e88","f7bb9c","f6ca94","fafabe","c1ebc0"]
    return (
        <div className={Style.wrapper}>
            <h3>Настройки генерации:</h3>
            <Checkbox
                className={(warning)? Style.warning : ""}
                checked={isDigits}
                onClick={setDigits}
                title={"Цифры"}
            />
            <Checkbox
                className={(warning)? Style.warning : ""}
                checked={isLower}
                onClick={setLower}
                title={"Маленькие Буквы"}
            />
            <Checkbox
                className={(warning)? Style.warning : ""}
                checked={isUpper}
                onClick={setUpper}
                title={"Большие Буквы"}
            />
            <Checkbox
                className={(warning)? Style.warning : ""}
                checked={isSymb}
                onClick={setSymb}
                title={"Спец. Символы"}
            />
            <h4>Длина пароля:</h4>
            <Slider 
                value={count}
                onChange={setCount}
            />
            <div className={Style.strength}>
                <p>Надежность</p>
                <div className={Style.strenghtLevel}>
                    {strenghtLevelText[strenghtLevel]}
                    <div className={Style.levels}>
                        <p className={(strenghtLevel >= 1)? Style.enable : ""}>▮</p>
                        <p className={(strenghtLevel >= 2)? Style.enable : ""}>▮</p>
                        <p className={(strenghtLevel >= 3)? Style.enable : ""}>▮</p>
                        <p className={(strenghtLevel >= 4)? Style.enable : ""}>▮</p>
                        <p className={(strenghtLevel >= 5)? Style.enable : ""}>▮</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Passgen;