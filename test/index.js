import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import {
  Article,
  Aside,
  Footer,
  Header,
  Nav,
  Section,
  FigCaption,
  Figure,
  Main,
  H1,
  Hr,
  Pre,
  A,
  Abbr,
  B,
  Strong,
  Code,
  Kbd,
  Samp,
  Dfn,
  Mark,
  Small,
  Sub,
  Sup,
  Audio,
  Video,
  Img,
  Svg,
  Button,
  Input,
  Optgroup,
  Select,
  Textarea,
  Fieldset,
  Legend,
  Progress,
  Details,
  Menu,
  Summary,
  Canvas
} from '../src/';

it('renders <Article /> correctly', () => {
  const tree = renderer.create(<Article />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Aside /> correctly', () => {
  const tree = renderer.create(<Aside />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Footer /> correctly', () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Header /> correctly', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Nav /> correctly', () => {
  const tree = renderer.create(<Nav />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Section /> correctly', () => {
  const tree = renderer.create(<Section />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <FigCaption /> correctly', () => {
  const tree = renderer.create(<FigCaption />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Figure /> correctly', () => {
  const tree = renderer.create(<Figure />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Main /> correctly', () => {
  const tree = renderer.create(<Main />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <H1 /> correctly', () => {
  const tree = renderer.create(<H1 />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Hr /> correctly', () => {
  const tree = renderer.create(<Hr />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Pre /> correctly', () => {
  const tree = renderer.create(<Pre />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <A /> correctly', () => {
  const tree = renderer.create(<A />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Abbr /> correctly', () => {
  const tree = renderer.create(<Abbr />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <B /> correctly', () => {
  const tree = renderer.create(<B />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Strong /> correctly', () => {
  const tree = renderer.create(<Strong />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Code /> correctly', () => {
  const tree = renderer.create(<Code />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Kbd /> correctly', () => {
  const tree = renderer.create(<Kbd />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Samp /> correctly', () => {
  const tree = renderer.create(<Samp />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Dfn /> correctly', () => {
  const tree = renderer.create(<Dfn />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Mark /> correctly', () => {
  const tree = renderer.create(<Mark />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Small /> correctly', () => {
  const tree = renderer.create(<Small />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Sub /> correctly', () => {
  const tree = renderer.create(<Sub />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Sup /> correctly', () => {
  const tree = renderer.create(<Sup />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Audio /> correctly', () => {
  const tree = renderer.create(<Audio />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Video /> correctly', () => {
  const tree = renderer.create(<Video />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Img /> correctly', () => {
  const tree = renderer.create(<Img />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Svg /> correctly', () => {
  const tree = renderer.create(<Svg />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Button /> correctly', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Input /> correctly', () => {
  const tree = renderer.create(<Input />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Optgroup /> correctly', () => {
  const tree = renderer.create(<Optgroup />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Select /> correctly', () => {
  const tree = renderer.create(<Select />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Textarea /> correctly', () => {
  const tree = renderer.create(<Textarea />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Fieldset /> correctly', () => {
  const tree = renderer.create(<Fieldset />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Legend /> correctly', () => {
  const tree = renderer.create(<Legend />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Progress /> correctly', () => {
  const tree = renderer.create(<Progress />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Details /> correctly', () => {
  const tree = renderer.create(<Details />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Menu /> correctly', () => {
  const tree = renderer.create(<Menu />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Summary /> correctly', () => {
  const tree = renderer.create(<Summary />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Canvas /> correctly', () => {
  const tree = renderer.create(<Canvas />).toJSON();
  expect(tree).toMatchSnapshot();
});
