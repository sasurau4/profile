import { About, Career, Contact, Home } from '../components'
import Box from '@mui/material/Box'

const Main = () => (
  <Box sx={{ flexGrow: 1, height: '100vh', overflow: 'auto' }}>
    <Home />
    <About />
    <Career />
    <Contact />
  </Box>
)

export default Main
