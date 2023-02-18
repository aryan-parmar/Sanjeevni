import React, { useRef, useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Button, Container, Stack, Typography, TabPanel, Box } from '@mui/material';
// components
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { map } from "lodash";

export default function BlogPage() {
    // const mapContainerRef = React.useRef(null);
  
    // React.useEffect(() => {
    //   mapboxgl.accessToken = 'pk.eyJ1IjoiZXNoYW50cml2ZWRpMjEiLCJhIjoiY2xjaXV6c2lqMTFzNjNvcXVmbzM0aGkwNyJ9.ZsRWT2z--97ajM58KQG4xQ';
    //   const map = new mapboxgl.Map({
    //     container: mapContainerRef.current,
    //     style: 'mapbox://styles/mapbox/streets-v12',
    //     center: [-122.4194, 37.7749],
    //     zoom: 1
    //   });
    // }, []);
  return (
    <>
      <Container>
      <Typography variant="h4" gutterBottom>
            Map view of available hospitals
      </Typography>
      <Typography variant="subtitle2" >
            loading map embedded data...
      </Typography>
      </Container>
      <Box
      sx={{
        // width: '100% !important',
        // height: '100% !important',
        objectFit: 'cover',
      }}
      >
        <img className="w-full h-auto mt-5"src="https://img.freepik.com/premium-vector/city-map-background-blue-tone_99087-101.jpg?w=360"/>
      </Box>

    </>
  )
}
