import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedbackGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  countFeedbackNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  countFeedbackBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => 
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    this.countTotalFeedback() !== 0
      ? Math.round(this.state.good / this.countTotalFeedback() * 100)
      : 0;
    

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;

    const addFeedbackGood = this.countFeedbackGood;
    const addFeedbackNeutral = this.countFeedbackNeutral;
    const addFeedbackBad = this.countFeedbackBad;

    return (
      <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
      >
        <h2>Please leave feedback</h2>
        <button type="button" onClick={ addFeedbackGood }>Good</button>
        <button type="button" onClick={ addFeedbackNeutral }>Neutral</button>
        <button type="button" onClick={ addFeedbackBad }>Bad</button>
        <h2>Statistics</h2>
        <p>Good: { good }</p>
        <p>Neutral: { neutral }</p>
        <p>Bad: { bad }</p>
        <p>Total: { this.countTotalFeedback() }</p>
        <p>Positive feedback: { this.countPositiveFeedbackPercentage() }%</p>
      </div>
    );
  }
}
