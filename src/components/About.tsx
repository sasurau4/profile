import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Androidfy from '../images/my-androidify.png'
import MyPicture from '../images/my-profile-picture.jpg'
import Container from '@mui/material/Container'

export default function About() {
  return (
    <Container id="about">
      <Grid
        container={true}
        justifyContent="center"
        direction="column"
        alignItems="center"
        sx={{
          flexGrow: 1,
          maxWidth: '100vw',
          minHeight: '100vh',
        }}
        spacing={4}
      >
        <Grid item={true}>
          <Typography variant="h3" align="center" gutterBottom={true}>
            About
          </Typography>
        </Grid>
        <Grid item={true}>
          <Grid
            container={true}
            justifyContent="center"
            direction="row"
            alignItems="center"
            spacing={2}
          >
            <Grid item={true}>
              <Avatar
                alt="Daiki Ihara androidfy"
                src={Androidfy}
                sx={{
                  height: 200,
                  width: 200,
                }}
              />
            </Grid>
            <Grid item={true}>
              <Avatar
                alt="Daiki Ihara picture"
                src={MyPicture}
                sx={{
                  height: 200,
                  width: 200,
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item={true} xs={8} sm={6}>
          <Typography
            variant="body1"
            align="center"
            color="textSecondary"
            paragraph={true}
          >
            Daiki Ihara is SRE. I love web, programming and working with humans.
            Working in Tokyo, Japan.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
