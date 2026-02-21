console.log('Список треков:\n1. Sia - Angel by the wings\n2. JP Cooper - She is on my mind\n3. Tiesto feat. Ava Max - The Motto\n4. Iron & Wine - Flightless Bird, American Mouth')


// Create the audio element for the player
let audio = document.createElement('audio');
let audio_index = 0;

let cover = document.querySelector('.cover_img');
let title = document.querySelector('.title');
let author = document.querySelector('.author');
let record_disk = document.querySelector('.record');

// Define the list of tracks that have to be played
let track_list = [{
    name: "ур4л стр4д43т 6ля",
    artist: "урал гайсин",
    image: "./assets/covers/ural.png",
    path: "./assets/audio/ural.mp3",
    textColor: '#000',
    text: "У, у money-money goths, в моём сердечке всё, что тебе не дано\nА, я, я, дайте мне бабло, она готова на всё\nЛишь бы быть со мной, и\n\nЕё предки смотрят на меня (На меня)\nЯ щас высоко, она далека (Далека)\nЯ первый вампир в её жизни\nОна не знает, как вести себя\nОна на мне, она моя стихия\nНа мне, да, сука, дай своё тело\nЯ хочу, чтоб ты на меня села\nЯ хочу, чтоб ты была со мной\nТы тоже этого хотела?\nЯ устал это терпеть, постой\nЯ хочу лишь вайбик этот\nЯ хочу вернуться в лето\nЯ хочу быть с тобой где-то\n\nУ неё есть мой номер, но она не звонит\nНаши отношения для неё приколы\nХоть и я хочу быть с ней, но она не хочет\nУ меня мокрый дисплей — телефон морочит\nНастоящий вампир не идёт засыпать\nУ меня есть вода, у меня её дохуя\nЯ готов любить тебя, я готов на всё\nЛишь бы ты была рядышком у меня\n\nУ, у, да, лай-лай-лай-лай-лай\nУ, у, ха, я-я, я-я\n\nЕё предки смотрят на меня (На меня)\nЯ щас высоко, она далека (Далека)\nЯ первый вампир в её жизни\nОна не знает, как вести себя\nОна на мне, она моя стихия\nНа мне, да, сука, дай своё тело\nЯ хочу, чтоб ты на меня села\nЯ хочу, чтоб ты была со мной\nТы тоже этого хотела?\nЯ устал это терпеть, постой\nЯ хочу лишь вайбик этот\nЯ хочу вернуться в лето\nЯ хочу быть с тобой где-то"
},
{
    name: "Мальчик на девятке 2",
    artist: "житность",
    image: "./assets/covers/boy.jpg",
    path: "./assets/audio/boy.mp3",
    textColor: '#fff',
    text: "текста пока нет:("
},
{
    name: "Криминал",
    artist: "Циркониевый Браслет",
    image: "./assets/covers/criminal.png",
    path: "./assets/audio/criminal.mp3",
    textColor: '#fff',
    text: "Готовиться получше, потому что на ЕГЭ\nНужно назвать топ-10 самых крупных ОПГ\nИ способы надёжного отжатия лавэ\nВместительность багажника у марки BMW\nВ подвале прессовали, но 3G ништяк ловил\nМобильник, парни, должен быть, конечно, же таким\nИз развлечений утром бокс, под вечер героин\nИ по зиплокам кокс, белый, как пачки балерин\n\nЕсли рождён в России, значит здесь же умирал\nМы всё сделаем красиво, мама ама криминал\nВ ресторане громко музыка звучит и гаснет свет\nНа площади падает, падает, падает снег\nЕсли рождён в России, значит здесь же умирал\nМы всё сделаем красиво, мама ама криминал\nВ ресторане громко музыка звучит и гаснет свет\nНа площади падает, падает, падает снег\n\nЖизнь — это танец Нины Ананиашвили\nСказал, любит её, она спросила: «Рили?»\nНо не выращивать им вместе лилии\nНе слушать громко музыку на вилле\nРаз любит он вести беседы долго в саунах\nТо надо было ему чаще думать о долгах\nТогда б всё было хорошо не только на словах\nОн был бы при башке, жене и даже при деньгах\n\nКуда важней активы или сроки платежей\nА в красном Гранд Чероки точно хватит калашей\nКто-то превратился в камень, кто-то превратился в пыль\nГосударство — это типа самый строгий монастырь\nИ чем костюм скромнее, тем сильнее чья-то власть\nИ раз залез повыше, постарайся не упасть\nБез лишних спецэффектов и без лишнего насилия\nЗа кадром передачи «Криминальная Россия»\n\nЖизнь — это танец Нины Ананиашвили\nСказал, любит её, она спросила: «Рили?»\nНо не выращивать им вместе лилии\nНе слушать громко музыку на вилле\nРаз любит он вести беседы долго в саунах\nТо надо было ему чаще думать о долгах\nТогда б всё было хорошо не только на словах\nОн был бы при башке, жене и даже при деньгах\n\nЕсли рождён в России, значит здесь же умирал\nМы всё сделаем красиво, мама ама криминал\nВ ресторане громко музыка звучит и гаснет свет\nНа площади падает, падает, падает снег\nЕсли рождён в России, значит здесь же умирал\nМы всё сделаем красиво, мама ама криминал\nВ ресторане громко музыка звучит и гаснет свет\nНа площади падает, падает, падает снег"
},
{
    name: "Collard Greens",
    artist: "ScHoolboy Q feat. Kendrick Lamar",
    image: "./assets/covers/collard_greens.png",
    path: "./assets/audio/collard_greens.mp3",
    textColor: '#fff',
    text: "Yeah, yeah, yeah\nUh, uh\nYo, yo\n\nOh, oh, luxury\nChidi-ching-ching, could buy anything, cop that\nOh, oh, collard greens\nThree degrees low, make it hot for me, drop that\nOh, oh, down with the shit\nDrink this, smoke this, get down with the shit\nHey, oh, oh, down with the shit\nCop this, pop this, down with the shit\n\nSmoke this, drink this, straight to my liver\nWatch this, no tick, yeah I'm the nigga\nGang rap, X-mas, smoke, shots I deliver\nFaded, Vegas, might sponsor the killer\nShake it, break it, hot-hot for the winter\nDrop it, cop it, eyes locked on your inner object\nRock it, blast-blast, new beginnings\nLovely, pinky how not I remember, fiendin'\nGive me, give me, give me some\nFreak the freckles off your face\nFrenchy, freakin', swappin' tongue\nClick my link and spread your buns\nLose your denim, make it numb\nBlow it, baby, no Saddam (Icky-icky, icky-icky, uh)\nFuckin' in the car service, thank me for the car pool\nChromosome, part full, prolly off a Norco\nAnd gas, not the Arco, poppin' since the intro\nYou shoppin' from the window, play my favorite tempo\n\nOh, oh, luxury\nChidi-ching-ching, could buy anything, cop that\nOh, oh, collard greens\nThree degrees low, make it hot for me, drop that\nHey, oh, oh, down with the shit\nCop this, pop this, down with the shit\n\nHold up, biatch!\nThis yo' favorite song\nTranslation: Ven aquí, mami, ese culo\nTú quieres coger mis huevos, y papi me molestes\nChuparse puto pendejo, el pinche cabrón\nLet's get it\nNights like this, I'm a knight like this\nSword in my hand, I fight like this\nAnd I'm more than a man, I'm a god\nBitch, touché, en garde\nToupée drop and her two tits pop\nOut of that tank top and bra\nAnd when I say 'Doo-doo-doo-doo,'' bitch, that be K. Dot\nShe want some more of this\nI give her more of this, I owe her this\nIn fact, I know she miss the way I floored this, I'm focused\nI know my Houston partners, drop a four on this\nAnd focus, and slow it down, down\n(Woo, woo) Alright, let me blow this bitch\nI'm famous, I blame this on you, cash in the mirror\nHang in my penthouse roof, skyline the clearest\nWatch it, your optics poppin' out, you look the weirdest\nPop my top on the 105, head with no power steerin', ahOh, oh, luxury\nChidi-ching-ching, could buy anything, cop that\nOh, oh, collard greens\nThree degrees low, make it hot for me, drop that\nOh, oh, down with that shit\nDrink this, smoke this, get down with the shit\nHey, дальше слишком длинно не дает:("
},
{
    name: "Лучшая подруга",
    artist: "оля уволена",
    image: "./assets/covers/friend.jpg",
    path: "./assets/audio/friend.m4a",
    textColor: '#fff',
    text: "Ебало раскромсаю, блять!\n\nПоследняя тусовка у чела на квартире\nМы не знакомы, ты, кстати, очень милый\nПойдём покурим вместе сиги на балконе\nНравишься мне очень, но ты ещё не понял\n\nМы пьяные стоим и обсуждаем лето\nТак в темноте красиво тлеет сигарета\nТы наклонился близко и прошептал на ухо:\n«Мне так понравилась твоя лучшая подруга!»\n(Что?)\n\nТы даже лучше, когда тебя не вижу\nСука, как тебя ненавижу\nТы даже лучше, когда тебя не вижу\nСука, как тебя ненавижу\n\nЯ ненавижу, я ненавижу, я ненавижу, я ненавижу\nЯ ненавижу, я ненавижу, я ненавижу\n\nИ в темноте не видно мои глупые слёзы\nУшла я в коридор и надеваю кросы\nКуда бежать — не важно, но всё-таки так глупо:\nТебе понравилась моя лучшая подруга\n\nНе вижу фонари, глаза на мокром месте\nВозьму свой старый скейт и упаду раз двести\nМобильник разрывается, и я отвечаю: «Сука!»\nНа том конце всё извиняется моя подруга\n(Сука!)\n\nТы даже лучше, когда тебя не вижу\nСука, как тебя ненавижу\nТы даже лучше, когда тебя не вижу\nСука, как тебя ненавижу\n\nЯ ненавижу, я ненавижу, я ненавижу, я ненавижу\nЯ ненавижу, я ненавижу, я ненавижу\n\nТы даже лучше, когда тебя не вижу\nСука, как тебя ненавижу\nТы даже лучше, когда тебя не вижу\nСука, как тебя ненавижу\n\nЯ ненавижу, я ненавижу, я ненавижу, я ненавижу\nЯ ненавижу, я ненавижу, я ненавижу\n\n(Ух!)\n\n"
},
{
    name: "Ләззат Алауы",
    artist: "Yerbolat",
    image: "./assets/covers/yerbolat.jpg",
    path: "./assets/audio/yerbolat.mp3",
    textColor: '#fff',
    text: "Сендей сулу бар екенiн кiм бiлген\nБалдай таттi ыстык кызыл тiлiннен\nТолыксыган анарын, жанып турган жанарын\nКыпша белiн (хмм...)! Кушактайын (хмм...)\nАл кызыл гулдей лупiлдеген сенiн ернiн\nКатты соккан журегiм толыксиды менiн\nЕрболат келшi! десен болды маган\nКумiстей коздерiне батып кеттiм сенiн\nМусiн бiткен маралдай, калай отем карамай\nСана сезiм мас боп турмын касына бара алмай\nСыр бiлдiрме туш, махаббат деген - куш\nКыпша боран бел кушагыма кел\n\nХей! Сулу кыз, сулу кыз\nЖарасып тур созiмiз\nКалдырмайык ертенге\nКосылайык бугiн бiз\nХей! Сулу кыз, сулу кыз\nЖарасып тур созiмiз\nКалдырмайык ертенге\nКосылайык бугiн бiз\n\nСуйгiсi келе берер суйген ерiн\nСуй, жаным, суйкiмдi бiр куйге боленемiн\nДеп айтып кеткен Мукагали кезiнде\nБалкiм бiлген не керегiн сезiмге\nКел, осы анiм-санiм! Кел, тур ыргагымда\nТербелiп аймалайын ляззаттын шындарында\nАлпыс екi тамырым балкиды, балкиды\nБайланып тiлiм, сезiм тулап шалкиды\nСезiп турмын журегiннiн лупiлiн\nБаска кыздар айым болса, сен - кунiм!\nЖакын аралайын келбетiннiн\nАз болады маган деген бр тунiн\nБелi баланын согiлiп, колан шашын тогiлiп\nКушагында буралып, махаббатка уланып\nСуйiп калып убiсiп, бiр ляззатка болiсiп\nМахаббаттын тiлiмен буланайык тунiмен"
},
{
    name: "easy-to-reach girl-speed up & nightcore, slowed &…",
    artist: "Delony – Assetto Corsa.",
    image: "./assets/covers/girl.jpg",
    path: "./assets/audio/girl.m4a",
    textColor: '#fff',
    text: "э."
},
{
    name: "Застрахуй",
    artist: "Ноггано",
    image: "./assets/covers/noggano.png",
    path: "./assets/audio/noggano.mp3",
    textColor: '#fff',
    text: "Застрахуй, застрахуй братуху\nЗастрахуй, хуй, хуй, застрахуй, хуй\n\nЯу, мама родная, а что нам хулиганам надо?\nНемерено бабок и ещё столько же вдобавок\nМы против войны, мы за диалог\nНо если ты лох, сиди ровно и не разевай рот\nТак вот, наша компания — четыре друга\nНоггано, Банкок, Жора и Купе-ублюдок\nСидим, слушаем CD\nКакая-то хуйня, дядькины ретро-записи\nAC-DC чи Фредди дырявый\nWe Are The Champions, Radio Gaga\nШняга, настроение ниже фарватера\nПацаны курят дудки, я листаю журналы\nВдруг мой взгляд упал на рекламу\nФирма «Альбатрос» — любое страхование\nНедвижимость, авто, катастрофы, здоровье\nКороче, расширенный профиль\nВдруг что-то щёлкнуло во мне, вот оно\nТрясущимися пальцами набираю телефон: 2234562\nЖенский голос: «Добрый день, фирма Альбатрос»\n«Подскажите милая, я насчет страховки», «Конкретней?»\n«Конкретней? — насчёт здоровья»\n«Это у нас можно\nДелаете взнос и Вы уже клиент страховой фирмы Альбатрос\nДвадцать тысяч в год — полный комплект в пакете:\nТравмы, болезни и даже смерть\nВыплата зависит от тяжести травм\nМожно получить даже целый лям»\nКладу трубку, как ни в чём не бывало\nНоггано умный, на шифре Ноггано\n«Я тут чё прикинул братва\nТакая тема: хулиганы, катастрофы — смутное время\nНадо обезопаситься и застраховаться\nВдруг что, а тут тебе на — компенсация»\nКоманда оживилась, началась полемика\n«Кстати, случай был в прошлый понедельник\nЛёня с подельником вскрыл хату\nА там бешеный стаффорд, жёсткий ультиматум\nВалили оттуда, как зебры галопом\nСтаффорд вдогонку, сука, быстрый жлоб\nСлава Богу, не хлопнули копы\nА вот у Лёхи теперь нет куска жопы\nВроде стрёмно как-то и неловко\nА можно было бы получить денег по страховке»\nВсе замолчали, я обвёл приятелей взором\n«А что, давайте застрахуем Жору\nОн работает на стройке, там всякое случается»\nЖоре похуй, он за заботу улыбается\nЕдиногласно, беру отложенные бабки\nВ охапку Жору, ёвные документы в папку\nМы страхуем Жору в фирме «Альбатрос»\nСерьезное движение, ёбаный насос\n\nЗастрахуй, застрахуй братуху, застрахуй\nХуй, хуй, хуй, хуй\nЗастрахуй, застрахуй братуху, застрахуй\nХуй, хуй, хуй, хуй\n\nОй, мама родная\nЗастраховали, обмывали весь уикенд\nЖора на работу, я собираю совет\nон наш кент, конечно, мы Жору очень любим\nНо денег нет, ведь мы живые люди\nКороче решили сломать Жоре палец\nЖора сопротивлялся, сука, вот засранец\nВдвоем держали жертву, Купэ ломал\nМизинец хрустнул, Жора в обморок упал\nПо страховке получили сорок тысяч\nа все опять места нема"
},
{
    name: "ЗАХОТЕЛ",
    artist: "НАВЕРНОЕ ПОЭТ, ЯКОРЪ, EVEN CUTE",
    image: "./assets/covers/zahotel.png",
    path: "./assets/audio/zahotel.mp3",
    textColor: '#fff',
    text: "Захотел, захотел, захо—\n\nКупил тачку — захотел\nТрахнул суку — захотел\nБез гондона захотел\nЗахотел красивых тел\nТел, тел, тел, тел\nТел, тел, те-те-те, захо—\nТел, тел, тел, тел\nТел, тел, захо-захо—\n\nЗахотела кэш — получила, заебалась тратить\nЗахотела фейм, beat the game, и ты хочешь так же\nМеня не ебёт, как ты там, где теперь ты плачешь\nЯ беру своё, лью Moët, сука, лови капли\n\nПохуй, с кем ты, как ты, где ты, мне уже неинтересно\nЗа рулём своей малышки, нахуй мне кабриолеты?\nНа full музыку, газ в пол, еду на трассе под сто\nЯ весь в чёрном, bitch, black mod, сёдня я готов на всё\n\nНа джинсах от Versace висит Louis ремень\nПод моей жопой ща катит 63 AMG\nЛюбой фарс за твой базар, любая шлюха к моим ногам\nЛюбому пиздюлей бы дал, я захотел и кэш поднял (Захотел, захотел, захо—)\n\nКупил тачку — захотел\nТрахнул суку — захотел\nБез гондона захотел\nЗахотел красивых тел\nТел, тел, тел, тел\nТел, тел, те-те-те, захо—\nТел, тел, тел, тел\nТел, тел, захо-захо—"
},
{
    name: "Я расстался",
    artist: "ТЕТКА",
    image: "./assets/covers/tetka.jpg",
    path: "./assets/audio/tetka.m4a",
    textColor: '#fff',
    text: "Ну и чё такого в том, что я тебе изменял?\nВедь я нормальный мужик, я полигам, натурал\nА ни чё, то, то, то, то, что я тебе покупал?\nВсе хотелки твои, я всю зарплату спускал\nНа тебя потратил за год 1300 рублей\nОплачивал тебе билет на тралик несколько дней\nНе пизди, что разошлись из-за измены моей\nПросто я не люблю меркантильных блядей\n\nЯ просто обычный пацан\nМне нихуя не надо\nЛишь улица и братаны\nМоя отрада\nА ты, бы, шла лесом, овца\nНе трогай свежие раны\nЯ долго живу без отца\nЗа то, дома у мамы\n\nА таких шлюх, как ты, я ещё не встречал\nНо в жизни моей будет новый причал\nИ пускай она будет терпилой, увы\nНо не будет со мною ради денег, как ты\n\nПлатье? На\nКофе? На\nЧизкейк? На\nПутана\nПлатье? На\nКофе? На\nЧизкейк? На\nПутана\n\nЯ просто обычный пацан\nМне нихуя не надо\nЛишь улица и братаны\nМоя отрада\nА ты, бы, шла лесом, овца\nНе трогай свежие раны\nЯ долго живу без отца\nЗа то, дома у мамы"
},
{
    name: "MAKE UP (FBL)",
    artist: "Japssii",
    image: "./assets/covers/makeup.jpg",
    path: "./assets/audio/makeup.mp3",
    textColor: '#fff',
    text: "Maple fucking big ebony\nFuxleep\nБля, малыш, извини я реально забыл, что ты просила об этом в начале\nДа блядь, реально забыл, сорян\nАй\n\nПросила не портить make up (Ю-ю) — Кончил на личико (Баиньг)\nЕду по делам, в моем bag'e лежит на-ли-чи-ка\n5-5-5, мама хотела сына отличника\nДавай, на связи, если чё, найдем того обидчика\nРазница между нами с тобой — у нас есть шалавы\nУ вас тоже, но у вас они в вашей же банде\nВедь (Хм)\nВ вашей банде одни бляди, мы тусуем на квартале, фасуем, торгуем, тратим\nFuck Broke Life, мы давно начали крутиться\nТеперь ТикТок пиздел на нас, раньше начинают дрочиться\nМоя банда голодная и мы будем дальше мутиться\nМои карманы голодные, даже если рвутся от налички\nЯ делаю своё дерьмо, оно воняет мною\nМог бы забрать его суку с собой, но она воняет говном\nПоэтому, поэтому, бро, нахуй это дерьмо\n\nFuck Broke Life (Wha'?), Fuck Broke Life (Ю-ю!)\nFuck Broke Life (Wha'?), Fuck Broke Life (Ю-ю!)\nFuck Broke Life (Wha'?), Fuck Broke Life\nFuck Broke Life (Wha'?), Fuck Broke Life"
},
{
    name: "Юрфак",
    artist: "Grebz",
    image: "./assets/covers/urFuck.png",
    path: "./assets/audio/urFuck.mp3",
    textColor: '#fff',
    text: "Разряжаю всю обойму в её голову\nЕсли мы тебя порвали, значит, делим поровну\nНам не надо шума, не зови свою подругу\nС нами ты полюбишь песни Михаила Круга\nТы похожа на мишень, а мы достаём мушкеты\nЯ не, я не Илон Маск, но запустил в тебя ракету\nЭто пере-перегруз, от нуля до семи джи\nЕще нужно пару тус, и мы найдем все точки G-G\nКиловатты звука пусть разбудят весь район твой\nПовылетали стекла, значит, бочка била плотно\nЗнаю, будет весело, мы как шутки Задорнова\nЗа непослушание будет жопа оторвана\nТебе некуда бежать, ведь ты не Форест Гамп\nНакрутила бигуди, значит мы будем звать тебя Потап\n\nХочешь бабло-бло\nВ размере сумо-мо\nНо у бабок нету ног\nОно не придёт само-мо\nМо-мо-мо, дела-делаем с умом\nЕсли сделаем котлету, значит повторим once more\nХочешь бабло-бло\nВ размере сумо-мо\nНо у бабок нету ног\nОно не придёт само-мо\nМо-мо-мо, дела-делаем с умом\nЕсли сделаем котлету, значит повторим once more\n\nЕй, я ебу как негодяй, но\nУ меня подарков нет, sorry, babe, я не Николай\nА она слишком молода\nНо я не мало dollar дал и раздел догола\nЕй, говорит ник отдай, но\nУ меня подарков нет, sorry, babe, я не Некоглай, «Chary»\nОна слишком молода\nНо я не мало dollar дал и раздел догола\nЕ, беру top level of the year\nВключаю демку, ей уже заело\nЕ, дарю яблоко и выхожу за Еву\nСкажите мне, где топ и я туда заеду\nОна меня видит, говорит: «Ебать ты шкаф»\nЯ же говорю: «Молись, я батюшка»\nБоже мой, как же она любит Бенджамин\nВижу в ней жлоба и теряюсь будто беженец\n\nЯ закончил юрфак\nТы не контракт, но я всё равно тебя порвал\n\nХочешь бабло-бло\nВ размере сумо-мо\nНо у бабок нету ног\nОно не придёт само-мо\nМо-мо-мо, дела-делаем с умом\nЕсли сделаем котлету, значит повторим once more\nХочешь бабло-бло\nВ размере сумо-мо\nНо у бабок нету ног\nОно не придёт само-мо\nМо-мо-мо, дела-делаем с умом\nЕсли сделаем котлету, значит повторим once more"
},
{
    name: "Bonus - Тёмный попутчик",
    artist: "ПАПА feat. хмыров",
    image: "./assets/covers/dark.png",
    path: "./assets/audio/dark.m4a",
    textColor: '#fff',
    text: "Что мне делать с телом?\nИдут за нами следом\nЯ его не видел, брат\nТак бывает, что мне делать?\nЧто мне делать, брат?\nЯ уже вижу себя у врат\nОтправил к Страшному суду\nИ сам там тоже буду\n\nРядом, всю ночь рядом\nМы скроем бескровно\nВ порядке\nРяд, ряд к ряду\nЯ рядом всю ночь\n\nЧто мне делать с телом\nНакрыть его пакетом?\nМясорубка, кислота\nУ самого в голове темнота\n\nРядом, всю ночь рядом\nМы скроем бескровно\nВ порядке\nРяд, ряд к ряду\nЯ рядом всю ночь\n\nУпаковали, шнурком завязали\nСтояли курили, менялись местами\nИ этот парень теперь со мной в паре\nМеня не отпустит мой новый спутник\nУпаковали, шнурком завязали\nСтояли курили, менялись местами\nИ этот парень теперь со мной в паре\nМеня не отпустит тёмный попутчик\n\nРядом, всю ночь рядом\nМы скроем бескровно\nВ порядке\nРяд, ряд к ряду\nЯ рядом всю ночь\n\nУпаковали, шнурком завязали\nСтояли курили, менялись местами\nУпаковали, шнурком завязали\nСтояли курили менялись местами (Упаковали, шнурком завязали)\nУпаковали, шнурком завязали\nСтояли курили, менялись местами\nУпаковали, шнурком завязали\nСтояли курили, менялись местами"
},
{
    name: "Bonus - Тачка",
    artist: "ПАПА",
    image: "./assets/covers/car.jpg",
    path: "./assets/audio/car.mp3",
    textColor: '#fff',
    text: "Я слышал, эта детка не дается никому\nЯ знаю, с этой деткой мы скрываемся в дыму\nОткройся мне, и мы с тобой уедем в темноту\nИз всех не тех я выбираю ту\n\nЭта тачка\nИ горят огни\nВ этой тачке\nТолько мы одни\n\nТачка\nИ горят огни\nВ этой тачке\nТолько мы одни\n\nЯ знаю, это детка заведется у меня\nЯ знаю, этой детке нужно дать огня\nЯ верю, эта детка не дает себя менять\nЯ знаю, это детка для меня\n\nМного значит\nИ горят огни\nВ этой тачке\nТолько мы одни\n\nТачка\nИ горят огни\nВ этой тачке\nТолько мы одни\n\nТачка\nИ горят огни\nВ этой тачке\nТолько мы одни\n\nТачка\nИ горят огни\nВ этой тачке\nТолько мы одни"
},
{
    name: "Bonus - Стоковое фото",
    artist: "Циркониевый Браслет",
    image: "./assets/covers/photo.jpg",
    path: "./assets/audio/photo.mp3",
    textColor: '#fff',
    text: "Сегодня я снова немного помятый\nНа любителя, как будто Ritter Sport с мятой\nПостоянное желание обнажить культурный пласт\nЯ участвую в беседе, словно слушаю подкаст\nНе помню, когда мне не было страшно\nЧувствую себя львом у братьев Запашных\nПоследний раз мне было грустно, когда умер Avicii\nПоследний раз ты грустил, когда не было наличных\n\nЯ токсичен, будто Твиттер, и эксперт в любом вопросе\nИ живу я не в России, я живу в охуевозе\nПоказали путь к успеху, только что-то неохота\nМоя жизнь — это стоковое, стоковое фото\nЯ токсичен, будто Твиттер, и эксперт в любом вопросе\nИ живу я не в России, я живу в охуевозе\nПоказали путь к успеху, только что-то неохота\nМоя жизнь — это стоковое, стоковое фото\n\nМоё эго перекроет любые дороги\nЕсли я выползаю в магазин из берлоги\nВедь так много средств в моём арсенале\nПодгребайте в KFC и я вас там размотаю\nЯ не приспособлен к жизни, я как будто Адам Сэндлер\nПамять о вчерашнем дне уничтожил мощный блендер\nПеред тем как стать адептом либертарианства\nПредпочту обосраться или сдохнуть от пьянства\n\nЯ токсичен, будто Твиттер, и эксперт в любом вопросе\nИ живу я не в России, я живу в охуевозе\nПоказали путь к успеху, только что-то неохота\nМоя жизнь — это стоковое, стоковое фото\nЯ токсичен, будто Твиттер, и эксперт в любом вопросе\nИ живу я не в России, я живу в охуевозе\nПоказали путь к успеху, только что-то неохота\nМоя жизнь — это стоковое, стоковое фото"
},
{
    name: "Bonus - Стокгольмский синдром",
    artist: "Циркониевый Браслет",
    image: "./assets/covers/photo.jpg",
    path: "./assets/audio/syndrome.mp3",
    textColor: '#fff',
    text: "Помнишь, в школе как-то пацана отпиздили и\nЕму сломали слегка нос, в рюкзак насыпали земли\nИз цветочного горшка, это был георгин\nЕго обидчика попозже уничтожит героин\nЭто словно аллергия на свой же парфюм\nНо у меня есть сигареты и красивый костюм\nКак положено всё: белый верх, чёрный низ\nИ мы курим у крыльца, смотримся заебись\n\nВремя первых побед или первых проблем\nЯ по школе не скучаю, не скучаю совсем\nИ на встречу одноклассников мне идти влом\nНостальгия по школе — это стокгольмский синдром\nЭто стокгольмский синдром\nЭто стокгольмский синдром\nЭто стокгольмский синдром\n\nСмотрелись мы по-идиотски, впору пить корвалол\nИ когда я открываю свой школьный альбом\nПонимаю, почему от девчонок облом\nЯ терпел снова и снова, как ужасный прикол\nИз-за частых переездов поменял немало школ\nКак Николя Анелька, если б это был футбол\nВ каждой было много боли и много любви\nДрузей и врагов, интересно как они\n\nЯ не знаю, я не знаю\nЯ не знаю, я не знаю, что там будет в конце\nМеня всегда пугали люди\nМеня всегда пугали люди, имеющие цель\nНапились на дискотеке\nИ потом на линейке нас стыдили при всех\nНо страна наша большая\nКаждого будет ждать грандиозный успех\n\nВремя первых побед или первых проблем\nЯ по школе не скучаю, не скучаю совсем\nИ на встречу одноклассников мне идти влом\nНостальгия по школе — это стокгольмский синдром\nЭто стокгольмский синдром\nЭто стокгольмский синдром\nЭто стокгольмский синдром\n\nВремя первых побед или первых проблем\nЯ по школе не скучаю, не скучаю совсем\nИ на встречу одноклассников мне идти влом\nНостальгия по школе — это стокгольмский синдром\nЭто стокгольмский синдром\nЭто стокгольмский синдром\nЭто стокгольмский синдром"
},
{
    name: "Bonus - WHITE",
    artist: "The Left Rights",
    image: "./assets/covers/white.jpg",
    path: "./assets/audio/white.mp3",
    textColor: '#fff',
    text: "Well we will never die\nIt should come as no surprise\nWe will always multiply\nNever ever be denied\n\nYou know I never rock\nYou know I never roll\nAnd just like Janet Jackson\nI'll be losin' all control\n\nYou know I never rock\nYou know I never roll\nAnd just like Michael Jackson\nAnd just like Michael Jackson\n\nI'll be white (yeah)\nSuburban (yeah)\nMiddle-class (ooh)\nI'll never have to work again\n\nWhite (yeah)\nSuburban (yeah)\nMiddle-class (ooh)\nI'll never have to work again\n\nI can always piss my life away\nThere will never be consequences\nIt doesn't matter what I say\nMommy's always gonna pay for college\n\nWell we will never die\nIt should come as no surprise\nWe will always multiply\nNever ever be denied\n\nBecause i'm white (yeah)\nSuburban (yeah)\nMiddle-class (ooh)\nI'll never have to work again\n\nWhite (yeah)\nSuburban (yeah)\nMiddle-class (ooh)\nI'll never have to work again\n\nYou know I never rock\nYou know I never roll\nAnd just like Janet Jackson\nI'll be losin' all control\n\nYou know I never rock\nYou know I never roll\nAnd just like Michael Jackson\nAnd just like Michael Jackson\n\nI'll be hard-core\nHonkey Galore\nNo one I know\nHas ever been poor\nEven the police\nThey know the score\nMy daddy is a lawyer\nAnd there's nothing that I'm sorry for\n\nLiquor and whores\nI got one black friend\nAnd I don't want more\nThe only thing better\nThan Star Wars\nIs the Keytar solo\nFrom 1984\n\n(oh yeah, this is better than standing still at a Radiohead concert)\n\nSHORT, TALL, GRANDE, VENTI\n\nWell we will never die\nIt should come as no surprise\nWe will always multiply\nNever ever be denied\n\nWhite (yeah)\nSuburban (yeah)\nMiddle-class (ooh)\nI'll never have to work again\n\nWhite (yeah)\nSuburban (yeah)\nMiddle-class (ooh)\nI'll never have to work again\n\nYou know I never rock\nYou know I never roll\nAnd just like Janet Jackson\nI'll be losin' all control\n\nYou know I never rock\nYou know I never roll\nAnd just\nLike\nMichael\nJackson\nI'd be white"
},
{
    name: "Bonus - Sailor in a Life Boat",
    artist: "Euringer",
    image: "./assets/covers/sailor.jpg",
    path: "./assets/audio/sailor.mp3",
    textColor: '#fff',
    text: "Ever living, ever faithful, ever sure, every time\nFrom coast to coast; his imperial majesty!\n\n(Rockin' out)\n\nI’m just another soldier in a fox hole\nI'm just another dog-face on the front line\nI'm just another sailor in a life boat\nI’m just another pilot falling out of the sky\n\nYou got-you got-you got-you got to chill baby\nPut yourself in my place now\nYou got-you got-you got-you got to ill baby\nDon't wait til it's too late now\n\nYou're never gonna kill me in the end\nYou're never gonna fuck me in the head\nYou're never gonna catch me in the act\nYou're never gonna find me in the dark\nThe dark, the dark, the dark, the dark (Whoa)\nThe dark, the dark, the dark, the dark (N-N-Now now now)\nThe dark, the dark, the dark, the dark (Whoa)\nThe dark, the dark, the dark, the dark\nThe dark, the dark, the dark, the dark\n(The dark)\n\n(Rockin' out)\n\nI’m just another dancer in the limelight\nI’m just another bastard with a charm life\nI'm just another sailor in a lifeboat\nI’m just another lover with a wide stroke, now\n\nYou got-you got-you got-you got to chill baby\nPut yourself in my place now\nYou got-you got-you got-you got to kill baby\nWhat the hell's the point of this, now\n\nYou're never gonna kill me in the end\nYou're never gonna fuck me in the head\nYou're never gonna catch me in the act\nYou're never gonna find me in the dark\nThe dark, the dark, the dark, the dark (Whoa)\nThe dark, the dark, the dark, the dark (N-N-Now now now)\nThe dark, the dark, the dark, the dark (Whoa)\nThe dark, the dark, the dark, the dark\nThe dark, the dark, the dark, the dark\n(The dark)\n\nWhat the fuck is he on?\nThey're like what the fuck is he on?\nWhat the fuck is he on?\nThey're like what the fuck is he on?\nWhat the fuck is he on?\nThey're like, what the fuck is he on?\nThey're like, what the fuck is he on?\nThey're like, what the fuck is he on?\nThey're like, what the fuck is he on?\nThey're like, what the fuck is he on?\nThey're like, what the fuck is he on?\nThey're like, what the fuck is he on?\nThey're like, what the fuck is he on?\nThey're like, what the fuck is he on?\nThey're like, what the fuck is he\nWhat the fuck is he\nWhat the fuck is he on?\nThey're like, what the fuck is he on?\nThey're like, what the fuck is he on?\nThey're like, what the fuck is he\nWhat the fuck is he\nWhat the fuck is he on?"
},
{
    name: "Finale - 12 to 12",
    artist: "sombr",
    image: "./assets/covers/12212.png",
    path: "./assets/audio/12212.mp3",
    textColor: '#000',
    text: "I don't want anyone else\nFrom the hours of 12 to 12\nI am not the least compelled\nBy anyone but yourself\nLook at me, it makes me melt\nI know you wanna see me in hell, my love\nI'm dealing with the cards I've dealt\nWhile you're dancing with somebody else\n\nWas it always in your plan to leave eventually?\nBecause to me, there's no one else that could make sense to me\nThe last and final puzzle piece\n\nIn a room full of people, I look for you\nWould you avoid me or would you look for me too?\nTell me, is our story through? (Through)\nOr do our hearts still beat in tune?\n\nI've never felt anything\nLike the love from my final days\nWhy'd you wait\nTo show me you could do it this way?\nWoo, I'll never look at you, look at you the same\nWe met in The Paris café\nI said, 'Can I sit with you? Comment ça se fait?'\nMy mistake\nIf I'd known it would have been this way\nI'd never looked at you, looked in the first place\nWas it always in your plan to leave eventually?\nBecause to me, there's no one else that could make sense to me\nThe last and final puzzle piece\n\nIn a room full of people, I look for you\nWould you avoid me or would you look for me too?\nTell me, is our story through? (Through)\nOr do our hearts still beat in tune?\n\nMaybe I'm delusional\nAnd the way you act is usual\nMaybe in another world\nI won't feel so unlovable (Unlovable)\nOh (Unlovable)\n\nIn a room full of people, I look for you\nWould you avoid me or would you look for me too?\nTell me, is our story through? (Through)\nOr do our hearts still beat in tune?\nIn a room full of people, I look for you\nWould you avoid me or would you look for me too?\nTell me, is our story through? (Through)\nOr do our hearts still beat in tune?"
},
];

let save_track_list = Array.from(track_list);

audio.src = track_list[audio_index].path;
changeCoverTitleAuthor(audio_index);

const playBtn = document.querySelector('#play');
const playBtnCover = document.querySelector('#play_on_cover');

playBtn.onclick = play;
playBtnCover.onclick = play;
record_disk.onclick = showText;

audio.volume = 0.5;
document.querySelector('#volume').oninput = volume;

const progress = document.querySelector('#progress');
progress.oninput = currentTimeUpdate;

const nextBtn = document.querySelector('#next');
nextBtn.onclick = next;

const previousBtn = document.querySelector('#previous');
previousBtn.onclick = backToStart;

const muteBtn = document.querySelector('#mute');
muteBtn.onclick = mute;
muteBtn.addEventListener('mouseover', e => {
    document.querySelector('.volume').classList.toggle('hover');
})
muteBtn.addEventListener('mouseout', e => {
    document.querySelector('.volume').classList.remove('hover');
})
document.querySelector('.volume').addEventListener('mouseover', e => {
    document.querySelector('.volume').classList.toggle('hover');
})
document.querySelector('.volume').addEventListener('mouseout', e => {
    document.querySelector('.volume').classList.remove('hover');
})
audio.ontimeupdate = progressUpdate;

const shuffleBtn = document.querySelector('#shuffle');
shuffleBtn.onclick = shuffle;

const repeatBtn = document.querySelector('#repeat');
repeatBtn.onclick = repeat;



function play() {
    if (document.querySelector('#play.active')) {
        audio.pause();
        playBtn.classList.remove('active');
        document.getElementById('play-svg').href.baseVal = `sprite.svg#play`;
        record_disk.classList.remove('active');
        if (document.querySelector('.text.active')) { showText(); }
    } else {
        audio.play();
        playBtn.classList.toggle('active');
        document.getElementById('play-svg').href.baseVal = `sprite.svg#pause`;
        record_disk.classList.toggle('active');
    }
    RepeatIfNecessary();
    document.activeElement.blur();
}


function backToStart() {

    if (audio.currentTime > 5) {
        audio.pause();
        audio.currentTime = 0;
        audio.play();
    } else
        previous();
}

function changeStopToPlayImg() {
    if (!document.querySelector('#play.active')) {
        playBtn.classList.toggle('active');
        document.getElementById('play-svg').href.baseVal = `sprite.svg#pause`;
        record_disk.classList.toggle('active');
    }
}

function previous() {
    audio_index === 0 ? audio_index = track_list.length - 1 : --audio_index;
    audio.src = track_list[audio_index].path;
    audio.pause();
    audio.currentTime = 0;
    audio.play();
    changeStopToPlayImg();
    changeCoverTitleAuthor(audio_index);
    if (document.querySelector('.text.active')) { showText(); }

    document.activeElement.blur();
}

function next() {
    audio_index === track_list.length - 1 ? audio_index = 0 : ++audio_index;
    audio.src = track_list[audio_index].path;
    audio.pause();
    audio.currentTime = 0;
    audio.play();
    changeStopToPlayImg();
    changeCoverTitleAuthor(audio_index);
    if (document.querySelector('.text.active')) { showText(); }

    document.activeElement.blur();
}

function volume(plus = 0, minus = 0) {
    let v = this.value ? this.value : audio.volume * 100;
    v = v + plus <= 100 ? v + plus : v;
    v = v - minus >= 0 ? v - minus : v;
    audio.volume = v / 100;

    document.querySelector('#volume').value = v;
}

function progressUpdate() {
    let duration = audio.duration;
    let currentTime = audio.currentTime;
    progress.value = 10000 * currentTime / duration;
    document.querySelector('#currentTime').textContent = formatTime(currentTime);
    document.querySelector('#duration').textContent = duration ? formatTime(duration) : "00:00";
}

function currentTimeUpdate() {
    let v = this.value;
    let duration = audio.duration;
    audio.pause();
    audio.currentTime = v * duration / 10000;
    audio.play();
    changeStopToPlayImg();

    RepeatIfNecessary();
}

function formatTime(str) {
    let time = Math.round(+str);
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;
    return (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
}



function changeCoverTitleAuthor(index) {
    cover.style.backgroundImage = `url(${track_list[index].image})`;
    document.querySelector('.bgimg').style.backgroundImage = `url(${track_list[index].image})`;

    document.body.style.backgroundImage = `url(${track_list[index].image})`;
    document.body.style.color = track_list[index].textColor;
    document.querySelector('.mask').style.backgroundColor = track_list[index].textColor === '#fff' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)';
    document.body.style.setProperty('--svg-color', track_list[index].textColor);

    //ищем основной цвет

    //Так нельзя. А жаль((
    /*const fac = new FastAverageColor();
    let img = new Image();
    img.src = track_list[index].image;
    fac.getColorAsync(img)
        .then(color => {
            document.body.style.backgroundColor = color.rgba;
            document.body.style.color = color.isDark ? '#fff' : '#000';
            document.querySelector('.mask').style.backgroundColor = color.isDark ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)';
            document.body.style.setProperty('--svg-color', color.isDark ? '#fff' : '#000');
            document.footer.style.setProperty('--svg-color', color.isDark ? '#fff' : '#000');
        })
        .catch(e => {
            console.log(e);
        });*/

    title.textContent = track_list[index].name;
    author.textContent = track_list[index].artist;
}

function mute() {
    if (document.querySelector('#mute.active')) {
        audio.muted = false;
        muteBtn.classList.remove('active');
        document.getElementById('mute-svg').href.baseVal = `sprite.svg#volume`;
    } else {
        audio.muted = true;
        muteBtn.classList.toggle('active');
        document.getElementById('mute-svg').href.baseVal = `sprite.svg#mute`;
    }

    RepeatIfNecessary();

}

function shuffle() {

    if (shuffleBtn.classList.contains('off')) {
        shuffleBtn.classList.remove('off');
        //мешаю с проверкой на тот случай если вдруг не перемешается
        do{
            track_list.sort(() => Math.random() - 0.5);
        }while(track_list.filter((element, index) => element.name === save_track_list[index].name).length === track_list.length)
        let new_index = track_list.indexOf(save_track_list[audio_index]);

        //меняю местами текущий трек с первым, чтобы длина плейлиста без режима повтора была нормальной
        track_list[0] = [track_list[new_index], track_list[new_index] = track_list[0]][0];
        audio_index = 0;
        changeCoverTitleAuthor(audio_index);
    } else {
        audio_index = save_track_list.indexOf(track_list[audio_index]);
        track_list = Array.from(save_track_list);
        shuffleBtn.classList.toggle('off');
        changeCoverTitleAuthor(audio_index);
    }

    shuffleBtn.focus();

}

function repeat() {

    if (repeatBtn.classList.contains('off')) {
        repeatBtn.classList.remove('off');
    } else if (!repeatBtn.classList.contains('off') && !repeatBtn.classList.contains('one')) {
        repeatBtn.classList.toggle('one');
        document.getElementById('repeat-svg').href.baseVal = `sprite.svg#repeat-one`;
    } else {
        repeatBtn.classList.remove('one');
        repeatBtn.classList.toggle('off');
        document.getElementById('repeat-svg').href.baseVal = `sprite.svg#repeat`;
    }

    RepeatIfNecessary();
}

function RepeatIfNecessary() {
    if (repeatBtn.classList.contains('off')) {
        audio.onended = audio_index < track_list.length - 1 ? next : play
    } else if (repeatBtn.classList.contains('one')) {
        audio.onended = restart;
    } else {
        audio.onended = next;
    }
}

function restart() {
    audio.play();
}


document.addEventListener('keydown', e => {
    e.code === 'Space' ? play() :
        (e.code === 'MediaTrackNext' || e.code === 'ArrowRight') ? next() :
            (e.code === 'MediaTrackPrevious' || e.code === 'ArrowLeft') ? backToStart() :
                e.code === 'ArrowUp' ? volume(1, 0) :
                    e.code === 'ArrowDown' ? volume(0, 1) : 0;
})

const infoBtn = document.querySelector('.info');
const infoWindow = document.querySelector('.functionalInfo');
if (infoBtn) {
    infoBtn.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        infoBtn.classList.toggle('_active');
        infoWindow.classList.toggle('_active');

        document.activeElement.blur();
    })
}

infoWindow.addEventListener("click", function (e) {
    document.body.classList.remove('_lock');
    infoBtn.classList.remove('_active');
    infoWindow.classList.remove('_active');
})

function showText() {
    if (document.querySelector('.text.active')) {
        document.querySelector('.text').classList.remove('active');
        document.querySelector('#text').textContent = '';
    } else {
        document.querySelector('.text').classList.toggle('active');
        document.querySelector('#text').textContent = track_list[audio_index].text;
    }
    document.activeElement.blur();
}