import { Grid } from '@mui/material';
import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { MovieItem } from './MovieItem';

const ShowMovies = () => {
    const [data,setdata]=useState([])
    console.log(data);
    const getData=async()=>{
        const result=await axios.get("http://localhost:4545/showMovie")
        console.log(result)
        setdata(result.data)
    }
    useEffect(()=>{
        getData()
    },[])
    return (
        <div>
            <Grid container spacing={3}>

            {data.map((item)=>{
                return(
                    <Grid item xs={3}>
                        <MovieItem item={item}/>
                    </Grid>
                )
            })}
            </Grid>
        </div>
    );
};

export default ShowMovies;