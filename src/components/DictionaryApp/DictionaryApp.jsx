import React, {useState} from 'react';

const dictionary = [

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

]

export default function DictionaryApp() {
    const [state, setState] = useState({
        inputText: "",
        searchBegins: false,
        meaning: ""
    });

    const handler = () => {
        let inputWord = state.inputText.trim();
        let wordObj = dictionary.find((val) => inputWord.toLowerCase() === val.word.toLowerCase());
        setState((prevState) => ({...prevState, searchBegins: true, meaning: wordObj ? wordObj.meaning : "Word not found in the dictionary."}))
    }

    return (
        <div>
            <h1>Dictionary App</h1>
            <input onChange={(e) => setState((prevState) => ({...prevState, inputText: e.target.value}))} type="text" name="search" id="word-search" />
            <button onClick={handler}>Search</button>
            <p>Definition:</p>
            {state.searchBegins && <p>{state.meaning}</p>}
        </div>
    )
}