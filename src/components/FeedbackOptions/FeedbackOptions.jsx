import { Button, OptionsList } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onOptions, onLeaveFeedback }) => {
  return (
    <OptionsList>
      {onOptions.map(onOption => (
        <li key={onOption}>
          <Button name={onOption} type="button" onClick={onLeaveFeedback}>
            {onOption[0].toUpperCase() + onOption.substring(1)}
          </Button>
        </li>
      ))}
    </OptionsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
