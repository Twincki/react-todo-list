import { useState } from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

function App() {
  const [email, setEmail] = useState<string>("");

  const onChange = (event: any) => {
    setEmail(event.target.value);
  };

  const onEnnder = () => console.log("Вы вошли");
  const onOunt = () => console.log("Вы вышли");

  return (
    <div>
      <Input
        placeholder="Оставьте отзыв Артур Евгенич"
        value={email}
        onChange={onChange}
      />

      <div style={{ marginTop: 20 }}></div>

      <Button onClick={onEnnder}>Войти</Button>
      <Button onClick={onOunt}>Выйти</Button>

      <Button onClick={onOunt} fullWidth>Кнопка на полный экран</Button>
    </div>
  );
}

export default App;
