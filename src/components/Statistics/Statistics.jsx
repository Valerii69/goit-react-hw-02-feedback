import { StatisticsList, StatisticsItem } from './Statistics.styled';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const statList = [
    { statistLine: good, title: 'Good' },
    { statistLine: neutral, title: 'Neutral' },
    { statistLine: bad, title: 'Bad' },
    { statistLine: total, title: 'Total' },
    { statistLine: positivePercentage, title: 'Positive feedbacks' },
  ];

  return (
    <StatisticsList>
      {statList.map(({ title, statistLine }) => (
        <StatisticsItem key={title}>
          <p>
            {title} : <span>{statistLine}</span>
          </p>
        </StatisticsItem>
      ))}
    </StatisticsList>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.node.isRequired,
};
