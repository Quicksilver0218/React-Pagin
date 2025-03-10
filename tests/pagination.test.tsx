/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import Pagination from "../src";

test("Hide Ellipsis", () => {
  expect(
    render(
      <Pagination
        currentPage={1}
        pageCount={11}
        edgeItemCount={1}
        middleItemRange={3}
        firstElement="first"
        lastElement="last"
        previousElement="prev"
        nextElement="next"
        pageElement={({page}) => <>{page}</>}
        ellipsisElement={({side}) => <>{side}</>}
        ellipsisSize={1}
      />
    ).container
  ).toMatchSnapshot();

  expect(
    render(
      <Pagination
        currentPage={7}
        pageCount={13}
        edgeItemCount={1}
        middleItemRange={3}
        firstElement="first"
        lastElement="last"
        previousElement="prev"
        nextElement="next"
        pageElement={({page}) => <>{page}</>}
        ellipsisElement={({side}) => <>{side}</>}
        ellipsisSize={2}
      />
    ).container
  ).toMatchSnapshot();
});

test("1 Ellipsis", () => {
  expect(
    render(
      <Pagination
        currentPage={1}
        pageCount={12}
        edgeItemCount={1}
        middleItemRange={3}
        firstElement="first"
        lastElement="last"
        previousElement="prev"
        nextElement="next"
        pageElement={({page}) => <>{page}</>}
        ellipsisElement={({side}) => <>{side}</>}
        ellipsisSize={1}
      />
    ).container
  ).toMatchSnapshot();

  expect(
    render(
      <Pagination
        currentPage={6}
        pageCount={12}
        edgeItemCount={1}
        middleItemRange={3}
        firstElement="first"
        lastElement="last"
        previousElement="prev"
        nextElement="next"
        pageElement={({page}) => <>{page}</>}
        ellipsisElement={({side}) => <>{side}</>}
        ellipsisSize={1}
      />
    ).container
  ).toMatchSnapshot();

  expect(
    render(
      <Pagination
        currentPage={7}
        pageCount={12}
        edgeItemCount={1}
        middleItemRange={3}
        firstElement="first"
        lastElement="last"
        previousElement="prev"
        nextElement="next"
        pageElement={({page}) => <>{page}</>}
        ellipsisElement={({side}) => <>{side}</>}
        ellipsisSize={1}
      />
    ).container
  ).toMatchSnapshot();

  expect(
    render(
      <Pagination
        currentPage={12}
        pageCount={12}
        edgeItemCount={1}
        middleItemRange={3}
        firstElement="first"
        lastElement="last"
        previousElement="prev"
        nextElement="next"
        pageElement={({page}) => <>{page}</>}
        ellipsisElement={({side}) => <>{side}</>}
        ellipsisSize={1}
      />
    ).container
  ).toMatchSnapshot();
});

test("2 Ellipsis", () => {
  expect(
    render(
      <Pagination
        currentPage={7}
        pageCount={13}
        edgeItemCount={1}
        middleItemRange={3}
        firstElement="first"
        lastElement="last"
        previousElement="prev"
        nextElement="next"
        pageElement={({page}) => <>{page}</>}
        ellipsisElement={({side}) => <>{side}</>}
        ellipsisSize={1}
      />
    ).container
  ).toMatchSnapshot();
});

test("All Default", () => {
  expect(
    render(
      <Pagination
        currentPage={7}
        pageCount={13}
        pageElement={({page}) => <>{page}</>}
        ellipsisElement={({side}) => <>{side}</>}
      />
    ).container
  ).toMatchSnapshot();

  expect(
    render(
      <Pagination
        currentPage={5}
        pageCount={10}
        pageElement={({page}) => <>{page}</>}
      />
    ).container
  ).toMatchSnapshot();
});

test("Default Ellipsis Size", () => {
  expect(
    render(
      <Pagination
        currentPage={1}
        pageCount={12}
        edgeItemCount={1}
        middleItemRange={3}
        pageElement={({page}) => <>{page}</>}
        ellipsisElement={({side}) => <>{side}</>}
      />
    ).container
  ).toMatchSnapshot();

  expect(
    render(
      <Pagination
        currentPage={6}
        pageCount={11}
        edgeItemCount={1}
        middleItemRange={3}
        pageElement={({page}) => <>{page}</>}
      />
    ).container
  ).toMatchSnapshot();
});

test("Middle Item Range", () => {
  expect(
    render(
      <Pagination
        currentPage={6}
        pageCount={11}
        edgeItemCount={1}
        middleItemRange={2}
        pageElement={({page}) => <>{page}</>}
        ellipsisElement={({side}) => <>{side}</>}
        ellipsisSize={1}
      />
    ).container
  ).toMatchSnapshot();

  expect(
    render(
      <Pagination
        currentPage={5}
        pageCount={10}
        edgeItemCount={1}
        middleItemRange={2}
        pageElement={({page}) => <>{page}</>}
        ellipsisElement={({side}) => <>{side}</>}
        ellipsisSize={1}
      />
    ).container
  ).toMatchSnapshot();

  expect(
    render(
      <Pagination
        currentPage={6}
        pageCount={10}
        edgeItemCount={1}
        middleItemRange={2}
        pageElement={({page}) => <>{page}</>}
        ellipsisElement={({side}) => <>{side}</>}
        ellipsisSize={1}
      />
    ).container
  ).toMatchSnapshot();
});

test("Ellipsis Size", () => {
  expect(
    render(
      <Pagination
        currentPage={6}
        pageCount={11}
        edgeItemCount={1}
        middleItemRange={2}
        pageElement={({page}) => <>{page}</>}
        ellipsisElement={({side}) => <>{side}</>}
        ellipsisSize={2}
      />
    ).container
  ).toMatchSnapshot();

  expect(
    render(
      <Pagination
        currentPage={6}
        pageCount={12}
        edgeItemCount={1}
        middleItemRange={2}
        pageElement={({page}) => <>{page}</>}
        ellipsisElement={({side}) => <>{side}</>}
        ellipsisSize={2}
      />
    ).container
  ).toMatchSnapshot();

  expect(
    render(
      <Pagination
        currentPage={7}
        pageCount={12}
        edgeItemCount={1}
        middleItemRange={2}
        pageElement={({page}) => <>{page}</>}
        ellipsisElement={({side}) => <>{side}</>}
        ellipsisSize={2}
      />
    ).container
  ).toMatchSnapshot();
});