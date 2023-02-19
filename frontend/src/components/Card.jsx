import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard(props) {
  return (
    <Card sx={{
        width: "90vw",
        borderRadius: "15px",
    }}>
      <CardMedia
        component="img"
        alt=""
        sx={{
            height: "120px",
        }}
        image={props.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
            textAlign: "justify",
        }}>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{
            fontSize: "1rem",
            color: "#0061A7",
            background: "transparent",
            padding: "0 !important",
            border: "1px solid #0061A7",
            width: "35%",
            height: "2.5rem",
        }}>Apply</Button>
        <Button size="small" sx={{
            fontSize: "1rem",
            color: "#0061A7",
            background: "transparent",
            padding: "0 !important",
            border: "1px solid #0061A7",
            width: "40%",
            height: "2.5rem",
        }}>Learn More</Button>
      </CardActions>
    </Card>
  );
}
