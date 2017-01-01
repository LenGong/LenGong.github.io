const logo:string = '/public/images/logo.png'

export interface Btitle {
    logo:{title:string, patch:string, imgTitle?:string};
    captions:[{title:string, patch:string, imgFont?:string}];
    footer:{email:string,telephone:string, address:string, copyright:string}
}

export const BTITLE: Btitle = {
    logo: { title: 'Len\'s Blog', patch:'main', imgTitle: logo },
    captions: [
        { title: '首页', patch:'main', imgFont: 'glyphicon glyphicon-home' },
        { title: '文档',  patch:'docment', imgFont: 'glyphicon glyphicon-book' },
        { title: '博记',   patch:'note', imgFont: 'glyphicon glyphicon-pencil' },
        { title: '游戏',  patch:'game', imgFont: 'glyphicon glyphicon-king' },
        { title: '图片',  patch:'picture', imgFont: 'glyphicon glyphicon-picture' },
        { title: '个人历',  patch:'resume', imgFont: 'glyphicon glyphicon-user' }
    ],
    footer:{
      email:"scmsgl@163.com",
      telephone: "13440XXXXXX",
      address:"中国四川眉山",
      copyright:"版权所有,Len.license, ISC."
    }
}
