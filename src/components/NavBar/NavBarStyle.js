export const NavBarStyle = theme =>{
    return ({
        root: {
            flexGrow: 1,
          },
          menuButton: {
            marginRight: theme.spacing(2),
          },
          title: {
            flexGrow: 1,
          },
          tb:{
            backgroundColor: "orange",
          },
          links:{
            textDecoration: 'none',
            color: 'white'
          },
          menus:{
             
             color:'black',
             textDecoration:'none',
          },
    })
}