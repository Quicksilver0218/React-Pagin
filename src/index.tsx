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
  ellipsisSize = EllipsisElement ? 1 : 0,
  ...rest
}: Props) => {
  const middleElements = [];
  for (let i = 1; i <= pageCount; i++)
    if (
      i > edgeItemCount &&
      currentPage > edgeItemCount + ellipsisSize + middleItemRange + 1 &&
      i < Math.min(currentPage - middleItemRange, pageCount - edgeItemCount - ellipsisSize * 2 - middleItemRange * 2)
    ) {
      if (EllipsisElement)
        middleElements.push(<EllipsisElement side="start" />);
      i = Math.min(currentPage - middleItemRange, pageCount - edgeItemCount - ellipsisSize - middleItemRange * 2) - 1;
    } else if (
      i <= pageCount - edgeItemCount - ellipsisSize &&
      currentPage <= pageCount - (edgeItemCount + ellipsisSize + middleItemRange + 1) &&
      i > Math.max(currentPage + middleItemRange, edgeItemCount + ellipsisSize + middleItemRange * 2 + 1)
    ) {
      if (EllipsisElement)
        middleElements.push(<EllipsisElement side="end" />);
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
  ellipsisElement?: ComponentType<{ side: "start" | "end" }>;
  ellipsisSize?: number;
};

export default Pagination;