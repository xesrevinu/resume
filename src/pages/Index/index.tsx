import { FunctionComponent } from "react"

const Block: FunctionComponent<{ title: string }> = ({ title, children }) => {
  return (
    <div className="flex justify-between pb-3 border-b border-gray-200">
      <div className="flex w-1/5 px-3 py-5 text-red-500">{title}</div>
      <div className="flex-1 w-1/5 px-4 py-4">{children}</div>
    </div>
  )
}

const ExperienceProject: FunctionComponent<{ name: string; desc: string; points: string[] }> = ({
  name,
  desc,
  points,
  children,
}) => {
  return (
    <div className="mb-4">
      <div className="py-3 text-xl">
        <span className="relative mr-2 text-3xl leading-3 text-red-700 top-2">*</span>
        {name}
      </div>
      <div>{desc}</div>
      <ul>
        {points.map((x, index) => {
          return (
            <li key={index} className="py-1 ml-5 text-gray-600 list-disc">
              {x}
            </li>
          )
        })}
      </ul>
      <div>{children}</div>
    </div>
  )
}

const Experience: FunctionComponent<{ name: string; date: string }> = ({ name, date, children }) => {
  return (
    <div className="mb-5">
      <div className="flex items-center justify-between">
        <span className="py-3 text-2xl">{name}</span>
        <span>{date}</span>
      </div>
      <div>{children}</div>
    </div>
  )
}

interface ExpProject {
  name: string
  desc: string
  points: string[]
}

interface Exp {
  name: string
  date: string
  projects: ExpProject[]
}

const exps: Exp[] = [
  {
    name: "贵州双⻰数联科技有限公司",
    date: "2017-09 ~ 2021-07",
    projects: [
      {
        name: "某数据中台",
        desc: "该项目为企业内部 Sass 数据中台项目，包含有图引擎，数据可视化BI，数据仓库, 数据管理，元数据管理，资源监控等数十个模块的大型企业中台项目。",
        points: [
          "负责前端项目整体框架，Code Review，前端技术开发等问题",
          "使用 webpack 中 的 Module Federation 功能研发了一套适合本项目的微前端框架",
        ],
      },
      {
        name: "贵州健康码",
        desc: "疫情形势严峻，我们公司和云上贵州，腾讯合作开发了一系列系统，其中就包含贵州健康码，疫情防控平台等。",
        points: ["在极短的时间内和团队一起完成健康码机场版的开发等一系列产品"],
      },
      {
        name: "国家粮⻝局监管平台",
        desc: "国家粮⻝局监管平台是拥有全国粮⻝储备监控，政策形式推演，企业信息智能监管的⼀个内部决策平台， 使⽤ React 栈进⾏开发，系统为⼀个复杂的单⻚应⽤。",
        points: [
          "可视化⽅⾯使⽤ ECharts 来满足数据展示需求，地图展示使用超图/天地图 GIS 服务。",
          "项⽬数据来源繁多，结构差异⼤，交互丰富，要求前端做较多数据处理工作，我们使⽤ Ramda.js，Transducer.js 来进⾏数据处理，转换，检验⼯作，项目成功通过验收。",
        ],
      },
      {
        name: "信⽤(某省)系统",
        desc: "该系统是⼀个集成多个⼦系统的信⽤信息管理平台，在项⽬中主要负责解决开发过程中团队遇到的技术问题，配合产品解决设计和业务上的问题。",
        points: [
          "技术栈为 React.js + Antd Design，将前端架构优化使其最低⽀持 IE9，并保证各个系统稳定性和前台系统浏览器兼容性",
        ],
      },
    ],
  },
  {
    name: "贵州时间线信息技术有限公司",
    date: "2016-09 ~ 2017-08",
    projects: [
      {
        name: "志愿百科",
        desc: "志愿百科项⽬是在招⽣录取数据和性格诊断基础上做的⼀款⾼考志愿填报辅助平台，可以帮助学⽣精准定位⾃身情况，掌握院校和专业详细信息，了解今年填报趋势并评估⾃⼰的录取概率。",
        points: [
          "项⽬使⽤ React 技术栈进⾏开发，接⼊微信 SDK ，⽀持使⽤微信登录和微信⽀付功能",
          "基础框架搭建，业务逻辑，⻚⾯代码编写，制定数据接⼝，上线后的性能优化，交互优化",
        ],
      },
    ],
  },
]

const IndexPage = () => {
  return (
    <div className="px-2 py-1">
      <div className="flex items-end justify-between pb-3 border-b-2 border-gray-200">
        <div className="pb-3 text-4xl font-bold ">周可的 Web 开发简历</div>
        <div className="px-2 py-1">
          <div className="tracking-wide text-right">周可 / 男 / 1997</div>
          <div className="tracking-wide text-right">
            Email:
            <a href="mailto:uek0819@gmail.com" className="ml-2 hover:text-red-700">
              uek0819@gmail.com
            </a>
          </div>
          <div className="tracking-wide text-right">
            Blog:
            <a
              href="https://piggy-kee.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 hover:text-red-700"
            >
              piggy-kee.github.io
            </a>
          </div>
        </div>
      </div>
      <Block title="自我介绍">
        喜欢研究新的⼯具，关注Web发展趋势。热爱规范，简洁有⼒的代码。同时也是⼀个充满热情、善于发现问题并解决问题的Web开发⼯程师最近在写Typescript和做⼀些基础⼯作，沉淀项⽬⾥的最佳规范和维护内部脚⼿架，希望找到能让我发挥这些特⻓的⼯作😄
      </Block>
      <Block title="教育">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start justify-between">
            <div className="text-sm text-gray-800">贵州轻工职业技术学院</div> <div>专科 / 软件技术专业</div>
          </div>
          <div className="flex flex-col items-center justify-between">
            <div className="text-sm text-gray-800">贵州/贵阳</div>2014-2016
          </div>
        </div>
      </Block>
      <Block title="工作经历">
        {exps.map((item, index) => (
          <Experience key={index} name={item.name} date={item.date}>
            {item.projects.map((project) => (
              <ExperienceProject key={project.name} name={project.name} desc={project.desc} points={project.points} />
            ))}
          </Experience>
        ))}
      </Block>
      <Block title="技能">
        <div>
          <p className="mb-1">以下为我在⼯作中使⽤过的技能</p>
          <div className="py-1">
            <div>- Web：React.js / Vue.js / Node.js / 小程序相关开发</div>
            <div>- Web相关：Ramda.js / ECharts / Webpack / Mobx / Redux</div>
            <div>- 其他技术：React Native / Electron </div>
            <div>- 数据库相关：MongoDB / MySQL</div>
            <div>- 版本管理、文档和自动化部署工具：Git / Docker / Jenkins</div>
            <div>- 测试工具：Jest / Chai</div>
          </div>
          <p className="mt-1 mb-1">一些感兴趣内容</p>
          <div className="py-1">
            <div>- Lisp / Haskell / Scala </div>
            <div>- Express / Graphql / Rx.js / Emacs </div>
          </div>
        </div>
        <div />
      </Block>
      <Block title="开源项目">
        <div className="cursor-pointer hover:text-red-700">
          <a href="https://github.com/effect-anything/effect" target="_blank" rel="noopener noreferrer">
            [Effect]
            <span className="ml-3"> 前端项目脚手架</span>
          </a>
        </div>
        <div className="cursor-pointer hover:text-red-700">
          <a href="https://github.com/thegreatjavascript/FakeScreenshot" target="_blank" rel="noopener noreferrer">
            [FakeScreenshot]
            <span className="ml-3">使用假截图对抗 “假截图”</span>
          </a>
        </div>
        <div className="cursor-pointer hover:text-red-700">
          <a href="https://github.com/xiaokekeT/react-headrooms" target="_blank" rel="noopener noreferrer">
            [React-headrooms]
            <span className="ml-3">React 导航栏组件</span>
          </a>
        </div>
        <div className="cursor-pointer hover:text-red-700">
          <a href="https://github.com/xiaokekeT/next-workflow" target="_blank" rel="noopener noreferrer">
            [Next-workflow]
            <span className="ml-3">基于 Babel 的 ES6 开发环境的整合</span>
          </a>
        </div>
      </Block>
      <Block title="致谢">感谢您阅读我的简历，期待有机会能和您共事</Block>
    </div>
  )
}

export default IndexPage
