import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { Github, Linkedin, Twitter } from 'mdi-material-ui'

interface ContactItem {
  component: JSX.Element
  to: string
}

export default (function Contact() {
  const contacts: ContactItem[] = [
    {
      component: (
        <Twitter
          key="twitter-icon"
          fontSize="inherit"
          sx={{
            color: '#00aced',
            fontSize: 80,
          }}
        />
      ),
      to: 'https://twitter.com/sasurau4',
    },
    {
      component: (
        <Github
          key="github"
          sx={{
            color: '#333',
            fontSize: 80,
          }}
        />
      ),
      to: 'https://github.com/sasurau4',
    },
    {
      component: (
        <Linkedin
          key="linkedin"
          sx={{
            color: '#0077B5',
            fontSize: 80,
          }}
        />
      ),
      to: 'https://www.linkedin.com/in/daiki-ihara-8bb118106',
    },
  ]
  return (
    <Container
      id="contact"
    >
      <Grid
        container={true}
        justifyContent="center"
        direction="column"
        alignItems="center"
        sx={{
          maxWidth: '100vw',
          minHeight: '100vh',
        }}
        spacing={4}
      >
        <Grid item={true}>
          <Typography variant="h3" align="center" gutterBottom={true}>
            Contact
          </Typography>
        </Grid>
        <Grid item={true}>
          <Grid
            container={true}
            justifyContent="center"
            direction="row"
            alignItems="center"
            spacing={4}
          >
            {contacts.map((item, i) => (
              <Grid item={true} key={i}>
                <IconButton
                  sx={{
                    height: 120,
                    width: 120,
                  }}
                  href={item.to}
                  target="_blank"
                  size="large"
                >
                  {item.component}
                </IconButton>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
})
