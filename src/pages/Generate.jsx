import React, { useState, useRef } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import Menu from '../components/Menu';
import Welcome from '../components/Welcome';

const key = import.meta.env.VITE_OpenAI_API_KEY;

const config = new Configuration({
  apiKey: key,
});

const openai = new OpenAIApi(config);
export default function Generate() {
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
      <Welcome />

      <Menu />

      <div className="p-4 md:border-4 border-t-blue-300 border-r-red-300 border-b-green-300 border-l-yellow-300 rounded-lg max-w-5xl ml-auto mr-24">
        <form
          className="mr-4 md:mr-0 form sticky top-2"
          action="get"
          onSubmit={handleSubmit}
        >
          <input
            className={
              focus
                ? 'w-full border border- rounded-lg p-3 mb-4 font-bold'
                : 'w-full border border- rounded-lg p-3 mb-4'
            }
            type="text"
            name="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setFocus(false)}
            onBlur={() => setFocus(true)}
            ref={submit}
          />
        </form>
        {Object.keys(response).length > 0 && (
          <div className="content">
            {response.map((choice, i) => (
              <div key={i} className="content">
                {choice.text.split('\n\n').map((para, i) => {
                  return (
                    <div key={i} className="text-justify m-4">
                      {para.split('\n').length > 0 ? (
                        para.split('\n').map((line, i) => {
                          return (
                            <p className="m-2" key={i}>
                              {line}
                            </p>
                          );
                        })
                      ) : (
                        <p className="m-4">{para}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
