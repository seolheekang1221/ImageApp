import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import './App.css';

const App = () => {
  const API_KEY = "20814150-75c059b3626a635abb4e88de0";

  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [inputVal, setInputVal] = useState('');

  const handleSearch = e => {
    e.preventDefault();
    setSearch(inputVal);
    setInputVal('');
  };
  
  const newImages = (direction) => {
    if(direction === "Next"){
      setCurrentPage(prevCurrent => prevCurrent + 1);
    } else if(direction === "previous" (currentPage) !== 1){
      setCurrentPage(prevCurrent => prevCurrent - 1);
    }
  };

  useEffect(() => {
    // window.scrollTo(0, 0);
    fetch(
      'https://pixabay.com/api/?key=${API_KEY}&q=${search}&image_type=photo&per_page=9&page=${currentPage}&pretty=true'
    )
    .then(res => res.json())
    .then(data => console.log(data.hits));
  }, [search, currentPage]);

  return (
    <div className="App">
      <Hero 
        images={images}
        inputVal = {inputVal}
        setInputVal = {setInputVal}
        handleSearch = {handleSearch}
        newImages = {newImages}
      />
    </div>
  );
};

export default App;
