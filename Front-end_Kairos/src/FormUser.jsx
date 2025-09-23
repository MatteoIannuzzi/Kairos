import React, { useReducer } from "react"; // Importa React e useReducer / Import React and useReducer
import { useTheme } from "./ThemeContext"; // Importa hook per tema chiaro/scuro / Import hook for light/dark theme

// Stato iniziale del form / Initial state of the form
const statoIniziale = {
  username: "",
  password: "",
  confermaPassword: "",
  errore: "",
  successo: false,
};

// Reducer per gestire lo stato del form / Reducer to manage form state
function reducer(state, action) {
  switch (action.type) {
    case "Cambia_username": // Cambia username / Change username
      return { ...state, username: action.payload };
    case "Cambia_password": // Cambia password / Change password
      return { ...state, password: action.payload };
    case "Cambia_confermaPassword": // Cambia conferma password / Change confirm password
      return { ...state, confermaPassword: action.payload };
    case "successo": // Registrazione riuscita / Successful registration
      return { ...state, successo: true, errore: "" };
    case "errore": // Errore / Error
      return { ...state, errore: action.payload, successo: false };
    case "reset": // Reset dello stato / Reset state
      return statoIniziale;
    default:
      return state;
  }
}

// Componente FormUser / FormUser component
function FormUser() {
  const { theme } = useTheme(); // Usa il tema corrente / Use current theme
  const [state, dispatch] = useReducer(reducer, statoIniziale); // Stato con reducer / State with reducer

  // Funzione submit form / Form submit function
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene reload pagina / Prevent page reload
    if (state.password === state.confermaPassword) {
      dispatch({ type: "successo" }); // Password corrispondono / Passwords match
    } else {
      dispatch({ type: "errore", payload: "Le password non corrispondono" }); // Password diverse / Passwords don't match
    }
    // Reset stato dopo 2 secondi / Reset state after 2 seconds
    setTimeout(() => {
      dispatch({ type: "reset" });
    }, 2000);
  };

  return (
    <div className={`p-2 rounded card-form ${theme}-theme`}>
      {/* Form principale / Main form */}
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column gap-2 p-3 rounded"
        style={{ width: "16rem" }}
      >
        {/* Campo Username / Username field */}
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

        {/* Campo Password / Password field */}
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

        {/* Campo Conferma Password / Confirm Password field */}
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

        {/* Bottone Invia / Submit button */}
        <button
          type="submit"
          className={`btn btn-sm ${
            theme === "dark" ? "btn-light" : "btn-primary"
          }`}
        >
          Invia
        </button>

        {/* Messaggio successo / Success message */}
        {state.successo && (
          <p style={{ color: "green" }}>Registrazione completata!</p>
        )}
        {/* Messaggio errore / Error message */}
        {state.errore && <p style={{ color: "red" }}>{state.errore}</p>}
      </form>
    </div>
  );
}

// Esporta il componente / Export component
export default FormUser;
