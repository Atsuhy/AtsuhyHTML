import  {useState} from "react";

export default function Kartya({cim, leiras, emoji}) {    
    const [counter, setCounter] = useState(0)

    return(
    <div className={counter==0? "card" : "card like"}>
        <h1>{emoji} {cim}</h1>
        <hr />
        <p>{leiras}</p>
        <div className="likes">
            <button onClick={() => setCounter(counter+1)}>{counter == 0 ? "🤍" : "❤️"}</button>{counter}
        </div>
        <small>
        {counter == 0 && "Ez a kártya még nem kapott like-ot"}
        </small>
    </div>
    
    )  
}

