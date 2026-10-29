const QUESTION_SETS = [
  {
    "id": "upgrade-14",
    "label": "第14回 ①＋③",
    "title": "数量表現",
    "range": "UPGRADE 23",
    "questions": [
      {
        "id": 1,
        "sourceSet": "①",
        "sourceNo": 4,
        "text": "There were some policemen in the street, but too （　） to keep control of the crowd.",
        "choices": [
          "few",
          "many",
          "little",
          "much"
        ],
        "answer": 0,
        "translation": "通りには警官が何人かいたが、群衆を制御するには少なすぎた。",
        "tip": "policemen は可算名詞なので few。too few = 「少なすぎる」。"
      },
      {
        "id": 2,
        "sourceSet": "①",
        "sourceNo": 5,
        "text": "We had to hurry because there was （　） time left.",
        "choices": [
          "so much",
          "so many",
          "only a little",
          "only a few"
        ],
        "answer": 2,
        "translation": "残り時間がほんの少ししかなかったので、私たちは急がなければならなかった。",
        "tip": "time は不可算名詞。a little = 「少しある」、little = 「ほとんどない」。"
      },
      {
        "id": 3,
        "sourceSet": "①",
        "sourceNo": 6,
        "text": "John could not afford the car for he had （　） money left in the bank.",
        "choices": [
          "a few",
          "few",
          "little",
          "small"
        ],
        "answer": 2,
        "translation": "ジョンは銀行にほとんどお金が残っていなかったので、その車を買う余裕がなかった。",
        "tip": "money は不可算名詞。little money = 「ほとんどお金がない」。"
      },
      {
        "id": 4,
        "sourceSet": "①",
        "sourceNo": 7,
        "text": "You shouldn't drink too （　） wine.",
        "choices": [
          "little",
          "many",
          "more",
          "much"
        ],
        "answer": 3,
        "translation": "ワインを飲みすぎるべきではない。",
        "tip": "wine は不可算名詞なので too much wine。"
      },
      {
        "id": 5,
        "sourceSet": "①",
        "sourceNo": 8,
        "text": "Would you care for （　） more coffee?",
        "choices": [
          "a",
          "far",
          "no",
          "some"
        ],
        "answer": 3,
        "translation": "コーヒーをもう少しいかがですか。",
        "tip": "some more + 名詞 = 「もう少しの〜」。申し出では some をよく使う。"
      },
      {
        "id": 6,
        "sourceSet": "①",
        "sourceNo": 9,
        "text": "（　） the students I met here are rich.",
        "choices": [
          "All",
          "Almost",
          "Most"
        ],
        "answer": 2,
        "translation": "私がここで会った学生の大部分は裕福だ。",
        "tip": "most + 名詞 = 「大部分の〜」。almost は副詞なので名詞を直接修飾できない。"
      },
      {
        "id": 7,
        "sourceSet": "①",
        "sourceNo": 10,
        "text": "Some students still choose French but （　） seem to prefer Spanish, Italian and the like.",
        "choices": [
          "most",
          "so much",
          "almost",
          "large"
        ],
        "answer": 0,
        "translation": "今でもフランス語を選ぶ学生もいるが、大部分はスペイン語やイタリア語などを好むようだ。",
        "tip": "most = 「大部分の人」。ここでは students を受けて代名詞的に使う。"
      },
      {
        "id": 8,
        "sourceSet": "①",
        "sourceNo": 11,
        "text": "（　） people present were over thirty.",
        "choices": [
          "Almost",
          "Almost of the",
          "Most of",
          "Most of the"
        ],
        "answer": 3,
        "translation": "その場にいた人々の大部分は30歳を超えていた。",
        "tip": "most of the + 名詞 = 「その〜の大部分」。範囲が特定されている。"
      },
      {
        "id": 9,
        "sourceSet": "①",
        "sourceNo": 12,
        "text": "Her uncle lost （　） the books in the fire.",
        "choices": [
          "almost",
          "much",
          "the most",
          "almost all"
        ],
        "answer": 3,
        "translation": "彼女のおじは火事で本のほとんどすべてを失った。",
        "tip": "almost all + 名詞 = 「ほとんどすべての〜」。"
      },
      {
        "id": 10,
        "sourceSet": "①",
        "sourceNo": 13,
        "text": "（　） student has failed the test.",
        "choices": [
          "A good many",
          "Many a",
          "A great many",
          "A lot many"
        ],
        "answer": 1,
        "translation": "多くの学生がその試験に落ちた。",
        "tip": "many a + 単数名詞 = 「多くの〜」。意味は複数でも動詞は単数扱い。"
      },
      {
        "id": 11,
        "sourceSet": "①",
        "sourceNo": 14,
        "text": "Fortunately, I received （　） good many job offers.",
        "choices": [
          "a",
          "any",
          "little",
          "much",
          "some",
          "the"
        ],
        "answer": 0,
        "translation": "幸いにも、私はかなり多くの就職の申し出を受けた。",
        "tip": "a good many + 複数名詞 = 「かなり多くの〜」。"
      },
      {
        "id": 12,
        "sourceSet": "①",
        "sourceNo": 15,
        "text": "（　） of students may now be twice as big as it used to be.",
        "choices": [
          "A number",
          "Numbers",
          "The number",
          "The numbers"
        ],
        "answer": 2,
        "translation": "学生の数は今では以前の2倍ほどになっているかもしれない。",
        "tip": "the number of + 複数名詞 = 「〜の数」。主語は number なので単数扱い。"
      },
      {
        "id": 13,
        "sourceSet": "①",
        "sourceNo": 16,
        "text": "A large number of cars （　） parked outside the stadium.",
        "choices": [
          "has",
          "have",
          "was",
          "were"
        ],
        "answer": 3,
        "translation": "多数の車がスタジアムの外に駐車していた。",
        "tip": "a large number of + 複数名詞 は複数扱い。"
      },
      {
        "id": 14,
        "sourceSet": "①",
        "sourceNo": 17,
        "text": "The Rugby World Cup game was shown on a big screen in front of （　） audience.",
        "choices": [
          "a few",
          "many",
          "much",
          "a large"
        ],
        "answer": 3,
        "translation": "ラグビーワールドカップの試合は大勢の観客の前で大型スクリーンに映された。",
        "tip": "audience は集合名詞。a large audience = 「大勢の観客」。"
      },
      {
        "id": 15,
        "sourceSet": "①",
        "sourceNo": 18,
        "text": "He tried to guess how much money had been stolen.\n= He tried to guess the （　） of money stolen.",
        "choices": [
          "amount",
          "heap",
          "expectation",
          "investigation"
        ],
        "answer": 0,
        "translation": "彼はどれくらいのお金が盗まれたのか推測しようとした。＝盗まれた金額を推測しようとした。",
        "tip": "the amount of + 不可算名詞 = 「〜の量」。"
      },
      {
        "id": 16,
        "sourceSet": "①",
        "sourceNo": 19,
        "text": "He was so poor that he had （　） than one hundred yen.",
        "choices": [
          "not less",
          "no less",
          "no more",
          "not other"
        ],
        "answer": 2,
        "translation": "彼はとても貧しく、100円しか持っていなかった。",
        "tip": "no more than = 「たった〜しか」。少なさを強調する。"
      },
      {
        "id": 17,
        "sourceSet": "①",
        "sourceNo": 20,
        "text": "He said he did not mind paying three times （　） I asked.",
        "choices": [
          "as much as",
          "as many as",
          "more",
          "as"
        ],
        "answer": 0,
        "translation": "彼は私が求めた額の3倍を払っても構わないと言った。",
        "tip": "倍数 + as much as ... = 「…の〜倍の量」。money なので much。"
      },
      {
        "id": 18,
        "sourceSet": "①",
        "sourceNo": 21,
        "text": "This room is （　） of mine.",
        "choices": [
          "second larger",
          "the second time size",
          "twice larger",
          "twice the size"
        ],
        "answer": 3,
        "translation": "この部屋は私の部屋の2倍の広さだ。",
        "tip": "twice the size of ... = 「…の2倍の大きさ」。"
      },
      {
        "id": 19,
        "sourceSet": "①",
        "sourceNo": 22,
        "text": "（　） of the students in this school attended the dance.",
        "choices": [
          "Two-thirds",
          "Two-third",
          "The two-third",
          "The two-three"
        ],
        "answer": 0,
        "translation": "この学校の生徒の3分の2がダンスパーティーに参加した。",
        "tip": "分数は two-thirds のように、分子が2以上なら分母を複数形にする。"
      },
      {
        "id": 20,
        "sourceSet": "①",
        "sourceNo": 23,
        "text": "One out of （　） five letters does not have a zip code.",
        "choices": [
          "each",
          "any",
          "every",
          "all",
          "some"
        ],
        "answer": 2,
        "translation": "5通に1通の手紙には郵便番号がない。",
        "tip": "one out of every five = 「5つに1つ」。"
      },
      {
        "id": 21,
        "sourceSet": "③",
        "sourceNo": 4,
        "text": "We had to hurry because there was （　） time left.",
        "choices": [
          "so much",
          "so many",
          "only a little",
          "only a few"
        ],
        "answer": 2,
        "translation": "残り時間がほんの少ししかなかったので、私たちは急がなければならなかった。",
        "tip": "time は不可算名詞。only a little time = 「ほんの少しの時間」。"
      },
      {
        "id": 22,
        "sourceSet": "③",
        "sourceNo": 5,
        "text": "John could not afford the car for he had （　） money left in the bank.",
        "choices": [
          "a few",
          "few",
          "little",
          "small"
        ],
        "answer": 2,
        "translation": "ジョンは銀行にほとんどお金が残っていなかったので、その車を買う余裕がなかった。",
        "tip": "little + 不可算名詞 = 「ほとんど〜ない」。"
      },
      {
        "id": 23,
        "sourceSet": "③",
        "sourceNo": 6,
        "text": "She asked me （　） temples there are in Kyoto.",
        "choices": [
          "how much",
          "how big",
          "how many",
          "what a lot of"
        ],
        "answer": 2,
        "translation": "彼女は京都に寺がいくつあるのか私に尋ねた。",
        "tip": "how many + 複数名詞 = 「いくつの〜」。"
      },
      {
        "id": 24,
        "sourceSet": "③",
        "sourceNo": 7,
        "text": "I earn （　） money than a postman.",
        "choices": [
          "few",
          "fewer",
          "little",
          "less"
        ],
        "answer": 3,
        "translation": "私は郵便配達員より収入が少ない。",
        "tip": "money は不可算名詞なので比較級は less。fewer は可算名詞。"
      },
      {
        "id": 25,
        "sourceSet": "③",
        "sourceNo": 8,
        "text": "I’m afraid there isn’t （　） tea left.",
        "choices": [
          "any",
          "some",
          "little",
          "few"
        ],
        "answer": 0,
        "translation": "残念ながら、お茶はもう残っていません。",
        "tip": "否定文では any を使うのが基本。tea は不可算名詞。"
      },
      {
        "id": 26,
        "sourceSet": "③",
        "sourceNo": 9,
        "text": "Compared with women of just ten years ago, those of today are marrying later, having （　） children.",
        "choices": [
          "less",
          "some",
          "any",
          "fewer"
        ],
        "answer": 3,
        "translation": "わずか10年前の女性と比べて、今日の女性は結婚が遅く、子どもの数も少ない。",
        "tip": "children は可算名詞なので fewer children。"
      },
      {
        "id": 27,
        "sourceSet": "③",
        "sourceNo": 10,
        "text": "（　） students will spend a few months studying abroad.",
        "choices": [
          "Almost",
          "Almost every",
          "Most",
          "Most of"
        ],
        "answer": 2,
        "translation": "大部分の学生は数か月間、海外で勉強することになる。",
        "tip": "most + 複数名詞 = 「大部分の〜」。"
      },
      {
        "id": 28,
        "sourceSet": "③",
        "sourceNo": 11,
        "text": "Her uncle lost （　） the books in the fire.",
        "choices": [
          "almost",
          "much",
          "the most",
          "almost all"
        ],
        "answer": 3,
        "translation": "彼女のおじは火事で本のほとんどすべてを失った。",
        "tip": "almost all the books = 「その本のほとんどすべて」。"
      },
      {
        "id": 29,
        "sourceSet": "③",
        "sourceNo": 12,
        "text": "（　） student has failed the test.",
        "choices": [
          "A good many",
          "Many a",
          "A great many",
          "A lot many"
        ],
        "answer": 1,
        "translation": "多くの学生がその試験に落ちた。",
        "tip": "many a + 単数名詞。意味は「多くの〜」。"
      },
      {
        "id": 30,
        "sourceSet": "③",
        "sourceNo": 13,
        "text": "Fortunately, I received （　） good many job offers.",
        "choices": [
          "a",
          "any",
          "little",
          "much",
          "some",
          "the"
        ],
        "answer": 0,
        "translation": "幸いにも、私はかなり多くの就職の申し出を受けた。",
        "tip": "a good many = 「かなり多くの」。"
      },
      {
        "id": 31,
        "sourceSet": "③",
        "sourceNo": 14,
        "text": "（　） of students may now be twice as big as it used to be.",
        "choices": [
          "A number",
          "Numbers",
          "The number",
          "The numbers"
        ],
        "answer": 2,
        "translation": "学生の数は今では以前の2倍ほどになっているかもしれない。",
        "tip": "the number of = 「〜の数」。a number of = 「多くの〜」。"
      },
      {
        "id": 32,
        "sourceSet": "③",
        "sourceNo": 15,
        "text": "The Rugby World Cup game was shown on a big screen in front of （　） audience.",
        "choices": [
          "a few",
          "many",
          "much",
          "a large"
        ],
        "answer": 3,
        "translation": "ラグビーワールドカップの試合は大勢の観客の前で大型スクリーンに映された。",
        "tip": "a large audience = 「大勢の観客」。"
      },
      {
        "id": 33,
        "sourceSet": "③",
        "sourceNo": 16,
        "text": "He tried to guess how much money had been stolen.\n= He tried to guess the （　） of money stolen.",
        "choices": [
          "amount",
          "heap",
          "expectation",
          "investigation"
        ],
        "answer": 0,
        "translation": "彼はどれくらいのお金が盗まれたのか推測しようとした。＝盗まれた金額を推測しようとした。",
        "tip": "amount は不可算名詞の「量」。the amount of money。"
      },
      {
        "id": 34,
        "sourceSet": "③",
        "sourceNo": 17,
        "text": "Before the vaccine was discovered, （　） 80,000 people died each year from smallpox.",
        "choices": [
          "as many as",
          "as much as",
          "so many",
          "so much"
        ],
        "answer": 0,
        "translation": "ワクチンが発見される前は、天然痘で毎年8万人もの人が亡くなっていた。",
        "tip": "as many as + 数 + 可算名詞 = 「〜もの」。多さを強調する。"
      },
      {
        "id": 35,
        "sourceSet": "③",
        "sourceNo": 18,
        "text": "He was so poor that he had （　） than one hundred yen.",
        "choices": [
          "not less",
          "no less",
          "no more",
          "not other"
        ],
        "answer": 2,
        "translation": "彼はとても貧しく、100円しか持っていなかった。",
        "tip": "no more than = 「たった〜しか」。"
      },
      {
        "id": 36,
        "sourceSet": "③",
        "sourceNo": 19,
        "text": "There are （　） a dozen bedrooms in this mansion.",
        "choices": [
          "none the less",
          "in less than",
          "no any more than",
          "no fewer than"
        ],
        "answer": 3,
        "translation": "この大邸宅には12室もの寝室がある。",
        "tip": "no fewer than = 「〜も」。可算名詞の多さを強調する。"
      },
      {
        "id": 37,
        "sourceSet": "③",
        "sourceNo": 20,
        "text": "He said he did not mind paying three times （　） I asked.",
        "choices": [
          "as much as",
          "as many as",
          "more",
          "as"
        ],
        "answer": 0,
        "translation": "彼は私が求めた額の3倍を払っても構わないと言った。",
        "tip": "three times as much as ... = 「…の3倍の量」。"
      },
      {
        "id": 38,
        "sourceSet": "③",
        "sourceNo": 21,
        "text": "This room is （　） of mine.",
        "choices": [
          "second larger",
          "the second time size",
          "twice larger",
          "twice the size"
        ],
        "answer": 3,
        "translation": "この部屋は私の部屋の2倍の広さだ。",
        "tip": "twice the size of ... = 「…の2倍の大きさ」。"
      },
      {
        "id": 39,
        "sourceSet": "③",
        "sourceNo": 22,
        "text": "One out of （　） five letters does not have a zip code.",
        "choices": [
          "each",
          "any",
          "every",
          "all",
          "some"
        ],
        "answer": 2,
        "translation": "5通に1通の手紙には郵便番号がない。",
        "tip": "one out of every five = 「5つに1つ」。"
      },
      {
        "id": 40,
        "sourceSet": "③",
        "sourceNo": 23,
        "text": "Yokohama is now the second （　） city in Japan.",
        "choices": [
          "larger",
          "largest",
          "large",
          "less large"
        ],
        "answer": 1,
        "translation": "横浜は現在、日本で2番目に大きい都市だ。",
        "tip": "the second largest + 名詞 = 「2番目に大きい〜」。"
      }
    ]
  }
];
