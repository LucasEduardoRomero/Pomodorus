import { render } from "@testing-library/react";
import React , {useState} from "react";

interface ButtonProps {
  color: string;
  children: string;
}
export function Button({children, color}:ButtonProps){
  const [counter, setCounter] = useState(1);

  return(
    <button type="button" onClick={()=>setCounter(count => count + 1)} style={{ backgroundColor:color}}>{children} <span>{counter}</span></button>
  );
}