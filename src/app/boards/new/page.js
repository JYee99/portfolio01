"use client";

import {
  Address,
  ButtonWrapper,
  Contents,
  ErrorText,
  ImageWrapper,
  InputWrapper,
  Label,
  OptionWrapper,
  Password,
  RadioButton,
  RadioLabel,
  SearchButton,
  Subject,
  SubmitButton,
  Title,
  UploadButton,
  Wrapper,
  Writer,
  WriterWrapper,
  Youtube,
  Zipcode,
  ZipcodeWrapper,
} from "@/app/styles/boardsNew";
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function BoardsNewPage() {
  const [createBoard] = useMutation(CREATE_BOARD);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [writerError, setWriterError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [contentError, setContentError] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  };

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
  };
  const onChangPassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  };
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  function validateFormData() {
    if (!writer) {
      setWriterError(true);
    }
    if (!password) {
      setPasswordError(true);
    }
    if (!subject) {
      setSubjectError(true);
    }
    if (!content) {
      setContentError(true);
    }
  }

  const submitOnclick = async (e) => {
    setWriterError(false);
    setPasswordError(false);
    setSubjectError(false);
    setContentError(false);

    e.preventDefault();
    if (!writer || !password || !subject || !content) {
      validateFormData();
      scrollToTop();
      return;
    }
    // 모든 입력란에 데이터가 존재할 때 실행
    const data = await createBoard({
      variables: {
        createBoardInput: {
          writer: writer,
          password: password,
          title: subject,
          contents: content,
        },
      },
    });
    // 입력 필드 초기화
    setWriter("");
    setPassword("");
    setSubject("");
    setContent("");
    alert("게시글이 등록되었습니다."); // 모든 필드가 유효할 경우 알림
    console.log(data);
  };

  return (
    <Wrapper>
      <Title>게시글 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer
            type="text"
            placeholder="이름을 적어주세요."
            value={writer}
            onChange={onChangeWriter}
          />
          {writerError && <ErrorText>* 이름을 입력해 주세요.</ErrorText>}
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password
            type="password"
            placeholder="비밀번호를 작성해주세요."
            value={password}
            onChange={onChangPassword}
          />
          {passwordError && <ErrorText>* 비밀번호를 입력해 주세요.</ErrorText>}
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject
          type="text"
          placeholder="제목을 작성해주세요."
          value={subject}
          onChange={onChangeSubject}
        />
        {subjectError && <ErrorText>제목을 입력해 주세요.</ErrorText>}
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents
          placeholder="내용을 작성해주세요."
          value={content}
          onChange={onChangeContent}
        />
        {contentError && <ErrorText>내용을 입력해 주세요.</ErrorText>}
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode placeholder="07250" />
          <SearchButton>우편번호 검색</SearchButton>
        </ZipcodeWrapper>
        <Address />
        <Address />
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube placeholder="링크를 복사해주세요." />
      </InputWrapper>
      <ImageWrapper>
        <Label>사진첨부</Label>
        <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton>
      </ImageWrapper>
      <OptionWrapper>
        <Label>메인설정</Label>
        <RadioButton type="radio" id="youtube" name="radio-button" />
        <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
        <RadioButton type="radio" id="image" name="radio-button" />
        <RadioLabel htmlFor="image">사진</RadioLabel>
      </OptionWrapper>
      <ButtonWrapper>
        <SubmitButton onClick={submitOnclick}>등록하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
