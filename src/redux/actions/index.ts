export const FETCH_COMPANIES: string = "FETCH_COMPANIES";

export function fetchCompanyList() {
  return async (dispatch: any) => {
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

          return data;
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    };
    dispatch({
      type: FETCH_COMPANIES,
      payload: fetchCompanies(),
      isLoading: true,
    });
  };
}
