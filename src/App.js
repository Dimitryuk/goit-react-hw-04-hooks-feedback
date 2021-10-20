import React, { Component } from 'react';
import './App.css';
import Section from './Components/Section/Section';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import Statistics from './Components/Statistics/Statistics';
import Notification from './Components/Notification/Notifacation';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClick = e => {
    const name = e.target.name;
    console.log(name);
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
    console.log(this.state[name]);
  };
  feedbacksCounter = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  positivePercentageCalculator = () => {
    const result = this.feedbacksCounter();
    const { good } = this.state;
    const percentage = (good * 100) / result;
    return Math.round(percentage);
  };
  render() {
    const keys = Object.keys(this.state);
    const total = this.feedbacksCounter();
    const positivePercentage = this.positivePercentageCalculator();
    return (
      <div className="App">
        <Section title="Feedback:">
          <FeedbackOptions
            options={keys}
            handleClick={this.handleClick}
          ></FeedbackOptions>
        </Section>

        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positivePercentage}
            ></Statistics>
          </Section>
        )}
      </div>
    );
  }
}
