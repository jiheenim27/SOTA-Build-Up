import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <h1>회원가입 페이지</h1>
      <Link to="/">
        <button>뒤로가기</button>
      </Link>
    </div>
  );
};

export default SignUp;
