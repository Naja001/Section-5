import { useState } from "react";

export default function InputTable({onChange, userInput}) {
  
  return (
    <>
      <form>
        <div id="user-input" className="input-group">
          <div>
            <label>Initial Investment</label>
            <input
              type="number"
              name="initialInvestment"
              value={userInput.initialInvestment}
              onChange={(event) =>
                onChange("initialInvestment", event.target.value)
              }
              required
            />
            <label>Annual Investment</label>
            <input
              type="number"
              name="anualInvestment"
              value={userInput.annualInvestment}
              onChange={(event) =>
                onChange("anualInvestment", event.target.value)
              }
              required
            />
          </div>
          <div>
            <label>Expected Return</label>
            <input
              type="number"
              name="expectedReturn"
              value={userInput.expectedReturn}
              onChange={(event) =>
                onChange("expectedReturn", event.target.value)
              }
              required
            />
            <label>Duration</label>
            <input
              type="number"
              name="duration"
              value={userInput.duration}
              onChange={(event) => onChange("duration", event.target.value)}
              required
            />
          </div>
        </div>
      </form>
    </>
  );
}
