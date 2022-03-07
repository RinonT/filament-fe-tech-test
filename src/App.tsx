import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CompanyListCard } from "../src/components/CompanyListCard";
import { fetchCompanyList } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const companyList = useSelector((state) => state.companyList);

  useEffect(() => {
    dispatch(fetchCompanyList());
  }, []);

  return (
    <div>
      {companyList ? (
        companyList.map((company) => <CompanyListCard {...company} />)
      ) : (
        <p>Error</p>
      )}
    </div>
  );
}

export default App;
