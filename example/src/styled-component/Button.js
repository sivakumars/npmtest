import styled from 'styled-components';
import { Button } from 'npmtest';

export default styled(Button)`
  color: ${props => props.default};
  font-weight: bold;
`;