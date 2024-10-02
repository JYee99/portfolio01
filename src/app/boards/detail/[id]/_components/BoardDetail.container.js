"use client";
import { useQuery } from "@apollo/client";
import { useParams, useRouter } from "next/navigation";
import { FETCH_BOARD } from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";

export default function BoardDetail() {
  const params = useParams();
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: params.id,
    },
  });
  const date = new Date();
  const formatDate = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(date)
    .replace(/\s/g, "");

  console.log(data);
  console.log(params);

  const onClickListBtn = () => {
    router.push(`/boards/list`);
  };

  return (
    <BoardDetailUI
      data={data}
      formatDate={formatDate}
      onClickListBtn={onClickListBtn}
    />
  );
}
