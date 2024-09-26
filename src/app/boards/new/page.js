'use client'

import {
    Address,
    ButtonWrapper,
    Contents,
    ErrorCloseBtn,
    ErrorModal,
    ErrorModalBg,
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
    ZipcodeWrapper

} from "@/app/styles/boardsNew";
import { useState } from "react";

export default function BoardsNewPage() {

    const [writer, setWriter] = useState('')
    const [password, setPassword] = useState('')
    const [subject, setSubject] = useState('')
    const [content, setContent] = useState('')
    const [isError, setIsError] = useState({
        writerError: false,
        passwordError: false,
        subjectError: false,
        contentError: false
    })
    const errorMsg = [
        '* 이름을 입력해 주세요.',
        '* 비밀번호를 입력해 주세요.',
        '* 제목을 입력해 주세요.',
        '* 내용을 입력해 주세요.'
    ]
    const scrollToTop = () => {
        window.scrollTo({
            top: 300,
            behavior: 'smooth'
        });
    };

    const onChangeWriter = (e) => {
        setWriter(e.target.value)
    }
    const onChangPassword = (e) => {
        setPassword(e.target.value)
    }
    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }
    const onChangeContent = (e) => {
        setContent(e.target.value)
    }
    const submitOnclick = (e) => {
        e.preventDefault();

        // 오류 상태 초기화, 여러 번 오류가 발생했을 경우를 대비
        const newErrors = {
            writerError: false,
            passwordError: false,
            subjectError: false,
            contentError: false,
        };

        // 입력 데이터 검증
        const formState = {
            writer,
            password,
            subject,
            content,
        };

        for (const key in formState) {
            if (!formState[key]) {
                // 필드가 비어 있으면 해당 에러 표시
                newErrors[`${key}Error`] = true; // key에 해당하는 에러 상태 업데이트
            }
        }

        setIsError(newErrors); // 오류 상태 업데이트

        // 오류가 있는지 체크
        if (Object.values(newErrors).some(error => error)) {
            scrollToTop(); // 오류가 있을 경우 최상단으로 스크롤
            return; // 더 이상 진행하지 않음
        }

        alert('게시글이 등록되었습니다.'); // 모든 필드가 유효할 경우 알림
    }

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
                        onChange={onChangeWriter} />
                    {
                        isError.writerError &&
                        <ErrorText>
                            {errorMsg[0]}
                        </ErrorText>
                    }

                </InputWrapper>
                <InputWrapper>
                    <Label>비밀번호</Label>
                    <Password
                        type="password"
                        placeholder="비밀번호를 작성해주세요."
                        value={password}
                        onChange={onChangPassword}
                    />
                    {
                        isError.writerError &&
                        <ErrorText>
                            {errorMsg[1]}
                        </ErrorText>
                    }
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
                {
                    isError.writerError &&
                    <ErrorText>
                        {errorMsg[2]}
                    </ErrorText>
                }
            </InputWrapper>
            <InputWrapper>
                <Label>내용</Label>
                <Contents
                    placeholder="내용을 작성해주세요."
                    value={content}
                    onChange={onChangeContent}
                />
                {
                    isError.writerError &&
                    <ErrorText>
                        {errorMsg[3]}
                    </ErrorText>
                }
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
