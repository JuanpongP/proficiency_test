import React, { useState } from 'react';
import Nav from '../nav/Nav';

function P2() {
  const [inputA, setInputA] = useState('');
  const [inputB, setInputB] = useState('');
  const [subinputA, setSubinputA] = useState(null);
  const [subinputB, setSubinputB] = useState(null);
  const [outputC, setOutputC] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    setSubinputA(inputA);
    setSubinputB(inputB);
    const stringA = inputA.toString();
    const stringB = inputB.toString();
    const A = stringA.split('');
    const B = stringB.split('');
    const C = [];
    let joinedString;
    if (A.length === B.length) {
      for (let i = 0; i < A.length; i++) {
        C.push(A[i] + B[B.length - 1 - i]);
      }

      joinedString = C.join(',');
      setOutputC(joinedString);
    } else {
      const minLength = Math.min(A.length, B.length);

      for (let i = 0; i < minLength; i++) {
        C.push(A[i] + B[B.length - 1 - i]);
      }

      if (B.length > A.length) {
        for (let i = minLength; i < B.length; i++) {
          C.push(A[A.length - A.length] + B[B.length - 1 - i]);
        }
      }
      joinedString = C.join(',');

      setOutputC(joinedString);
    }
  };
  return (
    <div>
      <Nav />
      <div className="max-w-2xl mx-auto -translate-y-[22rem]">
        <form onSubmit={handleSubmit}>
          <div className="pt-10 font-medium text-4xl">โจทย์ข้อ 2</div>
          <div className="pt-2 font-normal text-xl">INPUT A :</div>
          <input
            type="text"
            autoComplete="on"
            required
            title="กรอกตัวเลขเท่านั้น"
            className="border-solid border-2 border-sky-500 w-full rounded-md px-2 py-1 font-normal text-xl"
            onChange={e => {
              setInputA(e.target.value);
            }}
          ></input>
          <div className="pt-2 font-normal text-xl">INPUT B :</div>
          <input
            required
            autoComplete="on"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            title="กรอกตัวเลขเท่านั้น"
            className="border-solid border-2 border-sky-500 w-full rounded-md px-2 py-1 font-normal text-xl"
            onChange={e => {
              setInputB(e.target.value);
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
        <div className="font-normal text-xl">
          {subinputA === null ? (
            <div></div>
          ) : subinputA === inputA ? (
            <div>INPUT A : {inputA} </div>
          ) : (
            <div> INPUT A : {subinputA} </div>
          )}
          {subinputB === null ? (
            <div></div>
          ) : subinputB === inputB ? (
            <div>
              INPUT B : = {inputB} <br></br>{' '}
              **---------------------------------------**{' '}
            </div>
          ) : (
            <div>
              {' '}
              INPUT B : = {subinputB} <br></br>{' '}
              **---------------------------------------**{' '}
            </div>
          )}
          {outputC}
        </div>
      </div>
    </div>
  );
}

export default P2;
