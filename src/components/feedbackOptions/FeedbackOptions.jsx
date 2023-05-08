import PropTypes from 'prop-types';
import clsx from 'clsx';

import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({
    addGood,
    addNeutral,
    addBad,
}) => {
    return (
        <div className={clsx(css["feedback-btns"])}>
            <button type="button" onClick={addGood}>
                Good
            </button>
            <button type="button" onClick={addNeutral}>
                Neutral
            </button>
            <button type="button" onClick={addBad}>
                Bad
            </button>
        </div>
    )
};

FeedbackOptions.propTypes = {
    addGood: PropTypes.func.isRequired,
    addNeutral: PropTypes.func.isRequired,
    addBad: PropTypes.func.isRequired,
}

export default FeedbackOptions;