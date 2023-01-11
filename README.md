# 📍 [Places I've Been](https://places-i-ve-been-fsssycziz-froggy1014.vercel.app)

<div align="center" width="300px">
    
<img src="./public/images/Logo.png" />

</div>

<br>

<div align="center">

<p>
    <a target="_blank" rel="noopener noreferrer nofollow">    
        <img src="https://img.shields.io/badge/Typescript-^4.9.4-3178C6?style=for-the-badge&logo=TypeScript&logoColor=3178C6"/>
    </a>
    <a target="_blank" rel="noopener noreferrer nofollow">
        <img src="https://img.shields.io/badge/Axios-^1.2.1-5A29E4?style=for-the-badge&logo=Axios&logoColor=5A29E4"/>
    </a>
    <a target="_blank" rel="noopener noreferrer nofollow">
        <img src="https://img.shields.io/badge/React-^18.2.0-61DAFB?style=for-the-badge&logo=React&logoColor=61DAFB"/>
    </a>
    <a target="_blank" rel="noopener noreferrer nofollow">
        <img src="https://img.shields.io/badge/React Query-^4.19.1-FF4154?style=for-the-badge&logo=React Query&logoColor=FF4154"/>
    </a>
    <a target="_blank" rel="noopener noreferrer nofollow">
        <img src="https://img.shields.io/badge/Node.js-^16.15.1-339933?style=for-the-badge&logo=Node.js&logoColor=339933"/>
    </a>
    <a target="_blank" rel="noopener noreferrer nofollow">
        <img src="https://img.shields.io/badge/ESLint-^8.29.0-4B32C3?style=for-the-badge&logo=ESLint&logoColor=4B32C3"/>
    </a>
    <a target="_blank" rel="noopener noreferrer nofollow">
        <img src="https://img.shields.io/badge/JSON Web Tokens-^8.5.1-d53aff?style=for-the-badge&logo=JSON Web Tokens&logoColor=ffffff"/>
    </a>
    <a target="_blank" rel="noopener noreferrer nofollow">
        <img src="https://img.shields.io/badge/Mongoose-^6.8.0-47A248?style=for-the-badge&logo=MongoDB&logoColor=47A248"/>
    </a>
    <a target="_blank" rel="noopener noreferrer nofollow">
        <img src="https://img.shields.io/badge/Tailwind CSS-^3.2.4-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=ffffff"/>
    </a>
    <a target="_blank" rel="noopener noreferrer nofollow">
        <img src="https://img.shields.io/badge/Express-^4.18.2-000000?style=for-the-badge&logo=Express&logoColor=ffffff"/>
    </a>
    <a target="_blank" rel="noopener noreferrer nofollow">
        <img src="https://img.shields.io/badge/dotenv-^16.0.3-ECD53F?style=for-the-badge&logo=.ENV&logoColor=ECD53F"/>
    </a>
    <a target="_blank" rel="noopener noreferrer nofollow">
        <img src="https://img.shields.io/badge/AWS S3-^16.0.3-CA7d46?style=for-the-badge&logo=Amazon S3&logoColor=CA7d46"/>
    </a>
</p>

</div>

<br>
<div align="center">
    
# Introduction

</div>

리액트 전체적인 기능 복습과 백엔드 기초적인 부분을 학습을 목표로 MERN 스택을 사용하여 프렌트엔드 개발자를 지원하는 저로써 좀 더 백엔드를 이해하고자 시작하게 되었습니다. 


<br>

I started this personal project to understand the backend perspective as a frontend developers using the MERN stack with the aim of reviewing the overall functionality of React and learning the backend basics.


<br>

# 📄 Project Description

Place I've Been은 사용자가 방문했던 곳의 이름과 설명, 구글 맵 좌표를 통해 장소에 대한 정보를 공유할 수 있고 장소에 대한 추억을 저장할 수 있습니다. 백엔드와 프론트엔드를 사용하여 기본적인 CRUD와 인증작업, RESTful API 구현에 충실하였습니다.

<br>

'Place I've Been' allows you to share and store information about places you've visited and your memories through its name, description and coordinates. Back-end and front-end were used to implement basic CRUD and Authentication Verification, RESTful API.

<br>

### 📚 Project Detail 

- **Framework:** [React](https://ko.reactjs.org/)
- **State Management:** [React Query](https://react-query.tanstack.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Authentication & DB:** [MongoDB](https://www.mongodb.com/home)

<br>

# ✍️ Project Summary

### 📁 Folder Structure         [-> Wiki](https://github.com/froggy1014/Places-I-ve-Been/wiki/%F0%9F%93%81-Folder-Structure)

### 🔁 User Flow                [-> Wiki]()

<br>

# 🤔 What I've learnt? 

<pre>
 코드 스프리팅을 통한 성능 개선       Code splitting for performance improvements
 타입스크립트로의 마이그레이션         Migration re-work to Typescript from Javascript
 포탈을 이용한 글로벌 모달 구현       Implement global modal by portal
 AWS S3를 이용한 이미지 보관        Store images into AWS S3 Bucket
 RESTful API 구축 및 CRUD 구현    Implement CRUD feature and Build RESTFul API from scratch
 리액트 쿼리를 활용한 상태 관리        Manage State by React-Query
 CORS 에러에 대한 핸들링            Handling CORS error
 MongoDB를 활용한 DB 구축          Build DataBase by MongoDB
</pre>

<br>


# 🏁 How to run this App 

> ### **Environment Varibles Required for Front-End and Back-End** <br>
> create .env in `root` directory

```
// FE
REACT_APP_GOOGLE_API_KEY=[Google Map API Key]
REACT_APP_BASE_URL=https://mern-be.onrender.com/api/
REACT_APP_ASSET_URL=https://place-ive-been.s3.ap-northeast-2.amazonaws.com/

// BE
DB_USER=[MongoDB Admin ID]
DB_PASSWORD=[MongoDB Admin PW]
DB_NAME=[MongoDB collection Name]
GOOGLE_API_KEY=[Your Google Map API Key]
JWT_SECRET_KEY=[ask me]
S3_ACCESS_KEY_ID=[AWS S3 IAM ACCESS KEY]
S3_SECRET_ACCESS_KEY=[AWS S3 IAM SECRET ACCESS KEY]
S3_REGION=ap-northeast-2
```

test command 

```
npm install
npm run start
```
