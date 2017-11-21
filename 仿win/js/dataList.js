/*
* 数据
*   每一条数据都有一个唯一编号：id
*   每一条数据又有一个pid，指向该数据父级的id
* */
var dataList = [
	{
        id: 1,
        pid: 0,
        type: 'img/icon/bloggers.png',
        name: '博客管理'
    },
    {
        id: 2,
        pid: 0, // 指向父级的id
        type: 'img/icon/nr.png',
        name: '内容管理'
    },
    {
        id: 3,
        pid: 0,
        type: 'img/icon/ljx.png',
        name: '回收站'
    },
    {
        id: 4,
        pid: 2,
        type: 'img/content/fileexplorer.png',
        name: '布甲'
    },
    {
        id: 5,
        pid: 2, // 指向父级的id
        type: 'img/content/fileexplorer.png',
        name: '皮甲'
    },
    {
        id: 6,
        pid: 2,
        type: 'img/content/fileexplorer.png',
        name: '锁甲'
    },
    {
        id: 7,
        pid: 2,
        type: 'img/content/fileexplorer.png',
        name: '板甲'
    },
    {
        id: 8,
        pid: 4,
        type: 'img/content/fileexplorer.png',
        name: '血色检察官'
    },
    {
        id: 9,
        pid: 4,
        type: 'img/content/fileexplorer.png',
        name: '马里奥COS'
    },
    {
        id: 10,
        pid: 4,
        type: 'img/content/fileexplorer.png',
        name: '真·刺客信条幻化COS'
    },
    {
        id: 11,
        pid: 4,
        type: 'img/content/fileexplorer.png',
        name: '拳皇玛丽COS'
    },
    {
        id: 12,
        pid: 5,
        type: 'img/content/fileexplorer.png',
        name: '范克里夫COS'
    },
    {
        id: 13,
        pid: 5,
        type: 'img/content/fileexplorer.png',
        name: '伏虎侠套装'
    },
    {
        id: 14,
        pid: 5,
        type: 'img/content/fileexplorer.png',
        name: '血腥玛丽COS'
    },
    {
        id: 15,
        pid: 5,
        type: 'img/content/fileexplorer.png',
        name: '人类女梵尼沙COS'
    },
    {
        id: 16,
        pid: 6,
        type: 'img/content/fileexplorer.png',
        name: '暴风城卫兵锁甲'
    },
    {
        id: 17,
        pid: 6,
        type: 'img/content/fileexplorer.png',
        name: '格衫锁甲幻化'
    },
    {
        id: 18,
        pid: 6,
        type: 'img/content/fileexplorer.png',
        name: '透明蓝色幻化'
    },
    {
        id: 19,
        pid: 6,
        type: 'img/content/fileexplorer.png',
        name: '奥蕾莉亚COS兵'
    },
    {
        id: 20,
        pid: 7,
        type: 'img/content/fileexplorer.png',
        name: '无头骑士COS'
    },
    {
        id: 21,
        pid: 7,
        type: 'img/content/fileexplorer.png',
        name: '中国武侠风'
    },
    {
        id: 22,
        pid: 7,
        type: 'img/content/fileexplorer.png',
        name: '银色讨伐军骑士'
    },
    {
        id: 23,
        pid: 7,
        type: 'img/content/fileexplorer.png',
        name: '电影纪念装备搭配'
    }
];

