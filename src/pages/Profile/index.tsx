import React, { useCallback, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { FiUser, FiMail } from 'react-icons/fi';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useToast } from '../../hooks/tost';
import { useAuth } from '../../hooks/auth';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

interface ProfileFormData {
  name: string;
  email: string;
  old_password: string;
  password: string;
  password_confirmation: string;
}

export const Profile = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const { addToast } = useToast();
  const { updateUser, user } = useAuth();

  const handleSubmit = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome é obrigatório'),
          email: Yup.string()
            .required('E-mail é obrigatório')
            .email('Digite um e-mail válido'),
          old_password: Yup.string(),
          password: Yup.string().when('old_password', {
            is: val => !!val.length,
            then: Yup.string()
              .min(6, 'No mínimo 6 dígitos')
              .required('Campo obrigatório'),
            otherwise: Yup.string(),
          }),
          password_confirmation: Yup.string().nullable()
            .when('old_password', {
              is: val => !!val.length,
              then: Yup.string().required('Campo obrigatório'),
              otherwise: Yup.string(),
            })
            .oneOf([Yup.ref('password'), null], 'Confirmação incorreta'),
        });

        await schema.validate(data, { abortEarly: false });

        const {
          name,
          email,
          old_password,
          password,
          password_confirmation,
        } = data;

        const formData = {
          name,
          email,
          ...(old_password
            ? {
                old_password,
                password,
                password_confirmation,
              }
            : {}),
        };

        await updateUser(formData);

        history.push('/dashboard');

        addToast({
          type: 'success',
          title: 'Perfil atualizado!',
          description:
            'Suas informações do perfil foram atualizadas com sucesso!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na atualização',
          description:
            'Ocorreu um error ao atualizar o perfil, tente novamente.',
        });
      }
    },
    [addToast, history, updateUser],
  );

  useEffect(() => {

    async function load() {
      const response = await api.get('/profile');

      console.log(response.data);
    }

    load();
  }, [])

  return(
    <Container>
      <strong>Meu Perfil</strong>
      <Form
        ref={formRef}
        initialData={{ name: user.name, email: user.email }}
        onSubmit={handleSubmit}
      >

      <Input name="name" placeholder="Nome" icon={FiUser} />
      <Input name="email" placeholder="E-mail" icon={FiMail} />

      <Input
        containerStyle={{marginTop: 24}}
        type="password"
        name="old_password"
        placeholder="Senha Atual"
        icon={FiMail}
      />
      <Input
        name="password"
        type="password"
        placeholder="Nova Senha"
        icon={FiMail}
      />
      <Input
        type="password"
        name="password_confirmation"
        placeholder="Confirmar nova senha"
        icon={FiMail}
      />

      <Button type="submit" >Alterar dados</Button>
      </Form>
    </Container>
  );
};