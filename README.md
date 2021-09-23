# React-Pagin
A lightweight element organizing component allowing high customization for pagination implemented in React.

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
| Property | Type | Description |
| --- | --- | --- |
| currentPage | number | The page number of the current page, which starts from 1. |
| pageCount | number | The total number of pages. |
| edgeItemCount? | number | The number of items shown near each edge when the current page is far away from the edge. Default `1`. |
| middleItemRange? | number | The number of items shown on each side of the current page item. Default `3`. |
| parentElement? | ComponentType \| DetailedHTMLProps<any, any> | The base component wrapping all the content. |
| firstElement? | ReactNode | The first element under the parent, which is commonly defined as a button navigating to the first page. |
| lastElement? | ReactNode | The last element under the parent, which is commonly defined as a button navigating to the last page. |
| previousElement? | ReactNode | The element behind `firstElement`, which is commonly defined as a button navigating to the previuos page. |
| nextElement? | ReactNode | The element in front of `lastElement`, which is commonly defined as a button navigating to the next page. |
| pageElement | ComponentType<{ page: number }> | The element that represents a page. The number of instances is controlled by `edgeItemCount` and `middleItemRange`, and of course `pageCount`. It is also controlled by `ellipsisSize` depends on `currentPage`. The page number will be passed to `page`. |
| ellipsisElement? | ComponentType<{ side: "start" \| "end" }> | The element shown between the edge items and the middle items when the current page is far away from the edge. `"start"` or `"end"` representing the side it being placed will be passed to `side`. |
| ellipsisSize? | number | The size of `ellipsisElement`, measured in times of the size of `pageElement`. Default `1` if `ellipsisElement` is assigned, otherwise default `0`. |

## Examples
It can be integrated with any UI frameworks such as [React Bootstrap](https://react-bootstrap.github.io) and [Ant Design](https://ant.design).  
Here are the examples:
- React Bootstrap: [CodeSandbox](https://codesandbox.io/s/react-pagin-bootstrap-example-i3or2)
- Ant Design: [CodeSandbox](https://codesandbox.io/s/react-pagin-ant-design-example-hitt9)
