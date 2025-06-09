import React from 'react'
import { Link, NavLink } from 'react-router-dom'


 export default function Nav() {
  return (
    <nav>
        <ul className='menuWrap'>
            <li>
                <strong>고객 DB관리</strong>
                <ul className='dep02'>
                    <li><NavLink to='/main'>통합 고객 목록</NavLink></li>
                    <li><NavLink to='/signUp'>고객 등록</NavLink></li>
                </ul>
            </li>
            <li >
                <strong>결제관리</strong>
                <ul>
                    <li><NavLink>결제 목록</NavLink></li>
                    <li><NavLink>상품 목록</NavLink></li>
                </ul>
            </li>
            <li>
                <strong>통계</strong>
                <ul>
                    <li><NavLink>그룹/계정별 유효율</NavLink></li>
                    <li><NavLink>캠페인별 유효율</NavLink></li>
                    <li><NavLink>매출현황</NavLink></li>
                </ul>
            </li>
            <li >
                <strong>시스템관리</strong>
                <ul>
                    <li>
                        <b>기본설정</b>
                        <ul>
                            <li><NavLink>사용자 목록</NavLink></li>
                            <li><NavLink>부서 관리</NavLink></li>
                            <li><NavLink>고객 구분 관리</NavLink></li>
                            <li><NavLink>공통 코드 관리</NavLink></li>
                            <li><NavLink>고객목록 설정</NavLink></li>
                            <li><NavLink>속성값 설정</NavLink></li>
                        </ul>
                       

                    </li>
                    <li>
                        <b>권한설정</b>
                        <ul>
                            <li><NavLink>역할 관리</NavLink></li>
                            <li><NavLink>역할 권한 관리</NavLink></li>
                        </ul>
                    </li>

                    <li>
                        <b >회원사 관리</b>
                        <ul >
                            <li><NavLink>사용자접속이력</NavLink></li>
                            <li><NavLink>고객삭제이력</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <strong>게시판 관리</strong>
                <ul><li><Link>공지사항</Link></li></ul>
            </li>
        </ul>
    </nav>
  )
}


