import React from 'react';

export default function SocialButtons() {
  return (
    <div style={{display:'grid',gridAutoFlow:'column',gap:12,justifyContent:'center'}}>
      <button aria-label="Continue with Google" style={btnStyle}>
        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="" width="22" height="22" />
      </button>
      <button aria-label="Continue with GitHub" style={btnStyle}>
        <img src="https://www.svgrepo.com/show/475654/github-color.svg" alt="" width="22" height="22" />
      </button>
      <button aria-label="Continue with Apple" style={btnStyle}>
        <img src="https://www.svgrepo.com/show/303128/apple-logo.svg" alt="" width="22" height="22" />
      </button>
    </div>
  );
}

const btnStyle = {
  display:'grid',
  placeItems:'center',
  width:44,
  height:44,
  borderRadius:10,
  border:'1px solid #e4ecf5',
  background:'#ffffff',
  cursor:'pointer'
};


