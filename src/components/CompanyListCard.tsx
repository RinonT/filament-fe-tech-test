import styled from "styled-components";

const Card = styled.section`
  background-color: #fff;
  max-width: 768px;
  margin: 0 auto 16px auto;
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

interface CompanyListProps {
  name: string;
  website: string;
  sector: string;
  address: string;
  postcode: string;
  property_size: number;
  lease_price: string;
}

export const CompanyListCard = (props: CompanyListProps) => {
  return (
    <Card>
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
