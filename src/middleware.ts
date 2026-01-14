import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    console.log('--- Middleware running ---');
    const pathname = req.nextUrl.pathname;
    console.log('Pathname:', pathname);

    const token = req.cookies.get('access_token')?.value;
    const role = req.cookies.get('role')?.value; // admin | user
    console.log('Token:', token);
    console.log('Role:', role);

    // 🔐 Admin routes
    // if (pathname.startsWith('/editor') || pathname.startsWith('/users')) {
    //     if (!token) {
    //         console.log('No token found, redirecting to /login');
    //         return NextResponse.redirect(new URL('/login', req.url));
    //     }

    //     if (role !== 'admin') {
    //         console.log('Role is not admin, redirecting to /403');
    //         return NextResponse.redirect(new URL('/403', req.url));
    //     }
    // }

    console.log('--- Middleware finished ---');
    return NextResponse.next();
}

export const config = {
    matcher: ['/editor', '/users/:path*'],
};
