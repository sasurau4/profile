import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { CareerItem } from '../types'

type Props = CareerItem & {
  isLast?: boolean
}

const CareerCard = ({
  headline,
  skills,
  positions,
  details,
  links,
  isLast = false,
}: Props) => (
  <Card
    sx={[
      isLast
        ? {
            backgroundColor: 'lemonchiffon',
          }
        : {},
    ]}
  >
    <CardContent>
      <Typography variant="h6" gutterBottom={true}>
        {headline}
      </Typography>
      <Typography variant="subtitle2">Position</Typography>
      <Typography gutterBottom={true}>{positions.join(', ')}</Typography>
      <Typography variant="subtitle2">Skills</Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {skills.map((item, i) => (
          <Chip
            label={item}
            key={i}
            color="primary"
            variant="outlined"
            sx={{
              mx: 0.5,
              my: 0.5,
            }}
          />
        ))}
      </Box>
      <Typography variant="subtitle2" gutterBottom={true}>
        Details
      </Typography>
      {details.map((detail, i) => (
        <Typography key={i} gutterBottom={true}>
          {detail}
        </Typography>
      ))}
      {links.length === 0 ? null : (
        <Typography variant="subtitle2" gutterBottom={true}>
          Links
        </Typography>
      )}
      {links.map((link) => (
        <Typography key={link}>
          <Link href={link}>{link}</Link>
        </Typography>
      ))}
    </CardContent>
  </Card>
)

export default CareerCard
