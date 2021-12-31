import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

const routes: string[] = ['home', 'about', 'career', 'contact']

export default function Header() {
  return (
      <nav>
        <AppBar position="absolute">
          <Toolbar
            variant="dense"
            sx={{ justifyContent: 'space-evenly' }}
          >
            {routes.map((item) => (
              <Typography
                color="inherit"
                noWrap={true}
                key={item}
                component={(p) => (
                  <Link
                    href={`#${item}`}
                    {...p}
                    sx={{ textDecorationLine: 'none' }}
                  />
                )}
              >
                {item.toUpperCase()}
              </Typography>
            ))}
          </Toolbar>
        </AppBar>
      </nav>
  )
}
