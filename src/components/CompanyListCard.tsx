import styled from "styled-components";
import { Company } from "../redux/types";

type CompanyListProps = Pick<
  Company,
  | "id"
  | "name"
  | "website"
  | "sector"
  | "address"
  | "postcode"
  | "property_size"
  | "lease_price"
>;

export const CompanyListCard = (props: CompanyListProps) => {
  return (
    <Card key={props.id}>
      <h2>{props.name}</h2>
      <CardSection>
        <div>
          <span>
            Website: <b>{props.website}</b>
          </span>
          <span>
            Sector: <b>{props.sector}</b>
          </span>
        </div>
        <div>
          <span>
            Our address: <b>{props.address}</b>
          </span>
          <span>
            Postcode: <b>{props.postcode}</b>
          </span>
        </div>
      </CardSection>
      <div>
        <span>
          Poperty Size: <b>{props.property_size}</b>
        </span>
        <span>
          Here is the lease price: <b>{props.lease_price}</b>
        </span>
      </div>
    </Card>
  );
};

const Card = styled.section`
  background-color: #fff;
  max-width: 768px;
  margin: 0 0 16px 0;
  padding: 16px 32px;
  h2 {
    color: #334680;
  }
  span {
    display: block;
    margin-bottom: 12px;
  }
`;

const CardSection = styled.section`
  display: flex;
  flex-direction: column;

  div {
    margin-bottom: 16px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 32px;
    div {
      margin-bottom: 0;
    }
  }
`;
