const initialState = {
    cell: [
        {
            index: 0,
            event: {
                type: null
            }
        },
        {
            index: 1,
            event: {
                type: null
            }
        },
        {
            index: 2,
            event: {
                type: null
            }
        },
        {
            index: 3,
            event: {
                type: null
            }
        },
        {
            index: 4,
            event: {
                type: 'knowledge',
                title: '「緣日雙六 - HANABI -」的意思',
                visual: 'src',
                description: '緣日，指的是與神佛有緣之日，例如神佛的生日、舉行祭祀之日。每逢緣日，神社或寺廟內通常會舉行祭典；雙六，在日語中是指一種擲骰子前進的桌遊，先到達終點者勝利，由於玩法與大富翁大致相同，一般可稱做日式大富翁；HANABI，也是來自日語，指煙火，煙火是日本夏日風情的象徵。因此，緣日雙六 - HANABI -，就如其名是一款以夏日祭典為主題的日式大富翁遊戲。',
                move: 0,
                direction: null
            }
        },
        {
            index: 5,
            event: {
                type: null
            }
        },
        {
            index: 6,
            event: {
                type: 'foward',
                title: '獲得跑車',
                visual: 'src',
                description: '轉轉樂抽到頭獎，獲得跑車一台，前進 3 格',
                move: 3,
                direction: true
            }
        },
        {
            index: 7,
            event: {
                type: null
            }
        },
        {
            index: 8,
            event: {
                type: 'back',
                title: '遭遇惡犬',
                visual: 'src',
                description: '與路邊惡犬對到眼，被牠追趕，後退 1 格',
                move: 1,
                direction: false
            }
        },
        {
            index: 9,
            event: {
                type: null
            }
        },
        {
            index: 10,
            event: {
                type: 'knowledge',
                title: '為什麼日本的夏天是煙火的季節？',
                visual: 'src',
                description: '西元 1733 年，有「中興之祖」之稱的江戶幕府第八代將軍「德川吉宗」為了驅除惡靈、安撫因飢餓或疾病而死去的亡靈，在位於東京的隅田川舉行了「水神祭」並在祭典中施放了煙火（據說就是東京隅田川花火大會的前身），夏日夜晚氣候涼爽適合民眾外出觀賞煙火，煙火製造商為了競爭誰家的煙火好，也很積極參與。此後在夏天舉行煙火大會祭典就演變成一個習俗了。',
                move: 0,
                direction: null
            }
        },
        {
            index: 11,
            event: {
                type: null
            },
        },
        {
            index: 12,
            event: {
                type: null
            }
        },
        {
            index: 13,
            event: {
                type: 'jail',
                title: '漁夫纏身',
                visual: 'src',
                description: '遭到數名漁夫包圍，一時之間無法脫身，休息 1 次。',
                move: 0,
                direction: null
            }
        },
        {
            index: 14,
            event: {
                type: null
            }
        },
        {
            index: 15,
            event: {
                type: null
            }
        },
        {
            index: 16,
            event: {
                type: 'foward',
                title: '體驗 U-Bike',
                visual: 'src',
                description: '平常鮮少運動的你心血來潮的跑去騎 U-Bike 兜風，前進 1 格',
                move: 1,
                direction: true
            }
        },
        {
            index: 17,
            event: {
                type: null
            }
        },
        {
            index: 18,
            event: {
                type: 'knowledge',
                title: '',
                visual: 'src',
                description: '',
                move: 0,
                direction: null
            }        
        },
        {
            index: 19,
            event: {
                type: null
            }
        },
        {
            index: 20,
            event: {
                type: 'back',
                title: '黑色流星',
                visual: 'src',
                description: '開開心心的在路邊攤吃炒麵，突然一隻會飛的「黑色流星」襲來，驚嚇不已，倒退 1 格',
                move: 1,
                direction: false
            }
        },
        {
            index: 21,
            event: {
                type: null
            }
        },
        {
            index: 22,
            event: {
                type: null
            }
        },
        {
            index: 23,
            event: {
                type: null
            }
        },
        {
            index: 24,
            event: {
                type: null
            }
        },
        {
            index: 25,
            event: {
                type: 'back',
                title: '唐傘小僧',
                visual: 'src',
                description: '無意中撞見唐傘小僧，雖然祂只是混入人群中享受祭典氣氛，你還是嚇得魂飛魄散，倒退 3 格。',
                move: 3,
                direction: false
            }
        },
        {
            index: 26,
            event: {
                type: null
            }
        },
        {
            index: 27,
            event: {
                type: null
            }
        },
        {
            index: 28,
            event: {
                type: 'back',
                title: '糊里糊塗',
                visual: 'src',
                description: '和朋友聊天太開心，捷運搭錯方向，還好及早發現，後退 1 格',
                move: 1,
                direction: false
            }
        },
        {
            index: 29,
            event: {
                type: null
            }
        },
        {
            index: 30,
            event: {
                type: 'foward',
                title: '打折誘惑',
                visual: 'src',
                description: '聽說前方不遠處有名牌精品包包跳樓大拍賣，但走了好久都沒看見，前進 2 格。',
                move: 2,
                direction: true
            }
        },
        {
            index: 31,
            event: {
                type: null
            }
        },
        {
            index: 32,
            event: {
                type: null
            }
        },
        {
            index: 33,
            event: {
                type: null
            }
        },
        {
            index: 34,
            event: {
                type: 'jail',
                title: '癡漢疑惑',
                visual: 'src',
                description: '好心幫助迷路的小妹妹找家人，路人卻誤會你是誘拐犯，被帶去警局喝咖啡，休息 1 次。',
                move: 0,
                direction: null
            }
        },
        {
            index: 35,
            event: {
                type: null
            }
        },
        {
            index: 36,
            event: {
                type: 'goal',
                title: '抵達終點',
                visual: 'src',
                description: '恭喜你贏ㄌ～!',
                move: 0,
                direction: null
            }
        },
        // {
        //     index: 37
        // },
        // {
        //     index: 38
        // },
        // { index: 39 },{ index: 40 },{ index: 41 },
        // { index: 42 },{ index: 43 },{ index: 44 },
        // { index: 45 },{ index: 46 },{ index: 47 },
        // { index: 48 },{ index: 49 },{ index: 50 },
        // { index: 51 },{ index: 52 },{ index: 53 },
        // { index: 54 },{ index: 55 },{ index: 56 },
        // { index: 57 },{ index: 58 },{ index: 59 },
        // { index: 60 }
    ]
}
  
const cellReducer = (state = initialState, action) => {
    switch (action.type) {
        // case 'ADD_CELL':
        //     新しく追加するTODO
        //     const cell = action.payload.cell;
        //     stateを複製して追加
        //     const newState = Object.assign({}, state);
        //     newState.cell.push(cell);
        //     return newState;
        default:
            return state;
    }
};

export default cellReducer;