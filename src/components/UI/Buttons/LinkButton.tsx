import React, { ReactChild, ReactElement, ReactChildren } from 'react';
import Link from "next/link";
import { AnchorHTMLAttributes } from 'react';
interface LinkButtonProps extends AnchorHTMLAttributes<any> {
  page: string, children: ReactElement | ReactChildren | ReactChild
}
const LinkButton = ({page, children, ...props}:LinkButtonProps) => {
  return (
    <Link href={page}>
      <a href={page} {...props}>{children}</a>
    </Link>
  );
};

export default LinkButton;