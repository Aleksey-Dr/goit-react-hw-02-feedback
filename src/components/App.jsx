import { Component } from 'react';

import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Section from './section/Section';

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
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;

  render() {
    const { good, neutral, bad } = this.state;

    const addFeedbackGood = this.countFeedbackGood;
    const addFeedbackNeutral = this.countFeedbackNeutral;
    const addFeedbackBad = this.countFeedbackBad;

    const countTotalFeedback = this.countTotalFeedback();
    const countPositiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage();

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
        
        <Section text={ 'Please leave feedback' }>
          <FeedbackOptions
            addGood={ addFeedbackGood }
            addNeutral={ addFeedbackNeutral }
            addBad={ addFeedbackBad }
          />
        </Section>

        <Section text={ 'Statistics' }>
          <Statistics
            good={ good }
            neutral={ neutral }
            bad={ bad }
            total={ countTotalFeedback }
            percentage={ countPositiveFeedbackPercentage }
          />
        </Section>
      </div>
    );
  }
}
