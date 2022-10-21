
import useLocalStorage from "use-local-storage";
import FavouriteMovieCard from '../components/FavouriteMovieCard'
import { Box, Typography } from "@mui/material";
import Masonry from '@mui/lab/Masonry';

const Home = _ => {
  const [favorites] = useLocalStorage("favorites", "[]");

  return (
    <>
      <Box p={4}>
        <Typography variant="h2" textAlign="start">My Collections</Typography>
        <hr />
        <Masonry columns={4} spacing={2} >
          {JSON.parse(favorites).map((e, i) => {
            return <FavouriteMovieCard id={e} key={i}/>
          })}
        </Masonry>
      </Box>
    </>
  )
}

export default Home;

