import React, { useState } from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import MainBoard from './components/mainpage/MainBoard';
import MainpageHeader from './components/mainpage/MainpageHeader';
import unsplash from './api/unsplash';
import { useEffect } from 'react';

function App() {

  const [pins, setNewPins] = useState([])

  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term
      }
    });
  };

  const getNewPins = () => {
    let promises = [];
    let pinData = [];

    let pins = ['ocean', 'Tokyo', 'dogs', 'cats', 'car']

    pins.forEach((pinTerm) => {
      promises.push(
        getImages(pinTerm).then((res) => {
          let results = res.data.results;

          pinData = pinData.concat(results);

          pinData.sort(function (a, b) {
            return 0.5 - Math.random();
          });
        })
      )
    })
    Promise.all(promises).then(() => {
      setNewPins(pinData)
    })
  }

  useEffect(() => {

    // getNewPins()
  }, [])


  const onSearchSubmit = (term) => {
    console.log("on Searchsubmit", term);
    getImages(term).then((res) => {
      let results = res.data.results;

      let newPins = [
        ...results,
        ...pins,
      ]

      newPins.sort(function (a, b) {
        return 0.5 - Math.random()
      });
      setNewPins(newPins);
    })
  }

  // onSearchSubmit("bali");

  return (
    <div className="app">
      <MainpageHeader onSubmit={onSearchSubmit} />
      <MainBoard pins={pins} />
    </div>
  );
}

export default App;
