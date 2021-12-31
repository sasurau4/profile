import Box from '@mui/material/Box'
import { Header, Main } from './components'
import withRoot from './withRoot'

const App: React.FunctionComponent<{}> = () => (
  <Box sx={{ display: 'flex' }}>
    <Header />
    <Main />
  </Box>
)

export default withRoot(App)
