// import React, { useState, useEffect } from "react";
// import { Sun, Moon, Settings2 } from "lucide-react";
// import { Button } from "./components/ui/button";

// export default function Layout({ children }) {
//   const [theme, setTheme] = useState("dark");

//   useEffect(() => {
//     const root = window.document.documentElement;
//     root.classList.remove("light", "dark");
//     root.classList.add(theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Header */}
//       <header className="border-b">
//         <div className="container mx-auto px-4 h-16 flex items-center justify-between">
//           <div className="flex items-center space-x-4">
//             <svg
//               viewBox="0 0 24 24"
//               className="w-8 h-8 fill-current"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M12 2L2 19h20L12 2zm0 4l6.5 11h-13L12 6z" />
//             </svg>
//             <span className="font-bold text-xl">VERTX</span>
//           </div>
//           <div className="flex items-center space-x-4">
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={toggleTheme}
//               className="rounded-full"
//             >
//               {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//             </Button>
//             <Button variant="outline">Upgrade</Button>
//             <Button variant="outline">Submit</Button>
//             <Button variant="default">Join</Button>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <div className="flex h-[calc(100vh-4rem)]">
//         {/* Sidebar */}
//         <aside className="w-64 border-r hidden md:block">
//           <div className="h-full flex flex-col">
//             {/* Top Section */}
//             <div className="p-4">
//               <div className="mb-8">
//                 <h2 className="text-sm font-semibold mb-2">Yesterday</h2>
//                 <Button variant="secondary" className="w-full justify-between">
//                   Generate pitch deck
//                   <span className="opacity-50">...</span>
//                 </Button>
//               </div>
//             </div>

//             {/* Bottom Navigation */}
//             <div className="mt-auto p-4 space-y-2">
//               <Button variant="ghost" className="w-full justify-start">
//                 Home
//               </Button>
//               <Button variant="ghost" className="w-full justify-start flex-col items-start">
//                 <div className="flex items-center">
//                   <span>⚡</span>
//                   <span className="ml-2">Upgrade plan</span>
//                 </div>
//                 <span className="text-sm text-muted-foreground">
//                   Get access to all tools
//                 </span>
//               </Button>
//             </div>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 overflow-auto">
//           <div className="container mx-auto px-4 py-8 max-w-4xl">
//             <div className="flex justify-end mb-4">
//               <Button variant="ghost" size="icon">
//                 <Settings2 className="h-5 w-5" />
//               </Button>
//             </div>
//             {children}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }
