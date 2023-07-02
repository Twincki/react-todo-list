import { useState } from 'react';
import { Input } from '../Input/Input';

function App() {
  const [email, setEmail] = useState<string>("");

  const onChange = (event: any) => {
    setEmail(event.target.value);
  }

  return (
    <div>
      <Input placeholder='Адрес электронной почты' value={email} onChange={onChange} />
    </div >
  );
}

export default App;
