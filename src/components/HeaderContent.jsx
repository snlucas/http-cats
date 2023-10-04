import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import Box from '@mui/material/Box';

const items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
    },
    {
        name: "Random Name #2",
        description: "Hello World!"
    }
]

const HeaderContent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Carousel animation='slide' indicators={false} interval={3000}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    </Box>
  )
}

function Item(props) {
    return (
        <Paper sx={{ height: '60vh' }}>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default HeaderContent