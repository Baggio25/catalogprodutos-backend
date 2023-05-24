
type Props = {
    message?: string;
}

const FeedbackMessage = ({message} : Props) => {
  return (
    <div className="invalid-feedback d-block">{message}</div>
  );
};

export default FeedbackMessage;
