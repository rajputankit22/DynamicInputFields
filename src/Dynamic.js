import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { FormControl, Typography, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InputAdornment from "@material-ui/core/InputAdornment";
import Tooltip from "@material-ui/core/Tooltip";

export default class Dynamic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      directors_array: ["director-0"]
    };
  }

  appendInput_director() {
    var newInput = `director-${this.state.directors_array.length}`;
    console.log(this.state.directors_array.concat([newInput]));
    this.setState(prevState => ({
      directors_array: prevState.directors_array.concat([newInput])
    }));
  }

  render() {
    console.log(this.state.directors_array);
    return (
      <div>
        {this.state.directors_array.map((input, index) => (
          <Grid xs={12} container spacing={1} item>
            <Grid xs={3} item>
              <FormControl fullWidth margin="dense">
                <TextField
                  variant="outlined"
                  required
                  id={input + "-name"}
                  label="Full Name"
                  name={input + "-name"}
                  size="small"
                  className="name"
                />
              </FormControl>
            </Grid>
            <Grid xs={3} item>
              <FormControl fullWidth margin="dense">
                <TextField
                  variant="outlined"
                  required
                  type="email"
                  id={input + "-email"}
                  label="Email Address"
                  name={input + "-email"}
                  size="small"
                  className="email"
                />
              </FormControl>
            </Grid>
            <Grid xs={3} item>
              <FormControl fullWidth margin="dense">
                <TextField
                  variant="outlined"
                  required
                  type="number"
                  id={input + "-mobile"}
                  label="Mobile Number"
                  name={input + "-mobile"}
                  size="small"
                  className="mobile"
                  InputProps={{
                    endAdornment: index + 1 ===
                      this.state.directors_array.length && (
                      <InputAdornment position="start">
                        <Tooltip title="Add Statement">
                          <Fab
                            color="primary"
                            size="small"
                            onClick={() => this.appendInput_director()}
                          >
                            <AddIcon />
                          </Fab>
                        </Tooltip>
                      </InputAdornment>
                    )
                  }}
                />
              </FormControl>
            </Grid>
          </Grid>
        ))}
      </div>
    );
  }
}
