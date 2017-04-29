import React, { Component } from 'react';
import CardsIconFacebook from 'binary-ui-icons/binary/Facebook';
import CardsIconLinkedin from 'binary-ui-icons/binary/Linkedin';
import CardsIconTwitter from 'binary-ui-icons/binary/Twitter';
import CardsIconGoogle from 'binary-ui-icons/binary/Google';
import CardsIconGithub from 'binary-ui-icons/binary/Github';
import CardsIconMedium from 'binary-ui-icons/binary/Medium';
import CardsIconTelegram from 'binary-ui-icons/binary/Telegram';
import CardsIconInstagram from 'binary-ui-icons/binary/Instagram';
import PageContainer from '../components-styled/PageContainer';
import CardContainer from '../components-styled/CardContainer';
import Card from '../components-styled/Card';
import Introduction from '../components-styled/Introduction';
import Icon from '../components-styled/Icon';
import IconLink from '../components-styled/IconLink';
import Name from '../components-styled/Name';
import TextBlockContainer from '../components-styled/TextBlockContainer';
import TextContainer from '../components-styled/TextContainer';
import TextLink from '../components-styled/TextLink';
import Year from '../components-styled/Year';

export default class App extends Component {
  render() {
    const repositoryLink = 'https://github.com/rtkhanas/rtkhanas.github.io';
    return (
      <PageContainer>
        <CardContainer>
          <Card>
            <iframe height="100%" width="100%" frameBorder="0" src="https://try.cards/card/ef1e3d70-2a31-11e7-8e4d-4110e72b0aa1" />
          </Card>
        </CardContainer>
        <TextContainer>
          <TextBlockContainer>
            <Name>About me</Name>
            <Introduction>
              I'm a founder of <TextLink href="https://try.cards">Cards Corp.</TextLink> and web developer. I create open sourced stuff on GitHub, based on Node.js and React.
            </Introduction>
            <Introduction>
              I grew up in <TextLink href="https://en.wikipedia.org/wiki/Lviv">Lviv (Western Ukraine)</TextLink>, where I went to school and university. It was my home for many years before moving to Seoul.
            </Introduction>
            <Introduction>
              <Year>2017</Year>Founded <TextLink href="https://try.cards">Cards Corp</TextLink>.
            </Introduction>
            <Introduction>
              <Year>2014-2017</Year>Software Engineer at <TextLink href="http://www.samsung.com/sec">Samsung Electronics</TextLink> (Seoul, South Korea).
            </Introduction>
            <Introduction>
              <Year>2010-2014</Year>Graduated <TextLink href="http://www.lnu.edu.ua/en/">Ivan Franko National University of Lviv</TextLink> (Applied Math and Informatics). Worked at InterLogic and Perfectial.
            </Introduction>
            <Introduction>
              <TextLink href="./demo/build/Resume_Khanas.pdf">Download my resume</TextLink>, <TextLink href="mailto:rtkhanas@gmail.com">e-mail</TextLink> or connect on social services:
            </Introduction>
            <Introduction>
              <IconLink href="https://facebook.com/rtkhanas">
                <Icon color="#606060" title="Facebook" renderIcon={() => (<CardsIconFacebook />)} />
              </IconLink>
              <IconLink href="https://linkedin.com/in/rtkhanas">
                <Icon color="#606060" title="LinkedIn" renderIcon={() => (<CardsIconLinkedin />)} />
              </IconLink>
              <IconLink href="https://t.me/rtkhanas">
                <Icon color="#606060" title="Telegram" renderIcon={() => (<CardsIconTelegram />)} />
              </IconLink>
              <IconLink href="https://twitter.com/rtkhanas">
                <Icon color="#606060" title="Twitter" renderIcon={() => (<CardsIconTwitter />)} />
              </IconLink>
              <IconLink href="https://plus.google.com/u/0/116889127726941605887">
                <Icon color="#606060" title="Google" renderIcon={() => (<CardsIconGoogle />)} />
              </IconLink>
              <IconLink href="https://github.com/rtkhanas">
                <Icon color="#606060" title="Github" renderIcon={() => (<CardsIconGithub />)} />
              </IconLink>
              <IconLink href="https://medium.com/@rtkhanas">
                <Icon color="#606060" title="Medium" renderIcon={() => (<CardsIconMedium />)} />
              </IconLink>
              <IconLink href="https://instagram.com/rtkhanas">
                <Icon color="#606060" title="Instagram" renderIcon={() => (<CardsIconInstagram />)} />
              </IconLink>  
            </Introduction>
          </TextBlockContainer>
        </TextContainer>
      </PageContainer>
    );
  }
}
