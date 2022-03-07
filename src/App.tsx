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

  const companyElements = companies
    .slice(offset, offset + perPage)
    .map((company) => {
      return <CompanyListCard key={company.id} {...company}></CompanyListCard>;
    });

  const handlePageClick = (e: any) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  return (
    <div>
      {companies && companyElements}
      <Section>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </Section>
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
    </div>
  );
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default App;
