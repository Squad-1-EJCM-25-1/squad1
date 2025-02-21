import { useState } from "react";
import { Container, Input, Button, Message } from "./style";

const EmailConfirmation = () => {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const handleVerify = async () => {
    try {
      const response = await fetch("http://seu-backend.com/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Código verificado com sucesso!");
      } else {
        setMessage("Código inválido, tente novamente.");
      }
    } catch (error) {
      setMessage("Erro ao verificar o código.");
    }
  };

  return (
    <Container>
      <h2>Confirme seu e-mail</h2>
      <Input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Digite o código"
      />
      <Button onClick={handleVerify}>Verificar</Button>
      {message && <Message>{message}</Message>}
    </Container>
  );
};

export default EmailConfirmation;