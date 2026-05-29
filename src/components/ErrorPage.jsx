export const ErrorPage = ({ message = "Algo deu errado." }) => {
  return (
    <div className="error-page">
      <h1>Erro</h1>
      <p>{message}</p>
    </div>
  );
};
