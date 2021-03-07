export interface IHeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  pageTitle: string;
  close?: boolean;
  burger?: boolean;
  margin?: string;
  onClickIcon?: () => void;
}

export interface ISHeader {
  margin?: string;
}
