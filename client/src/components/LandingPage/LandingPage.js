import React from "react";
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>랜딩 페이지</h1>
      <Link to="/login">
        <button>로그인</button>
      </Link>
      <Link to="/signup">
        <button>회원가입하러 가기</button>
      </Link>
    </div>
  );
};

export default LandingPage;
