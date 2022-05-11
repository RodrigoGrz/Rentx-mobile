import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

import ArrowSvg from '../../assets/arrow.svg';

import {
    Container,
    Header,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
    DateValueContainer,
    Content,
    Footer,
} from './styles';

export function Scheduling() {
    const theme = useTheme();
    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    function handleConfirmRental() {
        navigation.navigate('SchedulingDetails');
    }

    return (
        <Container>
            <StatusBar
                barStyle='light-content'
                translucent
                backgroundColor="transparent"
            />
            <Header>
                <BackButton
                    onPress={() => { }}
                    color={theme.colors.shape}
                />

                <Title>
                    Escolha uma {'\n'}
                    data de início e {'\n'}
                    fim do aluguel
                </Title>

                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValueContainer selected={false}>
                            <DateValue>
                                18/06/2021
                            </DateValue>
                        </DateValueContainer>
                    </DateInfo>

                    <ArrowSvg />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValueContainer selected={false}>
                            <DateValue>
                                18/06/2021
                            </DateValue>
                        </DateValueContainer>
                    </DateInfo>
                </RentalPeriod>
            </Header>

            <Content>
                <Calendar />
            </Content>

            <Footer>
                <Button title='Confirmar' onPress={handleConfirmRental} />
            </Footer>
        </Container>
    );
}