import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import Background from '../images/kirigamine-10_TP_V.jpg'

const Home = () => (
  <Paper
    id="home"
    sx={{
      backgroundColor: 'common.black',
      backgroundImage: `url(${Background})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'common.white',
      height: '100vh',
      justifyContent: 'center',
      textAlign: 'center',
    }}
  >
    <Box
      sx={{
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: '100vh',
      }}
    >
      <Grid
        container={true}
        justifyContent="center"
        direction="column"
        alignItems="center"
        sx={{
          minHeight: '100vh',
        }}
      >
        <Typography
          variant="h2"
          align="center"
          color="inherit"
          gutterBottom={true}
        >
          Daiki Ihara
        </Typography>
        <Typography variant="h3" color="inherit" paragraph={true}>
          Personal biography
        </Typography>
      </Grid>
    </Box>
  </Paper>
)

export default Home
