import React from 'react'
import SideNav from '../ui/dashboard/sidenav'

/**
 * #3-2-1. layout.tsx를 활용한 dashboard의 공통 레이아웃 작성
 * 
 */

// children props는 React.ReactNode 객체 타입으로 제한
const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    )
}

export default Layout