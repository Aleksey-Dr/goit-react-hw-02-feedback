import { Component } from 'react';

import Statistics from './statistics';
import FeedbackOptions from './feedbackOptions';
import Section from './section';
import Notification from './notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = (reaction) => {
    this.setState(prevState => ({
      [reaction]: prevState[reaction] + 1,
    }));
  };

  countFeedbackGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
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

    const addFeedback = this.addFeedback;

    const countTotalFeedback = this.countTotalFeedback();
    const countPositiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage();

    return (
      <div
      style={{
        marginLeft: '24px',
      }}
      >

        <Section text={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={ addFeedback }
          />
        </Section>

        <Section text={'Statistics'}>
          {countTotalFeedback !== 0 ?
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              percentage={countPositiveFeedbackPercentage}
            />
            : <Notification
              notification={'No feedback given'}
            />
          }
        </Section>
      </div>
    );
  }
}
