export const FormularioCompraStyle = theme => {
    return ({
        root: {
            flexGrow: 1,
            overflow: 'hidden',
            padding: theme.spacing(0, 3),
          },
          cardRoot: {
            maxWidth: 345,
          },
        demo: {
          backgroundColor: theme.palette.background.paper,
        },
        title: {
          margin: theme.spacing(4, 0, 2),
        },
        media: {
            height: 140,
          },
          links:{
            textDecoration: 'none',
            color: 'white'
          },
          margin: {
            margin: theme.spacing(1),
          },
    }
    )
}