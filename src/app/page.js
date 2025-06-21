import Link from "next/link";


export default function Home() {
  return (
   <div>

       <div className="h-[80vh] text-blue-900">
           home
           <Link href="/karate">karate</Link>
       </div>

   </div>
  );
}
