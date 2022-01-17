const Feed = ({ msg }) => {
  return <>{msg !== "" && <div className="alert alert-warning">{msg}</div>}</>;
};

export default Feed;
