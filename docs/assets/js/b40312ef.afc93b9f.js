(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(205)),b={id:"sqlsugar",title:"10.1. SqlSugar \u96c6\u6210",sidebar_label:"10.1. SqlSugar \u96c6\u6210"},c={unversionedId:"sqlsugar",id:"sqlsugar",isDocsHomePage:!1,title:"10.1. SqlSugar \u96c6\u6210",description:"10.1.1 \u5173\u4e8e SqlSugar",source:"@site/docs/sqlsugar.mdx",slug:"/sqlsugar",permalink:"/docs/sqlsugar",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/sqlsugar.mdx",version:"current",lastUpdatedBy:"Monk",lastUpdatedAt:1614238444,formattedLastUpdatedAt:"2/25/2021",sidebar_label:"10.1. SqlSugar \u96c6\u6210",sidebar:"docs",previous:{title:"9.28 \u5206\u8868\u5206\u5e93",permalink:"/docs/split-db"},next:{title:"10.2. Dapper \u96c6\u6210",permalink:"/docs/dapper"}},l=[{value:"10.1.1 \u5173\u4e8e SqlSugar",id:"1011-\u5173\u4e8e-sqlsugar",children:[]},{value:"10.1.2 \u5982\u4f55\u96c6\u6210",id:"1012-\u5982\u4f55\u96c6\u6210",children:[{value:"10.1.2.1 \u6ce8\u518c <code>SqlSugar</code> \u670d\u52a1",id:"10121-\u6ce8\u518c-sqlsugar-\u670d\u52a1",children:[]}]},{value:"10.1.3 \u57fa\u672c\u4f7f\u7528",id:"1013-\u57fa\u672c\u4f7f\u7528",children:[]},{value:"10.1.4 \u6570\u636e\u5e93\u64cd\u4f5c\u793a\u4f8b",id:"1014-\u6570\u636e\u5e93\u64cd\u4f5c\u793a\u4f8b",children:[]},{value:"10.1.5 SqlSugarClient \u64cd\u4f5c\u793a\u4f8b",id:"1015-sqlsugarclient-\u64cd\u4f5c\u793a\u4f8b",children:[{value:"10.1.5.1 \u57fa\u7840\u67e5\u8be2",id:"10151-\u57fa\u7840\u67e5\u8be2",children:[]},{value:"10.1.5.2 \u8054\u8868\u67e5\u8be2",id:"10152-\u8054\u8868\u67e5\u8be2",children:[]},{value:"10.1.5.3 \u5206\u9875\u67e5\u8be2",id:"10153-\u5206\u9875\u67e5\u8be2",children:[]},{value:"10.1.5.4 \u63d2\u5165",id:"10154-\u63d2\u5165",children:[]},{value:"10.1.5.5 \u66f4\u65b0",id:"10155-\u66f4\u65b0",children:[]},{value:"10.1.5.6 \u5220\u9664",id:"10156-\u5220\u9664",children:[]}]},{value:"10.1.6 Sql \u67e5\u8be2",id:"1016-sql-\u67e5\u8be2",children:[]},{value:"10.1.7 \u6253\u5370 <code>sql</code> \u5230 <code>Swagger</code>",id:"1017-\u6253\u5370-sql-\u5230-swagger",children:[]},{value:"10.1.8 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"1018-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],o={toc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"1011-\u5173\u4e8e-sqlsugar"},"10.1.1 \u5173\u4e8e SqlSugar"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"SqlSugar")," \u662f .NET/C# \u5e73\u53f0\u975e\u5e38\u4f18\u79c0\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"ORM")," \u6846\u67b6\uff0c\u76ee\u524d ",Object(i.b)("inlineCode",{parentName:"p"},"Nuget")," \u603b\u4e0b\u8f7d\u7a81\u7834 700K\uff0cGithub \u5173\u6ce8\u91cf\u4e5f\u9ad8\u8fbe 3.2K\uff0c\u662f\u76ee\u524d\u5f53\u4e4b\u65e0\u6127\u7684\u56fd\u4ea7\u4f18\u79c0 ORM \u6846\u67b6\u4e4b\u4e00\u3002"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"SqlSugar")," \u5b98\u65b9\u5730\u5740\uff1a",Object(i.b)("a",{parentName:"p",href:"http://www.donet5.com/"},"http://www.donet5.com/")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"SqlSugar")," \u4e0e EF \u4f18\u52bf\uff1a \u6027\u80fd\u6bd4 EF \u66f4\u5feb\u3001\u8bed\u6cd5\u4e0a\u624b\u66f4\u5bb9\u6613"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"SqlSugar")," \u4e0e Dapper \u4f18\u52bf\uff1a SqlSugar \u529f\u80fd\u66f4\u52a0\u4e30\u5bcc\uff0c\u6027\u80fd\u4e1d\u6beb\u4e0d\u900a\u8272\u4e8e Dapper\uff0c\u5e76\u4e14\u6279\u91cf\u64cd\u4f5c\u6027\u80fd\u66f4\u597d"),Object(i.b)("h2",{id:"1012-\u5982\u4f55\u96c6\u6210"},"10.1.2 \u5982\u4f55\u96c6\u6210"),Object(i.b)("p",null,"\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u5df2\u7ecf\u63a8\u51fa ",Object(i.b)("inlineCode",{parentName:"p"},"SqlSugar")," \u62d3\u5c55\u5305 ",Object(i.b)("a",{parentName:"p",href:"https://www.nuget.org/packages/Furion.Extras.DatabaseAccessor.SqlSugar"},"Furion.Extras.DatabaseAccessor.SqlSugar"),"\u3002"),Object(i.b)("h3",{id:"10121-\u6ce8\u518c-sqlsugar-\u670d\u52a1"},"10.1.2.1 \u6ce8\u518c ",Object(i.b)("inlineCode",{parentName:"h3"},"SqlSugar")," \u670d\u52a1"),Object(i.b)("p",null,"\u4f7f\u7528\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"Startup.cs")," \u4e2d\u6dfb\u52a0 ",Object(i.b)("inlineCode",{parentName:"p"},"services.AddSqlSugar(config)")," \u5373\u53ef\u3002\u5982\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'services.AddSqlSugar(new ConnectionConfig\n{\n    ConnectionString = "Server=.xxxxx",//\u8fde\u63a5\u7b26\u5b57\u4e32\n    DbType = DbType.SqlServer,\n    IsAutoCloseConnection = true,\n    InitKeyType = InitKeyType.Attribute//\u4ece\u7279\u6027\u8bfb\u53d6\u4e3b\u952e\u81ea\u589e\u4fe1\u606f\n});\n')),Object(i.b)("p",null,"\u540c\u65f6\u4e5f\u53ef\u4ee5\u6dfb\u52a0\u66f4\u591a\u914d\u7f6e\uff0c\u5982\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'services.AddSqlSugar(new ConnectionConfig\n{\n    ConnectionString = "Server=.xxxxx",//\u8fde\u63a5\u7b26\u5b57\u4e32\n    DbType = DbType.SqlServer,\n    IsAutoCloseConnection = true,\n    InitKeyType = InitKeyType.Attribute//\u4ece\u7279\u6027\u8bfb\u53d6\u4e3b\u952e\u81ea\u589e\u4fe1\u606f\n},\ndb =>\n{\n    //\u5904\u7406\u65e5\u5fd7\u4e8b\u52a1\n    db.Aop.OnLogExecuting = (sql, pars) =>\n    {\n        Console.WriteLine(sql);\n        Console.WriteLine(string.Join(",", pars?.Select(it => it.ParameterName + ":" + it.Value)));\n        Console.WriteLine();\n    };\n});\n')),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u5b89\u88c5\u62d3\u5c55\u5305\u4f4d\u7f6e")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u63a8\u8350\u5c06\u62d3\u5c55\u5305 ",Object(i.b)("inlineCode",{parentName:"p"},"Furion.Extras.DatabaseAccessor.SqlSugar")," \u5b89\u88c5\u5230 ",Object(i.b)("inlineCode",{parentName:"p"},"Furion.Core")," \u5c42\u4e2d\u3002"))),Object(i.b)("h2",{id:"1013-\u57fa\u672c\u4f7f\u7528"},"10.1.3 \u57fa\u672c\u4f7f\u7528"),Object(i.b)("p",null,"\u5728\u4f7f\u7528\u4e4b\u524d\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6784\u9020\u51fd\u6570\u6ce8\u5165 ",Object(i.b)("inlineCode",{parentName:"p"},"ISqlSugarRepository<TEntity>")," \u63a5\u53e3\uff0c\u5982\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs",metastring:"{6}","{6}":!0},"private readonly ISqlSugarRepository<Person> repository; // \u4ed3\u50a8\u5bf9\u8c61\uff1a\u5c01\u88c5\u7b80\u5355\u7684CRUD\nprivate readonly SqlSugarClient db; // \u6838\u5fc3\u5bf9\u8c61\uff1a\u62e5\u6709\u5b8c\u6574\u7684SqlSugar\u5168\u90e8\u529f\u80fd\npublic PersonService(ISqlSugarRepository<Person> sqlSugarRepository)\n{\n    repository = sqlSugarRepository;\n    db = (SqlSugarClient)repository.Context;    // \u63a8\u8350\u64cd\u4f5c\n}\n")),Object(i.b)("h2",{id:"1014-\u6570\u636e\u5e93\u64cd\u4f5c\u793a\u4f8b"},"10.1.4 \u6570\u636e\u5e93\u64cd\u4f5c\u793a\u4f8b"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'// ================== SqlSugarClient ================\n\n//\u67e5\u8be2\u529f\u80fd\nvar data1 =db.Queryable<Student>().First(it=>it.Id==1); //db.GetById(1);\n\nvar data2 = db.Queryable<Student>().ToList();// db.GetList();\n\nvar data3 = db.GetList(it => it.Id == 1);\n\nvar data4 = db.GetSingle(it => it.Id == 1);\n\nvar p = new PageModel() { PageIndex = 1, PageSize = 2 };\nvar data5 = db.GetPageList(it => it.Name == "xx", p);//p.PageCount\nvar data6 = db.GetPageList(it => it.Name == "xx", p, it => it.Name, OrderByType.Asc);\n\nList<IConditionalModel> conModels = new List<IConditionalModel>();\nconModels.Add(new ConditionalModel(){FieldName="id",ConditionalType=ConditionalType.Equal,FieldValue="1"});//id=1\nvar data7 = db.GetPageList(conModels, p, it => it.Name, OrderByType.Asc);\n\n// ================== \u7b80\u5355\u4ed3\u50a8 ================\n\n//\u63d2\u5165\nrepository.Insert(insertObj);\nrepository.InsertRange(InsertObjs);\nvar id = repository.InsertReturnIdentity(insertObj);\nrepository.AsInsertable(insertObj).ExecuteCommand();\n\n//\u5220\u9664\nrepository.Delete(insertObj);\nrepository.DeleteById(1);\nrepository.DeleteByIds(new object [] { 1, 2 }); //\u6570\u7ec4\u5e26\u662f ids\u65b9\u6cd5 \uff0c\u5c01\u88c5\u4f20 object [] \u7c7b\u578b\nrepository.Delete(it => it.Id == 1);\nrepository.AsDeleteable().Where(it => it.Id == 1).ExecuteCommand();\n\n//\u66f4\u65b0\nrepository.Update(insertObj);\nrepository.UpdateRange(InsertObjs);\nrepository.Update(it => new Order() { Name = "a", }, it => it.Id == 1);\nrepository.AsUpdateable(insertObj).UpdateColumns(it=>new { it.Name }).ExecuteCommand();\n\n//\u5f02\u6b65\u65b9\u6cd5\u7528\u6cd5\nrepository.Insert(insertObj);//\u540c\u6b65\nrepository.InsertAsync(insertObj);//\u5f02\u6b65\n\n//\u5207\u6362\u4ed3\u50a8\nvar orderRespository=db.GetSimpleClient<Order>();\norderRespository.Insert(Order);\n')),Object(i.b)("h2",{id:"1015-sqlsugarclient-\u64cd\u4f5c\u793a\u4f8b"},"10.1.5 SqlSugarClient \u64cd\u4f5c\u793a\u4f8b"),Object(i.b)("h3",{id:"10151-\u57fa\u7840\u67e5\u8be2"},"10.1.5.1 \u57fa\u7840\u67e5\u8be2"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'//\u67e5\u8be2\u6240\u6709\nvar getAll = db.Queryable<Student>().ToList();\n//\u67e5\u8be2\u524d10\nvar top10= db.Queryable<Student>().Take(10).ToList();\n//\u67e5\u8be2\u5355\u6761\nvar getFirst = db.Queryable<Student>().First(it=>it.Id==1);\n//with nolock\nvar getAllNoLock = db.Queryable<Student>().With(SqlWith.NoLock).ToList();\n//\u6839\u636e\u4e3b\u952e\u67e5\u8be2\nvar getByPrimaryKey = db.Queryable<Student>().InSingle(2);\n//\u67e5\u8be2\u603b\u548c\nvar sum = db.Queryable<Student>().Sum(it=>it.Id);\n//\u662f\u5426\u5b58\u5728\nvar isAny = db.Queryable<Student>().Where(it=>it.Id==-1).Any();\n//\u6a21\u7cca\u67e5\nvar list2 = db.Queryable<Order>().Where(it =>it.Name.Contains("jack")).ToList();\n')),Object(i.b)("h3",{id:"10152-\u8054\u8868\u67e5\u8be2"},"10.1.5.2 \u8054\u8868\u67e5\u8be2"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"var list = db.Queryable<Student, School>((st, sc) => new JoinQueryInfos(\n        JoinType.Left,st.SchoolId==sc.Id))\n      .Select((st,sc)=>new{Id=st.Id,Name=st.Name,SchoolName=sc.Name}).ToList();\n\n\u751f\u6210\u7684Sql\u5982\u4e0b:\nSELECT  [st].[ID] AS [id] ,\n          [st].[Name] AS [name] ,\n          [sc].[Name] AS [schoolName]  FROM [STudent] st\n          Left JOIN School sc ON ( [st].[SchoolId] =[sc].[Id])\n")),Object(i.b)("h3",{id:"10153-\u5206\u9875\u67e5\u8be2"},"10.1.5.3 \u5206\u9875\u67e5\u8be2"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"}," int pageIndex = 1;\n int pageSize = 20;\n int totalCount=0;\n var page = db.Queryable<Student>().ToPageList(pageIndex, pageSize, ref totalCount);\n")),Object(i.b)("p",null,"\u66f4\u591a\u67e5\u8be2\u7528\u6cd5 \uff1a ",Object(i.b)("a",{parentName:"p",href:"http://www.donet5.com/Home/Doc?typeId=1185"},"http://www.donet5.com/Home/Doc?typeId=1185")),Object(i.b)("h3",{id:"10154-\u63d2\u5165"},"10.1.5.4 \u63d2\u5165"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'//\u53ef\u4ee5\u662f \u7c7b \u6216\u8005 List<\u7c7b>\ndb.Insertable(insertObj).ExecuteCommand();\n\n//\u63d2\u5165\u8fd4\u56de\u81ea\u589e\u5217\ndb.Insertable(insertObj).ExecuteReturnIdentity();\n\n//\u53ef\u4ee5\u662f Dictionary \u6216\u8005 List<Dictionary >\nvar dc= new Dictionary<string, object>();\n            dt.Add("name", "1");\n            dt.Add("CreateTime", null);\ndb.Insertable(dc).AS("student").ExecuteCommand();\n\n//DataTable\u63d2\u5165\nDictionary<string,object> dc= db.Utilities.DataTableToDictionary(dataTable);//\u8f6c\u6210\u5b57\u5178\u5c31\u53ef\u4ee5\u6309\u4e0a\u9762\u7684\u5b57\u5178\u66f4\u65b0\u4e86\ndb.Insertable(dc).AS("student").ExecuteReturnIdentity();\n\n//\u5b9e\u4f53\u53ef\u4ee5\u914d\u7f6e\u4e3b\u952e\u548c\u81ea\u589e\u5217\npublic class Student\n{\n    [SugarColumn(IsPrimaryKey = true, IsIdentity = true)]\n    public int Id { get; set; }\n    public int? SchoolId { get; set; }\n    public string Name { get; set; }\n}\n')),Object(i.b)("p",null,"\u66f4\u591a\u63d2\u5165\u7528\u6cd5\uff1a ",Object(i.b)("a",{parentName:"p",href:"http://www.donet5.com/Home/Doc?typeId=1193"},"http://www.donet5.com/Home/Doc?typeId=1193")),Object(i.b)("h3",{id:"10155-\u66f4\u65b0"},"10.1.5.5 \u66f4\u65b0"),Object(i.b)("p",null,"\u5b9e\u4f53\u914d\u7f6e\u53c2\u8003\u63d2\u5165\uff0c\u53ea\u9700\u8981\u914d\u7f6e\u4e3b\u952e\u5373\u53ef"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'//\u6839\u636e\u4e3b\u952e\u66f4\u65b0\u5355\u6761 \u53c2\u6570 Class\nvar result= db.Updateable(updateObj).ExecuteCommand();\n//\u4e0d\u66f4\u65b0 Name \u548cTestId\nvar result=db.Updateable(updateObj).IgnoreColumns(it => new { it.CreateTime,it.TestId }).ExecuteCommand()\n//\u53ea\u66f4\u65b0 Name \u548c CreateTime\nvar result=db.Updateable(updateObj).UpdateColumns(it => new { it.Name,it.CreateTime }).ExecuteCommand();\n//\u6839\u636e\u8868\u8fbe\u5f0f\u66f4\u65b0\nvar result71 = db.Updateable<Order>()\n              .SetColumns(it => it.Name == "a")\n              .SetColumnsIF(p!=null ,it => it.CreateTime == p.Value)//\u5f53p\u4e0d\u7b49\u4e8enull\u66f4\u65b0createtime\u5217\n            .Where(it => it.Id == 11).ExecuteCommand();\n')),Object(i.b)("p",null,"\u66f4\u591a\u66f4\u65b0\u7528\u6cd5\uff1a ",Object(i.b)("a",{parentName:"p",href:"http://www.donet5.com/Home/Doc?typeId=1191"},"http://www.donet5.com/Home/Doc?typeId=1191")),Object(i.b)("h3",{id:"10156-\u5220\u9664"},"10.1.5.6 \u5220\u9664"),Object(i.b)("p",null,"\u5b9e\u4f53\u914d\u7f6e\u53c2\u8003\u63d2\u5165\uff0c\u53ea\u9700\u8981\u914d\u7f6e\u4e3b\u952e\u5373\u53ef"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"//\u6839\u636e\u5b9e\u4f53\u5220\u9664\ndb.Deleteable<Student>().Where(new Student() { Id = 1 }).ExecuteCommand();\n//\u6839\u636e\u4e3b\u952e\u5220\u9664\ndb.Deleteable<Student>().In(1).ExecuteCommand();\n//\u6839\u636e\u8868\u8fbe\u5f0f\u5220\u9664\ndb.Deleteable<Student>().Where(it => it.Id == 1).ExecuteCommand();\n")),Object(i.b)("p",null,"\u66f4\u591a\u5220\u9664\u7528\u6cd5: ",Object(i.b)("a",{parentName:"p",href:"http://www.donet5.com/Home/Doc?typeId=1195"},"http://www.donet5.com/Home/Doc?typeId=1195")),Object(i.b)("h2",{id:"1016-sql-\u67e5\u8be2"},"10.1.6 Sql \u67e5\u8be2"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'//sql\u5206\u9875\nvar list = db.SqlQueryable<Student>("select * from student").ToPageList(1, 2,ref total);\n\n//\u539f\u751fSql\u7528\u6cd5\nvar dt=db.Ado.GetDataTable("select * from table where id=@id and name=@name",new List<SugarParameter>(){\n  new SugarParameter("@id",1),\n  new SugarParameter("@name",2)\n});\n//\u53c2\u65702\nvar dt=db.Ado.GetDataTable("select * from table where id=@id and name=@name",new{id=1,name=2});\n\n//\u5b58\u50a8\u8fc7\u7a0b\u7528\u6cd5\nvar nameP= new SugarParameter("@name", "\u5f20\u4e09");\nvar ageP= new SugarParameter("@age", null, true);//\u8bbe\u7f6e\u4e3aoutput\nvar dt = db.Ado.UseStoredProcedure().GetDataTable("sp_school",nameP,ageP);\n\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"center"},"\u65b9\u6cd5\u540d"),Object(i.b)("th",{parentName:"tr",align:"center"},"\u63cf\u8ff0"),Object(i.b)("th",{parentName:"tr",align:"center"},"\u8fd4\u56de\u503c"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"SqlQuery< T >"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u67e5\u8be2\u6240\u6709\u8fd4\u56de\u5b9e\u4f53\u96c6\u5408"),Object(i.b)("td",{parentName:"tr",align:"center"},"List")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"SqlQuery<T,T2>"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u53ef\u4ee5\u8fd4\u56de 2 \u4e2a\u7ed3\u679c\u96c6"),Object(i.b)("td",{parentName:"tr",align:"center"},"Tuple<List, List>")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"SqlQuerySingle"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u67e5\u8be2\u7b2c\u4e00\u6761\u8bb0\u5f55"),Object(i.b)("td",{parentName:"tr",align:"center"},"T")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"GetDataTable"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u67e5\u8be2\u6240\u6709"),Object(i.b)("td",{parentName:"tr",align:"center"},"DataTable")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"GetDataReader"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u8bfb\u53d6 DR \u9700\u8981\u624b\u52a8\u91ca\u653e DR"),Object(i.b)("td",{parentName:"tr",align:"center"},"DataReader")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"GetDataSetAll"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u83b7\u53d6\u591a\u4e2a\u7ed3\u679c\u96c6"),Object(i.b)("td",{parentName:"tr",align:"center"},"DataSet")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"ExecuteCommand"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u8fd4\u56de\u53d7\u5f71\u54cd\u884c\u6570\uff0c\u4e00\u822c\u7528\u4e8e\u589e\u5220\u6539"),Object(i.b)("td",{parentName:"tr",align:"center"},"int")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"GetScalar"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u83b7\u53d6\u9996\u884c\u9996\u5217"),Object(i.b)("td",{parentName:"tr",align:"center"},"object")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"GetString"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u83b7\u53d6\u9996\u884c\u9996\u5217"),Object(i.b)("td",{parentName:"tr",align:"center"},"string")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"GetInt"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u83b7\u53d6\u9996\u884c\u9996\u5217"),Object(i.b)("td",{parentName:"tr",align:"center"},"int")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"GetLong"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u83b7\u53d6\u9996\u884c\u9996\u5217"),Object(i.b)("td",{parentName:"tr",align:"center"},"long")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"GetDouble"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u83b7\u53d6\u9996\u884c\u9996\u5217"),Object(i.b)("td",{parentName:"tr",align:"center"},"Double")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"GetDecimal"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u83b7\u53d6\u9996\u884c\u9996\u5217"),Object(i.b)("td",{parentName:"tr",align:"center"},"Decimal")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"GetDateTime"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u83b7\u53d6\u9996\u884c\u9996\u5217"),Object(i.b)("td",{parentName:"tr",align:"center"},"DateTime")))),Object(i.b)("p",null,"\u60f3\u4e86\u89e3\u66f4\u591a ",Object(i.b)("inlineCode",{parentName:"p"},"SqlSugar")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",Object(i.b)("a",{parentName:"p",href:"http://donet5.com/"},"SqlSugar \u5b98\u7f51"),"\u3002"),Object(i.b)("h2",{id:"1017-\u6253\u5370-sql-\u5230-swagger"},"10.1.7 \u6253\u5370 ",Object(i.b)("inlineCode",{parentName:"h2"},"sql")," \u5230 ",Object(i.b)("inlineCode",{parentName:"h2"},"Swagger")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'services.AddSqlSugar(new ConnectionConfig\n{\n    ConnectionString = "Server=.xxxxx",//\u8fde\u63a5\u7b26\u5b57\u4e32\n    DbType = DbType.SqlServer,\n    IsAutoCloseConnection = true,\n    InitKeyType = InitKeyType.Attribute//\u4ece\u7279\u6027\u8bfb\u53d6\u4e3b\u952e\u81ea\u589e\u4fe1\u606f\n},\ndb =>\n{\n    db.Aop.OnLogExecuting = (sql, pars) =>\n    {\n        App.PrintToMiniProfiler("SqlSugar", "Info", sql + "\\r\\n" +string.Join(",", pars?.Select(it => it.ParameterName + ":" + it.Value)));\n    };\n});\n')),Object(i.b)("h2",{id:"1018-\u53cd\u9988\u4e0e\u5efa\u8bae"},"10.1.8 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",Object(i.b)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}d.isMDXComponent=!0},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,b=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,m=p["".concat(b,".").concat(u)]||p[u]||s[u]||i;return n?r.a.createElement(m,c(c({ref:t},o),{},{components:n})):r.a.createElement(m,c({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,b=new Array(i);b[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,b[1]=c;for(var o=2;o<i;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);