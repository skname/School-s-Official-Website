// 底部版权 
export const foot_copyright = {
    copy_1 : [
        { id: 0, content: '版权所有©太原学院'},
        { id: 1, content: '地址：中国·山西·太原市唐槐产业园区汾东大街7号'}
    ],
    copy_2 : [
        { id: 2, content: 'ICP备案： （晋）ICP备07001536', src: 'https://beian.miit.gov.cn/#/Integrated/index'},
        { id: 3, content: '晋公网安备 14019202000232号', src: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=14019202000232'}
    ]
}

// 快速通道
export const foot_lead = [
    { id: 0, content: '财务预决算公开', src: 'http://info.tyu.edu.cn/channels/55.html'},
    { id: 1, content: '信息公开', src: 'http://info.tyu.edu.cn/channels/55.html'},
    { id: 2, content: '教务在线', src: 'http://jw.tyu.edu.cn/'},
    { id: 3, content: '缴费系统查询入口', src: 'http://jfpt.tyu.edu.cn/#/login'},
    { id: 4, content: '薪资查询系统入口', src: 'http://jfpt.tyu.edu.cn/gzcx'}
]

// 一级导航头
export const nav_List1 = [
    { id: 0, nav_name: '怀旧版', to:''},
    { id: 1, nav_name: 'QA系统', to:''},
    { id: 2, nav_name: '信息门户', to:''},
    { id: 3, nav_name: '领导信箱', to:''},
]
// 二级导航头
export const nav_List2 = [
    { id: 0, nav_name: '学院概况', to:'/about/introduction/0', child:[{ id: 0,name: '学院简介', to:'/about/introduction/0'},{ id: 1,name: '学院标识', to:'/about/symbol/1'},{ id: 2,name: '魅力校园', to:'/about/attractive_campus/2'},{ id: 3,name: '现任领导', to:'/about/leader/3'},{ id: 4,name: '章程规划', to:'/about/programme/4'},{ id: 5,name: '领导致辞', to:'/about/leader_oration/5'}]},
    { id: 1, nav_name: '新闻中心', to:'/about', child:[{ id: 0,name: '通知公告', to:''},{ id: 1,name: '学院要闻', to:''},{ id: 2,name: '系部部门咨询', to:''},{ id: 3,name: '学术动态', to:''}]},
    { id: 2, nav_name: '管理机构', to:'/about', child:[{ id: 0,name: '党政部门', to:''},{ id: 1,name: '教辅科研', to:''},{ id: 2,name: '群团组织', to:''}]},
    { id: 3, nav_name: '系部设置', to:'/about', child:[{ id: 0,name: '教学部门', to:''}]},
    { id: 4, nav_name: '教育科研', to:'/about', child:[{ id: 0,name: '科学技术处', to:''},{ id: 1,name: '学报编辑部', to:''}]},
    { id: 5, nav_name: '学生工作', to:'/about', child:[{ id: 0,name: '学工部', to:''},{ id: 1,name: '学工部', to:''}]},
    { id: 6, nav_name: '招生就业', to:'/about', child:[{ id: 0,name: '招生', to:''},{ id: 1,name: '就业', to:''}]},
    { id: 7, nav_name: '合格评估', to:'/about', child:[{ id: 0,name: '待续...', to:''}]},
    { id: 8, nav_name: '学术期刊', to:'/about', child:[{ id: 0,name: '待续...', to:''}]},
]