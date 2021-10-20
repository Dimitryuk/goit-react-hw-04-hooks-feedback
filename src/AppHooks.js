import React, { useState } from 'react';
import './App.css';
import Section from './Components/Section/Section';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import Statistics from './Components/Statistics/Statistics';
import Notification from './Components/Notification/Notifacation';

const AppHooks = function () {
  const options = ['good', 'neutral', 'bad'];

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + bad + neutral;

  const positivePercentageCalculator = () => {
    const percentage = (good * 100) / total;
    return Math.round(percentage);
  };
  const handleClick = e => {
    const name = e.target.textContent;
    console.log(name);
    switch (name) {
      case 'good':
        setGood(good => good + 1);
        console.log(good);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
      default:
        break;
    }
  };
  return (
    <div className="App">
      <Section title="Feedback:">
        <FeedbackOptions
          options={options}
          handleClick={handleClick}
        ></FeedbackOptions>
      </Section>

      {total === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentageCalculator()}
          ></Statistics>
        </Section>
      )}
    </div>
  );
};

export default AppHooks;
