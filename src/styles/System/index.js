export const style = theme => ({
  system: {
    margin: "0 auto",
    padding: "1%",
    backgroundColor: "#646464",
    borderColor: "#000000",
    borderRadius: "0px",
    border: "1px solid",
    '&:hover': {
      backgroundColor: "#48bad8",
      borderColor: "#000000",
    }
  },
  systemTitle: {
    marginLeft: "5px",
    fontSize: "20px",
    fontWeight:"700",
    marginBottom:"10px"
  },
  systemDescription: {
    marginLeft: "5px",
  },
  systemButton: {
    margin: "0 auto",
    padding: "2%",
    width:"40%",
    backgroundColor: "#646464",
    borderColor: "#3f9dd5",
    borderRadius: "30px",
    border: "2px solid",
    fontSize: "1.1vw",
    fontWeight: '200',
    boxShadow:"none !important",
    textTransform: "capitalize",
    '&:hover': {
      backgroundColor: "#3f9dd5",
      borderColor: "#ffffff",
    },
    systemIcon: {
      marginRight:"5px",
    }
  }
});