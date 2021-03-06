import { useNavigate } from "react-router-dom";
import st from "./BackBtn.module.css";

/*reusable button to navigate back */

export const BackBtn = () => {
  const navigate = useNavigate();
  return (
    <>
      <button className={st.btn} onClick={() => navigate(-1)}>
        {" "}
        Go Back
      </button>
    </>
  );
};
