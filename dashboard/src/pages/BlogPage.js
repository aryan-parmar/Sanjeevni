import React, { useRef, useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Button, Container, Stack, Typography, TabPanel } from '@mui/material';
// components
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { map } from "lodash";

export default function BlogPage() {
    const mapContainerRef = React.useRef(null);
  
    React.useEffect(() => {
      mapboxgl.accessToken = 'pk.eyJ1IjoiZXNoYW50cml2ZWRpMjEiLCJhIjoiY2xjaXV6c2lqMTFzNjNvcXVmbzM0aGkwNyJ9.ZsRWT2z--97ajM58KQG4xQ';
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-122.4194, 37.7749],
        zoom: 1
      });
    }, []);
  return (
    <>
      <Container>
      <Typography variant="h4" gutterBottom>
            Map view of available hospitals
      </Typography>
      <Typography variant="subtitle2" >
            loading map embedded data...
      </Typography>
      <div ref={mapContainerRef} className="map-container" style={{ width:'400', height:'400'}} />
      </Container>

    </>
  )
}
