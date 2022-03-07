import { useEffect, useState } from "react";

import { CompanyListCard } from "../src/components/CompanyListCard";

function App() {
  const [companies, setCompanies] = useState([]);

  const fetchCompanies = () => {
    fetch("http://localhost:4000/companies")
      .then(async (response) => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }

        setCompanies(data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

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
