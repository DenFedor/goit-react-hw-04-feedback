import React,{useState} from 'react';
import { Container } from './FeedbackCounter.styled';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';

export const FeedbackCounterHooks = () => {
  const [good, setGood]= useState(0);
  const [neutral, setNeutral]= useState(0);
  const [bad, setBad]= useState(0);
 
const handleIncrement = e =>{
  switch (e.target.textContent) {
    case 'good':
     setGood(good+1);
      break;
    case 'neutral':
      setNeutral(neutral+1);
      break;
    case 'bad':
      setBad(bad+1);
      break;

    default:
      break;
  }
}
const countTotalFeedback = () => {
  return good + neutral + bad;
};
const countPositiveFeedbackPercentage = () => {
  return (Math.floor(
      (good /
        (good + neutral + bad)) *
        100
    )) || (0);
  
};
const total=countTotalFeedback();
const percentage=countPositiveFeedbackPercentage();
const options=Object.keys({good,neutral,bad});
  return (
    <Container>
      <Section
        title={'Please leave feedback'}
        children={
          <FeedbackOptions
            options={options}
            onLeaveFeedback={handleIncrement}
          />
        }
      />
      {total===0 ?<Section
        title={`Statistics`}
        children={
          <Notification message= {'There is no feedback'} />
        }
      /> : <Section
        title={`Statistics`}
        children={
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage}
          />
        }
      /> }
    </Container>
  );
}

