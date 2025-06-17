'use client';

import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Users,
    Settings,
    Menu,
    X,
} from 'lucide-react';

import Link from 'next/link';
import { useState } from 'react';


const navItems = [
    {
        label: 'Dashboard',
        href: '/dashboard',
        icon: LayoutDashboard,
    },
    { label: 'Users', href: '/users', icon: Users },
    { label: 'Settings', href: '/settings', icon: Settings },
]   

export default function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
             {/* Mobile Topbar */}
            <div className="md:hidden p-4 flex justify-between items-center border-b bg-white shadow-sm  dark:bg-gray-900 dark:text-white">
                <div className="font-bold text-xl  dark:bg-gray-900 dark:text-white">SaaS Admin</div>
                <button
                className="text-gray-600"
                onClick={() => setIsOpen(!isOpen)}
                >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
       
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r shadow-sm hidden md:block  dark:bg-gray-900 dark:text-white">
                <div className="p-4 font-bold text-xl">SaaS Admin</div>
                <nav className="flex flex-col gap-2 p-4">
                {navItems.map(({ label, href, icon: Icon })=> (
                        <Link key={href} href={href}
                        className={`flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 text-sm ${
                            pathname === href ? 'bg-gray-100 font-medium' : 'text-gray-600'
                        }`}
                        >
                            <Icon className="w-4 h-4" />
                            {label}
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
                onClick={() => setIsOpen(false)}
                />
            )}
        </>
    )
}