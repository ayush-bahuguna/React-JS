import React, { useEffect, useState } from 'react';
import { Results } from "./components/Results/Results";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { TopAnime } from "./components/TopAnime/TopAnime";
import { Box, Grid } from '@mui/material';

function App() {

  const [topAnimeList, setTopAnimeList] = useState([]) ;
  const [searchElement, setSearchElement] = useState([]) ;
  const [resultList, setResultList] = useState([]) ;

  const getTopAnimeList = async () => {
    const topAnimeData = await fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity')
    .then(res => res.json()) ;
    
    setTopAnimeList(topAnimeData.top.slice(0, 10)) ;
  }

  useEffect(() => {
    getTopAnimeList() ;
  }, []) ;

  
  const handleSearch = e => {
    e.preventDefault() ;
    fetchAnimeList(searchElement) ;
  }

  const fetchAnimeList = async searchElement => {
    const animeListData = await fetch(`https://api.jikan.moe/v3/search/anime?q=${searchElement}&limit=10`)
    .then(res => res.json()) ;

    setResultList(animeListData.results)
    console.log(animeListData) ;
  }

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TopAnime topAnimeList = {topAnimeList}/>
        </Grid>
        <Grid item xs={8}>
          <SearchBar searchElement = {searchElement} handleSearch = {handleSearch} setSearchElement = {setSearchElement}/>
          <Results resultList = {resultList}/>
        </Grid>
      </Grid>
    </Box>
    </>
  );
}

export default App;
