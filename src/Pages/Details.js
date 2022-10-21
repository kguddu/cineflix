
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { omdb } from '../util'
import { Box, Stack, Typography, Chip, IconButton } from '@mui/material';
import axios from 'axios';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import useLocalStorage from 'use-local-storage'






const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [favorites, setFavorites] = useLocalStorage("favorites", "[]");
  const [isFavorite, setFavorite] = useState(false);


  const [data, setData] = useState({})
  const [flag, setFlag] = useState(false);

  useEffect(_ => {
    const favs = JSON.parse(favorites);
    if (favs.includes(id)) {
      setFavorite(true)
    } else {
      setFavorite(false);
    }

  }, [favorites, id])

  const toggleFavorite = _ => {
    const favs = JSON.parse(favorites);

    if (isFavorite) {
      const idx = favs.indexOf(id);
      favs.splice(idx, 1);
      setFavorite(false);
    } else {

      favs.push(id);
      setFavorite(true);
    }
    setFavorites(JSON.stringify(favs))
  }

  useEffect(_ => {
    (async _ => {

      const response = await omdb.get(`?i=${id}&plot=full`);
      if (response.data.Response === "False") {
        navigate("/404")
      } else {
        setData(response.data)
      }

    })();
  }, [id, navigate]);

  useEffect(_ => {
    if (data.Country?.length > 0) {
      (async _ => {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${data.Country}?fullText=true`);
        setFlag(response.data[0]?.flags?.svg);
      })()
    }
  }, [data])

  return (
    <>
      <Box p={5}>
        <Stack>
          <Stack direction="row" spacing={5} >
            <img src={data.Poster} alt="poster" />
            <Box>
            
              <Typography variant="h4" className="title">
                {data.Title}
                &nbsp;
                <IconButton size="large" color="error" onClick={toggleFavorite} >
                  {isFavorite ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
                </IconButton>
              </Typography>
              
              <Typography>
                Released{data.Year}
              </Typography>
              <Typography variant="h5" mt={3} mb={1}>
                Crew
              </Typography>
              <Stack direction="row" gap={1} sx={{ flexWrap: "wrap" }} justyfy-content="flex-start" align-items="flex-start">
                {data.Actors?.split(", ").map((e, i) => {
                  return <Chip key={i} label={e} />

                })}
                {data.Writer?.split(", ").map((e, i) => {
                  return <Chip key={i} label={e} />

                })}
                <Chip label={data.Director} />
              </Stack>
              <Stack mt={2} direction="row" spacing={2} alignItems="center">
                <img src={flag} alt="flag" height={40} style={{ outline: "1px solid #1976d2", outlineOffset: "2px" }} />
                <Typography variant='overline'>
                  {data.Country}
                </Typography>

              </Stack>
            </Box>
          </Stack>
          <Typography variant="h4" mt={5} mb={2}>
            Plot:
          </Typography>
          <Typography align="justify">
            {data.Plot}
          </Typography>
        </Stack>
      </Box>
    </>
  )
}

export default Details;