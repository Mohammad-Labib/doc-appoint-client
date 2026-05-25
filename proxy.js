import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

 
  const isProtectedRoute =
    request.nextUrl.pathname.startsWith("/all-appointment/");

  
  if (isProtectedRoute && (!session || !session.user)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// middleware matcher
export const config = {
  matcher: ["/all-appointment/:path*"],
};




// import { auth } from '@/lib/auth';
// import { headers } from 'next/headers'
// import { NextResponse } from 'next/server'

 
// // This function can be marked `async` if using `await` inside
// export async function proxy(request) {
//     const session = await auth.api.getSession({
//        headers: await headers(),

//     });
//  if(!session && !session?.user){
//    console.log(request.url, "from proxy");
//    return NextResponse.redirect(new URL('/', request.url));
//  }
// }
 
// export const config = {
//   matcher: '/all-appointment/:id*',
// };