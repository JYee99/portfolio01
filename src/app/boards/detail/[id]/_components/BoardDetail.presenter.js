import Comment from "../../_components/Comment";
import * as Styles from "./BoardDetail.styles";
export default function BoardDetailUI({ data, formatDate, onClickListBtn }) {
  console.log(data?.fetchBoard);
  console.log(formatDate);
  if (!data) {
    return <p>Loading...</p>;
  }
  return (
    <Styles.DetailWrapper>
      <Styles.PoastWrapper>
        <Styles.TopContainer>
          <Styles.ProfileBox>
            <Styles.ProfileImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&s" />
            <Styles.DataBox>
              <Styles.UserName>{data?.fetchBoard?.writer}</Styles.UserName>
              <Styles.UserDate>
                {data?.fetchBoard?.createdAt && formatDate}
              </Styles.UserDate>
            </Styles.DataBox>
          </Styles.ProfileBox>
          <Styles.ProfileRightBox>
            <Styles.LinkIcon>
              <svg
                width="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 8c-2.248 0-4 1.752-4 4s1.752 4 4 4h2a1 1 0 1 1 0 2H8c-3.352 0-6-2.648-6-6s2.648-6 6-6h2a1 1 0 1 1 0 2H8zm5-1a1 1 0 0 1 1-1h2c3.352 0 6 2.648 6 6s-2.648 6-6 6h-2a1 1 0 1 1 0-2h2c2.248 0 4-1.752 4-4s-1.752-4-4-4h-2a1 1 0 0 1-1-1zm-6 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1z"
                  fill="#FFD600"
                />
              </svg>
            </Styles.LinkIcon>
            <div>
              <svg
                width="30px"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFD600"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.832 2.688A4.056 4.056 0 0 0 8.02 1.5h-.04a4.056 4.056 0 0 0-4 4c-.013.75.198 1.487.606 2.117L7.734 14h.533l3.147-6.383c.409-.63.62-1.367.606-2.117a4.056 4.056 0 0 0-1.188-2.812zM7.925 2.5l.082.01.074-.01a3.075 3.075 0 0 1 2.941 3.037 2.74 2.74 0 0 1-.467 1.568l-.02.034-.017.035L8 12.279l-2.517-5.1-.017-.039-.02-.034a2.74 2.74 0 0 1-.467-1.568A3.074 3.074 0 0 1 7.924 2.5zm.612 2.169a1 1 0 1 0-1.112 1.663 1 1 0 0 0 1.112-1.663zM6.87 3.837a2 2 0 1 1 2.22 3.326 2 2 0 0 1-2.22-3.326z"
                />
              </svg>
            </div>
          </Styles.ProfileRightBox>
        </Styles.TopContainer>
        <Styles.PostContainer>
          <Styles.PostTitle>{data?.fetchBoard?.title}</Styles.PostTitle>
          <Styles.PostImg src="https://d2ijz6o5xay1xq.cloudfront.net/account_2263/tomorrowland_68ab5bc410883b4693d66fef5a37c410_800.jpg" />
          <Styles.PostContents>
            {data?.fetchBoard?.contents}
          </Styles.PostContents>
          {/* <PostVideo /> */}
          <Styles.ThumbBox>
            <Styles.ThumbUp>
              <Styles.ThumbBtn>
                <svg
                  fill="#FFD600"
                  width="30px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21.3,10.08A3,3,0,0,0,19,9H14.44L15,7.57A4.13,4.13,0,0,0,11.11,2a1,1,0,0,0-.91.59L7.35,9H5a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17.73a3,3,0,0,0,2.95-2.46l1.27-7A3,3,0,0,0,21.3,10.08ZM7,20H5a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H7Zm13-7.82-1.27,7a1,1,0,0,1-1,.82H9V10.21l2.72-6.12A2.11,2.11,0,0,1,13.1,6.87L12.57,8.3A2,2,0,0,0,14.44,11H19a1,1,0,0,1,.77.36A1,1,0,0,1,20,12.18Z" />
                </svg>
              </Styles.ThumbBtn>
              <Styles.ThumbUpCount>1999</Styles.ThumbUpCount>
            </Styles.ThumbUp>
            <Styles.ThumbDown>
              <Styles.ThumbBtn>
                <svg
                  fill="#828282"
                  width="30px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19,2H6.27A3,3,0,0,0,3.32,4.46l-1.27,7A3,3,0,0,0,5,15H9.56L9,16.43A4.13,4.13,0,0,0,12.89,22a1,1,0,0,0,.91-.59L16.65,15H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM15,13.79l-2.72,6.12a2.13,2.13,0,0,1-1.38-2.78l.53-1.43A2,2,0,0,0,9.56,13H5a1,1,0,0,1-.77-.36A1,1,0,0,1,4,11.82l1.27-7a1,1,0,0,1,1-.82H15ZM20,12a1,1,0,0,1-1,1H17V4h2a1,1,0,0,1,1,1Z" />
                </svg>
              </Styles.ThumbBtn>
              <Styles.ThumbDownCount>914</Styles.ThumbDownCount>
            </Styles.ThumbDown>
          </Styles.ThumbBox>
        </Styles.PostContainer>
      </Styles.PoastWrapper>

      <Styles.ButtonBox>
        <Styles.ButtonBoxBtn onClick={onClickListBtn}>
          목록으로
        </Styles.ButtonBoxBtn>
        <Styles.ButtonBoxBtn>수정하기</Styles.ButtonBoxBtn>
        <Styles.ButtonBoxBtn>삭제하기</Styles.ButtonBoxBtn>
      </Styles.ButtonBox>

      <Styles.CommentContainer>
        <Styles.CommentTitleBox>
          <svg
            width="18px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.991 4.8C20.991 3.81 20.19 3 19.2 3H4.8C3.81 3 3 3.81 3 4.8V15.6C3 16.59 3.81 17.4 4.8 17.4H17.4L21 21L20.991 4.8ZM19.2 4.8V16.653L18.147 15.6H4.8V4.8H19.2ZM17.4 12H6.6V13.8H17.4V12ZM6.6 9.3H17.4V11.1H6.6V9.3ZM17.4 6.6H6.6V8.4H17.4V6.6Z"
              fill="#FFD066"
            />
          </svg>
          <Styles.CommentTitle> 댓글</Styles.CommentTitle>
        </Styles.CommentTitleBox>
        <Styles.CommentForm>
          <Styles.CommentTopBox>
            <Styles.CommentWriterInput type="text" placeholder="작성자" />
            <Styles.CommentWriterInput type="text" placeholder="비밀번호" />
          </Styles.CommentTopBox>
          <Styles.CommentContents
            type="text"
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            maxLength={100}
          />
          <Styles.SubmitBtn>등록하기</Styles.SubmitBtn>
        </Styles.CommentForm>
        <Comment />
        <Comment />
        <Comment />
      </Styles.CommentContainer>
    </Styles.DetailWrapper>
  );
}
