import styled from 'styled-components';

// Para usar o Link no lugar do button, apague o .button e coloque (Link) ficando assim styled(Link)
// No import fica assim import { Link } from 'react-router-dom;

const Button = styled.button`
  color: var(--white);
  border: 1px solid var(--white);
  background: var(--red);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Button;
