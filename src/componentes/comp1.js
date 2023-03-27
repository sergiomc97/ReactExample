import { useState, useEffect } from "react";
import Skeleton from '@mui/material/Skeleton';
import md5 from "md5";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Comp1 = (props) => {
  const now = Date.now();
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const publicKey = "edcf7ec496297afd50c3609b57c2eed5";
  const privateKey = "8f4f7f4f421a4ae4f6e054d9a119013b336e26fd";
  let params = {
    apikey: publicKey,
    ts: now
  };
  params.hash = md5(params.ts + privateKey + publicKey);
  const apiUrl = "https://gateway.marvel.com/v1/public/characters/" + props.id;
  useEffect(() => {
    setLoader(true);
    setTimeout(async () => {
      const fetchData = async () => {


        const results = await fetch(
          `${apiUrl}?apikey=${params.apikey}&ts=${params.ts}&hash=${params.hash}`
        )
          .then(res => res.json())
          .then(res => res.data)
          .then(res => res.results);

        setData(results);
      };

      fetchData();
      setLoader(false);
    }, 1000);
  }, []);
  return (
    <div className='collapsible'>
      <br /><br /><br /><br /><br /><br /><br />
      {!loader ?
        data.map((char, index) => (

          <Card sx={{
            width: 1700, display: 'flex', backgroundColor: '#DEB478', margin: "auto"
          }}>

            <CardMedia
              component="img"
              sx={{ width: 400 }}
              image={char.thumbnail.path + "." + char.thumbnail.extension}
              alt="green"
              className='imagenes'
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto', alignContent: 'center' }}>
                <Typography gutterBottom variant="h2" component="div">
                  {char.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {char.description}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        )) : [1].map(loading => (
          <div key={loading}>
            <Grid container direction="row" justifyContent="center" alignItems="center">
              <Skeleton variant="rectangular" animation="pulse" width={1700} height={400} className="skeleton" />
            </Grid>
          </div>
        ))}
    </div>
  )
}
export default Comp1;