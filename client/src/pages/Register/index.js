import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Input } from "../../components/Form";
import Navbar from "../../components/Navbar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import axios from "axios";

const styles = theme => ({
  root: {
    display: "flex"
  },

  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: ""
  };

  componentDidMount() {
    let accessString = localStorage.getItem("JWT");
    if (accessString === null) {
      this.setState({
        isLoading: false,
        error: true
      });
    } else {
      console.log(accessString);
      axios
        .get("/auth/findUser", {
          params: { username: localStorage.getItem("email") },
          headers: { Authorization: `JWT ${accessString}` }
        })
        .then(res => {
          this.setState({
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            username: res.data.username,
            isLoading: true,
            error: false
          });
          console.log(this.state);
        })
        .catch(err => console.log(err.data));
    }
  }

  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value }, () => console.log(this.state));
  };
  handleFormSubmit = event => {
    event.preventDefault();

    axios.post("/auth/registerUser", this.state).then(res => {
      localStorage.setItem("JWT", res.data.token);
      localStorage.setItem("email", res.data.username);
      localStorage.setItem("userId", res.data.userId);
      localStorage.setItem("firstName", res.data.firstName);
      console.log(res.data);
      this.props.history.push("/Swaddle");
    });
  };
  render = () => {
    const { classes } = this.props;
    return (
      <>
        <div className={classes.root}>
          <CssBaseline />
          <main className={classes.content}>
            <Navbar />
            {/* Hero unit */}
            <div className={classes.heroContent}>
              <Container maxWidth="sm">
                <div className="logo">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/icons/swaddles_for_waddles_logo_sm.png"
                    }
                  />
                </div>
                <Typography
                  variant="h2"
                  align="center"
                  color="textSecondary"
                  paragraph
                >
                  REGISTER
                </Typography>
              </Container>
            </div>

            {/* End hero unit */}
            <Container>
              {/* <Container maxWidth="xs"> */}
              <CssBaseline />

              <div className={classes.paper}>
                <form className={classes.form} noValidate>
                  <Input
                    value={this.state.firstName}
                    changeHandler={this.handleInputChange}
                    name="firstName"
                    placeholder="First Name (required)"
                  />
                  <Input
                    value={this.state.lastName}
                    changeHandler={this.handleInputChange}
                    name="lastName"
                    placeholder="Last Name (required)"
                  />
                  <Input
                    value={this.state.username}
                    changeHandler={this.handleInputChange}
                    name="username"
                    placeholder="Email (required)"
                  />
                  <Input
                    value={this.state.password}
                    changeHandler={this.handleInputChange}
                    name="password"
                    placeholder="Password (required)"
                    type="password"
                  />
                  <Input
                    value={this.state.confirmPassword}
                    changeHandler={this.handleInputChange}
                    name="confirmPassword"
                    placeholder="Confirm Password (required)"
                    type="password"
                  />

                  <Button
                    id="formBtn"
                    onClick={this.handleFormSubmit}
                    // disabled={!(this.state.author && this.state.title)}
                  >
                    Register
                  </Button>
                  <Grid container>
                    {/* <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid> */}
                    <Grid item>
                      <Link to="/Register" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </div>
              {/* <Box mt={8}>
              <Copyright />
            </Box> */}
            </Container>
          </main>
        </div>
      </>
    );
  };
}
// export default Register;
export default withStyles(styles)(Register);
