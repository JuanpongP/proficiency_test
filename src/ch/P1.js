import { React, useState } from 'react';
import Nav from '../nav/Nav';

function P1() {
  const [cash, setCash] = useState('');
  const [product, setProduct] = useState('');
  const [subcash, setsubCash] = useState(null);
  const [subproduct, setSubproduct] = useState(null);
  const [change, setChange] = useState('');

  const [result1000, setResult1000] = useState('');
  const [result500, setResult500] = useState('');
  const [result100, setResult100] = useState('');
  const [result50, setResult50] = useState('');
  const [result20, setResult20] = useState('');
  const [result10, setResult10] = useState('');
  const [result5, setResult5] = useState('');
  const [result2, setResult2] = useState('');
  const [result1, setResult1] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    const total = cash - product;
    setChange(total);
    setSubproduct(product);
    setsubCash(cash);

    let modulo;
    let result;

    if (total >= 1000) {
      result = Math.floor(total / 1000);
      modulo = total % 1000;

      setResult1000(result);
    } else {
      setResult1000('');
    }

    if (modulo >= 500 || (total < 1000 && total >= 500)) {
      result = Math.floor((modulo || total) / 500);
      modulo = (modulo || total) % 500;

      setResult500(result);
    } else {
      setResult500('');
    }

    if (modulo >= 100 || (total < 500 && total >= 100)) {
      result = Math.floor((modulo || total) / 100);
      modulo = (modulo || total) % 100;

      setResult100(result);
    } else {
      setResult100('');
    }

    if (modulo >= 50 || (total < 100 && total >= 50)) {
      result = Math.floor((modulo || total) / 50);
      modulo = (modulo || total) % 50;

      setResult50(result);
    } else {
      setResult50('');
    }

    if (modulo >= 20 || (total < 50 && total >= 20)) {
      result = Math.floor((modulo || total) / 20);
      modulo = (modulo || total) % 20;

      setResult20(result);
    } else {
      setResult20('');
    }

    if (modulo >= 10 || (total < 20 && total >= 10)) {
      result = Math.floor((modulo || total) / 10);
      modulo = (modulo || total) % 10;

      setResult10(result);
    } else {
      setResult10('');
    }

    if (modulo >= 5 || (total < 10 && total >= 5)) {
      result = Math.floor((modulo || total) / 5);
      modulo = (modulo || total) % 5;

      setResult5(result);
    } else {
      setResult5('');
    }

    if (modulo >= 2 || (total < 5 && total >= 2)) {
      result = Math.floor((modulo || total) / 2);
      modulo = (modulo || total) % 2;

      setResult2(result);
    } else {
      setResult2('');
    }

    if (modulo >= 1 || total === 1) {
      result = Math.floor((modulo || total) / 1);
      modulo = (modulo || total) % 1;
      setResult1(result);
    } else {
      setResult1('');
    }
  };
  return (
    <div>
      <Nav />
      <div className="max-w-2xl mx-auto -translate-y-[22rem]">
        <form onSubmit={handleSubmit}>
          <div className="pt-10 font-medium text-4xl">โจทย์ข้อ 1</div>
          <div className="pt-2 font-normal text-xl">เงินสด</div>
          <input
            type="text"
            autoComplete="on"
            required
            inputMode="numeric"
            pattern="[0-9]*"
            title="กรอกตัวเลขเท่านั้น"
            className="border-solid border-2 border-sky-500 w-full rounded-md px-2 py-1 font-normal text-xl "
            onChange={e => {
              setCash(parseInt(e.target.value));
            }}
          ></input>
          <div className="pt-2 font-normal text-xl">ราคาสินค้า</div>
          <input
            required
            autoComplete="on"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            title="กรอกตัวเลขเท่านั้น"
            className="border-solid border-2 border-sky-500 w-full rounded-md px-2 py-1 font-normal text-xl"
            onChange={e => {
              setProduct(parseInt(e.target.value));
            }}
          ></input>
          <br />
          <button
            className="  my-5 w-full rounded-md p-2 text-white bg-[#208454] text-2xl hover:brightness-90 "
            type="submit"
          >
            SUBMIT
          </button>
        </form>
        <div className="text-xl">
          {subcash === null ? (
            <div></div>
          ) : subcash === cash ? (
            <div>เงินสด = {cash} บาท</div>
          ) : (
            <div> เงินสด = {subcash} บาท</div>
          )}
          {subproduct === null ? (
            <div></div>
          ) : subproduct === product ? (
            <div>ราคาสินค้า = {product} บาท</div>
          ) : (
            <div> ราคาสินค้า = {subproduct} บาท</div>
          )}
          {change && (
            <div>
              เงินทอน = {change} บาท
              <br />
              **---------------------------**
            </div>
          )}
          {result1000 !== 0 && result1000 !== '' && (
            <div>มีจำนวนธนบัตร 1000 = {result1000} ใบ</div>
          )}
          {result500 !== 0 && result500 !== '' && (
            <div>มีจำนวนธนบัตร 500 = {result500} ใบ</div>
          )}
          {result100 !== 0 && result100 !== '' && (
            <div>มีจำนวนธนบัตร 100 = {result100} ใบ</div>
          )}
          {result50 !== 0 && result50 !== '' && (
            <div>มีจำนวนธนบัตร 50 = {result50} ใบ</div>
          )}
          {result20 !== 0 && result20 !== '' && (
            <div>มีจำนวนธนบัตร 20 = {result20} ใบ</div>
          )}
          {result10 !== 0 && result10 !== '' && (
            <div>มีจำนวนเหรียญ 10 = {result10} เหรียญ</div>
          )}
          {result5 !== 0 && result5 !== '' && (
            <div>มีจำนวนเหรียญ 5 = {result5} เหรียญ</div>
          )}
          {result2 !== 0 && result2 !== '' && (
            <div>มีจำนวนเหรียญ 2 = {result2} เหรียญ</div>
          )}
          {result1 !== 0 && result1 !== '' && (
            <div>มีจำนวนเหรียญ 1 = {result1} เหรียญ</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default P1;
