import { create } from 'react-test-renderer';
import Pagination from '../src';

test('Hide Ellipsis', () => {
  expect(
    create(
      <Pagination
        currentPage={1}
        pageCount={11}
        edgeItemCount={1}
        middleItemRange={3}
        parentElement={({children}) => (<>[{children}]</>)}
        firstElement="first"
        lastElement="last"
        previousElement="prev"
        nextElement="next"
        pageElement={({page}) => <>{page}</>}
        ellipsisElement={({side}) => <>{side}</>}
        ellipsisSize={1}
      />
    ).toJSON()
  ).toMatchSnapshot();

  expect(
    create(
      <Pagination
        currentPage={7}
        pageCount={13}
        edgeItemCount={1}
        middleItemRange={3}
        parentElement={({children}) => (<>[{children}]</>)}
        firstElement="first"
        lastElement="last"
        previousElement="prev"
        nextElement="next"
        pageElement={({page}) => <>{page}</>}
        ellipsisElement={({side}) => <>{side}</>}
        ellipsisSize={2}
      />
    ).toJSON()
  ).toMatchSnapshot();
});

test('1 Ellipsis', () => {
  expect(
    create(
      <Pagination
        currentPage={1}
        pageCount={12}
        edgeItemCount={1}
        middleItemRange={3}
        parentElement={({children}) => (<>[{children}]</>)}
        firstElement="first"
        lastElement="last"
        previousElement="prev"
        nextElement="next"
        pageElement={({page}) => <>{page}</>}
        ellipsisElement={({side}) => <>{side}</>}
        ellipsisSize={1}
      />
    ).toJSON()
  ).toMatchSnapshot();

  expect(
    create(
      <Pagination
        currentPage={6}
        pageCount={12}
        edgeItemCount={1}
        middleItemRange={3}
        parentElement={({children}) => (<>[{children}]</>)}
        firstElement="first"
        lastElement="last"
        previousElement="prev"
        nextElement="next"
        pageElement={({page}) => <>{page}</>}
        ellipsisElement={({side}) => <>{side}</>}
        ellipsisSize={1}
      />
    ).toJSON()
  ).toMatchSnapshot();

  expect(
    create(
      <Pagination
        currentPage={7}
        pageCount={12}
        edgeItemCount={1}
        middleItemRange={3}
        parentElement={({children}) => (<>[{children}]</>)}
        firstElement="first"
        lastElement="last"
        previousElement="prev"
        nextElement="next"
        pageElement={({page}) => <>{page}</>}
        ellipsisElement={({side}) => <>{side}</>}
        ellipsisSize={1}
      />
    ).toJSON()
  ).toMatchSnapshot();

  expect(
    create(
      <Pagination
        currentPage={12}
        pageCount={12}
        edgeItemCount={1}
        middleItemRange={3}
        parentElement={({children}) => (<>[{children}]</>)}
        firstElement="first"
        lastElement="last"
        previousElement="prev"
        nextElement="next"
        pageElement={({page}) => <>{page}</>}
        ellipsisElement={({side}) => <>{side}</>}
        ellipsisSize={1}
      />
    ).toJSON()
  ).toMatchSnapshot();
});

test('2 Ellipsis', () => {
  expect(
    create(
      <Pagination
        currentPage={7}
        pageCount={13}
        edgeItemCount={1}
        middleItemRange={3}
        parentElement={({children}) => (<>[{children}]</>)}
        firstElement="first"
        lastElement="last"
        previousElement="prev"
        nextElement="next"
        pageElement={({page}) => <>{page}</>}
        ellipsisElement={({side}) => <>{side}</>}
        ellipsisSize={1}
      />
    ).toJSON()
  ).toMatchSnapshot();
});

test('All Default', () => {
  expect(
    create(
      <Pagination
        currentPage={7}
        pageCount={13}
        pageElement={({page}) => <>{page}</>}
        ellipsisElement={({side}) => <>{side}</>}
      />
    ).toJSON()
  ).toMatchSnapshot();

  expect(
    create(
      <Pagination
        currentPage={5}
        pageCount={10}
        pageElement={({page}) => <>{page}</>}
      />
    ).toJSON()
  ).toMatchSnapshot();
});

test('Default Ellipsis Size', () => {
  expect(
    create(
      <Pagination
        currentPage={1}
        pageCount={12}
        edgeItemCount={1}
        middleItemRange={3}
        pageElement={({page}) => <>{page}</>}
        ellipsisElement={({side}) => <>{side}</>}
      />
    ).toJSON()
  ).toMatchSnapshot();

  expect(
    create(
      <Pagination
        currentPage={6}
        pageCount={11}
        edgeItemCount={1}
        middleItemRange={3}
        pageElement={({page}) => <>{page}</>}
      />
    ).toJSON()
  ).toMatchSnapshot();
});

test('Middle Item Range', () => {
  expect(
    create(
      <Pagination
        currentPage={6}
        pageCount={11}
        edgeItemCount={1}
        middleItemRange={2}
        pageElement={({page}) => <>{page}</>}
        ellipsisElement={({side}) => <>{side}</>}
        ellipsisSize={1}
      />
    ).toJSON()
  ).toMatchSnapshot();

  expect(
    create(
      <Pagination
        currentPage={5}
        pageCount={10}
        edgeItemCount={1}
        middleItemRange={2}
        pageElement={({page}) => <>{page}</>}
        ellipsisElement={({side}) => <>{side}</>}
        ellipsisSize={1}
      />
    ).toJSON()
  ).toMatchSnapshot();

  expect(
    create(
      <Pagination
        currentPage={6}
        pageCount={10}
        edgeItemCount={1}
        middleItemRange={2}
        pageElement={({page}) => <>{page}</>}
        ellipsisElement={({side}) => <>{side}</>}
        ellipsisSize={1}
      />
    ).toJSON()
  ).toMatchSnapshot();
});

test('Ellipsis Size', () => {
  expect(
    create(
      <Pagination
        currentPage={6}
        pageCount={11}
        edgeItemCount={1}
        middleItemRange={2}
        pageElement={({page}) => <>{page}</>}
        ellipsisElement={({side}) => <>{side}</>}
        ellipsisSize={2}
      />
    ).toJSON()
  ).toMatchSnapshot();

  expect(
    create(
      <Pagination
        currentPage={6}
        pageCount={12}
        edgeItemCount={1}
        middleItemRange={2}
        pageElement={({page}) => <>{page}</>}
        ellipsisElement={({side}) => <>{side}</>}
        ellipsisSize={2}
      />
    ).toJSON()
  ).toMatchSnapshot();

  expect(
    create(
      <Pagination
        currentPage={7}
        pageCount={12}
        edgeItemCount={1}
        middleItemRange={2}
        pageElement={({page}) => <>{page}</>}
        ellipsisElement={({side}) => <>{side}</>}
        ellipsisSize={2}
      />
    ).toJSON()
  ).toMatchSnapshot();
});