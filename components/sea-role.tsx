import Button from '@mui/material/Button'
import Circle from '@mui/icons-material/Circle'
import { SeaIcon } from '../components'

export default function Page(props: { color: string; text: string }) {
  return (
    <Button
      sx={{
        borderRadius: '10px',
        background: 'rgba(0, 0, 0, 0.04)',
        textTransform: 'none',
        color: props.color,
        borderColor: props.color,
        '&:hover': {
          borderColor: props.color,
        },
      }}
      color="inherit"
    >
      <SeaIcon
        icon="akar-icons:circle-fill"
        sx={{
          marginRight: '4px',
        }}
      />
      {props.text}
    </Button>
  )
}