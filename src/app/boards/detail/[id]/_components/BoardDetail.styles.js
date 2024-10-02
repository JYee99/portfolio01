import styled from "@emotion/styled";
export const DetailWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
export const PoastWrapper = styled.div`
  width: 1200px;
  /* height: 1847px; */
  border: 1px solid black;
  margin: 100px auto;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;
export const TopContainer = styled.div`
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ProfileBox = styled.div`
  display: flex;
`;
export const ProfileImg = styled.img`
  height: 56px;
  width: 56px;
  background-color: #ddd;
  border-radius: 50%;
  margin-right: 15px;
`;
export const DataBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const UserName = styled.span`
  font-size: 24px;
`;
export const UserDate = styled.span`
  font-size: 16px;
  color: #828282;
`;
export const ProfileRightBox = styled.div`
  display: flex;
  align-items: center;
`;
export const LinkIcon = styled.div`
  margin-right: 20px;
`;
export const PostContainer = styled.div``;
export const PostTitle = styled.h1`
  font-size: 36px;
  margin-top: 30px;
`;
export const PostImg = styled.img`
  width: 100%;
  margin: 50px 0;
`;
export const PostContents = styled.span`
  font-size: 16px;
  word-wrap: break-word;
`;
export const PostVideo = styled.video`
  margin: 30px 0;
`;
export const ThumbBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
`;
export const ThumbBtn = styled.button`
  background-color: transparent;
`;
export const ThumbUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
  color: #ffd066;
`;
export const ThumbCount = styled.span`
  font-size: 18px;
  margin-top: 5px;
`;
export const ThumbUpCount = styled(ThumbCount)``;
export const ThumbDown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #828282;
`;
export const ThumbDownCount = styled(ThumbCount)``;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 100px;
`;
export const ButtonBoxBtn = styled.button`
  background-color: transparent;
  padding: 10px 40px;
  border: 1px solid #bdbdbd;
  font-weight: bolder;
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentTitleBox = styled.div`
  display: flex;
  margin: 30px 0;
`;
export const CommentTitle = styled.h2`
  font-size: 18px;
  margin-left: 10px;
`;

export const CommentForm = styled.form`
  position: relative;
`;
export const CommentTopBox = styled.div``;

export const CommentWriterInput = styled.input`
  width: 180px;
  font-size: 16px;
  padding: 10px 15px;
  margin-right: 20px;
  outline: none;
  border: 1px solid #bdbdbd;
  ::placeholder {
    color: #bdbdbd;
  }
`;
export const CommentContents = styled.textarea`
  width: 100%;
  height: 160px;
  padding: 15px;
  margin: 30px 0;
  border: 1px solid #bdbdbd;
  ::placeholder {
    color: #bdbdbd;
  }
`;
export const SubmitBtn = styled.button`
  position: absolute;
  right: 0;
  bottom: 35px;
  padding: 15px;
  background-color: #222222;
  border: 1px solid #222222;
  color: white;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: white;
    color: #222222;
  }
`;
