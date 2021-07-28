import { Row, Col } from 'antd'
import { withTranslation } from 'react-i18next'
import { Slide, Zoom } from 'react-awesome-reveal'
import { ContactProps, ValidationTypeProps } from './types'
import { useForm } from '../../common/utils/useForm.js'
import validate from '../../common/utils/validationRules'
import { Button } from '../../common/Button'
import Block from '../Block'
import Input from '../../common/Input'
import TextArea from '../../common/TextArea'
import {
  ContactContainer,
  FormGroup,
  Span,
  ButtonContainer,
  Language,
} from './styles'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import React, { useState } from 'react'
import DateFnsUtils from '@date-io/date-fns'

const Contactus = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmitStudentForm } = useForm(
    validate
  ) as any

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type]
    return (
      <Zoom direction="left">
        <Span erros={errors[type]}>{ErrorMessage}</Span>
      </Zoom>
    )
  }
  const [selectedDate, setSelectedDate] = useState(
    new Date('1990-01-01T00:00:00')
  )
  const handleDateChange = (date: any) => {
    setSelectedDate(date)
  }
  const [continueStep, setContinueStep] = useState(false)
  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={40} md={40} sm={24} xs={24}>
          <Slide direction="right">
            <FormGroup autoComplete="off" onSubmit={handleSubmitStudentForm}>
              <Col lg={40} md={40} sm={24} xs={24}>
                <Col span={24}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      margin="dense"
                      id="date-picker-dialog"
                      label="Your Date of Birth"
                      format="MM/dd/yyyy"
                      value={values.selectedDate}
                      onChange={handleDateChange}
                      name="dob"
                    />
                  </MuiPickersUtilsProvider>
                </Col>
                <Col span={24}>
                  <Input
                    type="text"
                    placeholder="Full Name"
                    value={values.name || ''}
                    onChange={handleChange}
                    name="name"
                    display_tile={false}
                  />
                  <ValidationType type="firstname" />
                </Col>
                <Col span={24}>
                  <Input
                    type="text"
                    placeholder="Father's Name"
                    value={values.fatherName || ''}
                    onChange={handleChange}
                    name="fatherName"
                    display_tile={false}
                  />
                  <ValidationType type="fatherName" />
                </Col>
                <Col span={24}>
                  <Input
                    type="text"
                    placeholder="Email ID"
                    value={values.email || ''}
                    onChange={handleChange}
                    name="email"
                    display_tile={false}
                  />
                  <ValidationType type="email" />
                </Col>
                <Col span={24}>
                  <Input
                    type="number"
                    placeholder="Phone Number"
                    value={values.phoneNumber || ''}
                    onChange={handleChange}
                    name="phoneNumber"
                    display_tile={false}
                  />
                  <ValidationType type="number" />
                </Col>
                <Col span={24}>
                  <TextArea
                    placeholder="Current Address"
                    value={values.current_address || ''}
                    onChange={handleChange}
                    name="current_address"
                    display_tile={false}
                  />
                  <ValidationType type="current_address" />
                </Col>
                <Col span={24}>
                  <TextArea
                    placeholder="Permanent Address"
                    value={values.permanent_address || ''}
                    onChange={handleChange}
                    name="permanent_address"
                    display_tile={false}
                  />
                  <ValidationType type="permanent_address" />
                </Col>
                <Col span={24}>
                  <Input
                    type="text"
                    placeholder="Highest Qualification"
                    value={values.qualification || ''}
                    onChange={handleChange}
                    name="qualification"
                    display_tile={false}
                  />
                  <ValidationType type="qualification" />
                </Col>
                <Col span={24}>
                  <Input
                    type="text"
                    placeholder="Occupation"
                    value={values.occupation || ''}
                    onChange={handleChange}
                    name="occupation"
                    display_tile={false}
                  />
                  <ValidationType type="occupation" />
                </Col>
                <Col span={24}>
                  <Input
                    type="text"
                    placeholder="Father's Occupation"
                    value={values.father_occupation || ''}
                    onChange={handleChange}
                    name="father_occupation"
                    display_tile={false}
                  />
                  <ValidationType type="father_occupation" />
                </Col>
                <Col span={24}>
                  <Input
                    type="text"
                    placeholder="Mother's Occupation"
                    value={values.mother_occupation || ''}
                    onChange={handleChange}
                    name="mother_occupation"
                    display_tile={false}
                  />
                  <ValidationType type="mother_occupation" />
                </Col>
                <Language>{t('Important aspects of ProSkills')}</Language>
                <Col span={40}>
                  <TextArea
                    type="text"
                    placeholder="Do you have prior knowledge of coding ? if yes, Explain about your technical stacks."
                    value={values.knowledge_tech || ''}
                    onChange={handleChange}
                    name="knowledge_tech"
                    display_tile={false}
                  />
                  <ValidationType type="knowledge_tech" />
                </Col>
                <Col span={24}>
                  <TextArea
                    type="text"
                    placeholder="What's your motivation in this program ?"
                    value={values.motivation_program || ''}
                    onChange={handleChange}
                    name="motivation_program"
                    display_tile={false}
                  />
                  <ValidationType type="motivation_program" />
                </Col>
                <Col span={24}>
                  <TextArea
                    type="text"
                    placeholder="Do you have a laptop with minimum configuration of I3/4GB Primary Memory ?"
                    value={values.pc_config || ''}
                    onChange={handleChange}
                    name="pc_config"
                    display_tile={false}
                  />
                  <ValidationType type="pc_config" />
                </Col>
                <Col span={24}>
                  <TextArea
                    type="text"
                    placeholder="Are you ready to dedicate 9 hours in a day for a minimum of 4 months ?"
                    value={values.dedicate_hours || ''}
                    onChange={handleChange}
                    name="dedicate_hours"
                    display_tile={false}
                  />
                  <ValidationType type="dedicate_hours" />
                </Col>
                <Col span={24}>
                  <TextArea
                    type="text"
                    placeholder="Are you available to relocate anywhere in India if you get an offer with a minimum CTC of 4.0 LPA ?"
                    value={values.relocate_data || ''}
                    onChange={handleChange}
                    name="relocate_data"
                    display_tile={false}
                  />
                  <ValidationType type="relocate_data" />
                </Col>
                <Col span={24}>
                  <TextArea
                    type="text"
                    placeholder="What keeps you motivated for next 4 months ?"
                    value={values.motivation_data || ''}
                    onChange={handleChange}
                    name="motivation_data"
                    display_tile={false}
                  />
                  <ValidationType type="motivation_data" />
                </Col>
              </Col>
              {/* 
              {continueStep && (
                <Col lg={40} md={40} sm={40} xs={40}>
                  <Col span={40}>
                    <TextArea
                      type="text"
                      placeholder="Do you have prior knowledge of coding ? if yes, Explain about your technical stacks."
                      value={values.knowledge_tech || ''}
                      onChange={handleChange}
                      name="knowledge_tech"
                      display_tile={false}
                    />
                    <ValidationType type="knowledge_tech" />
                  </Col>
                  <Col span={24}>
                    <TextArea
                      type="text"
                      placeholder="What's your motivation in this program ?"
                      value={values.motivation_program || ''}
                      onChange={handleChange}
                      name="motivation_program"
                      display_tile={false}
                    />
                    <ValidationType type="motivation_program" />
                  </Col>
                  <Col span={24}>
                    <TextArea
                      type="text"
                      placeholder="Do you have a laptop with minimum configuration of I3/4GB Primary Memory ?"
                      value={values.pc_config || ''}
                      onChange={handleChange}
                      name="pc_config"
                      display_tile={false}
                    />
                    <ValidationType type="pc_config" />
                  </Col>
                  <Col span={24}>
                    <TextArea
                      type="text"
                      placeholder="Are you ready to dedicate 9 hours in a day for a minimum of 4 months ?"
                      value={values.dedicate_hours || ''}
                      onChange={handleChange}
                      name="dedicate_hours"
                      display_tile={false}
                    />
                    <ValidationType type="dedicate_hours" />
                  </Col>
                  <Col span={24}>
                    <TextArea
                      type="text"
                      placeholder="Are you available to relocate anywhere in India if you get an offer with a minimum CTC of 4.0 LPA ?"
                      value={values.relocate_data || ''}
                      onChange={handleChange}
                      name="name"
                      display_tile={false}
                    />
                    <ValidationType type="relocate_data" />
                  </Col>
                  <Col span={24}>
                    <TextArea
                      type="text"
                      placeholder="What keeps you motivated for next 4 months ?"
                      value={values.motivation_data || ''}
                      onChange={handleChange}
                      name="motivation_data"
                      display_tile={false}
                    />
                    <ValidationType type="motivation_data" />
                  </Col>
                </Col>
              )} */}
              <ButtonContainer>
                {/* {continueStep && (
                  <Button onClick={() => setContinueStep(false)}>
                    {t('Back')}
                  </Button>
                )}{' '}
                {!continueStep && (
                  <Button onClick={() => setContinueStep(true)}>
                    {t('Continue')}
                  </Button>
                )}
                {continueStep && <Button name="submit">{t('Submit')}</Button>} */}
                <Button name="submit">{t('Submit')}</Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  )
}

export default withTranslation()(Contactus)
