import React from 'react';
import { Accent, Title, SubTitle, Button as B } from './Greeting.styled';
import { Body } from './Base.styled'

const Greeting = () => {
  return (
    <>
      <Accent>Hi, my name is</Accent>
      <Title>Sarah Jiang.</Title>
      <SubTitle>
        <div>
          I<span className="th">'</span>m a developer&nbsp;
        </div>
        <div>
          <span className="th"> and artist</span>.
        </div>
      </SubTitle>
      <Body>
        <p>Currently based in San Francisco, CA.</p>
        <br></br>
        <p>
          I am interested in building tools that allow individuals greater
          access, personal autonomy, and opportunities for creative expression.
          If you're interested in that as well, let's get in touch.
        </p>
      </Body>
      <B>Let's chat</B>
    </>
  );
}

export default Greeting;