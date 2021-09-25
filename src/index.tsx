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
  const mainElements = [];
  let i = 1;
  while (i <= pageCount)
    if (
      (i >= currentPage - middleItemRange && i <= currentPage + middleItemRange) ||
      i <= edgeItemCount ||
      i > pageCount - edgeItemCount
    ) {
      mainElements.push(<PageElement page={i} />);
      i++;
    } else {
      if (i < currentPage) {
        if (
          i >=
          Math.min(
            currentPage - middleItemRange - ellipsisSize,
            pageCount - edgeItemCount - ellipsisSize * 2 - middleItemRange * 2,
          )
        ) {
          mainElements.push(<PageElement page={i} />);
          i++;
        } else {
          if (EllipsisElement) mainElements.push(<EllipsisElement side="start" />);
          i = Math.min(currentPage - middleItemRange, pageCount - edgeItemCount - ellipsisSize - middleItemRange * 2);
        }
      } else if (
        i <= edgeItemCount + ellipsisSize + middleItemRange * 2 + 1 ||
        i > pageCount - edgeItemCount - ellipsisSize
      ) {
        mainElements.push(<PageElement page={i} />);
        i++;
      } else {
        if (EllipsisElement) mainElements.push(<EllipsisElement side="end" />);
        i = pageCount - edgeItemCount + 1;
      }
    }

  return (
    <ParentElement {...rest}>
      {firstElement}
      {previousElement}
      {mainElements.map((item, index) => (
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
  ellipsisElement?: ComponentType<{ side: 'start' | 'end' }>;
  ellipsisSize?: number;
};

export default Pagination;
