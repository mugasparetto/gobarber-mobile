import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useMemo } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { format } from 'date-fns';

import { Container, Title, Description, OkButton, OkLabel } from './styles';

export interface Provider {
  id: string;
  name: string;
  avatar_url: string;
}

interface RouteParams {
  date: number;
  provider: Provider;
}

const AppointmentCreated: React.FC = () => {
  const { reset } = useNavigation();
  const { params } = useRoute();

  const { date, provider } = params as RouteParams;

  const handleOkPressed = useCallback(() => {
    reset({
      routes: [{ name: 'Dashboard' }],
      index: 0,
    });
  }, [reset]);

  const formattedDate = useMemo(() => {
    return format(date, "EEEE',' MMMM do',' yyyy 'at' hha");
  }, [date]);

  return (
    <Container>
      <Icon name="check" size={80} color="#04d361" />

      <Title>Booking confirmed!</Title>
      <Description>
        You have booked an appointment with {provider.name} on {formattedDate}
      </Description>

      <OkButton onPress={handleOkPressed}>
        <OkLabel>Ok</OkLabel>
      </OkButton>
    </Container>
  );
};

export default AppointmentCreated;
