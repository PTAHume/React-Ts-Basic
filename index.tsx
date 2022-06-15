import * as React from 'react';
import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

function Button(props: any) {
  const handelClick = () => {
    props.onClickFunction(props.increment);
  };
  return <button onClick={handelClick}>+{props.increment}</button>;
}

function Display(props: any) {
  return <div>{props.messsage}</div>;
}

function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue: number) => {
    setCounter(counter + incrementValue);
  };
  return (
    <>
      <Button onClickFunction={incrementCounter} increment={1} />
      <Button onClickFunction={incrementCounter} increment={2} />
      <Button onClickFunction={incrementCounter} increment={5} />
      <Display messsage={counter} />
    </>
  );
}

root.render(<App />);
