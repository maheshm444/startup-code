import { Row, Col } from 'antd';
import { withTranslation } from 'react-i18next';
import { Slide, Zoom } from 'react-awesome-reveal';
import { ContactProps, ValidationTypeProps } from './types';
import { useForm } from '../../common/utils/useForm';
import validate from '../../common/utils/validationRules';
import { Button } from '../../common/Button';
import Block from '../Block';
import Input from '../../common/Input';
import TextArea from '../../common/TextArea';
import { ContactContainer, FormGroup, Span, ButtonContainer } from './styles';

const Contactus = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    validate
  ) as any;

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type];
    return (
      <Zoom direction="left">
        <Span erros={errors[type]}>{ErrorMessage}</Span>
      </Zoom>
    );
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right">
            <FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col span={24}>
                <Input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  value={values.name || ''}
                  onChange={handleChange}
                />
                <ValidationType type="firstname" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  value={values.name || ''}
                  onChange={handleChange}
                />
                <ValidationType type="lastname" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="qualification"
                  placeholder="Highest Qualification"
                  value={values.name || ''}
                  onChange={handleChange}
                />
                <ValidationType type="qualification" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  value={values.email || ''}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="Your Message"
                  value={values.message || ''}
                  name="message"
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
              <ButtonContainer>
                <Button name="submit">{t('')}</Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contactus);
