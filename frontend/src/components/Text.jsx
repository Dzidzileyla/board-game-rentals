import styled from 'styled-components';

const Text = styled.div`
  color: ${props => props.color || 'black'};
  font-size: ${props => props.fontSize || '1rem'};
  font-weight: ${props => props.fontWeight || 'normal'};
`;

export default Text;
