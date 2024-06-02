import "./App.css";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  BrowserRouter,
} from "react-router-dom";
import { useRef, useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import ProjectDetail from "./components/ProjectDetail";
import Prolist from "./components/Prolist";
import IssueDetail from "./components/IssueDetail";
import Isslist from "./components/Isslist";
import Login from "./components/Login";
import Statistic from "./components/Statistic";
//임시데이터
const mokdata = [
  {
    p_id: 0,
    p_name: "회원가입 프로젝트",
    date: new Date().getTime(),
  },
  {
    p_id: 1,
    p_name: "온라인 테트리스 게임 프로젝트",
    date: new Date().getTime(),
  },
  {
    p_id: 2,
    p_name: "윷놀이 프로젝트",
    date: new Date().getTime(),
  },
  {
    p_id: 3,
    p_name: "온라인 채팅 앱 개발 프로젝트",
    date: new Date().getTime(),
  },
  {
    p_id: 4,
    p_name: "회원 관리 시스템 프로젝트",
    date: new Date().getTime(),
  },
  {
    p_id: 5,
    p_name: "이슈 관리 시스템 프로젝트",
    date: new Date().getTime(),
  },
];

const iokdata = [
  {
    i_id: 0,
    i_name: "로그인 화면 안 넘어감",
    date: new Date().getTime(),
  },
  {
    i_id: 1,
    i_name: "마우스 커서 동작 안 함",
    date: new Date().getTime(),
  },
  {
    i_id: 2,
    i_name: "버튼 클릭시 새로운 화면 안 뜸",
    date: new Date().getTime(),
  },
];
// 댓글 예시 데이터
const comment_data = [
  {
    comment_id: 0,
    contents: "해결이 시급한 중도한 문제네요.",
    commented_time: "2024-01-05",
    writer_id: "nananri",
  },
  {
    comment_id: 1,
    contents: "ㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
    commented_time: "2024-01-06",
    writer_id: "se",
  },
  {
    comment_id: 2,
    contents: "집 가고 싶다",
    commented_time: "2024-01-07",
    writer_id: "papapap",
  },
];
function App() {
  const [projects, setProjects] = useState(mokdata);
  const [issues, setIssues] = useState(iokdata);
  const [comments, setComments] = useState(comment_data);

  const onDelete = (targetId) => {
    //배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    setProjects(projects.filter((project) => project.p_id !== targetId));
  };

  //이슈 추가 백에서 구현한 함수 호출

  return (
    <>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/main"
            element={
              <>
                <Header />
                <List projects={projects} onDelete={onDelete} />
              </>
            }
          />
          <Route
            path="/Statistic"
            element={
              <>
                <Statistic />
              </>
            }
          />
          <Route
            path="/ProjectDetail/:p_id"
            element={
              <>
                <ProjectDetail projects={projects} />
                <Prolist />
              </>
            }
          />
          <Route
            path="/IssueDetail/:i_id"
            element={
              <>
                <IssueDetail issues={issues} />
                <Isslist comments={comments} />
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;