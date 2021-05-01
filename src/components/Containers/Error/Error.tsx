const Error = ({ error }) => {
  return <p className="error-message">{JSON.stringify(error)}</p>;
};

export default Error;
