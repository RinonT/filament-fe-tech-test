import { render } from "@testing-library/react";

import App from "./App";

import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { CompanyListCard } from "./components/CompanyListCard";

describe("With React Testing Library", () => {
  const state = {
    companies: [
      {
        id: 1000,
        name: "Hickle, Pacocha and Tillman",
        description: "Team-oriented local leverage",
        website: "hicklepacochaandtillman.org",
        sector: "Fahion & Apparel",
        address: "20328 Moore Rue",
        postcode: "SW10 1IN",
        headcount: 10,
        property_size: 475,
        lease_expiry_date: "2022-04-25T23:00:00.000Z",
        lease_length: 0,
        lease_type: "CAT B",
        lease_price: 7000,
        preferred_contract_type: "CAT A",
        preferred_lease_length: 3,
        maximum_lease_length: 5,
        move_date: "2022-06-29T23:00:00.000Z",
        move_score: 28,
        preferred_budget: 6000,
        preferred_size: 3625,
        preferred_number_of_desks: 17,
        preferred_number_of_meeting_rooms: 3,
        preferred_primary_location: "N6",
        preferred_secondary_location: "E11",
        created_at: "2022-03-03T08:28:35.000Z",
        updated_at: "2022-03-03T08:28:35.000Z",
      },
      {
        id: 999,
        name: "Graham, Franecki and Lebsack",
        description: "Customer-focused fresh-thinking definition",
        website: "grahamfraneckiandlebsack.net",
        sector: "Fahion & Apparel",
        address: "563 Maudie Drives",
        postcode: "SE2 0GM",
        headcount: 27,
        property_size: 2700,
        lease_expiry_date: "2022-07-18T23:00:00.000Z",
        lease_length: 0,
        lease_type: "CAT A",
        lease_price: 23500,
        preferred_contract_type: "CAT A",
        preferred_lease_length: 0,
        maximum_lease_length: 5,
        move_date: "2022-09-07T23:00:00.000Z",
        move_score: 76,
        preferred_budget: 23000,
        preferred_size: 10550,
        preferred_number_of_desks: 37,
        preferred_number_of_meeting_rooms: 7,
        preferred_primary_location: "N9",
        preferred_secondary_location: "SW4",
        created_at: "2022-03-03T08:28:35.000Z",
        updated_at: "2022-03-03T08:28:35.000Z",
      },
      {
        id: 998,
        name: "Sanford - Klocko",
        description: "Triple-buffered eco-centric extranet",
        website: "sanfordklocko.name",
        sector: "Wellness",
        address: "352 Stoltenberg Branch",
        postcode: "W10 7JL",
        headcount: 11,
        property_size: 525,
        lease_expiry_date: "2022-04-14T23:00:00.000Z",
        lease_length: 0,
        lease_type: "CAT B",
        lease_price: 11000,
        preferred_contract_type: "CAT B",
        preferred_lease_length: 0,
        maximum_lease_length: 4,
        move_date: "2022-05-19T23:00:00.000Z",
        move_score: 25,
        preferred_budget: 10000,
        preferred_size: 4575,
        preferred_number_of_desks: 18,
        preferred_number_of_meeting_rooms: 2,
        preferred_primary_location: "W10",
        preferred_secondary_location: "SW5",
        created_at: "2022-03-03T08:28:35.000Z",
        updated_at: "2022-03-03T08:28:35.000Z",
      },
    ],
    loading: false,
    error: null,
  };

  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  let store;

  it("Renders the component", () => {
    store = mockStore(state);
    const { getByText } = render(
      <Provider store={store}>
        {state.companies.map((company) => (
          <CompanyListCard key={company.id} {...company} />
        ))}
      </Provider>
    );
    expect(getByText("Hickle, Pacocha and Tillman")).not.toBeNull();
    expect(getByText("Hickle, Pacocha and Tillman")).not.toBeNull();
  });
});
