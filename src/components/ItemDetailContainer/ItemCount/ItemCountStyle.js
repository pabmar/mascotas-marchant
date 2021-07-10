import { orange, grey } from '@material-ui/core/colors';
export const ItemCountStyle = theme => {
    return ({
        root: {
            display: 'flex',
            '& > *': {
              margin: theme.spacing(1),
            },
          },
          orange: {
            color: 'orange',
            backgroundColor: orange[400],
          },
          grey: {
              color: 'grey',
              backgroundColor: grey[500],
          },
          orange2: {
            color: '#fff3e0',
            backgroundColor: orange[50],
          },
          numeros: {
              color:'black',
          },
          links:{
            textDecoration: 'none',
            color: 'white'
          },
    })
}