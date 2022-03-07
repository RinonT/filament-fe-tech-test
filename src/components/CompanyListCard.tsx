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
    <section>
      <h2>{props.name}</h2>
      <div>
        <div>
          <span>Website: {props.website}</span>
          <span>Sector: {props.sector}</span>
        </div>
        <div>
          <span>Our address: {props.address}</span>
          <span>Postcode{props.postcode}</span>
        </div>
        <div>
          <span>Poperty Size: {props.propertySize}</span>
          <span>Here is the lease price: {props.leasePrice}</span>
        </div>
      </div>
    </section>
  );
};
