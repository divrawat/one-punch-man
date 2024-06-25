
// export const DOMAIN = 'http://localhost:3000';
export const DOMAIN = 'https://www.onepunchmanmanga.in.net';


export const MANGA_DESCRIPTION = `<a href="${DOMAIN}"><u>One Punch Man</u></a> follows Saitama, an ordinary-looking guy with the extraordinary ability to defeat any opponent with a single punch. Despite his unmatched power, Saitama is bored and longs for a real challenge. The anime blends action and humor as Saitama faces various monsters and villains, befriends other heroes, and navigates everyday life, all while satirizing typical superhero tropes.`

export const MANGA_NAME = 'One Punch Man';
export const MANGA_AUTHOR = 'Yusuke Murata';
export const MANGA_RELEASE = '2012';
export const MANGA_STATUS = 'Ongoing';
export const MANGA_ARTIST = 'Yusuke Murata';
export const MANGA_STUDIO = 'Madhouse';
export const MANGA_GENRE = 'Action, Adventure, Drama, Comedy, Shonen';

export const CHAPTER_PREFIX = 'one-punch-man-chapter';
export const IMAGE_PREFIX = 'images/one-punch-man';
export const NEXT_PREVIOUS_PREFIX = 'manga/one-punch-man-chapter';
export const URL_PREFIX = 'manga/one-punch-man-chapter';

export const AUTHOR_PAGE = `${DOMAIN}/one-punch-man-team`;
export const LOGO_URL = `${DOMAIN}/logo.webp`;
export const COVER_IMG = `${DOMAIN}/cover.webp`;
export const BEHIND_COVER_IMG = "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/02/one-punch-man-a-hero-nobody-knows-feature-header.jpg";


// Navbar
export const logo = <img src={`${LOGO_URL}`} alt="Logo" className="h-[85px] w-[85px] mr-5 md:ml-0 ml-4 md:pb-2 md:my-0 my-1" />

export const APP_NAME = 'One Punch Man';
export const NavbarName = "One Punch Man";

export const APP_DESCRIPTION = `Read "${MANGA_NAME}" manga online at ${DOMAIN}. The story revolves around the life of Saitama, an unassuming hero who possesses an unparalleled power: the ability to defeat any foe with just one punch. Despite his incredible strength, Saitama finds himself in a state of existential crisis. He's become bored and disillusioned with the lack of challenge in his hero work, as no opponent has proven to be a worthy adversary`;

export const DISQUS_SHORTNAME = "my-cms-7";


export const MANGA_SUMMARY = [
    {
        id: 1,
        content: "'One Punch Man' is a captivating anime series that revolves around the life of Saitama, an unassuming hero who possesses an unparalleled power: the ability to defeat any foe with just one punch. Despite his incredible strength, Saitama finds himself in a state of existential crisis. He's become bored and disillusioned with the lack of challenge in his hero work, as no opponent has proven to be a worthy adversary. This sense of ennui contrasts sharply with his initial enthusiasm for becoming a hero, which was born out of a desire for excitement and purpose."
    },
    {
        id: 2,
        content: "Throughout the series, Saitama encounters a wide array of adversaries, ranging from monstrous creatures to nefarious villains bent on destruction. However, regardless of their size or strength, they all fall to Saitama's overwhelming power with relative ease. This leads to a cycle of disappointment and frustration for Saitama, who longs for the thrill of a genuine battle that can push him to his limits."
    },
    {
        id: 3,
        content: "Despite his struggles with boredom and disillusionment, Saitama remains committed to his hero duties. He forms alliances with other heroes, such as the earnest cyborg Genos and the skilled martial artist Bang, and collaborates with them to protect the city from various threats. These interactions with fellow heroes provide moments of camaraderie and friendship for Saitama, offering him some reprieve from his solitary existence."
    },
    {
        id: 4,
        content: "In addition to battling villains, Saitama also contends with the mundanities of everyday life. He grapples with issues like public recognition, financial struggles, and the challenges of maintaining a secret identity. These aspects of Saitama's life add depth to his character and contribute to the series' blend of action, humor, and satire."
    },
    {
        id: 5,
        content: "'One Punch Man' is known for its stunning animation, dynamic fight scenes, and clever writing. It skillfully subverts traditional superhero tropes, offering a fresh and humorous take on the genre. Through Saitama's journey, the series explores themes of purpose, identity, and the pursuit of greatness. It's a must-watch for fans of action-packed anime and anyone looking for a unique twist on the superhero genre."
    }
];




export const navLinks = [
    { text: 'Home', href: `${DOMAIN}` },
    { text: 'DMCA', href: `${DOMAIN}/dmca` },
    { text: 'Terms & Conditions', href: `${DOMAIN}/terms-and-conditions` },
];

export const FooterLinks = [
    { text: 'About', href: `${DOMAIN}/about` },
    { text: 'Contact', href: `${DOMAIN}/contact` },
    { text: 'Disclaimer', href: `${DOMAIN}/disclaimer` },
    { text: 'Privacy Policy', href: `${DOMAIN}/privacy-policy` },
    { text: 'Terms & Conditions', href: `${DOMAIN}/terms-and-conditions` }
];


export const RelatedMangaLinks = [
    {
        imageUrl: `${DOMAIN}/related/frieran.webp`,
        title: 'Frieran Manga',
        link: 'https://www.frierenmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/one-punch-man.webp`,
        title: 'One Punch Man Manga',
        link: 'https://www.onepunchmanmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/jujutsu-kaisen.webp`,
        title: 'Jujutsu Kaisen Manga',
        link: 'https://www.jujutsukaisenmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/chainsaw-man.webp`,
        title: 'Chainsaw Man Manga',
        link: 'https://www.chainsawmanmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/mushoku-tensei.webp`,
        title: 'Mushoku Tensei Manga',
        link: 'https://www.mushokutenseimanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/one-piece.webp`,
        title: 'One Piece Manga',
        link: 'https://www.onepiecemanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/jinx.webp`,
        title: 'Jinx Manga',
        link: 'https://www.jinxmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/boruto.webp`,
        title: 'Boruto Manga',
        link: 'https://www.borutomanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/demon-slayer.webp`,
        title: 'Demon Slayer Manga',
        link: 'https://www.demonslayermanga.in.net',
    },

    /*
    {
        imageUrl: `${DOMAIN}/related/my-dress-up-darling.webp`,
        title: 'My Dress Up Darling Manga',
        link: 'https://www.mydressupdarlingmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/blue-lock.webp`,
        title: 'Blue Lock Manga',
        link: 'https://www.bluelockmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/solo-leveling.webp`,
        title: 'Solo Leveling Manga',
        link: 'https://www.sololevelingimanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/my-hero-academia.webp`,
        title: 'My Hero Academia Manga',
        link: 'https://www.myheroacademiamanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/vinland-saga.webp`,
        title: 'Vinland Saga Manga',
        link: 'https://www.vinlandsagamanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/black-clover.webp`,
        title: 'Black Clover Manga',
        link: 'https://www.blackclovermanga.in.net',
    },
*/

];




export const chaptersData = [
    {
        "chapterNumber": "1",
        "numImages": 19
    },
    {
        "chapterNumber": "2",
        "numImages": 16
    },
    {
        "chapterNumber": "3",
        "numImages": 22
    },
    {
        "chapterNumber": "4",
        "numImages": 25
    },
    {
        "chapterNumber": "5",
        "numImages": 22
    },
    {
        "chapterNumber": "6",
        "numImages": 24
    },
    {
        "chapterNumber": "7",
        "numImages": 16
    },
    {
        "chapterNumber": "8",
        "numImages": 24
    },
    {
        "chapterNumber": "8a",
        "numImages": 26
    },
    {
        "chapterNumber": "9",
        "numImages": 33
    },
    {
        "chapterNumber": "10",
        "numImages": 32
    },
    {
        "chapterNumber": "11",
        "numImages": 24
    },
    {
        "chapterNumber": "12",
        "numImages": 28
    },
    {
        "chapterNumber": "13",
        "numImages": 28
    },
    {
        "chapterNumber": "14",
        "numImages": 24
    },
    {
        "chapterNumber": "15",
        "numImages": 17
    },
    {
        "chapterNumber": "15a",
        "numImages": 17
    },
    {
        "chapterNumber": "16",
        "numImages": 31
    },
    {
        "chapterNumber": "17",
        "numImages": 32
    },
    {
        "chapterNumber": "18",
        "numImages": 22
    },
    {
        "chapterNumber": "19",
        "numImages": 26
    },
    {
        "chapterNumber": "20",
        "numImages": 40
    },
    {
        "chapterNumber": "20a",
        "numImages": 28
    },
    {
        "chapterNumber": "20b",
        "numImages": 32
    },
    {
        "chapterNumber": "21",
        "numImages": 87
    },
    {
        "chapterNumber": "22",
        "numImages": 42
    },
    {
        "chapterNumber": "23",
        "numImages": 26
    },
    {
        "chapterNumber": "24",
        "numImages": 51
    },
    {
        "chapterNumber": "24a",
        "numImages": 5
    },
    {
        "chapterNumber": "25",
        "numImages": 75
    },
    {
        "chapterNumber": "26",
        "numImages": 30
    },
    {
        "chapterNumber": "27",
        "numImages": 29
    },
    {
        "chapterNumber": "28",
        "numImages": 26
    },
    {
        "chapterNumber": "29",
        "numImages": 20
    },
    {
        "chapterNumber": "30",
        "numImages": 27
    },
    {
        "chapterNumber": "31",
        "numImages": 30
    },
    {
        "chapterNumber": "32",
        "numImages": 70
    },
    {
        "chapterNumber": "33",
        "numImages": 30
    },
    {
        "chapterNumber": "34",
        "numImages": 32
    },
    {
        "chapterNumber": "34a",
        "numImages": 22
    },
    {
        "chapterNumber": "35",
        "numImages": 41
    },
    {
        "chapterNumber": "36",
        "numImages": 54
    },
    {
        "chapterNumber": "37",
        "numImages": 32
    },
    {
        "chapterNumber": "37a",
        "numImages": 19
    },
    {
        "chapterNumber": "37b",
        "numImages": 4
    },
    {
        "chapterNumber": "37c",
        "numImages": 34
    },
    {
        "chapterNumber": "38",
        "numImages": 80
    },
    {
        "chapterNumber": "39",
        "numImages": 21
    },
    {
        "chapterNumber": "40",
        "numImages": 22
    },
    {
        "chapterNumber": "40a",
        "numImages": 32
    },
    {
        "chapterNumber": "40b",
        "numImages": 26
    },
    {
        "chapterNumber": "41",
        "numImages": 33
    },
    {
        "chapterNumber": "42",
        "numImages": 21
    },
    {
        "chapterNumber": "43",
        "numImages": 25
    },
    {
        "chapterNumber": "44",
        "numImages": 36
    },
    {
        "chapterNumber": "45",
        "numImages": 25
    },
    {
        "chapterNumber": "46",
        "numImages": 23
    },
    {
        "chapterNumber": "47",
        "numImages": 23
    },
    {
        "chapterNumber": "47a",
        "numImages": 10
    },
    {
        "chapterNumber": "48",
        "numImages": 20
    },
    {
        "chapterNumber": "49",
        "numImages": 13
    },
    {
        "chapterNumber": "50",
        "numImages": 23
    },
    {
        "chapterNumber": "51",
        "numImages": 17
    },
    {
        "chapterNumber": "52",
        "numImages": 14
    },
    {
        "chapterNumber": "53",
        "numImages": 14
    },
    {
        "chapterNumber": "54",
        "numImages": 12
    },
    {
        "chapterNumber": "55",
        "numImages": 19
    },
    {
        "chapterNumber": "55a",
        "numImages": 13
    },
    {
        "chapterNumber": "55b",
        "numImages": 21
    },
    {
        "chapterNumber": "55c",
        "numImages": 39
    },
    {
        "chapterNumber": "56",
        "numImages": 14
    },
    {
        "chapterNumber": "57",
        "numImages": 16
    },
    {
        "chapterNumber": "58",
        "numImages": 48
    },
    {
        "chapterNumber": "59",
        "numImages": 28
    },
    {
        "chapterNumber": "60",
        "numImages": 27
    },
    {
        "chapterNumber": "61",
        "numImages": 29
    },
    {
        "chapterNumber": "61a",
        "numImages": 36
    },
    {
        "chapterNumber": "62",
        "numImages": 9
    },
    {
        "chapterNumber": "62a",
        "numImages": 14
    },
    {
        "chapterNumber": "63",
        "numImages": 14
    },
    {
        "chapterNumber": "63a",
        "numImages": 26
    },
    {
        "chapterNumber": "64",
        "numImages": 15
    },
    {
        "chapterNumber": "64a",
        "numImages": 23
    },
    {
        "chapterNumber": "65",
        "numImages": 12
    },
    {
        "chapterNumber": "65a",
        "numImages": 13
    },
    {
        "chapterNumber": "66",
        "numImages": 26
    },
    {
        "chapterNumber": "67",
        "numImages": 30
    },
    {
        "chapterNumber": "67a",
        "numImages": 20
    },
    {
        "chapterNumber": "68",
        "numImages": 16
    },
    {
        "chapterNumber": "68a",
        "numImages": 26
    },
    {
        "chapterNumber": "69",
        "numImages": 42
    },
    {
        "chapterNumber": "70a",
        "numImages": 21
    },
    {
        "chapterNumber": "70b",
        "numImages": 33
    },
    {
        "chapterNumber": "71",
        "numImages": 43
    },
    {
        "chapterNumber": "72a",
        "numImages": 26
    },
    {
        "chapterNumber": "72b",
        "numImages": 35
    },
    {
        "chapterNumber": "73a",
        "numImages": 34
    },
    {
        "chapterNumber": "73b",
        "numImages": 12
    },
    {
        "chapterNumber": "73c",
        "numImages": 17
    },
    {
        "chapterNumber": "74a",
        "numImages": 20
    },
    {
        "chapterNumber": "74b",
        "numImages": 24
    },
    {
        "chapterNumber": "74c",
        "numImages": 13
    },
    {
        "chapterNumber": "75",
        "numImages": 41
    },
    {
        "chapterNumber": "76",
        "numImages": 18
    },
    {
        "chapterNumber": "77",
        "numImages": 32
    },
    {
        "chapterNumber": "78",
        "numImages": 43
    },
    {
        "chapterNumber": "79",
        "numImages": 47
    },
    {
        "chapterNumber": "80",
        "numImages": 34
    },
    {
        "chapterNumber": "80a",
        "numImages": 24
    },
    {
        "chapterNumber": "81",
        "numImages": 49
    },
    {
        "chapterNumber": "82",
        "numImages": 62
    },
    {
        "chapterNumber": "83",
        "numImages": 57
    },
    {
        "chapterNumber": "84",
        "numImages": 136
    },
    {
        "chapterNumber": "85",
        "numImages": 45
    },
    {
        "chapterNumber": "85a",
        "numImages": 4
    },
    {
        "chapterNumber": "86",
        "numImages": 32
    },
    {
        "chapterNumber": "87",
        "numImages": 43
    },
    {
        "chapterNumber": "88",
        "numImages": 58
    },
    {
        "chapterNumber": "89",
        "numImages": 100
    },
    {
        "chapterNumber": "90",
        "numImages": 46
    },
    {
        "chapterNumber": "91",
        "numImages": 58
    },
    {
        "chapterNumber": "92",
        "numImages": 66
    },
    {
        "chapterNumber": "93",
        "numImages": 70
    },
    {
        "chapterNumber": "94",
        "numImages": 142
    },
    {
        "chapterNumber": "95",
        "numImages": 53
    },
    {
        "chapterNumber": "96",
        "numImages": 31
    },
    {
        "chapterNumber": "97",
        "numImages": 32
    },
    {
        "chapterNumber": "98",
        "numImages": 38
    },
    {
        "chapterNumber": "99",
        "numImages": 10
    },
    {
        "chapterNumber": "99a",
        "numImages": 10
    },
    {
        "chapterNumber": "99b",
        "numImages": 39
    },
    {
        "chapterNumber": "99c",
        "numImages": 49
    },
    {
        "chapterNumber": "100",
        "numImages": 49
    },
    {
        "chapterNumber": "100a",
        "numImages": 27
    },
    {
        "chapterNumber": "101",
        "numImages": 48
    },
    {
        "chapterNumber": "102",
        "numImages": 16
    },
    {
        "chapterNumber": "103",
        "numImages": 15
    },
    {
        "chapterNumber": "104",
        "numImages": 23
    },
    {
        "chapterNumber": "105",
        "numImages": 43
    },
    {
        "chapterNumber": "106",
        "numImages": 36
    },
    {
        "chapterNumber": "107",
        "numImages": 21
    },
    {
        "chapterNumber": "108",
        "numImages": 38
    },
    {
        "chapterNumber": "109",
        "numImages": 20
    },
    {
        "chapterNumber": "110",
        "numImages": 28
    },
    {
        "chapterNumber": "111",
        "numImages": 28
    },
    {
        "chapterNumber": "111a",
        "numImages": 7
    },
    {
        "chapterNumber": "112",
        "numImages": 36
    },
    {
        "chapterNumber": "113",
        "numImages": 26
    },
    {
        "chapterNumber": "114",
        "numImages": 22
    },
    {
        "chapterNumber": "115",
        "numImages": 29
    },
    {
        "chapterNumber": "116",
        "numImages": 25
    },
    {
        "chapterNumber": "117",
        "numImages": 21
    },
    {
        "chapterNumber": "118",
        "numImages": 29
    },
    {
        "chapterNumber": "119",
        "numImages": 30
    },
    {
        "chapterNumber": "120",
        "numImages": 27
    },
    {
        "chapterNumber": "121",
        "numImages": 22
    },
    {
        "chapterNumber": "122",
        "numImages": 25
    },
    {
        "chapterNumber": "122a",
        "numImages": 11
    },
    {
        "chapterNumber": "123",
        "numImages": 30
    },
    {
        "chapterNumber": "124",
        "numImages": 18
    },
    {
        "chapterNumber": "125",
        "numImages": 15
    },
    {
        "chapterNumber": "126",
        "numImages": 20
    },
    {
        "chapterNumber": "127",
        "numImages": 38
    },
    {
        "chapterNumber": "128",
        "numImages": 27
    },
    {
        "chapterNumber": "129",
        "numImages": 27
    },
    {
        "chapterNumber": "130",
        "numImages": 26
    },
    {
        "chapterNumber": "131",
        "numImages": 25
    },
    {
        "chapterNumber": "132",
        "numImages": 25
    },
    {
        "chapterNumber": "133",
        "numImages": 42
    },
    {
        "chapterNumber": "134",
        "numImages": 26
    },
    {
        "chapterNumber": "134a",
        "numImages": 17
    },
    {
        "chapterNumber": "135",
        "numImages": 18
    },
    {
        "chapterNumber": "136",
        "numImages": 12
    },
    {
        "chapterNumber": "137",
        "numImages": 34
    },
    {
        "chapterNumber": "138",
        "numImages": 40
    },
    {
        "chapterNumber": "139",
        "numImages": 27
    },
    {
        "chapterNumber": "140",
        "numImages": 17
    },
    {
        "chapterNumber": "141",
        "numImages": 32
    },
    {
        "chapterNumber": "142",
        "numImages": 13
    },
    {
        "chapterNumber": "143",
        "numImages": 37
    },
    {
        "chapterNumber": "144",
        "numImages": 23
    },
    {
        "chapterNumber": "145",
        "numImages": 21
    },
    {
        "chapterNumber": "146",
        "numImages": 28
    },
    {
        "chapterNumber": "147",
        "numImages": 33
    },
    {
        "chapterNumber": "148",
        "numImages": 28
    },
    {
        "chapterNumber": "149",
        "numImages": 29
    },
    {
        "chapterNumber": "150",
        "numImages": 37
    },
    {
        "chapterNumber": "151",
        "numImages": 26
    },
    {
        "chapterNumber": "152",
        "numImages": 41
    },
    {
        "chapterNumber": "153",
        "numImages": 40
    },
    {
        "chapterNumber": "154",
        "numImages": 33
    },
    {
        "chapterNumber": "154a",
        "numImages": 14
    },
    {
        "chapterNumber": "155",
        "numImages": 45
    },
    {
        "chapterNumber": "156",
        "numImages": 39
    },
    {
        "chapterNumber": "157",
        "numImages": 40
    },
    {
        "chapterNumber": "158",
        "numImages": 41
    },
    {
        "chapterNumber": "159",
        "numImages": 24
    },
    {
        "chapterNumber": "160",
        "numImages": 29
    },
    {
        "chapterNumber": "161",
        "numImages": 23
    },
    {
        "chapterNumber": "162",
        "numImages": 42
    },
    {
        "chapterNumber": "163",
        "numImages": 40
    },
    {
        "chapterNumber": "163a",
        "numImages": 17
    },
    {
        "chapterNumber": "164",
        "numImages": 47
    },
    {
        "chapterNumber": "165",
        "numImages": 42
    },
    {
        "chapterNumber": "166",
        "numImages": 45
    },
    {
        "chapterNumber": "167",
        "numImages": 52
    },
    {
        "chapterNumber": "168",
        "numImages": 71
    },
    {
        "chapterNumber": "169",
        "numImages": 45
    },
    {
        "chapterNumber": "170",
        "numImages": 23
    },
    {
        "chapterNumber": "171",
        "numImages": 30
    },
    {
        "chapterNumber": "172",
        "numImages": 37
    },
    {
        "chapterNumber": "173",
        "numImages": 36
    },
    {
        "chapterNumber": "174",
        "numImages": 29
    },
    {
        "chapterNumber": "175",
        "numImages": 31
    },
    {
        "chapterNumber": "176",
        "numImages": 28
    },
    {
        "chapterNumber": "177",
        "numImages": 35
    },
    {
        "chapterNumber": "178",
        "numImages": 29
    },
    {
        "chapterNumber": "179",
        "numImages": 36
    },
    {
        "chapterNumber": "180",
        "numImages": 33
    },
    {
        "chapterNumber": "181",
        "numImages": 30
    },
    {
        "chapterNumber": "182",
        "numImages": 39
    },
    {
        "chapterNumber": "183",
        "numImages": 28
    },
    {
        "chapterNumber": "184",
        "numImages": 27
    },
    {
        "chapterNumber": "185",
        "numImages": 30
    },
    {
        "chapterNumber": "186",
        "numImages": 34
    },
    {
        "chapterNumber": "187",
        "numImages": 41
    },
    {
        "chapterNumber": "187a",
        "numImages": 16
    },
    {
        "chapterNumber": "188",
        "numImages": 31
    },
    {
        "chapterNumber": "189",
        "numImages": 33
    },
    {
        "chapterNumber": "190",
        "numImages": 36
    },
    {
        "chapterNumber": "191",
        "numImages": 33
    },
    {
        "chapterNumber": "192",
        "numImages": 36
    },
    {
        "chapterNumber": "193",
        "numImages": 33
    },
    {
        "chapterNumber": "194",
        "numImages": 38
    },
    {
        "chapterNumber": "195",
        "numImages": 14
    },
    {
        "chapterNumber": "195a",
        "numImages": 16
    },
    {
        "chapterNumber": "196",
        "numImages": 22
    },
    {
        "chapterNumber": "197",
        "numImages": 20
    },
    {
        "chapterNumber": "198",
        "numImages": 14
    },
    {
        "chapterNumber": "199",
        "numImages": 16
    },
    {
        "chapterNumber": "200",
        "numImages": 14
    },
    {
        "chapterNumber": "201",
        "numImages": 27
    },
    {
        "chapterNumber": "202",
        "numImages": 13
    },
    {
        "chapterNumber": "203",
        "numImages": 22
    }
];