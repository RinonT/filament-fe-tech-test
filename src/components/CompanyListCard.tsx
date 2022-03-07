import styled from "styled-components";

const Card = styled.section`
  backgroundcolor: #fff;
`;

const CardSection = styled.section`
  display: flex;
  justify-content: space-between;
`;

interface CompanyListProps {
  name: string;
  website: string;
  sector: string;
  address: string;
  postcode: string;
  propertySize: number;
  leasePrice: string;
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
            Our address:<b>{props.address}</b>
          </span>
          <span>
            Postcode: <b>{props.postcode}</b>
          </span>
        </div>
      </CardSection>
      <div>
        <span>
          Poperty Size: <b>{props.propertySize}</b>
        </span>
        <span>
          Here is the lease price: <b>{props.leasePrice}</b>
        </span>
      </div>
    </Card>
  );
};
