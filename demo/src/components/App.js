import React, { Component } from 'react';
import {
  AppContainer,
  Content,
  Footer,
  Header,
  Link,
  Paragraph,
  SubTitle,
  Title,
} from 'ross-ui';
import SocialIcon from '../components-styled/SocialIcon';

export default class App extends Component {
  render() {
    const repositoryLink = 'https://github.com/rtkhanas/rtkhanas.github.io';
    const socialIconColor = '#606060';
    const socialIconStyle = { height: 40, width: 40 };
    return (
      <AppContainer>
        <Header>
          <Title>Rostyslav Khanas</Title>
          <Paragraph>
            I'm a Samsung Electronics web developer and create open sourced stuff on a GitHub, based on Node.js and React.
          </Paragraph>
        </Header>
        <Content>
          <SubTitle>About</SubTitle>
          <ul>
            <li>I currently work at <Link href="http://www.samsung.com">Samsung Electronics</Link>.</li>
            <li>I used to work at <Link href="https://www.interlogic.com.ua/dk/">InterLogic</Link> and <Link href="http://perfectial.com/">Perfectial</Link>.</li>
            <li>I'm originally from the west part of Ukraine, growing up and then living in Lviv for school and university. It was home for many years before moving to Seoul.</li>
            <li>I graduated from <Link href="http://www.lnu.edu.ua/en/">Ivan Franko National University of Lviv</Link> in 2014 with a BS degree in Applied Math and Informatics.</li>
            <li>I'm social on <Link href="https://twitter.com/rtkhanas">Twitter</Link> and <Link href="https://www.facebook.com/rtkhanas">Facebook</Link>.</li>
            <li>I put code on <Link href="https://github.com/rtkhanas">GitHub</Link>.</li>
            <li>When I remember, I put photos on <Link href="https://www.instagram.com/rtkhanas/">Instagram</Link>.</li>
            <li>I have a <Link href="https://www.linkedin.com/in/rtkhanas/">LinkedIn</Link> and an <Link href="https://angel.co/rostyslav-khanas">AngelList</Link> accounts.</li>
            <li>I have my <Link href="/Resume_Khanas.pdf">résumé</Link> as well..</li>
          </ul>
          <SubTitle>Contact</SubTitle>
          <div>
            If you want the quickest & shortest response, <Link href="https://twitter.com/rtkhanas">Twitter</Link> or <Link href="https://www.facebook.com/rtkhanas">Facebook</Link> are probably the best ways. Otherwise, I do my best to respond to <Link href="mailto:rtkhanas@gmail.com">email</Link> as quickly as possible.
          </div>
        </Content>
        <Footer>
          <div>
            <SocialIcon color={socialIconColor} style={socialIconStyle} url="https://facebook.com/rostyslav.khanas" />
            <SocialIcon color={socialIconColor} style={socialIconStyle} url="https://twitter.com/rtkhanas" />
            <SocialIcon color={socialIconColor} style={socialIconStyle} url="https://kr.linkedin.com/in/rtkhanas" />
            <SocialIcon color={socialIconColor} style={socialIconStyle} url="https://plus.google.com/u/0/116889127726941605887" />
            <SocialIcon color={socialIconColor} style={socialIconStyle} url="https://github.com/rtkhanas" />
            <SocialIcon color={socialIconColor} style={socialIconStyle} url="https://medium.com/@rtkhanas" />
            <SocialIcon color={socialIconColor} style={socialIconStyle} url="https://instagram.com/rtkhanas" />
            <SocialIcon color={socialIconColor} style={socialIconStyle} url="https://quora.com/rtkhanas" />
            <SocialIcon color={socialIconColor} style={socialIconStyle} url="https://angel.co/rostyslav-khanas" />
          </div>
          <div>
            Released under the <Link href={`${repositoryLink}/blob/master/LICENSE`}>MIT license</Link>. <Link href={repositoryLink} >View source</Link>.
          </div>
        </Footer>
      </AppContainer>
    );
  }
}
