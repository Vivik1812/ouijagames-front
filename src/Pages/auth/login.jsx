import LoginForm from "../../components/templates/login";
import { useLocation } from "react-router-dom";

function log() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation();
  const path = location.pathname;
  return (
    <div
      className={path === "/login" ? "p-5" : "ml my-3"}
      style={
        path === "/login"
          ? {
              backgroundImage: 'url("/bgLogin.webp")',
            }
          : {}
      }
    >
      <LoginForm />
    </div>
  );
}

export default log;
