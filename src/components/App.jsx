import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

// начальное состояние свойства 'state'
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  //обработчик события 'evt' для  фиксации клика
  onLeaveFeedback = evt => {
    const { name } = evt.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };
  // вычисление суммы фиксации клика
  totalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };
  //вычисления процента положительной"
  positiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.totalFeedback();

    return Math.round((good * 100) / totalFeedback) + '%';
  };
  render() {
    const { good, neutral, bad } = this.state;
    const isEmptyList = !(good + neutral + bad);

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {isEmptyList ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.totalFeedback()}
              positivePercentage={this.positiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}
