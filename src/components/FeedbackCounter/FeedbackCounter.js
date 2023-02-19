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
     return setGood(good+1);
      break;
    case 'neutral':
      return setNeutral(neutral+1);
      break;
    case 'bad':
      return setBad(bad+1);
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

// class FeedbackCounter extends React.Component {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0
  // };
  
  // handleIncrement = evt => {
  //   switch (evt.target.textContent) {
  //     case 'good':
  //       this.setState(
  //         prevState => {
  //           return {
  //             good: prevState.good + 1,
  //           };
  //         }
  //       );
  //       break;
  //     case 'neutral':
  //       this.setState(
  //         prevState => {
  //           return {
  //             neutral: prevState.neutral + 1,
  //           };
  //         }
  //       );
  //       break;
  //     case 'bad':
  //       this.setState(
  //         prevState => {
  //           return {
  //             bad: prevState.bad + 1,
  //           };
  //         }
  //       );
  //       break;

  //     default:
  //       break;
  //   }
  // };

  // countTotalFeedback = () => {
  //     return  this.state.good + this.state.neutral + this.state.bad;
  // };
  // countPositiveFeedbackPercentage = () => {
  //     return (Math.floor(
  //         (this.state.good /
  //           (this.state.good + this.state.neutral + this.state.bad)) *
  //           100
  //       )) || (0);
      
  // };
//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const percentage = this.countPositiveFeedbackPercentage();
//     const options = Object.keys(this.state);
//     return (
//       <Container>
//         <Section
//           title={'Please leave feedback'}
//           children={
//             <FeedbackOptions
//               options={options}
//               onLeaveFeedback={this.handleIncrement}
//             />
//           }
//         />
//         {total===0 ?<Section
//           title={`Statistics`}
//           children={
//             <Notification message= {'There is no feedback'} />
//           }
//         /> : <Section
//           title={`Statistics`}
//           children={
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={percentage}
//             />
//           }
//         /> }
//       </Container>
//     );
//   }
// }

// export default FeedbackCounter;
