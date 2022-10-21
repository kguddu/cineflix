import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";

const NotFound=()=>{
    return(
        <Stack alignItems="center" mt={20} mb={20}>
          <img src="https://cdn-icons-png.flaticon.com/512/6009/6009746.png" alt='notfound'/>
        <Typography variant="h4" mt={2}>Page not found</Typography>

         <button className="btn">
         <Link to="/" className="back">Go to home</Link>
         </button>
        
      </Stack>
    )
}

export default NotFound;