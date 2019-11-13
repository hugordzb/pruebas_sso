const style = theme => ({
  root: {
    margin: "0",
    padding: "0",
    width: "100%",
    height: "100vh"
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: "0 auto",
    backgroundColor:"transparent",
    borderColor: "#3f9dd5",
    borderRadius: "30px",
    border: "2px solid",
    '&:hover':{
      backgroundColor:"#3f9dd5"
    }
  },
  blueText:{
    color:"#3f9dd5"
  },
  inputTruper:{
    backgroundColor:"#ffffff",
    border: "0 !important",
    borderRadius: "30px",
  },
  checkboxTruper:{
    borderColor:"white"
  },
  mtb2:{
    margin: "0px 0px 15px"
  },
  containerLogin:{
    marginRight:"10%",
  }
});

export {
  style
}