const Reviews = ({ review }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold my-2">Review</h2>

      {review.map((rev, i) => (
        <div key={i}>{rev}</div>
      ))}
    </div>
  );
};

export default Reviews;
