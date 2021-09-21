import GitHubIcon from '@mui/icons-material/GitHub';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

export default function Headline() {
  return (
    <HeadlineContainer>
      <p>A JavaScript library that generates liturgical calendars of the Roman Rite of the Roman Catholic Church.</p>
      <HeadlineFooter>
        <Button variant="outlined" href="https://github.com/romcal/romcal" startIcon={<GitHubIcon />}>
          See more
        </Button>
      </HeadlineFooter>
    </HeadlineContainer>
  );
}

const HeadlineContainer = styled('div')`
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: 1.5em;
  margin: 0 0 30px;
  padding: 20px;
  border-radius: 3px;
  background-image: linear-gradient(135deg, #fcfaf8 0%, #faf7f4 100%);

  > p {
    margin: 0;
    line-height: 1.4em;
  }
`;

const HeadlineFooter = styled('p')`
  text-align: right;
  padding-top: 10px;
`;
