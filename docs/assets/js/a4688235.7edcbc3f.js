(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{155:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return b})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var a=t(3),i=t(7),o=(t(0),t(205)),r={id:"dbcontext",title:"9.1 \u6570\u636e\u5e93\u4e0a\u4e0b\u6587",sidebar_label:"9.1 \u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},b={unversionedId:"dbcontext",id:"dbcontext",isDocsHomePage:!1,title:"9.1 \u6570\u636e\u5e93\u4e0a\u4e0b\u6587",description:"\u5982\u679c\u8fde\u63a5\u5b57\u7b26\u4e32\u662f\u914d\u7f6e\u5728\u81ea\u5b9a\u4e49\u7684 .json \u6587\u4ef6\u4e2d\uff0c\u90a3\u4e48\u5fc5\u987b\u5728 Visual Studio \u4e2d\u914d\u7f6e .json \u53f3\u952e\u5c5e\u6027\uff0c\u8bbe\u7f6e \u590d\u5236 \u8f93\u51fa\u76ee\u5f55\u4e3a \u5982\u679c\u8f83\u65b0\u5219\u590d\u5236\uff0c\u751f\u6210\u64cd\u4f5c\u4e3a\uff1a\u5185\u5bb9\u3002",source:"@site/docs/dbcontext.mdx",slug:"/dbcontext",permalink:"/docs/dbcontext",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/dbcontext.mdx",version:"current",lastUpdatedBy:"Monk",lastUpdatedAt:1616728942,formattedLastUpdatedAt:"3/26/2021",sidebar_label:"9.1 \u6570\u636e\u5e93\u4e0a\u4e0b\u6587",sidebar:"docs",previous:{title:"9.0 \u5165\u95e8\u7b80\u8981",permalink:"/docs/dbcontext-start"},next:{title:"9.2 \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668",permalink:"/docs/dbcontext-locator"}},c=[{value:"9.1.1 \u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"911-\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",children:[]},{value:"9.1.2 <code>AppDbContext</code>",id:"912-appdbcontext",children:[]},{value:"9.1.3 <code>AppDbContext</code> \u548c <code>DbContext</code> \u533a\u522b",id:"913-appdbcontext-\u548c-dbcontext-\u533a\u522b",children:[]},{value:"9.1.4 \u5982\u4f55\u5b9a\u4e49\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"914-\u5982\u4f55\u5b9a\u4e49\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",children:[{value:"9.1.4.1 \u521b\u5efa\u9ed8\u8ba4\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"9141-\u521b\u5efa\u9ed8\u8ba4\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",children:[]},{value:"9.1.4.2 \u521b\u5efa\u5176\u4ed6\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"9142-\u521b\u5efa\u5176\u4ed6\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",children:[]}]},{value:"9.1.5 \u914d\u7f6e\u8fde\u63a5\u5b57\u7b26\u4e32",id:"915-\u914d\u7f6e\u8fde\u63a5\u5b57\u7b26\u4e32",children:[{value:"9.1.5.1 \u5728\u6ce8\u518c\u6570\u636e\u5e93\u670d\u52a1\u65f6\u914d\u7f6e",id:"9151-\u5728\u6ce8\u518c\u6570\u636e\u5e93\u670d\u52a1\u65f6\u914d\u7f6e",children:[]},{value:"9.1.5.2 <code>[AppDbContext]</code> \u65b9\u5f0f\u914d\u7f6e",id:"9152-appdbcontext-\u65b9\u5f0f\u914d\u7f6e",children:[]},{value:"9.1.5.3 <code>OnConfiguring</code> \u65b9\u5f0f\u914d\u7f6e",id:"9153-onconfiguring-\u65b9\u5f0f\u914d\u7f6e",children:[]}]},{value:"9.1.6 \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4e49\u4f4d\u7f6e",id:"916-\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4e49\u4f4d\u7f6e",children:[]},{value:"9.1.7 \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u6ce8\u518c",id:"917-\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u6ce8\u518c",children:[]},{value:"9.1.8 \u52a8\u6001\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5bf9\u8c61",id:"918-\u52a8\u6001\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5bf9\u8c61",children:[]},{value:"9.1.9 \u5728\u540e\u53f0\u4efb\u52a1\u4e2d\u4f7f\u7528",id:"919-\u5728\u540e\u53f0\u4efb\u52a1\u4e2d\u4f7f\u7528",children:[]},{value:"9.1.10 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9110-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],p={toc:c};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u8fde\u63a5\u5b57\u7b26\u4e32\u914d\u7f6e\u6ce8\u610f\u4e8b\u9879")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\u5982\u679c\u8fde\u63a5\u5b57\u7b26\u4e32\u662f\u914d\u7f6e\u5728\u81ea\u5b9a\u4e49\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},".json")," \u6587\u4ef6\u4e2d\uff0c\u90a3\u4e48\u5fc5\u987b\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"Visual Studio")," \u4e2d\u914d\u7f6e ",Object(o.b)("inlineCode",{parentName:"p"},".json")," \u53f3\u952e\u5c5e\u6027\uff0c\u8bbe\u7f6e ",Object(o.b)("inlineCode",{parentName:"p"},"\u590d\u5236")," \u8f93\u51fa\u76ee\u5f55\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"\u5982\u679c\u8f83\u65b0\u5219\u590d\u5236"),"\uff0c\u751f\u6210\u64cd\u4f5c\u4e3a\uff1a",Object(o.b)("inlineCode",{parentName:"p"},"\u5185\u5bb9"),"\u3002"),Object(o.b)("p",{parentName:"div"},"\u5426\u5219\u5c31\u4f1a\u63d0\u793a\u627e\u4e0d\u5230\u914d\u7f6e\u6216\u8fde\u63a5\u5b57\u7b26\u4e32\u7684\u9519\u8bef\u3002"))),Object(o.b)("h2",{id:"911-\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},"9.1.1 \u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),Object(o.b)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0c\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u662f\u8d1f\u8d23\u548c\u6570\u636e\u5e93\u4ea4\u4e92\u7684\u5bf9\u8c61\uff0c\u63d0\u4f9b\u7a0b\u5e8f\u5bf9\u6570\u636e\u5e93\u5b58\u53d6\u63d0\u4f9b\u4e86\u5927\u91cf\u7684\u65b9\u6cd5\u3002"),Object(o.b)("p",null,"\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u9ed8\u8ba4\u96c6\u6210\u4e86\u5fae\u8f6f\u4eb2\u513f\u5b50\uff1a",Object(o.b)("inlineCode",{parentName:"p"},"EntityFramework Core")," \uff0c\u4e5f\u5c31\u662f\u901a\u5e38\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u6307\u7684\u662f ",Object(o.b)("inlineCode",{parentName:"p"},"DbContext")," \u7c7b\u6216\u5b83\u7684\u5b9e\u73b0\u7c7b\u3002"),Object(o.b)("h2",{id:"912-appdbcontext"},"9.1.2 ",Object(o.b)("inlineCode",{parentName:"h2"},"AppDbContext")),Object(o.b)("p",null,"\u5728\u6211\u4eec\u5b9e\u9645\u9879\u76ee\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"EFCore")," \u63d0\u4f9b\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"DbContext")," \u64cd\u4f5c\u5bf9\u8c61\u64cd\u4f5c\u6570\u636e\u5e93\u6709\u4e9b\u7e41\u7410\u548c\u590d\u6742\uff0c\u4e14\u9ed8\u8ba4\u4e0d\u5177\u5907\u8bfb\u5199\u5206\u79bb\u3001\u591a\u5e93\u7b49\u64cd\u4f5c\u529f\u80fd\u3002"),Object(o.b)("p",null,"\u6240\u4ee5\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u4e86 ",Object(o.b)("inlineCode",{parentName:"p"},"AppDbContext<TDbContext, TDbContextLocator>")," \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\uff0c\u8be5\u4e0a\u4e0b\u6587\u7ee7\u627f\u81ea ",Object(o.b)("inlineCode",{parentName:"p"},"DbContext"),"\u3002"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u7279\u522b\u8bf4\u660e")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\u540e\u7eed\u7ae0\u8282\uff0c\u7686\u91c7\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"EFCore")," \u4ee3\u66ff ",Object(o.b)("inlineCode",{parentName:"p"},"EntityFramework Core"),"\u3002"))),Object(o.b)("h2",{id:"913-appdbcontext-\u548c-dbcontext-\u533a\u522b"},"9.1.3 ",Object(o.b)("inlineCode",{parentName:"h2"},"AppDbContext")," \u548c ",Object(o.b)("inlineCode",{parentName:"h2"},"DbContext")," \u533a\u522b"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"AppDbContext")," \u7ee7\u627f\u81ea ",Object(o.b)("inlineCode",{parentName:"li"},"DbContext"),"\uff0c\u5177\u5907 ",Object(o.b)("inlineCode",{parentName:"li"},"DbContext")," \u6240\u6709\u529f\u80fd\u3002"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"AppDbContext")," \u652f\u6301\u591a\u6570\u636e\u5e93\u64cd\u4f5c\u6cdb\u578b\u7248\u672c\uff0c\u5982\uff1a",Object(o.b)("inlineCode",{parentName:"li"},"AppDbContext<TDbContext, TDbContextLocator>")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"AppDbContext")," \u81ea\u52a8\u914d\u7f6e\u5b9e\u4f53\u4fe1\u606f\uff0c\u65e0\u9700\u5728 ",Object(o.b)("inlineCode",{parentName:"li"},"OnModelCreating")," \u4e2d\u914d\u7f6e"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"AppDbContext")," \u652f\u6301\u5185\u7f6e\u591a\u79df\u6237\u652f\u6301"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"AppDbContext")," \u652f\u6301\u5168\u5c40\u6a21\u578b\u914d\u7f6e\u62e6\u622a\u5668"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"AppDbContext")," \u652f\u6301\u6570\u636e\u63d0\u4ea4\u66f4\u6539\u591a\u4e2a\u4e8b\u4ef6"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"AppDbContext")," \u63d0\u4f9b\u66f4\u52a0\u5f3a\u5927\u7684\u6a21\u578b\u64cd\u4f5c\u80fd\u529b\uff0c\u5982 ",Object(o.b)("inlineCode",{parentName:"li"},"Sql")," \u64cd\u4f5c\uff0c\u8bfb\u5199\u5206\u79bb\u7b49"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"AppDbContext")," \u80fd\u591f\u5f97\u5230 ",Object(o.b)("inlineCode",{parentName:"li"},"Furion")," \u6846\u67b6\u66f4\u591a\u7684\u529f\u80fd\u652f\u6301")),Object(o.b)("h2",{id:"914-\u5982\u4f55\u5b9a\u4e49\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},"9.1.4 \u5982\u4f55\u5b9a\u4e49\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),Object(o.b)("p",null,"\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\u4e86\uff0c\u63d0\u4f9b\u4e86\u4e24\u79cd ",Object(o.b)("inlineCode",{parentName:"p"},"AppDbContext")," \u5b9a\u4e49\u65b9\u5f0f\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"AppDbContext<TDbContext>")," \u64cd\u4f5c\u9ed8\u8ba4\u6570\u636e\u5e93"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"AppDbContext<TDbContext, TDbContextLocator>")," \u64cd\u4f5c N \u4e2a\u6570\u636e\u5e93")),Object(o.b)("p",null,"\u5176\u4e2d ",Object(o.b)("inlineCode",{parentName:"p"},"AppDbContext<TDbContext>")," \u9ed8\u8ba4\u7ee7\u627f\u81ea ",Object(o.b)("inlineCode",{parentName:"p"},"AppDbContext<TDbContext, TDbContextLocator>"),"\u3002"),Object(o.b)("p",null,"\u4e0b\u9762\u662f\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u521b\u5efa\u7684\u591a\u4e2a\u4f8b\u5b50\uff1a"),Object(o.b)("h3",{id:"9141-\u521b\u5efa\u9ed8\u8ba4\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},"9.1.4.1 \u521b\u5efa\u9ed8\u8ba4\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs",metastring:"{1,6,12}","{1,6,12}":!0},'using Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\n\nnamespace Furion.EntityFramework.Core\n{\n    [AppDbContext("\u8fde\u63a5\u5b57\u7b26\u4e32\u6216appsetting.json \u952e")]\n    public class FurionDbContext : AppDbContext<FurionDbContext>  // \u7ee7\u627f AppDbContext<> \u7c7b\n    {\n        /// <summary>\n        /// \u7ee7\u627f\u7236\u7c7b\u6784\u9020\u51fd\u6570\n        /// </summary>\n        /// <param name="options"></param>\n        public FurionDbContext(DbContextOptions<FurionDbContext> options) : base(options)\n        {\n        }\n    }\n}\n')),Object(o.b)("h3",{id:"9142-\u521b\u5efa\u5176\u4ed6\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},"9.1.4.2 \u521b\u5efa\u5176\u4ed6\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs",metastring:"{1,6,12}","{1,6,12}":!0},'using Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\n\nnamespace Furion.EntityFramework.Core\n{\n    [AppDbContext("\u8fde\u63a5\u5b57\u7b26\u4e32\u6216appsetting.json \u952e")]\n    public class FurOtherDbContext : AppDbContext<FurOtherDbContext, FurOtherDbContextLocator>  // \u7ee7\u627f AppDbContext<> \u7c7b\n    {\n        /// <summary>\n        /// \u7ee7\u627f\u7236\u7c7b\u6784\u9020\u51fd\u6570\n        /// </summary>\n        /// <param name="options"></param>\n        public FurOtherDbContext(DbContextOptions<FurOtherDbContext> options) : base(options)\n        {\n        }\n    }\n}\n')),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7279\u522b\u6ce8\u610f")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\u6240\u6709\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u90fd\u5e94\u8be5\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"Furion.EntityFramework.Core")," \u9879\u76ee\u4e2d\u521b\u5efa\u3002\u53e6\u5916\u5982\u679c\u7cfb\u7edf\u7528\u5230\u4e86\u591a\u4e2a\u6570\u636e\u5e93\uff0c\u90a3\u4e48\u4ece\u7b2c\u4e8c\u4e2a\u5f00\u59cb\u5fc5\u987b\u6307\u5b9a\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668\u3002\u5173\u4e8e ",Object(o.b)("inlineCode",{parentName:"p"},"TDbContextLocator")," \u5c06\u5728\u4e0b\u4e00\u7ae0\u8282 \u300a",Object(o.b)("a",{parentName:"p",href:"dbcontext-locator"},"9.2 \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668"),"\u300b\u9610\u8ff0\u3002"))),Object(o.b)("h2",{id:"915-\u914d\u7f6e\u8fde\u63a5\u5b57\u7b26\u4e32"},"9.1.5 \u914d\u7f6e\u8fde\u63a5\u5b57\u7b26\u4e32"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u591a\u79cd\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\u914d\u7f6e\u65b9\u5f0f\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5728\u6ce8\u518c\u6570\u636e\u5e93\u670d\u52a1\u65f6\u914d\u7f6e\uff1a",Object(o.b)("inlineCode",{parentName:"li"},'AddSqlServerPool<TDbContext>("\u8fde\u63a5\u5b57\u7b26\u4e32")')," \u65b9\u5f0f"),Object(o.b)("li",{parentName:"ul"},"\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"li"},'[AppDbContext("\u8fde\u63a5\u5b57\u7b26\u4e32/Key")]')," \u7279\u6027\u65b9\u5f0f\uff08\u53ea\u5728 ",Object(o.b)("inlineCode",{parentName:"li"},"AppDbContext \u5b9e\u73b0\u7c7b\u6709\u6548"),"\uff09",Object(o.b)("strong",{parentName:"li"},"\u63a8\u8350")),Object(o.b)("li",{parentName:"ul"},"\u901a\u8fc7\u91cd\u5199 ",Object(o.b)("inlineCode",{parentName:"li"},"OnConfiguring(DbContextOptionsBuilder optionsBuilder)")," \u914d\u7f6e")),Object(o.b)("h3",{id:"9151-\u5728\u6ce8\u518c\u6570\u636e\u5e93\u670d\u52a1\u65f6\u914d\u7f6e"},"9.1.5.1 \u5728\u6ce8\u518c\u6570\u636e\u5e93\u670d\u52a1\u65f6\u914d\u7f6e"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs",metastring:'{12-19} title="Furion.EntityFramework.Core\\Startup.cs"',"{12-19}":!0,title:'"Furion.EntityFramework.Core\\Startup.cs"'},'using Furion.DependencyInjection;\nusing Microsoft.Extensions.DependencyInjection;\n\nnamespace Furion.EntityFramework.Core\n{\n    [AppStartup(600)]\n    public sealed class FurEntityFrameworkCoreStartup : AppStartup\n    {\n        public void ConfigureServices(IServiceCollection services)\n        {\n            // \u914d\u7f6e\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\uff0c\u652f\u6301N\u4e2a\u6570\u636e\u5e93\n            services.AddDatabaseAccessor(options =>\n            {\n                // \u914d\u7f6e\u9ed8\u8ba4\u6570\u636e\u5e93\n                options.AddDbPool<FurionDbContext>(DbProvider.SqlServer, connectionString:"\u8fde\u63a5\u5b57\u7b26\u4e32");\n\n                // \u914d\u7f6e\u591a\u4e2a\u6570\u636e\u5e93\uff0c\u591a\u4e2a\u6570\u636e\u5e93\u5fc5\u987b\u6307\u5b9a\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668\n                options.AddDbPool<SqliteDbContext, SqliteDbContextLocaotr>(DbProvider.Sqlite, connectionString:"\u8fde\u63a5\u5b57\u7b26\u4e32");\n            });\n        }\n    }\n}\n')),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u65b0\u7248 MySQL \u6ce8\u610f")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},Object(o.b)("inlineCode",{parentName:"p"},"MySQL")," \u5728\u65b0\u7248\u672c\u5305\u4e2d\u6ce8\u518c\u6709\u6240\u4fee\u6539\uff0c\u6240\u4ee5\u6ce8\u518c\u65b9\u5f0f\u4e3a\uff1a"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre",className:"language-cs"},'services.AddDatabaseAccessor(options =>\n{\n    options.AddDbPool<FurionDbContext>($"{DbProvider.MySql}@8.0.22");\n});\n')))),Object(o.b)("h3",{id:"9152-appdbcontext-\u65b9\u5f0f\u914d\u7f6e"},"9.1.5.2 ",Object(o.b)("inlineCode",{parentName:"h3"},"[AppDbContext]")," \u65b9\u5f0f\u914d\u7f6e"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs",metastring:"{1,6}","{1,6}":!0},'using Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\n\nnamespace Furion.EntityFramework.Core\n{\n    [AppDbContext("DbConnectionString")]   // \u652f\u6301 `appsetting.json` \u540d\u6216 \u8fde\u63a5\u5b57\u7b26\u4e32\n    public class FurionDbContext : AppDbContext<FurionDbContext>\n    {\n        /// <summary>\n        /// \u7ee7\u627f\u7236\u7c7b\u6784\u9020\u51fd\u6570\n        /// </summary>\n        /// <param name="options"></param>\n        public FurionDbContext(DbContextOptions<FurionDbContext> options) : base(options)\n        {\n        }\n    }\n}\n')),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5c0f\u63d0\u793a")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},Object(o.b)("inlineCode",{parentName:"p"},"Furion")," \u63a8\u8350\u4f7f\u7528\u6b64\u65b9\u5f0f\u914d\u7f6e\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\u3002"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"[AppDbContext]"))," \u5185\u7f6e\u5c5e\u6027\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ConnectionString"),"\uff1a\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\uff0c\u6216\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u8def\u5f84\uff08\u652f\u6301\u81ea\u5b9a\u4e49\u914d\u7f6e\u67e5\u627e\uff09\uff0c\u6216 ",Object(o.b)("inlineCode",{parentName:"li"},"appsetting.json")," \u7684 ",Object(o.b)("inlineCode",{parentName:"li"},"ConnectionStrings")," \u914d\u7f6e\u5b57\u7b26\u4e32"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"TablePrefix"),"\uff1a\u5f53\u524d\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u8868\u7edf\u4e00\u524d\u7f00"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"TableSuffix"),"\uff1a\u5f53\u524d\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u8868\u7edf\u4e00\u540e\u7f00"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ProviderName"),"\uff1a\u914d\u7f6e\u6570\u636e\u5e93\u63d0\u4f9b\u5668\u7c7b\u578b\uff0c\u4f20\u5165 ",Object(o.b)("inlineCode",{parentName:"li"},"DbProvider.Xxx")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Mode"),"\uff1a\u914d\u7f6e\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u6a21\u5f0f\uff0c",Object(o.b)("inlineCode",{parentName:"li"},"DbContextMode")," \u679a\u4e3e\u7c7b\u578b\uff0c\u53d6\u503c\uff1a",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Cached"),"\uff1a\u7f13\u5b58\u6a21\u578b\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\uff0c\u9ed8\u8ba4\u503c"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Dynamic"),"\uff1a\u52a8\u6001\u6a21\u578b\u6570\u636e\u5e93\u4e0a\u4e0b\u6587")))),Object(o.b)("h3",{id:"9153-onconfiguring-\u65b9\u5f0f\u914d\u7f6e"},"9.1.5.3 ",Object(o.b)("inlineCode",{parentName:"h3"},"OnConfiguring")," \u65b9\u5f0f\u914d\u7f6e"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs",metastring:"{16-20}","{16-20}":!0},'using Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\n\nnamespace Furion.EntityFramework.Core\n{\n    public class FurionDbContext : AppDbContext<FurionDbContext>\n    {\n        /// <summary>\n        /// \u7ee7\u627f\u7236\u7c7b\u6784\u9020\u51fd\u6570\n        /// </summary>\n        /// <param name="options"></param>\n        public FurionDbContext(DbContextOptions<FurionDbContext> options) : base(options)\n        {\n        }\n\n        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)\n        {\n            base.OnConfiguring(optionsBuilder);\n\n            optionsBuilder.UseSqlServer("\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32");\n        }\n    }\n}\n')),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7279\u522b\u6ce8\u610f")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\u8fd9\u4e09\u79cd\u65b9\u5f0f\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528\uff0c\u4f46\u662f\u6709\u4f18\u5148\u7ea7\uff1a",Object(o.b)("inlineCode",{parentName:"p"},"[AppDbContext]")," -> ",Object(o.b)("inlineCode",{parentName:"p"},"\u5728\u6ce8\u518c\u6570\u636e\u5e93\u670d\u52a1\u65f6\u914d\u7f6e")," -> ",Object(o.b)("inlineCode",{parentName:"p"},"OnConfiguring"),"\uff08\u4f4e\u5230\u9ad8\uff09"),Object(o.b)("p",{parentName:"div"},"\u4e5f\u5c31\u662f ",Object(o.b)("inlineCode",{parentName:"p"},"OnConfiguring")," \u914d\u7f6e\u4f1a\u8986\u76d6 ",Object(o.b)("inlineCode",{parentName:"p"},"\u5728\u6ce8\u518c\u6570\u636e\u5e93\u670d\u52a1\u65f6\u914d\u7f6e")," \u914d\u7f6e\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"\u5728\u6ce8\u518c\u6570\u636e\u5e93\u670d\u52a1\u65f6\u914d\u7f6e")," \u914d\u7f6e\u4f1a\u8986\u76d6 ",Object(o.b)("inlineCode",{parentName:"p"},"[AppDbContext]")," \u914d\u7f6e\u6240\u914d\u7f6e\u7684\u8fde\u63a5\u5b57\u7b26\u4e32\u3002"))),Object(o.b)("h2",{id:"916-\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4e49\u4f4d\u7f6e"},"9.1.6 \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4e49\u4f4d\u7f6e"),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7279\u522b\u6ce8\u610f")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u9700\u5b9a\u4e49\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"Furion.EntityFramework.Core")," \u4e2d\uff0c\u4e14\u6bcf\u4e00\u4e2a\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u90fd\u5fc5\u987b\u62e5\u6709\u552f\u4e00\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"DbContextLocator")," \u5b9a\u4f4d\u5668"))),Object(o.b)("h2",{id:"917-\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u6ce8\u518c"},"9.1.7 \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u6ce8\u518c"),Object(o.b)("p",null,"\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u914d\u7f6e\u597d\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\u540e\uff0c\u9700\u8981\u6ce8\u518c\u8be5\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\uff0c\u5e76\u6307\u5b9a\u6570\u636e\u5e93\u7c7b\u578b\uff0c\u5982\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs",metastring:'{11-13} title="Furion\\framework\\Furion.EntityFramework.Core\\FurEntityFrameworkCoreStartup.cs"',"{11-13}":!0,title:'"Furion\\framework\\Furion.EntityFramework.Core\\FurEntityFrameworkCoreStartup.cs"'},"using Furion.DatabaseAccessor;\nusing Microsoft.Extensions.DependencyInjection;\n\nnamespace Furion.EntityFramework.Core\n{\n    [AppStartup(600)]\n    public sealed class FurEntityFrameworkCoreStartup : AppStartup\n    {\n        public void ConfigureServices(IServiceCollection services)\n        {\n            services.AddDatabaseAccessor(options =>\n            {\n                options.AddDbPool<FurionDbContext>(DbProvider.Sqlite);\n            });\n        }\n    }\n}\n")),Object(o.b)("p",null,"\u5982\u679c\u6709\u591a\u4e2a\u6570\u636e\u5e93\u64cd\u4f5c\uff0c",Object(o.b)("strong",{parentName:"p"},"\u90a3\u4e48\u4ece\u7b2c\u4e8c\u4e2a\u8d77\uff0c\u5c31\u9700\u8981\u7ed1\u5b9a\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668"),"\uff0c\u5982\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"options.AddDbPool<FurionDbContext>(DbProvider.Sqlite); // \u7b2c\u4e00\u4e2a\u6570\u636e\u5e93\n\noptions.AddDbPool<SecondDbContext, SecondDbContextDbContextLocator>(DbProvider.SqlServer);  // \u7b2c\u4e8c\u4e2a\u6570\u636e\u5e93\n\noptions.AddDbPool<ThirdDbContext, ThirdDbContextDbContextLocator>(DbProvider.SqlServer);  // \u7b2c\u4e09\u4e2a\u6570\u636e\u5e93\n")),Object(o.b)("h2",{id:"918-\u52a8\u6001\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5bf9\u8c61"},"9.1.8 \u52a8\u6001\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5bf9\u8c61"),Object(o.b)("p",null,"\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u662f\u5b9a\u4e49\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"Furion.EntityFramework.Core")," \u9879\u76ee\u5c42\uff0c\u5e76\u4e14\u8be5\u5c42\u4e0d\u88ab ",Object(o.b)("inlineCode",{parentName:"p"},"Furion.Application")," \u548c ",Object(o.b)("inlineCode",{parentName:"p"},"Furion.Core")," \u7b49\u5c42\u5f15\u7528\u3002"),Object(o.b)("p",null,"\u6240\u4ee5\u5c31\u4e0d\u80fd\u76f4\u63a5\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"Furion.Application")," \u9879\u76ee\u5c42\u76f4\u63a5\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"Furion.EntityFramework.Core")," \u5b9a\u4e49\u7684\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u3002"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Furion")," \u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u63d0\u4f9b\u4e86\u4e24\u79cd\u65b9\u5f0f\u5904\u7406\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"respository.Context")," \uff1a\u5f53\u524d\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5bf9\u8c61\uff0c\u8fd4\u56de\u662f ",Object(o.b)("inlineCode",{parentName:"li"},"DbContext")," \u62bd\u8c61\u7c7b\u578b"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"respository.DynamicContext"),"\uff1a\u5f53\u524d\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5bf9\u8c61\uff0c\u8fd4\u56de\u7684\u662f ",Object(o.b)("inlineCode",{parentName:"li"},"dynamic")," \u7c7b\u578b")),Object(o.b)("p",null,"\u5982\u679c\u4f60\u53ea\u662f\u60f3\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"DbContext")," \u7684\u529f\u80fd\uff0c\u76f4\u63a5\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"respository.Context")," \u5373\u53ef\uff0c\u5982\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"respository.Context.SaveChanges();\n")),Object(o.b)("p",null,"\u5982\u679c\u4f60\u60f3\u80fd\u591f\u83b7\u53d6\u5177\u4f53\u7684\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u7c7b\u578b\uff0c\u5982 ",Object(o.b)("inlineCode",{parentName:"p"},"MyDbContext"),"\uff0c\u90a3\u4e48\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"respository.DynamicContext")," \u5c31\u53ef\u4ee5\u83b7\u53d6\u5230\u5177\u4f53\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"MyDbContext")," \u7c7b\u578b\u3002\u5982\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"var persons = respository.DynamicContext.Persons.Find(1);\nvar users = respository.DynamicContext.Users;\n")),Object(o.b)("p",null,"\u8fd9\u6837\u5c31\u53ef\u4ee5\u76f4\u63a5\u64cd\u4f5c ",Object(o.b)("inlineCode",{parentName:"p"},"MyDbContext")," \u5b9a\u4e49\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u4e86\u3002"),Object(o.b)("h2",{id:"919-\u5728\u540e\u53f0\u4efb\u52a1\u4e2d\u4f7f\u7528"},"9.1.9 \u5728\u540e\u53f0\u4efb\u52a1\u4e2d\u4f7f\u7528"),Object(o.b)("p",null,"\u7531\u4e8e ",Object(o.b)("inlineCode",{parentName:"p"},"DbContext")," \u9ed8\u8ba4\u6ce8\u518c\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"Scoped")," \u751f\u5b58\u5468\u671f\uff0c\u6240\u4ee5\u5728\u540e\u53f0\u4efb\u52a1\u4e2d\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"DbContext")," \u9700\u901a\u8fc7\u9759\u6001\u521b\u5efa\u65b9\u5f0f\uff0c\u5982\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"using (var dbContext = Db.GetNewDbContext())\n{\n}\n\n// \u6216\nusing(var dbContext2 = Db.GetNewDbContext<TDbContextLocator>())\n{\n}\n")),Object(o.b)("h2",{id:"9110-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.1.10 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",Object(o.b)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))),Object(o.b)("hr",null),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e86\u89e3\u66f4\u591a")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\u60f3\u4e86\u89e3\u66f4\u591a ",Object(o.b)("inlineCode",{parentName:"p"},"\u6570\u636e\u5e93\u4e0a\u4e0b\u6587")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",Object(o.b)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/ef/core/miscellaneous/configuring-dbcontext"},"EF Core - \u914d\u7f6e DbContext")," \u7ae0\u8282\u3002"))))}l.isMDXComponent=!0},205:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return O}));var a=t(0),i=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),l=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},d=function(e){var n=l(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},s=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),s=a,O=d["".concat(r,".").concat(s)]||d[s]||m[s]||o;return t?i.a.createElement(O,b(b({ref:n},p),{},{components:t})):i.a.createElement(O,b({ref:n},p))}));function O(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=s;var b={};for(var c in n)hasOwnProperty.call(n,c)&&(b[c]=n[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,r[1]=b;for(var p=2;p<o;p++)r[p]=t[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);