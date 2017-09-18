import styled from 'styled-components';
import remcalc from 'remcalc';

export const Article = styled.article`
  display: block;
`;

export const Aside = styled.aside`
  display: block;
`;

export const Footer = styled.footer`
  display: block;
`;

export const Header = styled.header`
  display: block;
`;

export const Nav = styled.nav`
  display: block;
`;

export const Section = styled.section`
  display: block;
`;

export const FigCaption = styled.figcaption`
  display: block;
`;

export const Figure = styled.figure`
  display: block;
  margin: ${remcalc(16)} ${remcalc(40)};
`;

export const Main = styled.main`
  display: block;
`;

export const H1 = styled.h1`
  font-size: ${remcalc(32)};
  margin: ${remcalc(10)} 0;
`;

export const Hr = styled.hr`
  box-sizing: content-box;
  height: 0;
  overflow: visible;
`;

export const Pre = styled.pre`
  font-family: monospace, monospace;
  font-size: ${remcalc(16)};
`;

export const A = styled.a`
  background-color: transparent;
  text-decoration-skip: objects;
`;

export const Abbr = styled.abbr`
  &[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }
`;

export const B = styled.b`
  font-weight: bolder;
`;

export const Strong = styled.strong`
  font-weight: bolder;
`;

export const Code = styled.code`
  font-family: monospace, monospace;
  font-size: ${remcalc(16)};
`;

export const Kbd = styled.kbd`
  font-family: monospace, monospace;
  font-size: ${remcalc(16)};
`;

export const Samp = styled.samp`
  font-family: monospace, monospace;
  font-size: ${remcalc(16)};
`;

export const Dfn = styled.dfn`
  font-style: italic;
`;

export const Mark = styled.mark`
  background-color: #ff0;
  color: #000;
`;

export const Small = styled.small`
  font-size: 80%;
`;

export const Sub = styled.sub`
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
  bottom: -0.25em;
`;

export const Sup = styled.sup`
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
  top: -0.5em;
`;

export const Audio = styled.audio`
  display: inline-block;

  &:not([controls]) {
    display: none;
    height: 0;
  }
`;

export const Video = styled.video`
  display: inline-block;
`;

export const Img = styled.img`
  border-style: none;
`;

export const Svg = styled.svg`
  &:not(:root) {
    overflow: hidden;
  }
`;

export const Button = styled.button`
  font-family: sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  overflow: visible;
  text-transform: none;
  appearance: button;

  &::-moz-focus-inner,
  &[type='button']::-moz-focus-inner,
  &[type='reset']::-moz-focus-inner,
  &[type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  &:-moz-focusring,
  &[type='button']:-moz-focusring,
  &[type='reset']:-moz-focusring,
  &[type='submit']:-moz-focusring {
    outline: ${remcalc(1)} dotted ButtonText;
  }
`;

export const Input = styled.input`
  font-family: sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  overflow: visible;

  &[type='checkbox'],
  &[type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }

  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  &[type='search'] {
    appearance: textfield;
    outline-offset: ${remcalc(-2)};
  }

  &[type='search']::-webkit-search-cancel-button,
  &[type='search']::-webkit-search-decoration {
    appearance: none;
  }

  &::-webkit-file-upload-button {
    appearance: button;
    font: inherit;
  }
`;

export const Optgroup = styled.optgroup`
  font-family: sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
`;

export const Select = styled.select`
  font-family: sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  text-transform: none;
`;

export const Textarea = styled.textarea`
  font-family: sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  overflow: auto;
`;

export const Fieldset = styled.fieldset`
  padding: 0.35em 0.75em 0.625em;
`;

export const Legend = styled.legend`
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
`;

export const Progress = styled.progress`
  display: inline-block;
  vertical-align: baseline;
`;

export const Details = styled.details`
  display: block;
`;

export const Menu = styled.menu`
  display: block;
`;

export const Summary = styled.summary`
  display: list-item;
`;

export const Canvas = styled.canvas`
  display: inline-block;
`;
