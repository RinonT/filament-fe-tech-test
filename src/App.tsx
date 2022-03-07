import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { CompanyListCard } from "../src/components/CompanyListCard";
import { useTypedSelector } from "./hooks/useTypeSelector";
import { getCompanies } from "./redux/actionCreators/getCompanies";

function App() {
  const dispatch = useDispatch();
  const { companies, loading, error } = useTypedSelector(
    (state) => state.companies
  );

  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);

  return (
    <div>
      {companies &&
        companies.map((company) => <CompanyListCard {...company} />)}
      <Section>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </Section>
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
