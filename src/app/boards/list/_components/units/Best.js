"use client";
import Image from "next/image";
import * as Styles from "../BoardList.styles";

export default function BestUI() {
  return (
    <Styles.BestContainer>
      <Styles.BsetTitle>베스트 게시글</Styles.BsetTitle>
      <Styles.BestList>
        <Styles.BestItem>
          <Styles.BestItemImgBox>
            <Image
              src="https://cdn.pixabay.com/photo/2023/10/29/14/37/pumpkins-8350480_1280.jpg"
              alt="asdasd"
              width={282}
              height={257}
              layout="intrinsic"
            />
          </Styles.BestItemImgBox>
          <Styles.BestItemTitle>게시물 제목입니다.</Styles.BestItemTitle>
          <Styles.BestInfoBox>
            <Styles.InfoLeft>
              <Styles.Toprow>
                <Styles.Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdO2DCDcfM7yDAtEo797CkSw_njibgz-lOgw&s" />
                <Styles.Writer>김진영</Styles.Writer>
              </Styles.Toprow>
              <Styles.CreatedDate>Data: 2024.10.02</Styles.CreatedDate>
            </Styles.InfoLeft>
            <Styles.ThumbBox>
              <svg
                fill="#FFD600"
                width="30px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21.3,10.08A3,3,0,0,0,19,9H14.44L15,7.57A4.13,4.13,0,0,0,11.11,2a1,1,0,0,0-.91.59L7.35,9H5a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17.73a3,3,0,0,0,2.95-2.46l1.27-7A3,3,0,0,0,21.3,10.08ZM7,20H5a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H7Zm13-7.82-1.27,7a1,1,0,0,1-1,.82H9V10.21l2.72-6.12A2.11,2.11,0,0,1,13.1,6.87L12.57,8.3A2,2,0,0,0,14.44,11H19a1,1,0,0,1,.77.36A1,1,0,0,1,20,12.18Z" />
              </svg>
              <Styles.ThumbCount>319</Styles.ThumbCount>
            </Styles.ThumbBox>
          </Styles.BestInfoBox>
        </Styles.BestItem>
        <Styles.BestItem>
          <Styles.BestItemImgBox>
            <Image
              src="https://cdn.pixabay.com/photo/2023/09/04/06/59/dog-8232158_1280.jpg"
              alt="asdasd"
              width={282}
              height={257}
              layout="intrinsic"
            />
          </Styles.BestItemImgBox>
          <Styles.BestItemTitle>게시물 제목입니다.</Styles.BestItemTitle>

          <Styles.BestInfoBox>
            <Styles.InfoLeft>
              <Styles.Toprow>
                <Styles.Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdO2DCDcfM7yDAtEo797CkSw_njibgz-lOgw&s" />
                <Styles.Writer>김진영</Styles.Writer>
              </Styles.Toprow>
              <Styles.CreatedDate>Data: 2024.10.02</Styles.CreatedDate>
            </Styles.InfoLeft>
            <Styles.ThumbBox>
              <svg
                fill="#FFD600"
                width="30px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21.3,10.08A3,3,0,0,0,19,9H14.44L15,7.57A4.13,4.13,0,0,0,11.11,2a1,1,0,0,0-.91.59L7.35,9H5a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17.73a3,3,0,0,0,2.95-2.46l1.27-7A3,3,0,0,0,21.3,10.08ZM7,20H5a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H7Zm13-7.82-1.27,7a1,1,0,0,1-1,.82H9V10.21l2.72-6.12A2.11,2.11,0,0,1,13.1,6.87L12.57,8.3A2,2,0,0,0,14.44,11H19a1,1,0,0,1,.77.36A1,1,0,0,1,20,12.18Z" />
              </svg>
              <Styles.ThumbCount>319</Styles.ThumbCount>
            </Styles.ThumbBox>
          </Styles.BestInfoBox>
        </Styles.BestItem>
        <Styles.BestItem>
          <Styles.BestItemImgBox>
            <Image
              src="https://cdn.pixabay.com/photo/2023/07/13/05/36/mountains-8123933_1280.jpg"
              alt="asdasd"
              width={282}
              height={257}
              layout="intrinsic"
            />
          </Styles.BestItemImgBox>
          <Styles.BestItemTitle>게시물 제목입니다.</Styles.BestItemTitle>
          <Styles.BestInfoBox>
            <Styles.InfoLeft>
              <Styles.Toprow>
                <Styles.Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdO2DCDcfM7yDAtEo797CkSw_njibgz-lOgw&s" />
                <Styles.Writer>김진영</Styles.Writer>
              </Styles.Toprow>
              <Styles.CreatedDate>Data: 2024.10.02</Styles.CreatedDate>
            </Styles.InfoLeft>
            <Styles.ThumbBox>
              <svg
                fill="#FFD600"
                width="30px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21.3,10.08A3,3,0,0,0,19,9H14.44L15,7.57A4.13,4.13,0,0,0,11.11,2a1,1,0,0,0-.91.59L7.35,9H5a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17.73a3,3,0,0,0,2.95-2.46l1.27-7A3,3,0,0,0,21.3,10.08ZM7,20H5a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H7Zm13-7.82-1.27,7a1,1,0,0,1-1,.82H9V10.21l2.72-6.12A2.11,2.11,0,0,1,13.1,6.87L12.57,8.3A2,2,0,0,0,14.44,11H19a1,1,0,0,1,.77.36A1,1,0,0,1,20,12.18Z" />
              </svg>
              <Styles.ThumbCount>319</Styles.ThumbCount>
            </Styles.ThumbBox>
          </Styles.BestInfoBox>
        </Styles.BestItem>
        <Styles.BestItem>
          <Styles.BestItemImgBox>
            <Image
              src="https://cdn.pixabay.com/photo/2023/04/13/09/56/alps-7922246_1280.jpg"
              alt="asdasd"
              width={282}
              height={257}
              layout="intrinsic"
            />
          </Styles.BestItemImgBox>
          <Styles.BestItemTitle>게시물 제목입니다.</Styles.BestItemTitle>
          <Styles.BestInfoBox>
            <Styles.InfoLeft>
              <Styles.Toprow>
                <Styles.Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdO2DCDcfM7yDAtEo797CkSw_njibgz-lOgw&s" />
                <Styles.Writer>김진영</Styles.Writer>
              </Styles.Toprow>
              <Styles.CreatedDate>Data: 2024.10.02</Styles.CreatedDate>
            </Styles.InfoLeft>
            <Styles.ThumbBox>
              <svg
                fill="#FFD600"
                width="30px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21.3,10.08A3,3,0,0,0,19,9H14.44L15,7.57A4.13,4.13,0,0,0,11.11,2a1,1,0,0,0-.91.59L7.35,9H5a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17.73a3,3,0,0,0,2.95-2.46l1.27-7A3,3,0,0,0,21.3,10.08ZM7,20H5a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H7Zm13-7.82-1.27,7a1,1,0,0,1-1,.82H9V10.21l2.72-6.12A2.11,2.11,0,0,1,13.1,6.87L12.57,8.3A2,2,0,0,0,14.44,11H19a1,1,0,0,1,.77.36A1,1,0,0,1,20,12.18Z" />
              </svg>
              <Styles.ThumbCount>319</Styles.ThumbCount>
            </Styles.ThumbBox>
          </Styles.BestInfoBox>
        </Styles.BestItem>
      </Styles.BestList>
    </Styles.BestContainer>
  );
}
