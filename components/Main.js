import styled from "styled-components";
import Portfolio from "./Portfolio";
import Promos from "./Promo";

const Main = ({ twTokens, sanityTokens, walletAddress }) => {
  return (
    <Wrapper>
      <Portfolio
        twTokens={twTokens}
        sanityTokens={sanityTokens}
        walletAddress={walletAddress}
      />
      <Promos />
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  display: flex;
  max-height: calc(100vh - 64px);
  overflow: hidden;

  & div {
    border-radius: 0.4rem;
  }
`;
