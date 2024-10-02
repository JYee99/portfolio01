"use client";

import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import BoardNewUI from "./BoardNew.presenter";
import { CREATE_BOARD } from "./BoardNew.queries";

export default function BoardNew() {
  const [createBoard] = useMutation(CREATE_BOARD);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [writerError, setWriterError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [contentsError, setContentsError] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  const scrollToTop = (top) => {
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };
  const checkIsActive = (writer, password, title, contents) => {
    if (writer && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeWriter = (e) => {
    setWriter(e.target.value);
    checkIsActive(e.target.value, password, title, contents);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    checkIsActive(writer, e.target.value, title, contents);
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    checkIsActive(writer, password, e.target.value, contents);
  };
  const onChangeContents = (e) => {
    setContents(e.target.value);
    checkIsActive(writer, password, title, e.target.value);
  };

  function validateFormData() {
    if (!writer) {
      setWriterError(true);
    }
    if (!password) {
      setPasswordError(true);
    }
    if (!title) {
      setTitleError(true);
    }
    if (!contents) {
      setContentsError(true);
    }
  }

  const submitOnclick = async (e) => {
    setWriterError(false);
    setPasswordError(false);
    setTitleError(false);
    setContentsError(false);

    e.preventDefault();
    if (!writer || !password || !title || !contents) {
      validateFormData();
      const top = 300;
      scrollToTop(top);
      return;
    }
    try {
      // 모든 입력란에 데이터가 존재할 때 실행
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password,
            title,
            contents,
          },
        },
      });
      // 입력 필드 초기화
      setWriter("");
      setPassword("");
      setTitle("");
      setContents("");
      alert("게시글이 등록되었습니다."); // 모든 필드가 유효할 경우 알림
      console.log(result.data);

      router.push(`/boards/detail/${result.data.createBoard._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <BoardNewUI
        writer={writer}
        password={password}
        title={title}
        contents={contents}
        writerError={writerError}
        passwordError={passwordError}
        contentsError={contentsError}
        titleError={titleError}
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        submitOnclick={submitOnclick}
        isActive={isActive}
      />
    </>
  );
}
