import { useState, useEffect, useRef } from 'react';
import './App.css';
import { Configuration, OpenAIApi } from 'openai';

const key = import.meta.env.VITE_OpenAI_API_KEY;

const config = new Configuration({
  apiKey: key,
});

const openai = new OpenAIApi(config);

function App() {
  const req = {
    model: 'text-davinci-003',
    prompt: '',
    temperature: 0.6,
    max_tokens: 1500,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  };
  const [response, setResponse] = useState({});
  const [focus, setFocus] = useState(false);
  const submit = useRef(null);

  const [value, setValue] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    req.prompt = value;
    setFocus(true);
    submit.current.blur();
    const resp = await openai.createCompletion(req);
    setResponse(resp.data.choices);
  };
  return (
    <div id="App">
      <h1 className="m-6 mb-10 text-center font-bold font-serif text-6xl">
        Welcome to OpenAI
      </h1>
      <div className="mb-4">
        <div className="flex flex-col w-28 gap-3 fixed right-2 md:left-4">
          <Link
            to="/"
            className="button p-3 rounded-lg bg-blue-300 text-slate-800 font-bold"
          >
            Generate
          </Link>
          <Link
            to="/chat"
            className="button p-3 rounded-lg bg-red-300 text-slate-800 font-bold"
          >
            Chat
          </Link>
          <Link
            to="/complete"
            className="button p-3 rounded-lg bg-green-300 text-slate-800 font-bold"
          >
            Complete
          </Link>
          <Link
            to="/others"
            className="button p-3 rounded-lg bg-yellow-300 text-slate-800 font-bold"
          >
            Others
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
