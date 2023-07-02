import React, { useState } from 'react';
import Nav from '../nav/Nav';

function P3() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    const value = input;
    const x = [];

    for (let i = 1; i <= value; i++) {
      x.push(Array.from({ length: i }, (_, j) => j + 1));
    }

    for (let i = value - 1; i >= 1; i--) {
      x.push(Array.from({ length: i }, (_, j) => j + 1));
    }

    setOutput(x.map((row, index) => <div key={index}>{row.join(' ')}</div>));
  };
  return (
    <div>
      <Nav />

      <div className="max-w-2xl mx-auto -translate-y-[22rem]">
        <form onSubmit={handleSubmit}>
          <div className="pt-10 font-medium text-4xl">โจทย์ข้อ 3</div>
          <div className="pt-2 font-normal text-xl">INPUT Value :</div>
          <input
            type="text"
            autoComplete="on"
            required
            title="กรอกตัวเลขเท่านั้น"
            className="border-solid border-2 border-sky-500 w-full rounded-md px-2 py-1 font-normal text-xl"
            onChange={e => {
              setInput(parseInt(e.target.value));
            }}
          ></input>

          <br />
          <button
            className="  my-5 w-full rounded-md p-2 text-white bg-[#208454] text-2xl hover:brightness-90"
            type="submit"
          >
            SUBMIT
          </button>
        </form>
        <div className="font-normal text-xl pt-10">{output}</div>
      </div>
    </div>
  );
}

export default P3;
