import React from 'react';

import { Input } from '../../Components/Forms/Input/index'
import { Button } from '../../Components/Forms/Button/index'
import { TransactionTypeButton } from '../../Components/Forms/TransactionTypeButton';

import { 
    Container,
    Header,
    Title,
    Form,
    Fields
} from './styles';

export function Register(){
    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <Input 
                        placeholder="Nome"
                    />
                    <Input 
                        placeholder="Preço"
                    />
                    <TransactionTypeButton 
                        type="up"
                        title="Income"
                    />
                </Fields>

                <Button title="Enviar"/>
            </Form>
        </Container>
    );
}