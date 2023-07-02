import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="w-fit translate-y-10 text-white">
      <div className="-translate-x-32 slideRight">
        <Link to="/">
          <div className="w-fit bg-[#08ac6c] rounded-md">
            <div className="font-medium text-4xl p-6 pr-8">โจทย์ข้อที่ 1</div>
          </div>
        </Link>
      </div>
      <div className="pt-7 -translate-x-32 slideRight">
        <Link to="/P2">
          <div className="w-fit bg-[#2894f4] rounded-md">
            <div className="font-medium text-4xl p-6 pr-8">โจทย์ข้อที่ 2</div>
          </div>
        </Link>
      </div>
      <div className="pt-7 -translate-x-32 slideRight">
        <Link to="/P3">
          <div className="w-fit bg-[#f84434] rounded-md">
            <div className="font-medium text-4xl p-6 pr-8">โจทย์ข้อที่ 3</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
