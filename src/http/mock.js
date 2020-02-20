var Random = Mock.Random
var index = Mock.mock('http://api.com/index', {
  "swiper|4":[
    {
      'imgPath':Random.image('800x400', '#04a1f7', '#FFF', 'png', ''),
      'id':'@id'
    }
  ],

  'section1':{
    'list|4':[{
      'imgPath':Random.image('400x400', '#b7ddf2', '#333', 'png', ''),
      'id':'@id'
    }],
    'banner':Random.image('400x100', '#ffcc33', '#FFF', 'png', 's1-banner')
  },
  'section2|10':{
    'list|10':[{
        'title':'@first',
        'price|99-1000':100,
        'intro': Random.paragraph(),
        'imgPath':Random.image('200x200', '#dec4e0', '#333', 'png', ''),
        'id':'@id'
      }],
      'banner':Random.image('400x100', '#b97cc9', '#FFF', 'png', 's2-banner')
  },


  'section3':{
      'list|4':[{
        'title':'@last',
        'start':Random.time('HH:mm'),
        // 在end数组里随机取一个
        'imgPath':Random.image('320x200', '#f5f2a5', '#333', 'png', ''),
        'id':'@id',
        'price|99-1000':100,
        'end|1':['2017/09/23 02:00:00','2017/09/23 11:00:00','2017/09/23 14:00:00','2017/09/23 13:00:00'],
      }],

      'banner':Random.image('400x100', '#30f673', '#FFF', 'png', 's3-banner'),

  },


  'section4':{
    'list|4':[{
      'title':'@first',
      'imgPath':Random.image('400x400', '#e2f630', '#333', 'png',''),
      'price|99-1000':100,
      'intro': Random.paragraph(),
      'id':'@id'
    }],
    'banner':Random.image('400x100', '#ffcc33','#FFF', 'png', 's4-banner')
  }

});

var detail = Mock.mock('http://api.com/detail', {
  "view|1": [{
    'title|1': ['海洋之星 臻越系列 加强配方成犬粮 小颗粒 1.5kg','加拿大原装进口 爱肯拿Acana 无谷深海鱼配方全犬粮 11.4kg','加拿大原装进口 百加世GO! 健康无限系列 七种肉全犬粮 6磅','新西兰原装进口爱娣iti 牛肉狗粮主食肉干 1kg','德国ProBiotic LIVE 益生菌 鸡肉大米成犬粮 3kg','加拿大原装进口 爱肯拿Acana 无谷鸭肉配方全犬粮 6kg',' 比利时原装进口 欧帝亿IMPERIAL PAW 小型犬成犬鸡肉配方粮 3kg','加拿大原装进口 爱肯拿Acana 小型犬成犬配方粮(鸡肉+鱼) 2kg','耐吉斯SOLUTION 加拿大版 火鸡+苹果配方 大型犬幼犬粮 11.8kg'],
    // 'intro':  Random.cparagraph(2),
    'id':'@id',
    'price|99-1000':100,
    'chose|3':[{
      'col|+0':['规格'],
      'size|+1':['12kg','6kg','3kg']
    }]
  }],

  'swiper|2':[{
    // 'imgSrc':Random.image('../assets/01.png'),
    'imgSrc':Random.image('400x400', '#ffcc33','#FFF', 'png', ''),
    'id':'@id'
  }],

  'contentImgSrc|8':[{
    'imgSrc':Random.image('600x600', '#5a9e6e','#FFF', 'png', '')
  }]
});
 
var category = Mock.mock('http://api.com/category', {
    'aside|14':[{
      'title|1':['为您推荐','E宠国际','狗狗主粮','狗狗零食','狗狗玩具','狗狗清洁','狗狗保健','狗狗护理','狗狗生活','狗狗牵引','出游洗澡','狗狗服饰','狗狗美容','狗狗窝垫'],
      'list|21':[{
        'title':'@last',
        // 'imgPath':Random.image('2000x2000','#5169b4','#FFF','png',''),
        'imgPath|1':['https://img.epetht.com/nowater/2017-09/21/20/1a512b46eb283c302c194ad73d59d5b8.jpg','https://img2.epetbar.com/nowater/2017-09/01/15/2e603a140e903ece0d8e9a86fcb97464.jpg?x-oss-process=style/fill&$1=300&$2=300','https://img2.epetbar.com/nowater/2018-08/14/21/87aa3e41aa86317af010c6b1af29064f.jpg?x-oss-process=style/fill&$1=300&$2=300','https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&$1=300&$2=300','https://img2.epetbar.com/nowater/2016-07/21/14/0f972761c08a37c8baff88fa9302053d.jpg?x-oss-process=style/fill&$1=300&$2=300','https://img2.epetbar.com/nowater/2016-08/20/14/8095e54e9414a06705acb7471eac7629.jpg?x-oss-process=style/fill&$1=300&$2=300',
      'https://img2.epetbar.com/nowater/2017-10/11/16/ba4a24c920d1c9c0a5ee43555f8b900b.jpg?x-oss-process=style/fill&$1=300&$2=300','https://img2.epetbar.com/nowater/2017-10/11/16/601461874134987b3d4b6c345f398dd4.jpg?x-oss-process=style/fill&$1=300&$2=300','https://img2.epetbar.com/nowater/2017-05/26/10/2eeb97d6268f555de24ec370fd0de2ad.jpg?x-oss-process=style/fill&$1=300&$2=300','https://img2.epetbar.com/nowater/2018-03/16/13/86ddf4ab08773578109e1ef1b892d8ef.jpg?x-oss-process=style/fill&$1=300&$2=300','https://img2.epetbar.com/nowater/2017-09/01/16/4e3455a75bc8d75be71816e51b917103.jpg?x-oss-process=style/fill&$1=300&$2=300','https://img2.epetbar.com/nowater/2017-09/01/17/4bf6a8f261337e34e38d4d8b43d149f1.jpg?x-oss-process=style/fill&$1=300&$2=300'
      ]


      }]
    }]
});
 
export {index,detail,category}
