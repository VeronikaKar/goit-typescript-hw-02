type Props = {
  error: boolean;
};

export const ErrorMessage: React.FC<Props> = ({ error }) => {
  if (!error) {
    return null;
  }

  return (
    <div className="error-message">
      <p>Something went wrong. Please try again later.</p>
    </div>
  );
};
