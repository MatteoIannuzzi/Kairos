import React, { useReducer } from "react";
import { useTheme } from "./ThemeContext";

const statoIniziale = {
  username: "",
  password: "",
  confermaPassword: "",
  errore: "",
  successo: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "Cambia_username":
      return { ...state, username: action.payload };
    case "Cambia_password":
      return { ...state, password: action.payload };
    case "Cambia_confermaPassword":
      return { ...state, confermaPassword: action.payload };
    case "successo":
      return { ...state, successo: true, errore: "" };
    case "errore":
      return { ...state, errore: action.payload, successo: false };
    case "reset":
      return statoIniziale;
    default:
      return state;
  }
}

function FormUser() {
  const { theme } = useTheme();
  const [state, dispatch] = useReducer(reducer, statoIniziale);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.password === state.confermaPassword) {
      dispatch({ type: "successo" });
    } else {
      dispatch({ type: "errore", payload: "Le password non corrispondono" });
    }
    setTimeout(() => {
      dispatch({ type: "reset" });
    }, 2000);
  };

  return (
    <div className={`p-2 rounded card-form ${theme}-theme`}>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column gap-2 p-3 rounded"
        style={{ width: "16rem" }}
      >
        <div className="mb-2">
          <label className="form-label">Username</label>
          <input
            className="form-control"
            type="text"
            placeholder="Username"
            value={state.username}
            onChange={(e) =>
              dispatch({ type: "Cambia_username", payload: e.target.value })
            }
          />
        </div>

        <div className="mb-2">
          <label className="form-label">Password</label>
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            value={state.password}
            onChange={(e) =>
              dispatch({ type: "Cambia_password", payload: e.target.value })
            }
          />
        </div>

        <div className="mb-2">
          <label className="form-label">Conferma Password</label>
          <input
            className="form-control"
            type="password"
            placeholder="Conferma Password"
            value={state.confermaPassword}
            onChange={(e) =>
              dispatch({
                type: "Cambia_confermaPassword",
                payload: e.target.value,
              })
            }
          />
        </div>

        <button
          type="submit"
          className={`btn btn-sm ${
            theme === "dark" ? "btn-light" : "btn-primary"
          }`}
        >
          Invia
        </button>

        {state.successo && (
          <p style={{ color: "green" }}>Registrazione completata!</p>
        )}
        {state.errore && <p style={{ color: "red" }}>{state.errore}</p>}
      </form>
    </div>
  );
}

export default FormUser;
