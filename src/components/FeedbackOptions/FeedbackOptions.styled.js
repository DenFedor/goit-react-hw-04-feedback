import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
gap:10px;
`

export const FeedbackBtn = styled.button`
  transition: background 0.8s;
:hover {
  background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%;
}
:active {
  background-color: #6eb9f7;
  background-size: 100%;
  transition: background 0s;
}
/* Button style */
  border: none;
  border-radius: 2px;
  padding: 12px 18px;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  background-color: #2196f3;
  box-shadow: 0 0 4px #999;
  outline: none;
`