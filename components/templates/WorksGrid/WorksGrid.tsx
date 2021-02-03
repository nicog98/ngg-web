import React, { ReactElement } from 'react';
import { ContentPreview, IContentPreview } from '@molecules';
import styled from 'styled-components';

export interface IWorksGrid extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Props corresponding to each work featured in the grid
   */
  worksProps: IContentPreview[];
}

export const WorksGrid: React.FC<IWorksGrid> = (
  {
    worksProps,
    ...props
  },
): ReactElement => (
  <SWorksGridContainer {...props}>
    {worksProps.map(
      (contentPreviewProps, idx) => (
        <SContentPreviewContainer key={idx}>
          <SContentPreview {...contentPreviewProps} />
        </SContentPreviewContainer>
      ),
    )}
  </SWorksGridContainer>
);

const SWorksGridContainer = styled.div`
  flex: 1 0;
  display: grid;
  justify-content: start;
  border: solid white;
  overflow-y: scroll;
  // Mobile
  @media (max-width: ${({ theme }) => theme.Spacing.webMin}) {
    grid-template-columns: 80vw;
  }
  @media (min-width: ${({ theme }) => theme.Spacing.webMin}) {
    grid-template-columns: repeat(2, auto);
  }
  @media (min-width: ${({ theme }) => theme.Spacing.threeColumnMin}) {
    grid-template-columns: repeat(3, auto);
  }
  @media (min-width: ${({ theme }) => theme.Spacing.fourColumnMin}) {
    grid-template-columns: repeat(4, auto);
  }
  column-gap: ${({ theme }) => theme.Spacing.wide};
  row-gap: ${({ theme }) => theme.Spacing.wide};
`;

const SContentPreviewContainer = styled.div`
  // Display at full width on mobile
  @media screen and (max-width: ${({ theme }) => theme.Spacing.mobileMax}) {
    width: 100%;
  }

  // Pre-determined display size on web
  @media (min-width: ${({ theme }) => theme.Spacing.webMin}) {
    width: ${({ theme }) => theme.Spacing.cellWidth};
  }
  height: 0;
  padding-bottom: 50%;
  position: relative;
`;

const SContentPreview = styled(ContentPreview)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;