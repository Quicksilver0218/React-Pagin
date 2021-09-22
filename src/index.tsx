import { ComponentType, DetailedHTMLProps, Fragment, ReactNode } from 'react';

const Pagination = ({
  currentPage,
  pageCount,
  edgeItemCount = 1,
  middleItemRange = 3,
  parentElement: ParentElement = Fragment,
  firstElement,
  lastElement,
  previousElement,
  nextElement,
  pageElement: PageElement,
  ellipsisElement: EllipsisElement,
  ...rest
}: Props) => {
  const middleElements = [];
  for (let i = 1; i <= pageCount; i++)
    if (
      i > edgeItemCount &&
      currentPage > edgeItemCount + middleItemRange + 2 &&
      i < Math.min(currentPage - middleItemRange, pageCount - edgeItemCount - middleItemRange * 2 - 2)
    ) {
      middleElements.push(<EllipsisElement side="left" />);
      i = Math.min(currentPage - middleItemRange - 1, pageCount - edgeItemCount - middleItemRange * 2 - 2);
    } else if (
      i < pageCount - edgeItemCount + 1 &&
      currentPage < pageCount - edgeItemCount - middleItemRange - 1 &&
      i > Math.max(currentPage + middleItemRange, edgeItemCount + middleItemRange * 2 + 2)
    ) {
      middleElements.push(<EllipsisElement side="right" />);
      i = pageCount - edgeItemCount;
    } else middleElements.push(<PageElement page={i} />);

  return (
    <ParentElement {...rest}>
      {firstElement}
      {previousElement}
      {middleElements.map((item, index) => (
        <Fragment key={index}>{item}</Fragment>
      ))}
      {nextElement}
      {lastElement}
    </ParentElement>
  );
};

export type Props = {
  [key: string]: any;
  currentPage: number;
  pageCount: number;
  edgeItemCount?: number;
  middleItemRange?: number;
  parentElement?: ComponentType | DetailedHTMLProps<any, any>;
  firstElement?: ReactNode;
  lastElement?: ReactNode;
  previousElement?: ReactNode;
  nextElement?: ReactNode;
  pageElement: ComponentType<{ page: number }>;
  ellipsisElement: ComponentType<{ side: string }>;
};

export default Pagination;
