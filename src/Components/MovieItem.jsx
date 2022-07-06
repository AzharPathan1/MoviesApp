import React from "react";
import { Grid, Card,CardContent ,Rating} from '@mui/material';

export const MovieItem=({item})=>{
    const [value, setValue] = React.useState(2);

    return(
        <div>
            {/* <Grid container spacing={3}> */}
                {/* <Grid item xs={4}> */}
                    <Card>
                        <CardContent>
                        <p> <b>Movie Name:  </b> {item.name} </p>
                        <p> <b>Realising year: </b> {item.released} </p>
                        <p> <b>Rating:  </b> <Rating name="read-only" value={item.rating} readOnly /></p>
                        </CardContent>
                    </Card>
                {/* </Grid> */}
            {/* </Grid> */}
        </div>
            )
}