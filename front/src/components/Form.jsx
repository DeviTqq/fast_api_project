import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import React from "react";

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState(""); // переменные состояния
  const [pass, setPass] = useState("");
  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      <input
        style={{marginRight: "10px"}}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />

      <input
        style={{marginRight: "10px"}}
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />

      <Stack spacing={2} direction="row" >
        <Button
        
          className="buttonRemoveUser"
          onClick={() => handleClick(email, pass)}
          variant="contained"
        >
          {title}
        </Button>
      </Stack>
    </div>
  );
};

export { Form };
