import { useEffect } from "react";
import { useRouteError, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  let error = useRouteError();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 5000);
  });
  return (
    <section className="flex flex-col items-center justify-center h-screen gap-y-5">
      <h1 className="text-bold text-6xl">Oops!</h1>
      <p className="text-bold">Hubo un error.</p>
      <p className="text-3xl">
        <i>{error.statusText || error.message}</i>
      </p>
      <h2 className="text-5xl">Redirigiendo al home...</h2>
    </section>
  );
};

export default ErrorPage;
