import "./Frame.css";
import React, { useState } from "react";
import UserTalker from "./UserTalker.js";
import BotTalk from "./BotTalk";
import Valinta from "./Valinta";


export default function Frame() {
  const lista1 = require("./tags1.json");
  const lista2 = require("./tags2.json");

  const [jasen, setJasen] = useState('');
  const [valinta, setValinta] = useState([]);

  const handleChange = (e) => {
    e.preventDefault()
    setJasen(e.target.value);
  };

  const lisaa = (item) => {
    console.log(item);
    setValinta([...valinta, item]);
  }

  const clear = () => {
    setValinta([]);
  }

  

  const confirmer = (e) => {
    e.preventDefault();
    console.log(jasen);
  };

  const NumeroInput = () => {
    return (
      <div
        style={styles.outer}
      >
        <form onSubmit={confirmer}>
          <div className="Row">
            <label for="jasennro" style={styles.label}>Jäsennumero</label>
            <input
              style={styles.input}
              type="text"
              name="jasennro"
              value={jasen}
              onChange={(e) => handleChange(e)}
              //autoFocus miten pelata ilman autofocusta?
            />
            <button className='Btn' type='submit'>OK</button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div>
      <h1 style={{ alignSelf: "auto" }}>Tervetuloa Pestikoneeseen!!!</h1>
      <div className="Frame">
      <BotTalk id={0} />
        <BotTalk id={1} />
        <NumeroInput />
        <BotTalk id={2} />
        <UserTalker lista={lista1} func={lisaa}/>
        <BotTalk id={3} />
        <UserTalker lista={lista2} func={lisaa}/>
      </div>
      <div className='Frame2'>
        <button className='Btn' onClick={clear}>Tyhjennä</button>
        {valinta.length>0 ? <Valinta lista={valinta} /> : null}
      </div>
    </div>
  );
}

const styles = {
  input: {
    height: 35,
    borderColor: "gray",
    borderWidth: 1,
    fontSize: 20,
    width: 100,
    display: "flex",
    textAlign: "center",
  },
  label: {
    margin: 'auto',
    paddingRight: 10,
    color: 'Yellow'
  },
  outer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
};
