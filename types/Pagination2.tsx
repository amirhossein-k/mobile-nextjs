// Defaults:
const defaultBtnLabelPrevious = "Prev";
const defaultBtnLabelNext = "Next";
const defaultStyleItem = "item";
const defaultStyleLeft = "item-left";
const defaultStyleMiddle = "item-mid";
const defaultStyleRight = "item-right";
const defaultStyleDisabled = "item-state-disable";
const defaultStyleCurrent = "item-state-current";
const defaultStyleOther = "item-state-other";
const defaultStyleWrapper = "pagination";

interface Props {
  path: string;
  currentPage: number;
  totalPages: number;
  maxVisiblePages?: number;
  buttonLabelPrevious?: string;
  buttonLabelNext?: string;
  styleClassWrapper?: string;
  styleClassItem?: string;
  styleClassLeft?: string;
  styleClassRight?: string;
  styleClassMiddle?: string;
  styleClassActive?: string;
  styleClassInactive?: string;
  styleClassDisabled?: string;
  params?: any;
}

export default function Paginator(props: Props) {
  const {
    path,
    currentPage,
    totalPages,
    params = {},
    maxVisiblePages = 5,
    buttonLabelPrevious = defaultBtnLabelPrevious,
    buttonLabelNext = defaultBtnLabelNext,
    styleClassWrapper = defaultStyleWrapper,
    styleClassItem = defaultStyleItem,
    styleClassLeft = defaultStyleLeft,
    styleClassRight = defaultStyleRight,
    styleClassMiddle = defaultStyleMiddle,
    styleClassActive = defaultStyleCurrent,
    styleClassInactive = defaultStyleOther,
    styleClassDisabled = defaultStyleDisabled,
  } = props;

  const prevPageNum = currentPage === 1 ? null : currentPage - 1;
  const prevPageLink = prevPageNum
    ? (() => {
        const queryParams = new URLSearchParams({
          ...params,
          page: prevPageNum,
        }).toString();
        return `${path}?${queryParams}`;
      })()
    : null;

  const itemPrev = (
    <li key="prev" className="bg-red-300 py-1 px-2">
      {prevPageLink ? (
        <a
          href={prevPageLink}
          className={[styleClassItem, styleClassLeft, styleClassInactive].join(
            " "
          )}
        >
          {buttonLabelPrevious}
        </a>
      ) : (
        <span
          className={[styleClassItem, styleClassLeft, styleClassDisabled].join(
            " "
          )}
        >
          {buttonLabelPrevious}
        </span>
      )}
    </li>
  );

  const nextPageNum = currentPage === totalPages ? null : currentPage + 1;
  const nextPageLink = nextPageNum
    ? (() => {
        const queryParams = new URLSearchParams({
          ...params,
          page: nextPageNum,
        }).toString();
        return `${path}?${queryParams}`;
      })()
    : null;

  const itemNext = (
    <li key="next" className="py-1 px-2 bg-blue-200">
      {nextPageLink ? (
        <a
          href={nextPageLink}
          className={[styleClassItem, styleClassRight, styleClassInactive].join(
            " "
          )}
        >
          {buttonLabelNext}
        </a>
      ) : (
        <span
          className={[styleClassItem, styleClassRight, styleClassDisabled].join(
            " "
          )}
        >
          {buttonLabelNext}
        </span>
      )}
    </li>
  );

  const generatePaginationItems = () => {
    const paginationItems = [];
    paginationItems.push(itemPrev);

    if (totalPages <= maxVisiblePages) {
      // Show all pages
      for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
        paginationItems.push(renderPaginationLink(pageNum));
      }
    } else {
      // Show ellipsis and limited page links
      const leftEllipsis = currentPage > 2;
      const rightEllipsis = totalPages - currentPage > 1;

      let startPage;
      let endPage;

      if (currentPage <= Math.ceil(maxVisiblePages / 2)) {
        startPage = 1;
        endPage = maxVisiblePages;
      } else if (currentPage >= totalPages - Math.floor(maxVisiblePages / 2)) {
        startPage = totalPages - maxVisiblePages + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - Math.floor(maxVisiblePages / 2);
        endPage = currentPage + Math.floor(maxVisiblePages / 2);
      }

      if (leftEllipsis) {
        paginationItems.push(
          <li key="left-ellipsis">
            <span
              className={[
                styleClassItem,
                styleClassMiddle,
                styleClassDisabled,
              ].join(" ")}
            >
              ...
            </span>
          </li>
        );
      }

      for (let pageNum = startPage; pageNum <= endPage; pageNum++) {
        paginationItems.push(renderPaginationLink(pageNum));
      }

      if (rightEllipsis) {
        paginationItems.push(
          <li key="right-ellipsis">
            <span
              className={[
                styleClassItem,
                styleClassMiddle,
                styleClassDisabled,
              ].join(" ")}
            >
              ...
            </span>
          </li>
        );
      }
    }

    paginationItems.push(itemNext);

    return paginationItems;
  };

  const renderPaginationLink = (pageNum: number) => {
    const isActive = pageNum === currentPage;
    const queryParams = new URLSearchParams({
      ...params,
      page: pageNum,
    }).toString();
    const pageLink = pageNum === 1 ? path : `${path}?${queryParams}`;

    return (
      <li key={pageNum} className="py-1 px-2 ">
        <a
          href={pageLink}
          className={[
            styleClassItem,
            styleClassMiddle,
            isActive ? styleClassActive : styleClassInactive,
          ].join(" ")}
        >
          {pageNum}
        </a>
      </li>
    );
  };

  return (
    <ul className={`${styleClassWrapper} flex flex-row-reverse gap-3`}>
      {generatePaginationItems()}
    </ul>
  );
}
