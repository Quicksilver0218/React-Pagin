import { ComponentType, ReactNode } from "react";

const Pagination = <PagePropsType, EllipsisPropsType>({
  currentPage,
  pageCount,
  edgeItemCount = 1,
  middleItemRange = 3,
  firstElement,
  lastElement,
  previousElement,
  nextElement,
  pageElement: PageElement,
  pageProps,
  ellipsisElement: EllipsisElement,
  ellipsisProps,
  ellipsisSize = EllipsisElement ? 1 : 0,
}: Props<PagePropsType, EllipsisPropsType>) => {
  const pages = [];
  let i = 1;
  while (i <= pageCount)
    if (
      (i >= currentPage - middleItemRange && i <= currentPage + middleItemRange) ||
      i <= edgeItemCount ||
      i > pageCount - edgeItemCount
    ) {
      pages.push(i);
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
          pages.push(i);
          i++;
        } else {
          if (EllipsisElement) pages.push("start");
          i = Math.min(currentPage - middleItemRange, pageCount - edgeItemCount - ellipsisSize - middleItemRange * 2);
        }
      } else if (
        i <= edgeItemCount + ellipsisSize + middleItemRange * 2 + 1 ||
        i > pageCount - edgeItemCount - ellipsisSize
      ) {
        pages.push(i);
        i++;
      } else {
        if (EllipsisElement) pages.push("end");
        i = pageCount - edgeItemCount + 1;
      }
    }

  return (
    <>
      {firstElement}
      {previousElement}
      {pages.map(item => (
        typeof item === "number" ?
          <PageElement key={item} page={item} props={pageProps} /> :
          EllipsisElement && <EllipsisElement key={item} side={item as "start" | "end"} props={ellipsisProps} />
      ))}
      {nextElement}
      {lastElement}
    </>
  );
};

export type Props<PagePropsType, EllipsisPropsType> = {
  currentPage: number;
  pageCount: number;
  edgeItemCount?: number;
  middleItemRange?: number;
  firstElement?: ReactNode;
  lastElement?: ReactNode;
  previousElement?: ReactNode;
  nextElement?: ReactNode;
  pageElement: ComponentType<{ page: number; props?: PagePropsType }>;
  pageProps?: PagePropsType;
  ellipsisElement?: ComponentType<{ side: "start" | "end"; props?: EllipsisPropsType }>;
  ellipsisProps?: EllipsisPropsType;
  ellipsisSize?: number;
};

export default Pagination;
