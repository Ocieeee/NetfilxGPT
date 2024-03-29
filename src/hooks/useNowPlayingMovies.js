import { useEffect } from 'react'
import { Api_Option } from '../utils/constants'
import { addNowPlayingMovies } from "../utils/movieSlice"
import { useDispatch } from 'react-redux'


const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () =>{
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?page=1', 
      Api_Option
    );
    const json = await data.json();
    
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(() => {
     getNowPlayingMovies();
  } , [])
}

export default useNowPlayingMovies;