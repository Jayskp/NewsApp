import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  
  constructor() {
    super();
    // Initialize state in the constructor
    this.state = {
      mode: 'light',
      progress: 0
    };
  }

  toggleMode = () => {
    // Use this.setState to update the state
    this.setState(prevState => ({
      mode: prevState.mode === 'light' ? 'dark' : 'light'
    }));
  }

  // Function to set progress
  setProgress = (progress) => {
    this.setState({ progress });
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar mode={this.state.mode} toggleMode={this.toggleMode} />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} pageSize={6} category="general" country="in" />} />
            <Route path="/business" element={<News setProgress={this.setProgress} pageSize={6} category="business" country="in" />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} pageSize={6} category="entertainment" country="in" />} />
            <Route path="/health" element={<News setProgress={this.setProgress} pageSize={6} category="health" country="in" />} />
            <Route path="/sports" element={<News setProgress={this.setProgress} pageSize={6} category="sports" country="in" />} />
            <Route path="/science" element={<News setProgress={this.setProgress} pageSize={6} category="science" country="in" />} />
            <Route path="/technology" element={<News setProgress={this.setProgress} pageSize={6} category="technology" country="in" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
