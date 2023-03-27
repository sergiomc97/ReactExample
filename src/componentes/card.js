import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Carta(props) {

    return (
        <Card sx={{ backgroundColor: "#eee", minHeight: 100, display: "flex", flexDirection: "column", width: 400, marginTop: 10 }}>
            <CardActionArea>
                <CardMedia sx={{ justifyContent: 'center', objectFit: 'inherit' }}
                    component="img"
                    height="500"
                    src={props.imagen}
                    alt="alt"
                    className='imagenes2'
                />
                <div style={{
                    position: "absolute", top: 430, left: "50%", transform: "translateX(-50%)", backgroundColor: "rgba(255, 255, 255, 0.9)",
                    width: 400,
                    height: 200,
                    fontSize: 20

                }}> {props.titulo}</div>
                <CardContent sx={{ padding: 0 }}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography gutterBottom variant="h6" component="div">
                                Mostrar más informacion
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body1" component="div">
                                {props.descripcion}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default Carta