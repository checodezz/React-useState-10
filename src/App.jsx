import { useState } from "react";
import "./App.css";

const SportsList = () => {
  const [sports, setSports] = useState([]);
  const handleSportCheckbox = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setSports((prevSports) => [...prevSports, value]);
    } else {
      setSports((prevSports) => prevSports.filter((sports) => sports != value));
    }
  };
  return (
    <div>
      <label>Choose your favorite sports: </label>
      <br />
      <input type="checkbox" value="Football" onChange={handleSportCheckbox} />
      Football
      <br />
      <input
        type="checkbox"
        value="Basketball"
        onChange={handleSportCheckbox}
      />
      Basketball
      <br />
      <input type="checkbox" value="Tennis" onChange={handleSportCheckbox} />
      Tennis
      <br />
      <input type="checkbox" value="Swimming" onChange={handleSportCheckbox} />
      Swimming
      <br />
      {sports.length > 0 && <p>Selected Sports: {sports.join(", ")}</p>}
    </div>
  );
};

const Colors = () => {
  const [colors, setColors] = useState([]);

  const handleColorCheckbox = (event) => {
    const { value, checked } = event.target;
    checked
      ? setColors((prevColors) => [...prevColors, value])
      : setColors((prevColor) => prevColor.filter((colors) => colors != value));
  };

  return (
    <div>
      <label>Choose your favorite color: </label>
      <br />
      <input type="checkbox" value="Red" onChange={handleColorCheckbox} />
      Red
      <br />
      <input type="checkbox" value="Blue" onChange={handleColorCheckbox} />
      Blue
      <br />
      <input type="checkbox" value="Green" onChange={handleColorCheckbox} />
      Green
      <br />
      <input type="checkbox" value="Yellow" onChange={handleColorCheckbox} />
      Yellow
      <br />
      {colors.length > 0 && <p>Selected colors: {colors.join(", ")}</p>}
    </div>
  );
};

const MusicalInstrument = () => {
  const [currMusic, setCurrMusic] = useState([]);
  const handleInstrumentCheckbox = (event) => {
    const { checked, value } = event.target;
    checked
      ? setCurrMusic((prevValue) => [...prevValue, value])
      : setCurrMusic((prevValue) =>
          prevValue.filter((music) => music != value),
        );
  };

  return (
    <div>
      <label>Choose your musical instrument: </label>
      <br />
      <input
        type="checkbox"
        value="Guitar"
        onChange={handleInstrumentCheckbox}
      />{" "}
      Guitar
      <br />
      <input
        type="checkbox"
        value="Piano"
        onChange={handleInstrumentCheckbox}
      />{" "}
      Piano
      <br />
      <input
        type="checkbox"
        value="Drums"
        onChange={handleInstrumentCheckbox}
      />
      Drums
      <p>Selected Instruments:{currMusic.join(", ")}</p>
    </div>
  );
};

const FavoriteAnimal = () => {
  const [currAnimals, setCurrAnimals] = useState([]);

  const handleAnimalsCheckbox = (event) => {
    const { checked, value } = event.target;
    checked
      ? setCurrAnimals((prevValue) => [...prevValue, value])
      : setCurrAnimals((prevValue) =>
          prevValue.filter((animals) => animals != value),
        );
  };
  return (
    <div>
      <label>Choose your favorite animals :</label>
      <br />
      <input type="checkbox" value="Dog" onChange={handleAnimalsCheckbox} />
      Dog
      <br />
      <input type="checkbox" value="Cat" onChange={handleAnimalsCheckbox} />
      Cat
      <br />
      <input type="checkbox" value="Rabbit" onChange={handleAnimalsCheckbox} />
      Rabbit
      <br />
      <p>Selected animals: {currAnimals.join(", ")}</p>
    </div>
  );
};

const FavoriteCar = () => {
  const [currCars, setCurrCars] = useState([]);

  const handleCarsCheckbox = (event) => {
    const { checked, value } = event.target;
    checked
      ? setCurrCars((prevVal) => [...prevVal, value])
      : setCurrCars((prevValue) => prevValue.filter((cars) => cars != value));
  };

  return (
    <div>
      <label>Choose your favorite car: </label>
      <br />
      <input type="checkbox" value="Mercedes" onChange={handleCarsCheckbox} />
      Mercedes
      <br />
      <input type="checkbox" value="BMW" onChange={handleCarsCheckbox} />
      BMW
      <br />
      <input type="checkbox" value="Audi" onChange={handleCarsCheckbox} />
      Audi
      <p>Seleced cars:{currCars.join(", ")} </p>
    </div>
  );
};
export default function App() {
  return (
    <main>
      <SportsList />
      <br />
      <Colors />
      <br />
      <MusicalInstrument />
      <br />
      <FavoriteAnimal />
      <br />
      <FavoriteCar />
    </main>
  );
}
