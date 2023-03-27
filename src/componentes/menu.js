import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import { GiBatMask } from 'react-icons/gi';
import { useState } from 'react';
import md5 from "md5";
import InputBase from '@mui/material/InputBase';
import Grid from '@mui/material/Grid';
import Carta from './card';

const pages = ["Home", "Clicks", "wolverine", "hulk", "C.America", "Thanos", "Thor", "Vision"];
function MenuBar() {
  /* A function that allows you to open a menu. */
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  /* A function that allows you to search for comics in the Marvel API. */
  const now = Date.now();
  const publicKey = "edcf7ec496297afd50c3609b57c2eed5";
  const privateKey = "8f4f7f4f421a4ae4f6e054d9a119013b336e26fd";
  let params = {
    apikey: publicKey,
    ts: now
  };
  params.hash = md5(params.ts + privateKey + publicKey);
  const [item, SearchData] = useState([]);

  const Search = async (key) => {

    const apiUrl = "https://gateway.marvel.com/v1/public/comics?titleStartsWith=" + key;
    const results = await fetch(
      `${apiUrl}&apikey=${params.apikey}&ts=${params.ts}&hash=${params.hash}`
    )

      .then(res => res.json())
      .then(res => res.data)
      .then(res => res.results);
    SearchData(results)
  }


  return (
    <>
      <AppBar position="fixed">
        <Toolbar disableGutters sx={{ backgroundColor: "#564F73" }}>
          <GiBatMask sx={{ display: { xs: 'none', md: 'flex' } }} style={{ width: "60px" }} />
          <Typography
            noWrap
            component="a"
            variant="h6"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SuperHero
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => navigate(page.toString())}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SuperHero
          </Typography>
          {/* Menu normal */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <MenuItem
                key={page}
                onClick={() => navigate(page.toString())}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </MenuItem>
            ))}
            <InputBase
              placeholder="   Buscar comics…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(event) => Search(event.target.value)}
              sx={{
                width: 800,
                height: 40,
                backgroundColor: "#B2A4ED",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                margin: "auto",
                borderRadius: 10
              }} />
          </Box>
        </Toolbar>
      </AppBar>
      <Grid container direction="row" justifyContent="space-evenly" alignItems="flex-start" spacing={2}>
        {item.map((items, index) => <Carta
          key={index}
          imagen={items.thumbnail.path + "." + items.thumbnail.extension}
          titulo={items.title}
          descripcion={items.description} />
        )}
      </Grid></>
  );
}
export default MenuBar;
