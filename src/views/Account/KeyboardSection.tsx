import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
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

type Props = {
  value: number
  onChange: (value:number) => void
}
const KeyoardSection: React.FC<Props> = (props) => {
  const amount = props.value.toString()
  const [result, setResult] = useState(amount)
  const onClick = (e:React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    switch (text) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
        setResult(result === '0' ? text : result + text)
        break;
      case '.':
        setResult(result.indexOf('.') >= 0 ? result : result + text)
        break
      case '删除':
        setResult(result.length > 1 ? result.slice(0,-1) : '0')
        break
      case '清空':
        setResult('0')
        break;
      case 'ok':
        console.log('ok');
        break;
      default:
        break;
    }
  }
  const ok = () => {
    props.onChange(parseFloat(result))
  }
  return (
    <Wrapper>
      <div className="result">{result}</div>
      <div className="button-wrapper clearfix" onClick={onClick}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok" onClick={ok}>OK</button>
        <button className="zero">0</button>
        <button className="dot">.</button>
      </div>
    </Wrapper>
  )
}

export {KeyoardSection}