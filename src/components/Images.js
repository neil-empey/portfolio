
import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from 'mdb-react-ui-kit';

export default function Images() {
  return (
    <MDBCarousel fade interval={100}>
      <MDBCarouselInner>
        <MDBCarouselItem itemId={0}>
          <MDBCarouselElement src='https://res.cloudinary.com/argustwo/image/upload/v1628575652/wne0knbprthuuti1rfhf.jpg' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={1}>
          <MDBCarouselElement src='https://res.cloudinary.com/argustwo/image/upload/v1628575673/sdr5rodlx855g6aoalkl.jpg' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <MDBCarouselElement src='https://res.cloudinary.com/argustwo/image/upload/v1628575640/mfdlgf7ywmaipvcvzibx.jpg' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <MDBCarouselElement src='https://res.cloudinary.com/argustwo/image/upload/v1628575703/mlu26b2q0nueinmstzta.jpg' alt='...' />
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}