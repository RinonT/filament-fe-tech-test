import { useEffect } from "react";
import { useDispatch } from "react-redux";
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

  console.log(loading, error);

  return (
    <div>
      {companies ? (
        companies.map((company) => <CompanyListCard {...company} />)
      ) : (
        <p>Error</p>
      )}
    </div>
  );
}

export default App;
