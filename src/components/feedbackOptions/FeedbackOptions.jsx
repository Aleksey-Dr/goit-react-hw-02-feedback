const FeedbackOptions = ({
    addGood,
    addNeutral,
    addBad,
}) => {
    return (
        <>
            <button type="button" onClick={addGood}>
                Good
            </button>
            <button type="button" onClick={addNeutral}>
                Neutral
            </button>
            <button type="button" onClick={addBad}>
                Bad
            </button>
        </>
    )
};

export default FeedbackOptions;