import { css } from '@emotion/react'

export const globalStyles = css`
  html,
  body,
  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }

  ul {
    list-style: none;
  }

  button,
  input,
  select,
  textarea {
    margin: 0;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  img,
  embed,
  iframe,
  object,
  audio,
  video {
    height: auto;
    max-width: 100%;
  }

  iframe {
    border: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
    text-align: left;
  }

  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: 0.01em;
    background-color: var(--main-bg-color);
    height: 100%;
  }

  body {
    display: flex;
    flex-direction: column;
    fill: var(--main-color);
  }

  #root,
  #modal {
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    display: flex;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /*CSS Theme Variables */
  :root {
    --main-color: #0486c5; /* New Ringo color*/
    --placeholder-color: #9ea1ab;
    --placeholder-error-color: rgba(242, 78, 78, 0.5);
    --ilde-bg-color: #f6f6f7;
    --title-color: #0e142c;
    --text-color: #6e7280;
    --second-modal-text-color: #3e4356;
    --timer-bg-color: rgb(255 78 97 / 12%);
    --input-text-color: #03263d;
    --input-border-color: #0486c5;
    --main-bg-color: #fff;
    --content-bg-color: #fafafa;
    --primary-color-500: #3c4d77;
    --primary-color-400: #65769b;
    --primary-color-300: #818fac;
    --primary-color-200: #a3aec4;
    --primary-color-100: #c6cedc;
    --primary-color-50: #e9ebf0;
    --error-color: #f24e4e;
    --error-bg-msg: #faefef;
    --success-bg-msg: #e4fffa;
    --info-bg-msg: #f8f9fa;
    --btn-text-color: #fff;
    --btn-bg-disabled: #c4c4c4;
    --container-border-color: #cfd0d5;
  }
`
