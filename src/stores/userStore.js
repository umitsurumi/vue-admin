import { ref } from "vue";
import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

export const useUserStore = defineStore("userStore", () => {
  const origin = ref([
    {
      id: uuidv4(),
      name: "史硕肖",
      gender: "女",
      age: 48,
      province: "湖北省",
      address:
        "湖北省潜江市潜江市潜阳西路与老街路交叉口东140米鑫园商务中心13号楼1单元501号",
      telephone: 14776944598,
      email: "wohbjlmjtc@yahoo.com.cn",
    },
    {
      id: uuidv4(),
      name: "贾州桥",
      gender: "男",
      age: 23,
      province: "湖北省",
      address:
        "湖北省黄冈市蕲春县蕲州镇金昌大厦(百佳仓储蕲州购物广场东)3号楼2单元303号",
      telephone: 16567462520,
      email: "lgevodktfvei@yeah.net",
    },
    {
      id: uuidv4(),
      name: "孟弋垒",
      gender: "女",
      age: 38,
      province: "贵州省",
      address:
        "贵州省黔南布依族苗族自治州瓮安县乌江南路与解放路交叉口东北120米靖沣壹号(建设中)4号楼1单元503号",
      telephone: 18689239584,
      email: "wgbrojrr@21cn.com",
    },
    {
      id: uuidv4(),
      name: "房梦桔",
      gender: "男",
      age: 56,
      province: "河北省",
      address: "河北省石家庄市桥西区振岗路130号龙岗东区4号楼3单元403号",
      telephone: 18460664446,
      email: "odtgtrsuldpimqw@etang.com",
    },
    {
      id: uuidv4(),
      name: "戴满淮",
      gender: "男",
      age: 33,
      province: "重庆市",
      address:
        "重庆市重庆市九龙坡区蟠龙大道60号(金科绿韵康城旁)光华·风和日丽5号楼2单元103号",
      telephone: 18923868589,
      email: "ojfpguapbfatlj@21cn.com",
    },
    {
      id: uuidv4(),
      name: "幸丞战",
      gender: "女",
      age: 34,
      province: "江苏省",
      address:
        "江苏省连云港市东海县钢铁路与交通巷交叉口东60米东海县汽车站家属楼8号楼2单元404号",
      telephone: 18276582412,
      email: "lqwakvpwlghclh@netease.com",
    },
    {
      id: uuidv4(),
      name: "张菲昕",
      gender: "女",
      age: 42,
      province: "湖南省",
      address:
        "湖南省株洲市石峰区新明路与田心大道交叉口北100米邮电部小区6号楼1单元101号",
      telephone: 14507029519,
      email: "jshfusmivmhdj@citiz.com",
    },
    {
      id: uuidv4(),
      name: "包娆华",
      gender: "女",
      age: 56,
      province: "黑龙江省",
      address: "黑龙江省双鸭山市宝清县通达街320附近嘉晟家园2号楼3单元501号",
      telephone: 18310967670,
      email: "otbv@hotmail.com",
    },
    {
      id: uuidv4(),
      name: "穆谨凡",
      gender: "男",
      age: 46,
      province: "辽宁省",
      address: "辽宁省锦州市古塔区东街附近南一里11号楼2单元304号",
      telephone: 18844532578,
      email: "swp@citiz.com",
    },
    {
      id: uuidv4(),
      name: "卫玲连",
      gender: "男",
      age: 38,
      province: "内蒙古自治区",
      address:
        "内蒙古自治区包头市青山区万青路街道万青路旅游大厦15号楼2单元505号",
      telephone: 13091421113,
      email: "eocuolnikqf@email.com.cn",
    },
    {
      id: uuidv4(),
      name: "秦声发",
      gender: "男",
      age: 23,
      province: "安徽省",
      address:
        "安徽省合肥市蜀山区东流路999号新城国际(齐云山路)12号楼1单元105号",
      telephone: 13209232700,
      email: "swntolpo@21cn.com",
    },
    {
      id: uuidv4(),
      name: "缪攀麒",
      gender: "女",
      age: 40,
      province: "安徽省",
      address:
        "安徽省滁州市全椒县襄河镇儒林路新城市广场江海·儒林东苑3号楼1单元502号",
      telephone: 17765144769,
      email: "ainqdpcld@msn.com",
    },
    {
      id: uuidv4(),
      name: "缪勉炯",
      gender: "女",
      age: 41,
      province: "河北省",
      address: "河北省唐山市丰润区林荫路与光华道交叉口盛世华庭9号楼2单元405号",
      telephone: 18149845035,
      email: "damveqjfkpcp@yahoo.com.cn",
    },
    {
      id: uuidv4(),
      name: "郑孝年",
      gender: "男",
      age: 32,
      province: "山东省",
      address:
        "山东省菏泽市定陶区518国道与冉中路交叉口东140米御龙湾小区2号楼3单元204号",
      telephone: 13445877640,
      email: "tdqbbfo@163.net",
    },
    {
      id: uuidv4(),
      name: "宫芬希",
      gender: "女",
      age: 36,
      province: "四川省",
      address: "四川省眉山市东坡区民福街28号青园小区(民福街)5号楼1单元504号",
      telephone: 19921378059,
      email: "tprhofttkeabp@netease.com",
    },
    {
      id: uuidv4(),
      name: "温汝谨",
      gender: "女",
      age: 49,
      province: "吉林省",
      address: "吉林省长春市宽城区青年路4392号豪邦新月花园14号楼2单元502号",
      telephone: 17870552982,
      email: "maskpiecaevtu@sohu.com",
    },
    {
      id: uuidv4(),
      name: "云果殉",
      gender: "男",
      age: 55,
      province: "山东省",
      address: "山东省青岛市即墨区振华街89锦华苑3号楼1单元405号",
      telephone: 15249731004,
      email: "gatwwhngcutga@tom.com",
    },
    {
      id: uuidv4(),
      name: "袁斯皎",
      gender: "女",
      age: 42,
      province: "广西壮族自治区",
      address:
        "广西壮族自治区钦州市钦北区永福西大街47号金湖国际大厦5号楼3单元301号",
      telephone: 13213177829,
      email: "dehnlakeceomqdq@56.com",
    },
    {
      id: uuidv4(),
      name: "洪川唯",
      gender: "女",
      age: 21,
      province: "湖北省",
      address:
        "湖北省荆门市东宝区月亮湖路与207国道交叉口东120米农民工返乡创业园2号楼3单元205号",
      telephone: 15631577063,
      email: "buuaeptr@35.com",
    },
    {
      id: uuidv4(),
      name: "崔连淮",
      gender: "女",
      age: 43,
      province: "湖北省",
      address: "湖北省黄冈市蕲春县檀林镇皖鄂商厦1号楼1单元304号",
      telephone: 18783658447,
      email: "qmtbdcpaqmhgnts@citiz.com",
    },
    {
      id: uuidv4(),
      name: "松宣尉",
      gender: "女",
      age: 44,
      province: "山西省",
      address:
        "山西省晋城市沁水县天河北巷与新建东街交叉口西北60米丝织住宅楼4号楼3单元303号",
      telephone: 17677301093,
      email: "qgwtbqurkc@yahoo.com.cn",
    },
    {
      id: uuidv4(),
      name: "祝舟然",
      gender: "男",
      age: 58,
      province: "青海省",
      address: "青海省西宁市城西区苏家河路8玉树新村小区8号楼2单元305号",
      telephone: 16601712384,
      email: "irudjlufdbiw@citiz.com",
    },
    {
      id: uuidv4(),
      name: "卫露心",
      gender: "女",
      age: 44,
      province: "辽宁省",
      address:
        "辽宁省沈阳市铁西区沈阳工业大学中央校区南门对面凯怡阳光7号楼2单元103号",
      telephone: 13056558355,
      email: "smgrpfckj@xinhuanet",
    },
    {
      id: uuidv4(),
      name: "巫顺能",
      gender: "男",
      age: 20,
      province: "山西省",
      address:
        "山西省忻州市原平市永康北路653附近新兴苑(永康北路)3号楼2单元405号",
      telephone: 15340712786,
      email: "wto@qq.com",
    },
    {
      id: uuidv4(),
      name: "詹泰歆",
      gender: "男",
      age: 49,
      province: "广东省",
      address:
        "广东省广州市黄埔区丰乐南路438号大院(裕丰围地铁站A口步行270米)黄埔花园15号楼1单元404号",
      telephone: 16570374751,
      email: "bekvkabngbwt@263.net",
    },
    {
      id: uuidv4(),
      name: "许瑶冶",
      gender: "男",
      age: 30,
      province: "广东省",
      address: "广东省广州市天河区天河东圃黄村路120号天雅居13号楼1单元404号",
      telephone: 13656281185,
      email: "hbeblrgcdmovhta@sina.com",
    },
    {
      id: uuidv4(),
      name: "经研蓬",
      gender: "男",
      age: 21,
      province: "澳门特别行政区",
      address:
        "澳门特别行政区澳门特别行政区花王堂区蛋巷/永安上街6号厚宜大厦5号楼1单元403号",
      telephone: 17897285899,
      email: "gktwdmna@yeah.net",
    },
    {
      id: uuidv4(),
      name: "薄赫日",
      gender: "女",
      age: 49,
      province: "四川省",
      address:
        "四川省宜宾市屏山县岷江大道与滨江路交叉口东北200米滨江壹号9号楼3单元405号",
      telephone: 17587089448,
      email: "qkoggkiqbrsda@xinhuanet",
    },
    {
      id: uuidv4(),
      name: "江眉焰",
      gender: "男",
      age: 54,
      province: "新疆维吾尔自治区",
      address:
        "新疆维吾尔自治区乌鲁木齐市乌鲁木齐县南华路45号板房沟镇天峡社区2号楼3单元401号",
      telephone: 17856706660,
      email: "bvh@enet.com.cn",
    },
    {
      id: uuidv4(),
      name: "祁璐忆",
      gender: "女",
      age: 46,
      province: "湖南省",
      address:
        "湖南省长沙市望城区银星路与雷锋大道交叉口西南100米华城·城市广场6号楼1单元502号",
      telephone: 13805825561,
      email: "emujqicbel@eastday.com",
    },
    {
      id: uuidv4(),
      name: "农英征",
      gender: "男",
      age: 21,
      province: "福建省",
      address: "福建省漳州市东山县旗滨蔚蓝海4号楼1单元301号",
      telephone: 17732637756,
      email: "pgmomfhkwdv@126.com",
    },
    {
      id: uuidv4(),
      name: "邵凌峻",
      gender: "女",
      age: 48,
      province: "辽宁省",
      address: "辽宁省盘锦市大洼区赵圈河镇红海彤湾5号楼3单元205号",
      telephone: 13091493760,
      email: "dktwcogkdgd@msn.com",
    },
    {
      id: uuidv4(),
      name: "方漫苓",
      gender: "男",
      age: 39,
      province: "广东省",
      address: "广东省深圳市宝安区宝民花园11号楼2单元501号",
      telephone: 17664454199,
      email: "nuhgmmdskq@163.net",
    },
    {
      id: uuidv4(),
      name: "缪贞晗",
      gender: "女",
      age: 44,
      province: "江苏省",
      address: "江苏省徐州市睢宁县睢城镇东升路28号上海花苑11号楼3单元201号",
      telephone: 15967062477,
      email: "lpwcpbnf@eyou.com",
    },
    {
      id: uuidv4(),
      name: "昌臣椒",
      gender: "男",
      age: 25,
      province: "山东省",
      address: "山东省枣庄市市中区青檀南路福瑞花园2号楼2单元403号",
      telephone: 17193228527,
      email: "vgccuhmmwj@netease.com",
    },
    {
      id: uuidv4(),
      name: "赖妤游",
      gender: "男",
      age: 29,
      province: "上海市",
      address:
        "上海市上海市青浦区外青松公路6048弄新青浦新青浦花苑一区1号楼1单元305号",
      telephone: 16628854174,
      email: "pkdq@eyou.com",
    },
    {
      id: uuidv4(),
      name: "高素瑗",
      gender: "男",
      age: 29,
      province: "甘肃省",
      address: "甘肃省兰州市七里河区吴家园西街81号凯地怡苑9号楼1单元105号",
      telephone: 13140982152,
      email: "lapqionvhi@21cn.com",
    },
    {
      id: uuidv4(),
      name: "汪焱彬",
      gender: "男",
      age: 19,
      province: "河南省",
      address:
        "河南省洛阳市洛龙区伊滨区洛偃快速通道与环湖路交叉口国贸大厦(洛偃快速通道)3号楼1单元303号",
      telephone: 13729948509,
      email: "mhoawaekp@163.net",
    },
    {
      id: uuidv4(),
      name: "周漪玥",
      gender: "男",
      age: 28,
      province: "天津市",
      address:
        "天津市天津市河西区尖山街道郁江道33号城市别墅(五号堤路)6号楼3单元501号",
      telephone: 15949125557,
      email: "vrbgewlvwkerm@yahoo.com.cn",
    },
    {
      id: uuidv4(),
      name: "纪甜蝶",
      gender: "男",
      age: 31,
      province: "湖南省",
      address:
        "湖南省岳阳市临湘市城西南路与平安巷交叉口西南100米南华社区4号楼3单元503号",
      telephone: 15516904837,
      email: "uklvaebrtqqpkc@163.net",
    },
    {
      id: uuidv4(),
      name: "郦宪锁",
      gender: "女",
      age: 57,
      province: "香港特别行政区",
      address:
        "香港特别行政区香港特别行政区离岛区银矿湾路银月楼5号楼1单元203号",
      telephone: 18737563896,
      email: "qpsrwhiiw@163.com",
    },
    {
      id: uuidv4(),
      name: "邵诗若",
      gender: "男",
      age: 54,
      province: "湖北省",
      address:
        "湖北省黄石市西塞山区社区工作管理委员会沿湖路461磁湖新都8号楼2单元201号",
      telephone: 18138032497,
      email: "eercskqtqclw@35.com",
    },
    {
      id: uuidv4(),
      name: "焦尤栋",
      gender: "男",
      age: 47,
      province: "山西省",
      address: "山西省吕梁市文水县凤凰南路11附近石油公司宿舍楼2号楼2单元505号",
      telephone: 13273692132,
      email: "lrhnbcsdrvqsb@etang.com",
    },
    {
      id: uuidv4(),
      name: "房蓓侃",
      gender: "男",
      age: 56,
      province: "福建省",
      address:
        "福建省漳州市漳浦县府前街与印石路交叉口西140米印石花园北区15号楼1单元201号",
      telephone: 18006975091,
      email: "emkhatlglbrcen@enet.com.cn",
    },
    {
      id: uuidv4(),
      name: "宫枫逸",
      gender: "男",
      age: 30,
      province: "湖北省",
      address:
        "湖北省黄石市下陆区磁湖路与杭州西路交叉口西南160米肖铺新村4号楼2单元501号",
      telephone: 15244165210,
      email: "wfr@qq.com",
    },
    {
      id: uuidv4(),
      name: "姜默宝",
      gender: "男",
      age: 41,
      province: "山西省",
      address: "山西省大同市天镇县玉泉镇瑞新花园12号楼3单元405号",
      telephone: 17184449241,
      email: "ldompwrfau@126.com",
    },
    {
      id: uuidv4(),
      name: "费树玄",
      gender: "男",
      age: 24,
      province: "河北省",
      address: "河北省邯郸市曲周县光明街曲周县双河小区5号楼2单元304号",
      telephone: 19972958862,
      email: "actuornaltmh@sogou@com",
    },
    {
      id: uuidv4(),
      name: "杭玄庆",
      gender: "男",
      age: 49,
      province: "福建省",
      address:
        "福建省漳州市芗城区胜利东路45号八达大厦(胜利东路)9号楼3单元402号",
      telephone: 18313023222,
      email: "mps@netease.com",
    },
    {
      id: uuidv4(),
      name: "水庚京",
      gender: "男",
      age: 51,
      province: "内蒙古自治区",
      address:
        "内蒙古自治区呼和浩特市回民区县府街宏远小区南侧吉利花园8号楼2单元501号",
      telephone: 15052331705,
      email: "hgvqitshuqak@netease.com",
    },
    {
      id: uuidv4(),
      name: "金柱炎",
      gender: "男",
      age: 56,
      province: "广东省",
      address:
        "广东省阳江市阳西县织篢镇中山火炬产业转移工业园中阳大道中阳商业街阳西未来城F期2号楼1单元302号",
      telephone: 18832147753,
      email: "fekee@126.com",
    },
    {
      id: uuidv4(),
      name: "詹舰宾",
      gender: "女",
      age: 57,
      province: "西藏自治区",
      address:
        "西藏自治区那曲市色尼区文化路东段86号附近色尼小区11号楼1单元203号",
      telephone: 19848643956,
      email: "dnloohm@xinhuanet",
    },
    {
      id: uuidv4(),
      name: "谢孟海",
      gender: "女",
      age: 42,
      province: "湖北省",
      address: "湖北省仙桃市仙桃市沔阳大道66号玉宇园14号楼1单元305号",
      telephone: 18887817941,
      email: "bkhh@21cn.com",
    },
    {
      id: uuidv4(),
      name: "邵唯腾",
      gender: "女",
      age: 38,
      province: "河北省",
      address: "河北省秦皇岛市海港区建国路农乐里11号楼3单元505号",
      telephone: 13328768875,
      email: "iqfiludhnd@163.net",
    },
    {
      id: uuidv4(),
      name: "骆姗欢",
      gender: "男",
      age: 46,
      province: "安徽省",
      address:
        "安徽省淮北市濉溪县濉河路与虎山路交叉口南150米香苑小区1号楼1单元204号",
      telephone: 18152091768,
      email: "rsawvu@35.com",
    },
    {
      id: uuidv4(),
      name: "郝涓莹",
      gender: "女",
      age: 52,
      province: "上海市",
      address: "上海市上海市长宁区仙霞路750弄之4-63号虹仙小区8号楼2单元102号",
      telephone: 17535281164,
      email: "madcgtenqsar@enet.com.cn",
    },
    {
      id: uuidv4(),
      name: "郑建舸",
      gender: "女",
      age: 30,
      province: "河南省",
      address:
        "河南省安阳市殷都区安钢大道与铁西路交叉口西100米鼎盛广场15号楼2单元102号",
      telephone: 19891607854,
      email: "qassnvhmvggeam@netease.com",
    },
    {
      id: uuidv4(),
      name: "颜鸿吉",
      gender: "女",
      age: 22,
      province: "贵州省",
      address:
        "贵州省铜仁市石阡县佛顶山大道(原大关酒厂)石阡福天·领秀城14号楼3单元201号",
      telephone: 17319006904,
      email: "tjhoohnccoqm@126.com",
    },
    {
      id: uuidv4(),
      name: "潘茹梅",
      gender: "女",
      age: 48,
      province: "湖南省",
      address: "湖南省株洲市荷塘区智远路西150米果木园小区11号楼1单元501号",
      telephone: 17599042264,
      email: "cmcfbwecht@citiz.com",
    },
    {
      id: uuidv4(),
      name: "农澄薇",
      gender: "女",
      age: 25,
      province: "湖北省",
      address: "湖北省武汉市江岸区兴业路153号紫竹园6号楼1单元203号",
      telephone: 19893448135,
      email: "bttcsptqwok@126.com",
    },
    {
      id: uuidv4(),
      name: "井鼎晏",
      gender: "男",
      age: 50,
      province: "广西壮族自治区",
      address:
        "广西壮族自治区防城港市港口区公车镇北部湾大道埠上桃源斜对面三顺世纪大都会11号楼1单元303号",
      telephone: 15896202260,
      email: "jjpqve@sogou@com",
    },
  ]);
  //创建一个新数组users，users是origin的浅拷贝，不影响到原始数据的操作在users上进行
  const users = ref(Object.assign(origin.value));
  const newUser = ref({
    id: uuidv4(),
    name: "",
    gender: "",
    age: "",
    province: "",
    address: "",
    telephone: "",
    email: "",
  });

  const changed = ref(false); //数组是否改变标识，用于watch监听分页
  const isEdit = ref(false); //区别newUser中数据是编辑还是新增

  function addUser() {
    if (isEdit.value) {
      isEdit.value = false;
    } else {
      const user = Object.assign({}, newUser.value);
      origin.value.unshift(user);
    }
    changed.value = true;
    newUser.value = {};
    newUser.value.id = uuidv4();
  }
  function deleteUser(id) {
    origin.value = origin.value.filter((user) => user.id !== id);
    users.value = origin.value;
    changed.value = true;
  }
  // function editUser() {
  //   changed.value = true;
  //   this.isEdit = false;
  //   const arr = Object.keys(newUser.value);
  //   arr.forEach((index) => {
  //     newUser.value[index] = "";
  //   });
  //   newUser.value.id = uuidv4();
  // }

  function searchUser(keyWord) {
    if (keyWord === "") {
      users.value = origin.value;
    } else {
      users.value = origin.value.filter((user) => user.name.includes(keyWord));
    }
    changed.value = true;
  }

  function filterUser(sortItem, sortOrder) {}
  return {
    users,
    newUser,
    addUser,
    deleteUser,
    searchUser,
    filterUser,
    changed,
    isEdit,
  };
});
