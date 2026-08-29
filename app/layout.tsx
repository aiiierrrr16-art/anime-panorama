import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"ANIME PANORAMA｜日本知名动漫全景目录",description:"按年代、类型与影响力整理的393部日本动画文化档案。",icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"},openGraph:{title:"ANIME PANORAMA",description:"393部／系列 · 1963—2026",type:"website",images:[{url:"/og.png",width:1200,height:630,alt:"ANIME PANORAMA 日本知名动漫全景目录"}]},twitter:{card:"summary_large_image",title:"ANIME PANORAMA",description:"393部／系列 · 1963—2026",images:["/og.png"]}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="zh-CN"><body>{children}</body></html>}
