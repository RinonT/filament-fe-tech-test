import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { useTypedSelector } from "./hooks/useTypeSelector";
import { getCompanies } from "./redux/actionCreators/getCompanies";
import { CompanyListCard } from "../src/components/CompanyListCard";

function App() {
  const dispatch = useDispatch();
  const { companies, loading, error } = useTypedSelector(
    (state) => state.companies
  );
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [perPage] = useState(10);

  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);

  useEffect(() => {
    companies.length > 0 && setPageCount(Math.ceil(companies.length / perPage));
  }, [companies]);

  const companyList = companies
    .slice(offset, offset + perPage)
    .map((company) => {
      return <CompanyListCard key={company.id} {...company}></CompanyListCard>;
    });

  const handlePageClick: (selectedItem: { selected: number }) => void = (
    item
  ) => {
    const selectedPage = item.selected;
    setOffset(selectedPage + 1);
  };

  return (
    <div>
      {Boolean(companies.length) && (
        <ListSection>
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
          {companyList}
        </ListSection>
      )}
      <MessageSection>
        {loading && <p>Loading...</p>}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </MessageSection>
    </div>
  );
}

const MessageSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ListSection = styled.div`
  max-width: 768px;
  margin: 0 auto 0 auto;

  > ul {
    max-width: 400px;
    margin: 32px 0 32px auto;
  }
`;

const ErrorMessage = styled.p`
  color: red;
`;

export default App;
