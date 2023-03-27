import React, { useState, useEffect } from 'react';
import md5 from "md5";
import Grid from '@mui/material/Grid';
import Carta from './card';

export default function Heroe(props) {
  const now = Date.now();
  const publicKey = "edcf7ec496297afd50c3609b57c2eed5";
  const privateKey = "8f4f7f4f421a4ae4f6e054d9a119013b336e26fd";
  let params = {
    apikey: publicKey,
    ts: now
  };
  params.hash = md5(params.ts + privateKey + publicKey);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = "https://gateway.marvel.com/v1/public/comics?formatType=comic&orderBy=focDate";
      const results = await fetch(
        `${apiUrl}&apikey=${params.apikey}&ts=${params.ts}&hash=${params.hash}`
      )
        .then(res => res.json())
        .then(res => res.data)
        .then(res => res.results);

      setData(results);
      console.log(data)
    };

    fetchData();
  }, []);

  return (
    <><div className="Heroe">

      <Grid container direction="row" justifyContent="space-evenly" alignItems="flex-start" spacing={2} sx={{ marginTop: 10, marginBottom: 10 }}>
        {data.map((char, index) => (
          <Carta
            key={index}
            imagen={char.thumbnail.path + "." + char.thumbnail.extension}
           
            titulo={char.title}
            descripcion={char.description} />
        ))}
      </Grid>
    </div></>
  );
}







