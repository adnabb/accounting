import styled from 'styled-components';

export const KeyoardSection = styled.section`
  font-family: Consolas;
  > .result {
    font-size: 36px;
    padding: 26px 16px;
    text-align: right;
    background: white;
  }
  > .button-wrapper {
    > button {
      height: 64px;
      width: 25%;
      float: left;
      font-size: 18px;
      border-radius: 0;
      border: none;
    }
    > .ok {
      height: 128px;
      float: right;
    }
    > .zero {
      width: 50%;
    }
    > .dot {
      font-weight: bold;
    }
    & button:nth-child(1) {
      background: rgba(248, 208, 45, .1);
    }
    & button:nth-child(2), button:nth-child(5) {
      background: rgba(248, 208, 45, .2);
    }
    & button:nth-child(3), button:nth-child(6), button:nth-child(9) {
      background: rgba(248, 208, 45, .3);
    }
    & button:nth-child(4), button:nth-child(7), button:nth-child(10){
      background: rgba(248, 208, 45, .4);
    }
    & button:nth-child(8), button:nth-child(11) {
      background: rgba(248, 208, 45, .5);
    }
    button:nth-child(13) {
      background: rgba(248, 208, 45, .6);
    }
     button:nth-child(14) {
      background: rgba(248, 208, 45, .7);
    }
    & button:nth-child(12) {
      background: rgba(248, 208, 45, .8);
    }
  }
`;