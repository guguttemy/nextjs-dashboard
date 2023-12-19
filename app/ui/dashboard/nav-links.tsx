// #5-2-1. use client 추가
'use client'

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  // #5-2-2. usePathname 훅 사용
  const pathname = usePathname();
  console.log(pathname); // dashboard, customers, ...
  
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (

          // #5-1-1. a태그로 작성할 경우 페이지가 전체 새로고침되기 때문에 nextjs에서 제공하는 Link 컴포넌트로 변경
          <Link
            key={link.name}
            href={link.href}
             // clsx를 활용하여 현재 활성 링크에 대한 조건부 스타일링 추가
             className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}>
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
