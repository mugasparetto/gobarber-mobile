import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 64px;
  background: #ff9000;
  border-radius: 8px;

  align-items: center;
  justify-content: center;
  margin-top: 8px;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-SemiBold';
  color: #312e38;
  font-size: 18px;
`;
