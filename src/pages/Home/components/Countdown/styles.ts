import styled from 'styled-components';

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 1; 
  color: ${(props) => props.theme['gray-700']};

  display: flex;
  align-items: center; 
  gap: 1rem;

  span {
    background: ${(props) => props.theme['purple-700']}; // Alterado para roxo
    padding: 0.5rem; 
    border-radius: 8px;
    color: ${(props) => props.theme['gray-100']}; 
    min-width: 2rem; 
    text-align: center; 
  }
`;

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['gray-500']};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;
