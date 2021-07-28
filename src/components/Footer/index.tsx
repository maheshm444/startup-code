import { Row, Col } from 'antd'
import { withTranslation } from 'react-i18next'
import { SvgIcon } from '../../common/SvgIcon'
import Container from '../../common/Container'

import i18n from 'i18next'
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from './styles'

interface SocialLinkProps {
  href: string
  src: string
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language)
  }

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    )
  }

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t('Contact')}</Language>
              <Large to="/">{t('+91-7772035555 | +91-8105384226')}</Large>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="shashankjaiswa67gmail.com">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Language>{t('Address')}</Language>
              <Para>69, Commercial complex</Para>
              <Para>Nehru Nagar East, Bhilai</Para>
              <Para>490020</Para>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Title>{t('Company')}</Title>

              <Large left="true" to="/">
                {t('Blog')}
              </Large>
              <Large left="true" to="/">
                {t('Press')}
              </Large>
              <Large left="true" to="/">
                {t('Careers & Culture')}
              </Large>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: '3rem' }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="147px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://github.com/Adrinlol/create-react-app-adrinlol"
                src="facebook.svg"
              />
              <SocialLink
                href="https://twitter.com/home?lang=en"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/in/shashank23/"
                src="linkedin.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  )
}

export default withTranslation()(Footer)
