import React, { Component } from "react";
import Pomodoro from './components/Pomodoro'
import customTheme from './components/theme'
import { ThemeProvider } from '@chakra-ui/core' 
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={customTheme}>
          <Pomodoro />
        </ThemeProvider>
      </div>
    )
  }
}

export default App;
