import React, { useState,} from "react";
import "./style.scss";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

type Props = {
    movieCategories : any[],
}

const ItemListGrid = ({movieCategories} : Props) => {

    return (
        <>
            <GridList
                spacing={15}
                cellHeight={350}
                cols={4}
                className="card-container"
            >
                {movieCategories &&
                    movieCategories.map((movieItem, movieIndex) => (
                        <div className="inner-card-container" key={movieIndex}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt={movieItem.category}
                                        height="200"
                                        image={movieItem.image}
                                        title={movieItem.category}
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            className="movie-title"
                                            component="h1"
                                        >
                                            {movieItem.title}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className="CardActions-price">
                                    <Button size="small" color="primary">
                                        $ {movieItem.price}
                                    </Button>
                                </CardActions>
                            </Card>
                        </div>
                    ))}
            </GridList>
        </>
    );
};

export default ItemListGrid;
