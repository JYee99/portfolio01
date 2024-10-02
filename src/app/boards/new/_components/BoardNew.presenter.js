import * as Styles from "./BoardNew.styles";

export default function BoardNewUI({
  writer,
  password,
  title,
  contents,
  writerError,
  passwordError,
  titleError,
  contentsError,
  onChangeWriter,
  onChangeTitle,
  onChangePassword,
  onChangeContents,
  submitOnclick,
  isActive,
}) {
  return (
    <Styles.Wrapper>
      <Styles.Title>게시글 등록</Styles.Title>
      <Styles.WriterWrapper>
        <Styles.InputWrapper>
          <Styles.Label>작성자</Styles.Label>
          <Styles.Writer
            type="text"
            placeholder="이름을 적어주세요."
            value={writer}
            onChange={onChangeWriter}
          />
          {writerError && (
            <Styles.ErrorText>* 이름을 입력해 주세요.</Styles.ErrorText>
          )}
        </Styles.InputWrapper>
        <Styles.InputWrapper>
          <Styles.Label>비밀번호</Styles.Label>
          <Styles.Password
            type="password"
            placeholder="비밀번호를 작성해주세요."
            value={password}
            onChange={onChangePassword}
          />
          {passwordError && (
            <Styles.ErrorText>* 비밀번호를 입력해 주세요.</Styles.ErrorText>
          )}
        </Styles.InputWrapper>
      </Styles.WriterWrapper>
      <Styles.InputWrapper>
        <Styles.Label>제목</Styles.Label>
        <Styles.Subject
          type="text"
          placeholder="제목을 작성해주세요."
          value={title}
          onChange={onChangeTitle}
        />
        {titleError && (
          <Styles.ErrorText>제목을 입력해 주세요.</Styles.ErrorText>
        )}
      </Styles.InputWrapper>
      <Styles.InputWrapper>
        <Styles.Label>내용</Styles.Label>
        <Styles.Contents
          placeholder="내용을 작성해주세요."
          value={contents}
          onChange={onChangeContents}
        />
        {contentsError && <ErrorText>내용을 입력해 주세요.</ErrorText>}
      </Styles.InputWrapper>
      <Styles.InputWrapper>
        <Styles.Label>주소</Styles.Label>
        <Styles.ZipcodeWrapper>
          <Styles.Zipcode placeholder="07250" />
          <Styles.SearchButton>우편번호 검색</Styles.SearchButton>
        </Styles.ZipcodeWrapper>
        <Styles.Address />
        <Styles.Address />
      </Styles.InputWrapper>
      <Styles.InputWrapper>
        <Styles.Label>유튜브</Styles.Label>
        <Styles.Youtube placeholder="링크를 복사해주세요." />
      </Styles.InputWrapper>
      <Styles.ImageWrapper>
        <Styles.Label>사진첨부</Styles.Label>
        <Styles.UploadButton>+</Styles.UploadButton>
        <Styles.UploadButton>+</Styles.UploadButton>
        <Styles.UploadButton>+</Styles.UploadButton>
      </Styles.ImageWrapper>
      <Styles.OptionWrapper>
        <Styles.Label>메인설정</Styles.Label>
        <Styles.RadioButton type="radio" id="youtube" name="radio-button" />
        <Styles.RadioLabel htmlFor="youtube">유튜브</Styles.RadioLabel>
        <Styles.RadioButton type="radio" id="image" name="radio-button" />
        <Styles.RadioLabel htmlFor="image">사진</Styles.RadioLabel>
      </Styles.OptionWrapper>
      <Styles.ButtonWrapper>
        <Styles.SubmitButton onClick={submitOnclick} isActive={isActive}>
          등록하기
        </Styles.SubmitButton>
      </Styles.ButtonWrapper>
    </Styles.Wrapper>
  );
}
