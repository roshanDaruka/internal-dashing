import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 50px;
`;

export const AlphabetBox = styled.div`
  border: 1px solid gray;
  padding: 0.8em;
`;

export const PreviewWrapper = styled.div`
  border: 3px solid gray;
  height: 60vh;
  overflow-y: scroll;
  padding: 10px;
  border-radius: 1%;
`;

export const Seperator = styled.div`
  border: 2px solid gray;
`;

export const IconAsButton = styled(Icon)`
  cursor: pointer;
`;
