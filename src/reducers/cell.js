const initialState = {
    bodyWidth: document.body.clientWidth,
    cell: [
        {
            index: 0,
            visualCell: require('../img/cellS.png'),
            event: {
                type: null
            }
        },
        {
            index: 1,
            visualCell: require('../img/cellK1.png'),
            event: {
                type: 'knowledge',
                title: '「緣日雙六 - HANABI -」的意思',
                visual: require('../img/e1.png'),
                description: '緣日，指的是與神佛有緣之日，例如神佛的生日、舉行祭祀之日。每逢緣日，神社或寺廟內通常會舉行祭典；' +
                             '雙六，在日語中是指一種擲骰子前進的桌遊，先到達終點者勝利，由於玩法與大富翁大致相同，一般可稱做日式大富翁；' +
                             'HANABI，也是來自日語，指煙火，煙火是日本夏日風情的象徵。因此，緣日雙六 - HANABI -，就如其名是一款以夏日祭典為主題的日式大富翁遊戲。',
                move: 0,
                direction: null
            }
        },
        {
            index: 2,
            visualCell: require('../img/cellNull.png'),
            event: {
                type: null
            }
        },
        {
            index: 3,
            visualCell: require('../img/cellB0.png'),
            event: {
                type: 'back',
                title: '忘東忘西',
                visual: require('../img/e3.png'),
                description: '買完東西後把錢包忘在攤位上，急忙跑回去找老闆拿，後退 1 格。',
                move: 1,
                direction: false
            }
        },
        {
            index: 4,
            visualCell: require('../img/cellF0.png'),
            event: {
                type: 'foward',
                title: '獲得名車',
                visual: require('../img/e4.png'),
                description: '轉轉樂抽到頭獎，獲得名車一台，前進 3 格。',
                move: 3,
                direction: true
            }
        },
        {
            index: 5,
            visualCell: require('../img/cellNull.png'),
            event: {
                type: null
            }
        },
        {
            index: 6,
            visualCell: require('../img/cellB1.png'),
            event: {
                type: 'back',
                title: '遭遇惡犬',
                visual: require('../img/e6.png'),
                description: '與路邊惡犬對到眼，被牠追趕，後退 1 格',
                move: 1,
                direction: false
            }
        },
        {
            index: 7,
            visualCell: require('../img/cellNull.png'),
            event: {
                type: null
            }
        },
        {
            index: 8,
            visualCell: require('../img/cellK4.png'),
            event: {
                type: 'knowledge',
                title: '為什麼日本的夏天是煙火的季節？',
                visual: require('../img/e8.png'),
                description: '西元 1733 年，有「中興之祖」之稱的江戶幕府第八代將軍「德川吉宗」為了驅除惡靈、安撫因飢餓或疾病而死去的亡靈，' + 
                             '在位於東京的隅田川舉行了「水神祭」並在祭典中施放了煙火（據說就是東京隅田川花火大會的前身），' + 
                             '夏日夜晚氣候涼爽適合民眾外出觀賞煙火，煙火製造商也為了競爭誰家的煙火好，積極參與。此後在夏天舉行煙火大會祭典就演變成一個習俗了。',
                move: 0,
                direction: null
            }
        },
        {
            index: 9,
            visualCell: require('../img/cellJ0.png'),
            event: {
                type: 'jail',
                title: '漁夫纏身',
                visual: require('../img/e9.png'),
                description: '遭到數名漁夫包圍，一時之間無法脫身，休息 1 次。',
                move: 0,
                direction: null
            }
        },
        {
            index: 10,
            visualCell: require('../img/cellF1.png'),
            event: {
                type: 'foward',
                title: '體驗 U-Bike',
                visual: require('../img/e10.png'),
                description: '平常鮮少運動的你心血來潮的跑去騎 U-Bike 兜風，前進 1 格',
                move: 1,
                direction: true
            }
        },
        {
            index: 11,
            visualCell: require('../img/cellNull.png'),
            event: {
                type: null
            }
        },
        {
            index: 12,
            visualCell: require('../img/cellJ1.png'),
            event: {
                type: 'jail',
                title: '痴漢疑惑',
                visual: require('../img/e12.png'),
                description: '好心幫助迷路的小妹妹找家人，路人卻誤會你是誘拐犯，被帶去警局喝咖啡，休息 1 次。',
                move: 0,
                direction: null
            }
        },
        {
            index: 13,
            visualCell: require('../img/cellNull.png'),
            event: {
                type: null
            }
        },
        {
            index: 14,
            visualCell: require('../img/cellB2.png'),
            event: {
                type: 'back',
                title: '黑色流星',
                visual: require('../img/e14.png'),
                description: '開開心心的吃著路邊攤美食，突然一隻會飛的「黑色流星」襲來，驚嚇不已，倒退 1 格',
                move: 1,
                direction: false
            }
        },
        {
            index: 15,
            visualCell: require('../img/cellNull.png'),
            event: {
                type: null
            }
        },
        {
            index: 16,
            visualCell: require('../img/cellB3.png'),
            event: {
                type: 'back',
                title: '唐傘小僧',
                visual: require('../img/e16.png'),
                description: '無意中撞見唐傘小僧，雖然祂只是混入人群中享受祭典氣氛，你還是嚇得魂飛魄散，倒退 3 格。',
                move: 3,
                direction: false
            }
        },
        {
            index: 17,
            visualCell: require('../img/cellF2.png'),
            event: {
                type: 'foward',
                title: '打折誘惑',
                visual: require('../img/e17.png'),
                description: '聽說前方不遠處有名牌精品包包跳樓大拍賣，但走了好久都沒看見，前進 2 格。',
                move: 2,
                direction: true
            }
        },
        {
            index: 18,
            visualCell: require('../img/cellK3.png'),
            event: {
                type: 'knowledge',
                title: '玉屋（Tamaya）、鍵屋（Kagiya）',
                visual: require('../img/e18.png'),
                description: '在日本的花火大會上，經常會聽到「玉屋（Tamaya）」、「鍵屋（Kagiya）」的吆喝聲，' + 
                             '玉屋、鍵屋是江戶時代最著名的兩大煙火製造商商號。' + 
                             '舉行花火大會的時候，玉屋、鍵屋兩家的煙火會交替燃放競賽，' + 
                             '人們為了讚賞自己認為最美麗的煙火，就會高喊煙火商的商號助威。這種加油號子就一直流傳到了現在。',
                move: 0,
                direction: null
            }
        },
        {
            index: 19,
            visualCell: require('../img/cellNull.png'),
            event: {
                type: null
            }
        },
        {
            index: 20,
            visualCell: require('../img/cellJ2.png'),
            event: {
                type: 'jail',
                title: '占卜婆婆',
                visual: require('../img/e20.png'),
                description: '行經一個桌上擺放水晶球的攤位，攤主婆婆將你叫住，擅自替你進行了一連串的占卜，休息一次。',
                move: 0,
                direction: null
            }
        },
        {
            index: 21,
            visualCell: require('../img/cellK0.png'),
            event: {
                type: 'knowledge',
                title: '線香花火',
                visual: require('../img/e21.png'),
                description: '在細紙捲的前端放上少量火藥的小型玩具煙火。' + 
                             '點燃後，火種會漸漸地膨脹就像牡丹花蕾一般，接著爆發出松葉或菊花形狀的淡淡煙火，' +
                             '最後爆發的間隔漸漸地變短，火光一束一束的掉落、消失。' + 
                             '根據風的強度與拿法的改變，煙火維持的時間也會不同。那細緻的風情可說是日本傳統美的代表。',
                move: 0,
                direction: null
            }
        },
        {
            index: 22,
            visualCell: require('../img/cellF3.png'),
            event: {
                type: 'foward',
                title: '絕好景色',
                visual: require('../img/e22.png'),
                description: '朋友說他知道一處欣賞煙火的好景點，雖然雙腳已開始痠痛，但你們還是不辭辛勞的走了過去，前進 1 格。',
                move: 1,
                direction: true
            }
        },
        {
            index: 23,
            visualCell: require('../img/cellNull.png'),
            event: {
                type: null
            }
        },
        {
            index: 24,
            visualCell: require('../img/cellJ3.png'),
            event: {
                type: 'jail',
                title: '巧遇男神',
                visual: require('../img/e24.png'),
                description: '你的偶像男神喬裝成一般民眾外出逛街被你發現，你立刻上前攀談，聊得太開心休息 1 次。',
                move: 0,
                direction: null
            }
        },
        {
            index: 25,
            visualCell: require('../img/cellF4.png'),
            event: {
                type: 'foward',
                title: '美食療癒',
                visual: require('../img/e25.png'),
                description: '吃了烤玉米、刨冰、烤魷魚、蘋果糖 … 等等各式祭典美食，心靈感到療癒滿足，前進 2 格。',
                move: 2,
                direction: true
            }
        },
        {
            index: 26,
            visualCell: require('../img/cellK2.png'),
            event: {
                type: 'knowledge',
                title: '打上花火',
                visual: require('../img/e26.png'),
                description: '意即「高空煙火」。煙火師將火藥設置在鐵筒內然後朝著高空發射，被打上高空的火藥就會像花朵一樣綻放成美麗的煙火，' + 
                             '「土星」、「銀冠菊」、「錦冠菊」、「柳」、「蜂」都是打上花火的一種。',
                move: 0,
                direction: null
            }
        },
        {
            index: 27,
            visualCell: require('../img/cellNull.png'),
            event: {
                type: null
            }
        },
        {
            index: 28,
            visualCell: require('../img/cellB4.png'),
            event: {
                type: 'back',
                title: '離奇噴飛',
                visual: require('../img/e28.png'),
                description: '不慎踩到香蕉皮，跌進一旁的手推車，沒想到路面傾斜，在手推車裡的你隨著斜坡高速滑行，路人紛紛閃避，所幸最後撞到一塊廢棄床墊後停下，無人傷亡但後退 5 格。',
                move: 5,
                direction: false
            }
        },
        {
            index: 29,
            visualCell: require('../img/cellG.png'),
            event: {
                type: 'goal',
                title: '抵達終點～!',
                visual: require('../img/e29.png'),
                description: '恭喜～!!!',
                move: 0,
                direction: null
            }
        }
    ]
}
  
const cellReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_BODY_WIDTH':
            const newBodyWidth = action.payload.newBodyWidth;   
            return {...state, bodyWidth: newBodyWidth};

        default:
            return state;
    }
};

export default cellReducer;