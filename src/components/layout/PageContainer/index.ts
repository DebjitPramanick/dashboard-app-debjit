import styled from "styled-components";
import { mediaQueryMobileOrTablet } from "~/styles/mixins";
import { Box } from "~/components/atoms";

export const PageContainer = styled(Box)`
  max-width: 1648px;
  margin: 0 auto;
  padding-bottom: 104px;
  padding-left: 24px;
  padding-right: 24px;

  ${mediaQueryMobileOrTablet} {
    max-width: unset;
    padding-bottom: 88px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export default PageContainer;
