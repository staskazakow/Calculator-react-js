import React from "react";
const KeyBoard = ({value,setValue}) => {
    return(
    <div className="Calc">
        <input value={value} className="Output"></input>
        <div className="KeyBoard">
            <input value="1" type="button" onClick={e => setValue( value + e.target.value)}/>
            <input value="2" type="button" onClick={e => setValue( value + e.target.value)}/>
            <input value="3" type="button" onClick={e => setValue( value + e.target.value)}/>
            <input value="4" type="button" onClick={e => setValue( value + e.target.value)}/>
            <input value="5" type="button" onClick={e => setValue( value + e.target.value)}/>
            <input value="6" type="button" onClick={e => setValue( value + e.target.value)}/>
            <input value="7" type="button" onClick={e => setValue( value + e.target.value)}/>
            <input value="8" type="button" onClick={e => setValue( value + e.target.value)}/>
            <input value="9" type="button" onClick={e => setValue( value + e.target.value)}/>
            <input value="0" type="button" onClick={e => setValue( value + e.target.value)}/>
            <input value="-" type="button" onClick={e => setValue( value + e.target.value)}/>
            <input value="DE" type="button" onClick={e => setValue( value.slice(0,-1))}/>
            <input value="AC" type="button" onClick={() => setValue("")}/>
            <input value="+" type="button" onClick={e => setValue( value + e.target.value)}/>
            <input value="=" type="button" onClick={e => setValue(eval(value))}/>
            <input value="*" type="button" onClick={e => setValue( value + e.target.value)}/>
            <input value="/" type="button" onClick={e => setValue( value + e.target.value)}/>
        </div>
    </div>
    )
}
export default KeyBoard;