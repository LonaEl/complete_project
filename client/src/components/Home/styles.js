import createTheme from '@mui/system/createTheme'

const theme = createTheme({
  AppBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
  },
  Pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },


  Grid: {
    breakpoints: {
      sm: {
        flexDirection: 'column-reverse',
    },
      }
    
  },
});

export default theme;

/* export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
})); */