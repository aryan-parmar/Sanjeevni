import { Helmet } from 'react-helmet-async';
import {useref} from 'react';
// @mui
import { Grid, Button, Container, Stack, Typography, TabPanel } from '@mui/material';
// components
// import "mapbox-gl/dist/mapbox-gl.css";
// import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
// import ReactMapGL, { Marker, Popup } from "react-map-gl";

// mapboxgl.accessToken =
//   "pk.eyJ1IjoiZXNoYW50cml2ZWRpMjEiLCJhIjoiY2xjaXV6c2lqMTFzNjNvcXVmbzM0aGkwNyJ9.ZsRWT2z--97ajM58KQG4xQ";


export default function BlogPage() {
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
    </>
  );
}
