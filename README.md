# React-Pagin &middot; [![Travis (.com)](https://img.shields.io/travis/com/quicksilver0218/react-pagin)](https://app.travis-ci.com/github/Quicksilver0218/React-Pagin) [![Libraries.io dependency status for latest release, scoped npm package](https://img.shields.io/librariesio/release/npm/@quicksilver0218/react-pagin)](https://libraries.io/npm/@quicksilver0218%2Freact-pagin) [![npm (scoped)](https://img.shields.io/npm/v/@quicksilver0218/react-pagin)](https://www.npmjs.com/package/@quicksilver0218/react-pagin) [![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@quicksilver0218/react-pagin)](https://bundlephobia.com/package/@quicksilver0218/react-pagin@1.2.2) [![GitHub](https://img.shields.io/github/license/quicksilver0218/react-pagin)](https://github.com/Quicksilver0218/React-Pagin/blob/main/LICENSE)
A lightweight element organizing component allowing high customization for pagination, implemented in React.

## Introduction
There are many UI frameworks, such as [Bootstrap](https://getbootstrap.com), which provide beautifully styled pagination components.
However, you still need to place the components and control their visibility correctly to assure functionality.
React-Pagin helps you organize your pagination components marvellously.

On the other hand, some React UI frameworks package everything into one component, using a black box design.  
Well, it seems convenient. But, how can you change the styles of the inner elements?

*Oh! Let's check the DOM tree and the class names carefully, and then add some declarations to the global CSS file, even when you are just styling a specific pagination bar!*

Okay! But now I want to change the number of buttons shown on the bar. *Ug...*

Let **React-Pagin** solves these problems.

## Installation
```
npm i @quicksilver0218/react-pagin
```

## Usage
```tsx
import Pagination from "@quicksilver0218/react-pagin";

const MyComponent = (/* ... */) => {
  // ...
  return (
    // ...
    
    <Pagination
      currentPage={}
      pageCount={}
      endPointItemCount={}
      middleItemRange={}
      parentElement={}
      firstElement={}
      lastElement={}
      previousElement={}
      nextElement={}
      pageElement={}
      ellipsisElement={}
      ellipsisSize={}
    />
    
    // ...
  );
}
```
![pagin-explain](https://user-images.githubusercontent.com/38100804/134757495-dea32515-964c-4df2-8933-cc22af8f97b6.png)
| Property | Type | Description |
| --- | --- | --- |
| currentPage | number | The page number of the current page, which starts from 1. |
| pageCount | number | The total quantity of pages. |
| edgeItemCount? | number | The quantity of items shown near each edge when the current page is far away from the edge. Default `1`. |
| middleItemRange? | number | The quantity of items shown on each side near the current page item. Default `3`. |
| parentElement? | ElementType | The base component wrapping all the content. |
| firstElement? | ReactNode | The first element under the parent, usually the button navigating to the first page. |
| lastElement? | ReactNode | The last element under the parent element, usually the button navigating to the last page. |
| previousElement? | ReactNode | The element behind `firstElement`, usually the button navigating to the previous page. |
| nextElement? | ReactNode | The element in front of `lastElement`, usually the button navigating to the next page. |
| pageElement | ComponentType<{ page: number }> | The element that represents a page. The quantity of instances is controlled by `edgeItemCount` and `middleItemRange`, and of course `pageCount`. It is also controlled by `ellipsisSize` depends on `currentPage`. The page number will be passed to `page`. |
| ellipsisElement? | ComponentType<{ side: "start" \| "end" }> | The element shown between the edge items and the middle items when the current page is far away from the edge. `"start"` or `"end"` representing the side it being placed will be passed to `side`. |
| ellipsisSize? | number | The size of `ellipsisElement`, measured in times of the size of `pageElement`. It does not affect the visual size of `ellipsisElement`. It is only used to control the quantity of `pageElement` to be shown between the edge items and the middle items. Default `1` if `ellipsisElement` is assigned, otherwise default `0`. |

## Examples
It can be integrated with any UI frameworks such as [React Bootstrap](https://react-bootstrap.github.io) and [Ant Design](https://ant.design).  
Here are the examples:
- React Bootstrap: [CodeSandbox](https://codesandbox.io/s/react-pagin-bootstrap-example-i3or2)
- Ant Design: [CodeSandbox](https://codesandbox.io/s/react-pagin-ant-design-example-hitt9)
