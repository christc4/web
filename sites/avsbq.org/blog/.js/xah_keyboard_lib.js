"use strict";
/*
copyright 2020 2024 by Xah Lee
2017-05-02
2024-04-28
*/
/*
f_create_layout_table(layout1, layout2)
return a map object.
layout1 is a string. e.g.

a b c d
e f shift

layout2 is a string. e.g.

a o e i
m n ctrl

return a map object, e.g.

a â†’ a
b â†’ o
c â†’ e
d â†’ i
e â†’ m
f â†’ n
shift â†’ ctrl

Each layout string is split into array, by whitespaces.
Result should have same length.
Then, each element is mapped to the other.
If the chars are the same, they are not included in the result.

Version: 2024-04-18
*/
const f_create_layout_table = (Layout1, Layout2) => {
    const xkeys1 = Layout1.split(/[ \n]+/);
    const xkeys2 = Layout2.split(/[ \n]+/);
    if (xkeys1.length !== xkeys2.length) {
        const xerr = `Error. Layout lengths are different.
${xkeys1} has length ${xkeys1.length}
${xkeys2} has length ${xkeys2.length}
`;
        throw (new Error(xerr));
    }
    const xresult = new Map([]);
    xkeys1.forEach((item, idx) => {
        if (item === xkeys2[idx]) {
        }
        else {
            xresult.set(item, xkeys2[idx]);
        }
    });
    return xresult;
};
const Xasciiart = {
    //hhh---------------------
    adnw: `
 ^ ! @ # $ % ^ & * ( ) { }
\` 1 2 3 4 5 6 7 8 9 0 - ]

k u Ã¼ . Ã¤ v g c l j f = \\
h i e a o d t r n s ÃŸ
x y Ã¶ , q b p w m z

K U Ãœ > Ã„ V G C L J F + |
H I E A O D T R N S áºž
X Y Ã– < Q B P W M Z
`,
    //hhh---------------------
    asset: `
 ~ ! @ # $ % ^ & * ( ) _ +
\` 1 2 3 4 5 6 7 8 9 0 - =

q w j f g y p u l ; [ ] \\
a s e t d h n i o r '
z x c v b k m , . /

Q W J F G Y P U L : { } |
A S E T D H N I O R "
Z X C V B K M < > ?
`,
    //hhh---------------------
    azerty_french: `
â€ 1 2 3 4 5 6 7 8 9 0 Â° +
Â² & Ã© " ' ( - Ã¨ _ Ã§ Ã  ) =

a z e r t y u i o p ^ $ *
q s d f g h j k l m Ãº
w x c v b n , ; : !

A Z E R T Y U I O P Â¨ Â£ Î¼
Q S D F G H J K L M %
W X C V B N ? . / Â§
`,
    //hhh---------------------
    beakl15: `
 ~ ! @ # $ % ^ & * ( ) _ +
\` 1 2 3 4 5 6 7 8 9 0 - =

q h o u x g c r f z [ ] \\
y i e a . d s t n b ;
j / , k ' w m l p v

Q H O U X G C R F Z { } \\
Y I E A > D S T N B :
J ? < K " W M L P V
`,
    //hhh---------------------
    canary: `
 ~ ! @ # $ % ^ & * ( ) _ +
\` 1 2 3 4 5 6 7 8 9 0 - =

w l y p k z x o u ; [ ] \\
c r s t b f n e i a '
j v d g q m h / , .

W L Y P K Z X O U ; { } |
C R S T B F N E I A "
J V D G Q M H  ? < >
`,
    //hhh---------------------
    bepo: `
# 1 2 3 4 5 6 7 8 9 0 Â° \`
$ " Â« Â» ( ) @ + - / * = %

b Ã© p o Ã¨ ^ v d l j z w \\
a u i e , c t s r n m
Ã  y x . k ' q g h f

B Ã‰ P O Ãˆ ! V D L J Z W |
A U I E ; C T S R N M
Ã€ Y X : K ? Q G H F
`,
    //hhh---------------------
    colemak: `
 ~ ! @ # $ % ^ & * ( ) _ +
\` 1 2 3 4 5 6 7 8 9 0 - =

q w f p g j l u y ; [ ] \\
a r s t d h n e i o '
z x c v b k m , . /

Q W F P G J L U Y : { } |
A R S T D H N E I O "
Z X C V B K M < > ?
`,
    //hhh---------------------
    colemak_dh: `
 ~ ! @ # $ % ^ & * ( ) _ +
\` 1 2 3 4 5 6 7 8 9 0 - =

q w f p b j l u y ; [ ] \\
a r s t g m n e i o '
z x c d v k h , . /

Q W F P B J L U Y : { } |
A R S T G M N E I O "
Z X C D V K H < > ?
`,
    //hhh---------------------
    dvorak: `
 ~ ! @ # $ % ^ & * ( ) { }
\` 1 2 3 4 5 6 7 8 9 0 [ ]

' , . p y f g c r l / = \\
a o e u i d h t n s -
; q j k x b m w v z

" < > P Y F G C R L ? + |
A O E U I D H T N S _
: Q J K X B M W V Z
`,
    //hhh---------------------
    engrammer: `
 ~ ! @ # $ % ^ & * ( ) { }
\` 1 2 3 4 5 6 7 8 9 0 [ ]

b y o u ' ; l d w v z = \\
c i e a , . h t s n q
g x j k - / r m f p

B Y O U " : L D W V Z + |
C I E A < > H T S N Q
G X J K _ ? R M F P
`,
    //hhh---------------------
    halmak: `
 ~ ! @ # $ % ^ & * ( ) _ +
\` 1 2 3 4 5 6 7 8 9 0 - =

w l r b z ; q u d j [ ] \\
s h n t , . a e o i '
f m v c / g p x k y

W L R B Z : Q U D J { } |
S H N T < > A E O I "
F M V C ? G P X K Y
`,
    //hhh---------------------
    jcuken: `
Ð ! " â„– ; % : ? * ( ) _ +
Ñ‘ 1  2 3 4 5 6 7 8 9 0 - =

Ð¹ Ñ† Ñƒ Ðº Ðµ Ð½ Ð³ Ñˆ Ñ‰ Ð· Ñ… ÑŠ \\
Ñ„ Ñ‹ Ð² Ð° Ð¿ Ñ€ Ð¾ Ð» Ð´ Ð¶ Ñ
Ñ Ñ‡ Ñ Ð¼ Ð¸ Ñ‚ ÑŒ Ð± ÑŽ .

Ð™ Ð¦ Ð£ Ðš Ð• Ð Ð“ Ð¨ Ð© Ð— Ð¥ Ðª |
Ð¤ Ð« Ð’ Ð ÐŸ Ð  Ðž Ð› Ð” Ð– Ð­
Ð¯ Ð§ Ð¡ Ðœ Ð˜ Ð¢ Ð¬ Ð‘ Ð® ,
`,
    //hhh---------------------
    minimak: `
 ~ ! @ # $ % ^ & * ( ) _ +
\` 1 2 3 4 5 6 7 8 9 0 - =

q w d r k y u i o p [ ] \\
a s t f g h j e l ; '
z x c v b n m , . /

Q W D R K Y U I O P { } |
A S T F G H J E L : "
Z X C V B N M < > ?
`,
    //hhh---------------------
    neo: `
 ^ ! @ # $ % ^ & * ( ) { }
\` 1 2 3 4 5 6 7 8 9 0 - ]

x v l c w k h g f q ÃŸ = \\
u i a e o s n r t d y
Ã¼ Ã¶ Ã¤ p z b m , . j

X V L C W K H G F Q ? + |
U I A E O S N R T D Y
Ãœ Ã– Ã„ P Z B M , . J
`,
    //hhh---------------------
    norman: `
 ~ ! @ # $ % ^ & * ( ) _ +
\` 1 2 3 4 5 6 7 8 9 0 - =

q w d f k j u r l ; [ ] \\
a s e t g y n i o h '
z x c v b p m , . /

Q W D F K J U R L : { } |
A S E T G Y N I O H "
Z X C V B P M < > ?
`,
    //hhh---------------------
    pt_nativo: `
* ! " # $ % & / ( ) = Âª >
+ 1 2 3 4 5 6 7 8 9 0 Âº <

' , . h x w l t c p ~ - \\
i e a o u m d s r n Â´
Â« Ã§ j b k q v g f z

? ; : H X W L T C P ^ _ |
I E A O U M D S R N \`
Y Ã‡ J B K Q V G F Z
`,
    //hhh---------------------
    qfmlwy: `
 ~ ! @ # $ % ^ & * ( ) _ +
\` 1 2 3 4 5 6 7 8 9 0 - =

q f m l w y u o b j [ ] \\
d s t n r i a e h ; '
z v g c x p k , . /

Q F M L W Y U O B J { } |
D S T N R I A E H : "
Z V G C X P K < > ?
`,
    //hhh---------------------
    qwerty: `
 ~ ! @ # $ % ^ & * ( ) _ +
\` 1 2 3 4 5 6 7 8 9 0 - =

q w e r t y u i o p [ ] \\
a s d f g h j k l ; '
z x c v b n m , . /

Q W E R T Y U I O P { } |
A S D F G H J K L : "
Z X C V B N M < > ?
`,
    //hhh---------------------
    qwpr: `
 ~ ! @ # $ % ^ & * ( ) _ +
\` 1 2 3 4 5 6 7 8 9 0 - =

q w p r f y u k l ; [ ] \\
a s d t g h n i o e '
z x c v b j m , . /

Q W P R F Y U K L : { } |
A S D T G H N I O E "
Z X C V B J M < > ?
`,
    //hhh---------------------
    workman: `
 ~ ! @ # $ % ^ & * ( ) _ +
\` 1 2 3 4 5 6 7 8 9 0 - =

q d r w b j f u p ; [ ] \\
a s h t g y n e o i '
z x m c v k l , . /

Q D R W B J F U P : { } |
A S H T G Y N E O I "
Z X M C V K L < > ?
`,
};
/*
XKeyTables, a object. for translating key between layouts.
XKeyTables has string keys like
dvorak
colemak
workman
etc.
each's value is a map table.
of the table, each key is a char in qwerty, and value is dvorak or other.
2024-04-29
*/
const XKeyTables = {};
(Object.entries(Xasciiart)).map(([xkey, xval]) => {
    XKeyTables[xkey] = f_create_layout_table(Xasciiart["qwerty"], xval);
});
/*
XLetterFreq is a data object.
eg XLetterFreq.english is a map, where each key is a char, value is their frequency, as percentage, in english text.
 */
const XLetterFreq = {
    english: new Map([
        ["e", 12.7],
        ["t", 9.06],
        ["a", 8.17],
        ["o", 7.51],
        ["i", 6.97],
        ["n", 6.75],
        ["s", 6.33],
        ["h", 6.09],
        ["r", 5.99],
        ["d", 4.25],
        ["l", 4.03],
        ["c", 2.78],
        ["u", 2.76],
        ["m", 2.41],
        ["w", 2.36],
        ["f", 2.23],
        ["g", 2.02],
        ["y", 1.97],
        ["p", 1.93],
        ["b", 1.49],
        ["v", 0.978],
        ["k", 0.772],
        ["j", 0.153],
        ["x", 0.150],
        ["q", 0.0950],
        ["z", 0.0740],
    ]),
    french: new Map([
        ["e", 14.7],
        ["s", 7.95],
        ["a", 7.64],
        ["i", 7.53],
        ["t", 7.24],
        ["n", 7.09],
        ["r", 6.69],
        ["u", 6.31],
        ["o", 5.80],
        ["l", 5.46],
        ["d", 3.67],
        ["c", 3.26],
        ["m", 2.97],
        ["p", 2.52],
        ["v", 1.84],
        ["Ã©", 1.50],
        ["q", 1.36],
        ["f", 1.07],
        ["b", 0.901],
        ["g", 0.866],
        ["h", 0.737],
        ["j", 0.613],
        ["Ã ", 0.486],
        ["x", 0.427],
        ["z", 0.326],
        ["Ã¨", 0.271],
        ["Ãª", 0.218],
        ["y", 0.128],
        ["Ã§", 0.0850],
        ["k", 0.0740],
        ["Ã»", 0.0600],
        ["Ã¹", 0.0580],
        ["Ã¢", 0.0510],
        ["w", 0.0490],
        ["Ã®", 0.0450],
        ["Ã´", 0.0230],
        ["Å“", 0.0180],
        ["Ã«", 0.00800],
        ["Ã¯", 0.00500],
    ]),
    german: new Map([
        ["e", 16.4],
        ["n", 9.78],
        ["s", 7.27],
        ["r", 7.00],
        ["i", 6.55],
        ["a", 6.52],
        ["t", 6.15],
        ["d", 5.08],
        ["h", 4.58],
        ["u", 4.17],
        ["l", 3.44],
        ["g", 3.01],
        ["c", 2.73],
        ["o", 2.59],
        ["m", 2.53],
        ["w", 1.92],
        ["b", 1.89],
        ["f", 1.66],
        ["k", 1.42],
        ["z", 1.13],
        ["Ã¼", 0.995],
        ["v", 0.846],
        ["p", 0.670],
        ["Ã¤", 0.578],
        ["Ã¶", 0.443],
        ["ÃŸ", 0.307],
        ["j", 0.268],
        ["y", 0.0390],
        ["x", 0.0340],
        ["q", 0.0180],
    ]),
    pinyin: new Map([
        ["i", 14.29],
        ["n", 11.24],
        ["a", 10.78],
        ["e", 8.20],
        ["u", 7.19],
        ["h", 6.73],
        ["g", 6.00],
        ["o", 5.40],
        ["d", 3.60],
        ["s", 3.35],
        ["z", 3.31],
        ["y", 3.15],
        ["j", 1.95],
        ["l", 1.78],
        ["w", 1.71],
        ["x", 1.66],
        ["t", 1.66],
        ["b", 1.64],
        ["m", 1.52],
        ["c", 1.08],
        ["k", 1.01],
        ["r", 0.92],
        ["q", 0.89],
        ["f", 0.44],
        ["p", 0.29],
        ["v", 0.08],
    ]),
    russian: new Map([
        ["Ð¾", 11.18],
        ["Ðµ", 8.75],
        ["Ð°", 7.64],
        ["Ð¸", 7.09],
        ["Ð½", 6.78],
        ["Ñ‚", 6.09],
        ["Ñ", 4.97],
        ["Ð»", 4.96],
        ["Ð²", 4.38],
        ["Ñ€", 4.23],
        ["Ðº", 3.30],
        ["Ð¼", 3.17],
        ["Ð´", 3.09],
        ["Ð¿", 2.47],
        ["Ñ‹", 2.36],
        ["Ñƒ", 2.22],
        ["Ð±", 2.01],
        ["Ñ", 1.96],
        ["ÑŒ", 1.84],
        ["Ð³", 1.72],
        ["Ð·", 1.48],
        ["Ñ‡", 1.40],
        ["Ð¹", 1.21],
        ["Ð¶", 1.01],
        ["Ñ…", 0.95],
        ["Ñˆ", 0.72],
        ["ÑŽ", 0.47],
        ["Ñ†", 0.39],
        ["Ñ", 0.36],
        ["Ñ‰", 0.30],
        ["Ñ„", 0.21],
        ["Ñ‘", 0.20],
        ["ÑŠ", 0.02],
    ]),
    spanish: new Map([
        ["e", 12.2],
        ["a", 11.5],
        ["o", 8.68],
        ["s", 7.98],
        ["r", 6.87],
        ["n", 6.71],
        ["i", 6.25],
        ["d", 5.01],
        ["l", 4.97],
        ["t", 4.63],
        ["c", 4.02],
        ["m", 3.16],
        ["u", 2.93],
        ["p", 2.51],
        ["b", 2.21],
        ["g", 1.77],
        ["v", 1.14],
        ["y", 1.01],
        ["q", 0.877],
        ["Ã³", 0.827],
        ["Ã­", 0.725],
        ["h", 0.703],
        ["f", 0.692],
        ["Ã¡", 0.502],
        ["j", 0.493],
        ["z", 0.467],
        ["Ã©", 0.433],
        ["Ã±", 0.311],
        ["x", 0.215],
        ["Ãº", 0.168],
        ["w", 0.0170],
        ["Ã¼", 0.0120],
        ["k", 0.0110],
    ]),
};
/*
XCharFreqRaw is a object.
eg XCharFreqRaw.en_easy_fiction_mix, each key is a single char, value is count of occurrences.
cap and lowercase are distinct.
the plan is that each key of XCharFreqRaw will be like a typical type of source text, eg alice in wonderland chapter 1, common chat text such as twitter, jouralism text, poetry text, etc.
 */
const XCharFreqRaw = {
    "en_easy_fiction_mix": new Map([
        [" ", 16125],
        ["e", 8742],
        ["t", 6390],
        ["a", 5204],
        ["o", 4857],
        ["n", 4653],
        ["h", 4588],
        ["i", 4460],
        ["s", 3980],
        ["r", 3543],
        ["d", 3149],
        ["l", 2953],
        ["u", 1932],
        ["c", 1651],
        ["w", 1623],
        ["m", 1560],
        ["f", 1546],
        ["g", 1437],
        ["y", 1144],
        [",", 1132],
        ["b", 1019],
        ["p", 962],
        [".", 858],
        ["k", 624],
        ["v", 610],
        ["\n", 465],
        ["I", 311],
        ["T", 293],
        ["H", 169],
        ["A", 139],
        ["â€œ", 136],
        ["â€", 136],
        ["-", 120],
        ["x", 91],
        ["â€”", 89],
        ["'", 86],
        ["!", 85],
        [";", 83],
        ["z", 80],
        ["S", 79],
        [`\"`, 78],
        ["B", 63],
        ["M", 60],
        ["?", 58],
        ["W", 55],
        ["F", 51],
        ["P", 51],
        ["q", 49],
        ["j", 48],
        ["O", 40],
        ["Y", 38],
        ["N", 37],
        ["D", 36],
        ["L", 35],
        ["C", 35],
        ["R", 35],
        [":", 33],
        ["(", 23],
        [")", 23],
        ["E", 21],
        ["G", 18],
        ["*", 11],
        ["1", 8],
        ["4", 7],
        ["0", 6],
        ["5", 6],
        ["U", 5],
        ["Â°", 5],
        ["V", 5],
        ["J", 4],
        ["3", 4],
        ["8", 3],
        ["7", 3],
        ["2", 3],
        ["9", 2],
        ["K", 2],
        ["Â«", 1],
        ["6", 1],
        ["Â»", 1],
        ["=", 1],
        ["â‰ˆ", 1],
        ["/", 1],
        ["â€¦", 1],
        ["Q", 1],
        ["Z", 1],
    ]),
};
/* [
given a map obj, where values are integers, return a map obj where the vals are ratio of sum of vals. For example [["a",1],["b",2]] returns [["a",1/3],["b",2/3]]
] */
const f_map_val_ratio = (Xmap) => {
    const xsum = [...Xmap.values()].reduce((a, b) => (a + b));
    const xmap = new Map();
    Xmap.forEach((v, k) => {
        xmap.set(k, Xmap.get(k) / xsum);
    });
    return xmap;
};
/*
http://xahlee.info/js/js_function_chaining.html
*/
const xah_pipe = (...xargs) => xargs.reduce((a, b) => b(a));
/* [
sorts a map obj and returns a new map sorted by the vals compared as integer
] */
const f_sort_map_by_val = (x) => new Map([...x.entries()].sort(([_, x], [_2, y]) => y - x));
/* [ return a new map, containing only first n entries. ] */
const f_truncate_map = (Xmap, n) => new Map([...Xmap.entries()].slice(0, Math.min(...[Xmap.size, n])));
/* [
Returns a new map where f(key,value) returns true.
http://xahlee.info/js/js_map_filter.html
Version 2018-04-13
] */
const xah_map_filter = (Xmap, f) => {
    const result = new Map();
    for (let [k, v] of Xmap)
        if (f(k, v))
            result.set(k, v);
    return result;
};
/* [
 takes a map obj with string keys, return a map obj, remove keys contains any unicode non-letter char.
] */
const f_filter_map_letters_only = (Xmap) => xah_map_filter(Xmap, (kk, vv) => /^\p{L}\p{L}$/gu.test(kk));
/* [
f_count_char(xStr) returns a Map, key is single char, value is count of occur of the char.
] */
const f_count_char = (xStr) => {
    const tt = new Map();
    for (let c of xStr)
        (tt.has(c)) ? tt.set(c, tt.get(c) + 1) : tt.set(c, 1);
    return tt;
};
/* [
return a map object, where keys are the bigrams, and val is the count.
2021-04-11
] */
const f_string_to_bigram = (Xstr) => {
    const xbigrams = new Map();
    const xchars = [...Xstr];
    const xmax = xchars.length - 1;
    xchars.forEach((x, i) => {
        if (i < xmax) {
            const key = x + xchars[i + 1];
            if (xbigrams.has(key)) {
                xbigrams.set(key, xbigrams.get(key) + 1);
            }
            else {
                xbigrams.set(key, 1);
            }
        }
    });
    return xbigrams;
};
/* [ return a new map object that has key and val of Xmap swapped. 2020-04-21 ] */
const xah_inverse_map_obj = (Xmap) => {
    const xout = new Map();
    Xmap.forEach((vv, kk) => {
        xout.set(vv, kk);
    });
    return xout;
};
/* [
f_convert_key(SourceLayout, TargetLayout, Xchar) converts Xchar from SourceLayout to TargetLayout.
The layouts must one of string property key in XKeyTables.
Xchar is a string. Possible values also in XKeyTables. If a key is not found in map, itself is returned.
version 2020-09-21
] */
const f_convert_key = (SourceLayout, TargetLayout, Xchar) => {
    if (SourceLayout === TargetLayout)
        return Xchar;
    else if (SourceLayout === "qwerty") {
        return (XKeyTables[TargetLayout].get(Xchar) || Xchar);
    }
    else {
        const qwertyKey = xah_inverse_map_obj(XKeyTables[SourceLayout]).get(Xchar) ||
            Xchar;
        return (XKeyTables[TargetLayout].get(qwertyKey) || qwertyKey);
    }
};
/* [
f_change_layout(keyElments, SourceLayout, TargetLayout) change svg keyboard diagram from one layout to another.
For each keyElments, change its inner text.
For example, one item in keyElments might be
<... data-layout="qwerty">d</text>.
the result might be
<... data-layout="dvorak">e</text>.
SourceLayout and TargetLayout must one of string property key in XKeyTables.
Version 2020-09-21
] */
const f_change_layout = (keyElments, SourceLayout, TargetLayout) => {
    for (let elmX of keyElments) {
        const thisKey = elmX.textContent;
        elmX.textContent = f_convert_key(SourceLayout, TargetLayout, thisKey);
        elmX.setAttribute("data-layout", TargetLayout);
    }
};
/* [
f_draw_heatmap(xKey, lang) draw heatmap on a key of a keyboard layout.
xKey is svg text element of the form
<text y="146" x="113" data-layout="qwerty">a</text>
] */
const f_draw_heatmap = (xKey, lang) => {
    const x = Number.parseInt(xKey.getAttribute("x"));
    const y = Number.parseInt(xKey.getAttribute("y"));
    const freq = XLetterFreq[lang].get(xKey.textContent) || 0;
    const hue = Math.round((-(freq / 13) + 1) * 150);
    const hsl = `hsl(${hue},100%,30%)`;
    const hsla = `hsla(${hue},100%,30%,0.3)`;
    const fontSize = 30;
    xKey.setAttribute("style", `font-size: ${fontSize}px; fill: ${hsl}; stroke: ${hsl}`);
    const cir1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    cir1.setAttribute("cx", (x + 10).toString());
    cir1.setAttribute("cy", (y - 10).toString());
    cir1.setAttribute("r", (freq * 5).toString());
    cir1.setAttribute("fill", hsla);
    cir1.setAttribute("stroke", "none");
    cir1.setAttribute("data-autogen-8yJmf", "1");
    xKey.insertAdjacentElement("beforebegin", cir1);
};
const f_remove_heatmap = (svgEle) => {
    for (let k of svgEle.querySelectorAll("circle[data-autogen-8yJmf]")) {
        k.parentNode.removeChild(k);
    }
};
// HHH___________________________________________________________________
const f_xd_createSVG = (p_w, p_h, p_viewBox, p_point) => {
    /* [
   return a SVG element
   p_w, View port width. optional
   p_h, View port height. optional
   p_viewBox, p_view box attributes. [x y w h]. optional
  p_point, array of the form [x,y]. coordinates for position inside outer svg
  ] */
    const v_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    if (p_w)
        v_svg.setAttribute("width", p_w.toString());
    if (p_h)
        v_svg.setAttribute("height", p_h.toString());
    if (p_viewBox) {
        v_svg.setAttribute("viewBox", p_viewBox[0] + " " + p_viewBox[1] + " " + p_viewBox[2] + " " +
            p_viewBox[3]);
    }
    if (p_point) {
        v_svg.setAttribute("x", p_point[0].toString());
        v_svg.setAttribute("y", p_point[1].toString());
    }
    return v_svg;
};
/* [
return string of the form " translate(p_x, p_y) " for use with svg transform attribute.
] */
const f_xd_translateString = (p_x, p_y) => (" translate(" + p_x + " " + p_y + ") ");
/* [
return string of the form " scale(p_x p_y) " for use with svg transform attribute.
] */
const f_xd_scaleString = (p_x, p_y) => (" scale(" + p_x + " " + p_y + ") ");
/* [
create a svg rect element.
p_svgEle - HTML element. Result will be appended to it.
p_position - [x,y] for top left corner of rect.
p_wh - [width,height] of rect.
p_rxry - [x,y] coner radius of rect.
p_style - value for style attribute
svg rect element
] */
const f_xd_drawRect = (p_svgEle, p_position, p_wh, p_rxry, p_style) => {
    const v_rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    v_rect.setAttribute("x", p_position[0].toString());
    v_rect.setAttribute("y", p_position[1].toString());
    v_rect.setAttribute("width", p_wh[0].toString());
    v_rect.setAttribute("height", p_wh[1].toString());
    if (p_rxry) {
        v_rect.setAttribute("rx", p_rxry[0].toString());
        v_rect.setAttribute("ry", p_rxry[1].toString());
    }
    if (p_style)
        v_rect.setAttribute("style", p_style);
    if (p_svgEle)
        p_svgEle.appendChild(v_rect);
    return v_rect;
};
/* [
draw horizontal grid lines, and vertical grid lines.
p_xMinMaxStep is of the form [xMin, xMax, xStep].
If the xStep is not given, then no vertical grids are drawn.
similar for p_yMinMaxStep.
Append svg elements to p_svgEle.
Returns a array of svg path element. each represents a line.
] */
const f_xd_drawGrids = (p_svgEle, p_xMinMaxStep, p_yMinMaxStep, p_style) => {
    const v_xMin = p_xMinMaxStep[0];
    const v_xMax = p_xMinMaxStep[1];
    const v_xStep = p_xMinMaxStep[2];
    const v_yMin = p_yMinMaxStep[0];
    const v_yMax = p_yMinMaxStep[1];
    const v_yStep = p_yMinMaxStep[2];
    const v_xCount = (v_xMax - v_xMin) / v_xStep;
    const v_yCount = (v_yMax - v_yMin) / v_yStep;
    let v_result = [];
    if (v_xStep) {
        for (let ii = 0; ii <= v_xCount; ii++) {
            const v_path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            let v_x = v_xMin + ii * v_xStep;
            v_path.setAttribute("d", "M " + v_x + " " + v_yMin + " L " + v_x + " " + v_yMax);
            if (p_style)
                v_path.setAttribute("style", p_style);
            if (p_svgEle)
                p_svgEle.appendChild(v_path);
            v_result.push(v_path);
        }
    }
    if (v_yStep) {
        for (let ii = 0; ii <= v_yCount; ii++) {
            const v_path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            let v_y = v_yMin + ii * v_yStep;
            v_path.setAttribute("d", "M " + v_xMin + " " + v_y + " L " + v_xMax + " " + v_y);
            if (p_style)
                v_path.setAttribute("style", p_style);
            if (p_svgEle)
                p_svgEle.appendChild(v_path);
            v_result.push(v_path);
        }
    }
    return v_result;
};
/* [
f_xd_drawText return svg text element.
p_svgEle can be a svg element null. if given, attach result to it.
p_position is text anchor position. [x,y].
p_text is the text.
] */
const f_xd_drawText = (p_svgEle, p_position, p_text, p_flipUpDownQ, p_style) => {
    let v_x = p_position[0];
    let v_y = p_position[1];
    let v_textEle = document.createElementNS("http://www.w3.org/2000/svg", "text");
    v_textEle.setAttribute("x", v_x.toString());
    v_textEle.setAttribute("y", v_y.toString());
    if (p_flipUpDownQ) {
        v_textEle.setAttribute("transform", f_xd_translateString(0, v_y) + f_xd_scaleString(1, -1) +
            f_xd_translateString(0, -v_y));
    }
    v_textEle.appendChild(document.createTextNode(p_text));
    if (p_style)
        v_textEle.setAttribute("style", p_style);
    if (p_svgEle)
        p_svgEle.appendChild(v_textEle);
    return v_textEle;
};
// HHH___________________________________________________________________
/* [
draw svg char freq chart and attached to p_svgBox
cMap is a Map object. key is a char, value is count
pWidth is the drawing area x length
pHeight is the drawing area y length
] */
const xah_draw_chart = (p_svgBox, cMap, pWidth, pHeight) => {
    const maxBarHeightFactor = 0.85;
    const totalChars = [...cMap.values()].reduce((a, b) => (a + b), 0);
    const innerSvg = f_xd_createSVG(undefined, undefined, [0, 0, pWidth, pHeight]);
    innerSvg.setAttribute("style", "background-color:white;");
    f_xd_drawGrids(innerSvg, [0, pWidth, pWidth / cMap.size], [0, pHeight, 50], "stroke:silver");
    // const border = f_xd_drawRect(0,0,pWidth,pHeight);
    // border.setAttribute("style", "fill:none; stroke:red;");
    // innerSvg.appendChild(border);
    [...cMap.keys()].forEach((x, i) => {
        const xDelta = pWidth / cMap.size;
        const barWidth = xDelta * .5;
        const barHeight = cMap.get(x) / Math.max(...cMap.values()) * pHeight *
            maxBarHeightFactor;
        const xCoord = i * xDelta;
        const v_percentage = cMap.get(x) / totalChars;
        f_xd_drawRect(innerSvg, [xCoord, -barHeight + pHeight], [barWidth, barHeight], undefined, "fill:green");
        f_xd_drawText(innerSvg, [xCoord, (-barHeight + pHeight) - pHeight * .02], 
        // pHeight * .95,
        Math.floor(v_percentage * 100).toString() + "." +
            v_percentage.toString().substr(4, 1), false, "stroke:red;fill:red;stroke-width:0.2;font-size:16px");
        f_xd_drawText(innerSvg, [xCoord, (-barHeight + pHeight) - pHeight * .09], x, false, "stroke:blue;fill:blue;text-anchor:start");
    });
    f_xd_drawText(innerSvg, [pWidth * .7, pHeight * 0.15], "Total chars: " + totalChars, false, "text-anchor:end");
    f_xd_drawText(innerSvg, [pWidth * 0.99, pHeight * 0.09], "Character Frequency %", false, "stroke:red;fill:red;stroke-width:0.3;font-size:20pt;text-anchor: end");
    p_svgBox.appendChild(innerSvg);
    return p_svgBox;
};
