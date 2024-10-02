import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
export const BestContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BsetTitle = styled.h1`
  font-size: 36px;
`;
export const BestList = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 50px 0 80px 0;
`;
export const BestItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 282px;
  height: 257px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  overflow: hidden;
`;
export const BestItemImgBox = styled.div`
  height: 50%;
  overflow: hidden;
`;

export const BestItemTitle = styled.h2`
  font-size: 18px;
  margin: 15px;
  margin-bottom: 0;
`;
export const BestInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
`;
export const InfoLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Toprow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Avatar = styled.img`
  width: 40px;
  height: 40px;
`;
export const Writer = styled.span`
  font-size: 18px;
`;
export const CreatedDate = styled.span`
  font-size: 14px;
  margin: 5px 0 0 8px;
`;
export const ThumbBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ThumbCount = styled.span`
  font-size: 14px;
  font-weight: 600;
  margin-top: 5px;
`;
