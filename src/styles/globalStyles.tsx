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
    --main-color: #4a9e9c;
    --secondary-color: #35d2c3;
    --placeholder-color: #9ea1ab;
    --placeholder-error-color: rgba(242, 78, 78, 0.5);
    --ilde-bg-color: #f6f6f7;
    --title-color: #0e142c;
    --text-color: #6e7280;
    --second-modal-text-color: #3e4356;
    --main-bg-color: #fff;
    --content-bg-color: #fafafa;
    --error-color: #f24e4e;
    --error-bg-msg: #faefef;
    --info-bg-msg: #f8f9fa;
    --btn-text-color: #fff;
    --btn-bg-disabled: #c4c4c4;
    --container-border-color: #cfd0d5;
    /*CSS Calendar Variables */
    --fc-today-bg-color: #e4e7ffa6;
    --fc-event-border-color: #7b63eb;
    --fc-button-text-color: #fff;
    --fc-button-bg-color: #4a9e9c;
    --fc-button-border-color: #4a9e9c;
    --fc-button-active-text-color: #0e142c;
    --fc-button-active-bg-color: #35d2c3;
    --fc-button-active-border-color: #35d2c3;
    --fc-button-hover-bg-color: #4a9e9c;
    --fc-button-hover-border-color: #4a9e9c;
  }
`
