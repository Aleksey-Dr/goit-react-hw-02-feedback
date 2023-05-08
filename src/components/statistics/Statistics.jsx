import PropTypes from 'prop-types';

import Notification from '../notification/Notification';

const Statistics = ({
    good,
    neutral,
    bad,
    total,
    percentage,
}) => {
    return (
        <div>
            {total !== 0 ?
                <>
                    <p>Good: { good }</p>
                    <p>Neutral: { neutral }</p>
                    <p>Bad: { bad }</p>
                    <p>Total: { total }</p>
                    <p>Positive feedback: {percentage}%</p>
                </>
                : <Notification
                    notification={'No feedback given'}
                />
            }
        </div>)
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default Statistics;