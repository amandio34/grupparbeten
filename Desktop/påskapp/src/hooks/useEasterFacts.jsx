// This file contains the useEasterFacts custom hook that provides Easter facts and a function to cycle through them.
import { useState } from "react";

// This hook provides a list of Easter facts and a function to cycle through them. 
const facts = [
    "Påsken firas till minne av Jesus uppståndelse.",
    "Ägget är en symbol för liv och återfödelse.",
    "Påskharen kommer ursprungligen från Tyskland.",
    "Påsken infaller alltid på en söndag mellan 22 mars och 25 april.",
    "Skärtorsdagen markerar början på påskhelgen.",
    "I Sverige klär sig barn ofta ut till påskkärringar och går runt med påskbrev.",
    "Påskris är en gammal tradition där man dekorerar björkris med fjädrar och pynt.",
    "I kristen tradition kallas veckan före påsk för Stilla veckan.",
    "Långfredagen var förr en dag av sorg och stillhet i Sverige.",
    "Påskgodis är en populär tradition, ofta serverat i påskägg."
  ];



// This custom hook manages the current index of the fact and provides a function to get the next fact. 
export function useEasterFacts() {
  const [index, setIndex] = useState(0);
  const nextFact = () => setIndex((i) => (i + 1) % facts.length);
  // The current fact is accessed using the index state variable. 
  return {
    fact: facts[index],
    nextFact
  };
} 
