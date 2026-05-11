(function () {
  /**
   * Content library — modelled after roxxem.com's
   * "Teach with the world's most popular content" section.
   *
   *   CONTENT[language][category] = Array<Item>
   *
   * Each Item: { title, sub, image, url }
   *   - "title" + "sub" appear under the thumbnail
   *   - "image" is the thumbnail URL (YouTube hqdefault for music; placeholder for others)
   *   - "url" is where the card links to (real app.roxxem.com video URLs where known,
   *      otherwise a deep link to the library filtered by language + category)
   *
   * The 3 Spanish-Music items at the top of the list use the *exact* same data
   * (title, artist, thumbnail, URL) that roxxem.com renders.
   */

  // Helper: deep-link into the Roxxem app library filtered by language + category
  const lib = (lang, cat) =>
    `https://app.roxxem.com/home?language=${lang}&category=${cat}`;

  // Helper: YouTube hqdefault thumbnail
  const yt = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  const CONTENT = {
    spanish: {
      music: [
        { title: 'Vivir Mi Vida', sub: 'Marc Anthony', image: yt('YXnjy5YlDwk'), url: 'https://app.roxxem.com/videos/62061ca577553aca824b2050' },
        { title: 'Waka Waka (Esto Es África)', sub: 'Shakira', image: yt('dzsuE5ugxf4'), url: 'https://app.roxxem.com/videos/62061caa77553aca824c122f' },
        { title: 'Un Poco Loco (Coco)', sub: 'Luis Ángel Gómez Jaramillo, Gael García Bernal', image: yt('yZ7cBunq8xo'), url: 'https://app.roxxem.com/videos/65467157aecf1952242071bc' },
        { title: 'Despacito', sub: 'Luis Fonsi ft. Daddy Yankee', image: yt('kJQP7kiw5Fk'), url: lib('spanish', 'music') },
        { title: 'Bailando', sub: 'Enrique Iglesias', image: yt('NUsoVlDFqZg'), url: lib('spanish', 'music') },
        { title: 'La Bicicleta', sub: 'Carlos Vives, Shakira', image: yt('-UV0QGLmYys'), url: lib('spanish', 'music') },
      ],
      tv: [
        { title: 'Coco', sub: 'Pixar Animation', image: yt('xlnPHQ3TLX8'), url: lib('spanish', 'tv') },
        { title: 'Money Heist', sub: 'Netflix · La Casa de Papel', image: yt('_InqQJRqGW4'), url: lib('spanish', 'tv') },
        { title: 'Encanto', sub: 'Disney', image: yt('UvO9wAY2WnE'), url: lib('spanish', 'tv') },
        { title: 'Elite', sub: 'Netflix Original', image: yt('xZD7ZcgRSrk'), url: lib('spanish', 'tv') },
        { title: 'Narcos', sub: 'Netflix', image: yt('U_g06Y2nrPo'), url: lib('spanish', 'tv') },
        { title: 'Pan\'s Labyrinth', sub: 'Guillermo del Toro', image: yt('eUdM9vrCbow'), url: lib('spanish', 'tv') },
      ],
      viral: [
        { title: 'Spanish Trends', sub: 'Most viewed clips', image: yt('kJQP7kiw5Fk'), url: lib('spanish', 'viral') },
        { title: 'Bad Bunny Highlights', sub: 'Top performances', image: yt('TmKh7lAwnBI'), url: lib('spanish', 'viral') },
        { title: 'Rosalía Reels', sub: 'Viral moments', image: yt('Tj_4lF0eIN0'), url: lib('spanish', 'viral') },
        { title: 'Tabletop Talk', sub: 'Trending interviews', image: yt('Wamy8Zo3vEM'), url: lib('spanish', 'viral') },
        { title: 'Karol G Live', sub: 'Concert clips', image: yt('1qSc3lGoBdY'), url: lib('spanish', 'viral') },
        { title: 'Maluma Moments', sub: 'Top features', image: yt('jzD_yyEcp0M'), url: lib('spanish', 'viral') },
      ],
      social: [
        { title: 'TikTok en Español', sub: 'Viral trends', image: yt('kJQP7kiw5Fk'), url: lib('spanish', 'social') },
        { title: 'Instagram Reels', sub: 'Spanish creators', image: yt('NUsoVlDFqZg'), url: lib('spanish', 'social') },
        { title: 'YouTube Shorts', sub: 'Latino voices', image: yt('-UV0QGLmYys'), url: lib('spanish', 'social') },
        { title: 'Memes en Español', sub: 'Trending now', image: yt('YXnjy5YlDwk'), url: lib('spanish', 'social') },
        { title: 'Viñetas Virales', sub: 'Mini-stories', image: yt('dzsuE5ugxf4'), url: lib('spanish', 'social') },
        { title: 'Comedia Hispana', sub: 'Stand-up clips', image: yt('yZ7cBunq8xo'), url: lib('spanish', 'social') },
      ],
      podcasts: [
        { title: 'El Hilo', sub: 'Radio Ambulante', image: yt('kJQP7kiw5Fk'), url: lib('spanish', 'podcasts') },
        { title: 'Radio Ambulante', sub: 'NPR · Latin stories', image: yt('NUsoVlDFqZg'), url: lib('spanish', 'podcasts') },
        { title: 'TED en Español', sub: 'Ideas worth spreading', image: yt('YXnjy5YlDwk'), url: lib('spanish', 'podcasts') },
        { title: 'Notes en Español', sub: 'Conversational practice', image: yt('-UV0QGLmYys'), url: lib('spanish', 'podcasts') },
        { title: 'Coffee Break Spanish', sub: 'Beginner-friendly', image: yt('dzsuE5ugxf4'), url: lib('spanish', 'podcasts') },
        { title: 'Españolistos', sub: 'Real conversations', image: yt('yZ7cBunq8xo'), url: lib('spanish', 'podcasts') },
      ],
      news: [
        { title: 'CNN en Español', sub: 'Latest headlines', image: yt('kJQP7kiw5Fk'), url: lib('spanish', 'news') },
        { title: 'BBC Mundo', sub: 'Global news', image: yt('NUsoVlDFqZg'), url: lib('spanish', 'news') },
        { title: 'El País', sub: 'Spain · Reporting', image: yt('YXnjy5YlDwk'), url: lib('spanish', 'news') },
        { title: 'Univision Noticias', sub: 'Latino news', image: yt('-UV0QGLmYys'), url: lib('spanish', 'news') },
        { title: 'EFE Noticias', sub: 'Spanish wire service', image: yt('dzsuE5ugxf4'), url: lib('spanish', 'news') },
        { title: 'Telemundo', sub: 'Daily reports', image: yt('yZ7cBunq8xo'), url: lib('spanish', 'news') },
      ],
    },

    french: {
      music: [
        { title: 'La Vie en Rose', sub: 'Edith Piaf', image: yt('kFzViYkZAz4'), url: lib('french', 'music') },
        { title: 'Alors on Danse', sub: 'Stromae', image: yt('VV1XWJN3nJo'), url: lib('french', 'music') },
        { title: 'Tous les mêmes', sub: 'Stromae', image: yt('K4DyBUG242c'), url: lib('french', 'music') },
        { title: 'Champs-Élysées', sub: 'Joe Dassin', image: yt('GLBPP9HzNAg'), url: lib('french', 'music') },
        { title: 'Je Veux', sub: 'Zaz', image: yt('DKfwukQ5oUM'), url: lib('french', 'music') },
        { title: 'Papaoutai', sub: 'Stromae', image: yt('oiKj0Z_Xnjc'), url: lib('french', 'music') },
      ],
      tv: [
        { title: 'Lupin', sub: 'Netflix Original', image: yt('Z9Vy3DPMlEM'), url: lib('french', 'tv') },
        { title: 'Call My Agent!', sub: 'Dix pour cent', image: yt('YjJq4FK1l4o'), url: lib('french', 'tv') },
        { title: 'Amélie', sub: 'Jean-Pierre Jeunet', image: yt('HUECWi5pX7o'), url: lib('french', 'tv') },
        { title: 'The Intouchables', sub: 'Olivier Nakache', image: yt('34WIbmXkewU'), url: lib('french', 'tv') },
        { title: 'Family Business', sub: 'Netflix', image: yt('Z9Vy3DPMlEM'), url: lib('french', 'tv') },
        { title: 'Marseille', sub: 'Netflix', image: yt('YjJq4FK1l4o'), url: lib('french', 'tv') },
      ],
      viral: [
        { title: 'French TikTok', sub: 'Viral trends', image: yt('K4DyBUG242c'), url: lib('french', 'viral') },
        { title: 'Cyprien', sub: 'Top YouTuber', image: yt('oiKj0Z_Xnjc'), url: lib('french', 'viral') },
        { title: 'Squeezie Highlights', sub: 'Gaming · Comedy', image: yt('DKfwukQ5oUM'), url: lib('french', 'viral') },
        { title: 'Norman fait des vidéos', sub: 'Sketch comedy', image: yt('GLBPP9HzNAg'), url: lib('french', 'viral') },
        { title: 'Mister V', sub: 'Music · Comedy', image: yt('VV1XWJN3nJo'), url: lib('french', 'viral') },
        { title: 'Tibo InShape', sub: 'Lifestyle', image: yt('kFzViYkZAz4'), url: lib('french', 'viral') },
      ],
      social: [
        { title: 'Instagram FR', sub: 'Top creators', image: yt('K4DyBUG242c'), url: lib('french', 'social') },
        { title: 'TikTok France', sub: 'Daily trends', image: yt('oiKj0Z_Xnjc'), url: lib('french', 'social') },
        { title: 'Snapchat FR', sub: 'Story highlights', image: yt('DKfwukQ5oUM'), url: lib('french', 'social') },
        { title: 'YouTube Shorts FR', sub: 'Vertical videos', image: yt('GLBPP9HzNAg'), url: lib('french', 'social') },
        { title: 'Memes Français', sub: 'Trending humor', image: yt('VV1XWJN3nJo'), url: lib('french', 'social') },
        { title: 'Twitch FR', sub: 'Live streams', image: yt('kFzViYkZAz4'), url: lib('french', 'social') },
      ],
      podcasts: [
        { title: 'Coffee Break French', sub: 'Beginner-friendly', image: yt('K4DyBUG242c'), url: lib('french', 'podcasts') },
        { title: 'News in Slow French', sub: 'Slow-paced news', image: yt('oiKj0Z_Xnjc'), url: lib('french', 'podcasts') },
        { title: 'Inner French', sub: 'For intermediate', image: yt('DKfwukQ5oUM'), url: lib('french', 'podcasts') },
        { title: 'La Conversation', sub: 'Native pacing', image: yt('GLBPP9HzNAg'), url: lib('french', 'podcasts') },
        { title: 'TED en Français', sub: 'Ideas worth sharing', image: yt('VV1XWJN3nJo'), url: lib('french', 'podcasts') },
        { title: 'France Inter', sub: 'Public radio', image: yt('kFzViYkZAz4'), url: lib('french', 'podcasts') },
      ],
      news: [
        { title: 'Le Monde', sub: 'Headlines', image: yt('K4DyBUG242c'), url: lib('french', 'news') },
        { title: 'France 24', sub: 'International', image: yt('oiKj0Z_Xnjc'), url: lib('french', 'news') },
        { title: 'BFMTV', sub: 'Breaking news', image: yt('DKfwukQ5oUM'), url: lib('french', 'news') },
        { title: 'Le Figaro', sub: 'Daily', image: yt('GLBPP9HzNAg'), url: lib('french', 'news') },
        { title: 'Libération', sub: 'Reporting', image: yt('VV1XWJN3nJo'), url: lib('french', 'news') },
        { title: 'Radio France', sub: 'Public broadcaster', image: yt('kFzViYkZAz4'), url: lib('french', 'news') },
      ],
    },

    german: {
      music: [
        { title: '99 Luftballons', sub: 'Nena', image: yt('Fpu5a0Bl8eY'), url: lib('german', 'music') },
        { title: 'Du Hast', sub: 'Rammstein', image: yt('W3q8Od5qJio'), url: lib('german', 'music') },
        { title: 'Atemlos durch die Nacht', sub: 'Helene Fischer', image: yt('VQH8ZTgna3Q'), url: lib('german', 'music') },
        { title: 'Auf uns', sub: 'Andreas Bourani', image: yt('cnDqcFM6Qx4'), url: lib('german', 'music') },
        { title: 'Engel', sub: 'Rammstein', image: yt('tWlqMOLLfHs'), url: lib('german', 'music') },
        { title: 'Major Tom', sub: 'Peter Schilling', image: yt('WlBiLNN1NhQ'), url: lib('german', 'music') },
      ],
      tv: [
        { title: 'Dark', sub: 'Netflix Original', image: yt('rrwycJ08PSA'), url: lib('german', 'tv') },
        { title: 'Babylon Berlin', sub: 'X Filme Creative Pool', image: yt('q3yh1aIIVtg'), url: lib('german', 'tv') },
        { title: 'Tatort', sub: 'Crime drama', image: yt('rrwycJ08PSA'), url: lib('german', 'tv') },
        { title: 'Good Bye, Lenin!', sub: 'Wolfgang Becker', image: yt('q3yh1aIIVtg'), url: lib('german', 'tv') },
        { title: 'Run Lola Run', sub: 'Tom Tykwer', image: yt('rrwycJ08PSA'), url: lib('german', 'tv') },
        { title: 'Das Boot', sub: 'WWII drama', image: yt('q3yh1aIIVtg'), url: lib('german', 'tv') },
      ],
      viral: [
        { title: 'Y-Titty', sub: 'Classic comedy', image: yt('Fpu5a0Bl8eY'), url: lib('german', 'viral') },
        { title: 'Gronkh Highlights', sub: 'Gaming legend', image: yt('W3q8Od5qJio'), url: lib('german', 'viral') },
        { title: 'BibisBeautyPalace', sub: 'Lifestyle vlogs', image: yt('VQH8ZTgna3Q'), url: lib('german', 'viral') },
        { title: 'Julien Bam', sub: 'Music · Skits', image: yt('cnDqcFM6Qx4'), url: lib('german', 'viral') },
        { title: 'LeFloid', sub: 'News commentary', image: yt('tWlqMOLLfHs'), url: lib('german', 'viral') },
        { title: 'ApeCrime', sub: 'Sketch trio', image: yt('WlBiLNN1NhQ'), url: lib('german', 'viral') },
      ],
      social: [
        { title: 'TikTok DE', sub: 'Trending now', image: yt('Fpu5a0Bl8eY'), url: lib('german', 'social') },
        { title: 'Instagram DE', sub: 'Top creators', image: yt('W3q8Od5qJio'), url: lib('german', 'social') },
        { title: 'YouTube Shorts DE', sub: 'Daily picks', image: yt('VQH8ZTgna3Q'), url: lib('german', 'social') },
        { title: 'German Reels', sub: 'Mini-stories', image: yt('cnDqcFM6Qx4'), url: lib('german', 'social') },
        { title: 'Memes auf Deutsch', sub: 'Humor', image: yt('tWlqMOLLfHs'), url: lib('german', 'social') },
        { title: 'Twitch DE', sub: 'Streamers', image: yt('WlBiLNN1NhQ'), url: lib('german', 'social') },
      ],
      podcasts: [
        { title: 'Coffee Break German', sub: 'Beginner-friendly', image: yt('Fpu5a0Bl8eY'), url: lib('german', 'podcasts') },
        { title: 'Slow German', sub: 'Annik Rubens', image: yt('W3q8Od5qJio'), url: lib('german', 'podcasts') },
        { title: 'Easy German', sub: 'Street interviews', image: yt('VQH8ZTgna3Q'), url: lib('german', 'podcasts') },
        { title: 'Auf den Punkt', sub: 'Süddeutsche Zeitung', image: yt('cnDqcFM6Qx4'), url: lib('german', 'podcasts') },
        { title: 'Was jetzt?', sub: 'Zeit Online', image: yt('tWlqMOLLfHs'), url: lib('german', 'podcasts') },
        { title: 'TED auf Deutsch', sub: 'Ideas worth sharing', image: yt('WlBiLNN1NhQ'), url: lib('german', 'podcasts') },
      ],
      news: [
        { title: 'Der Spiegel', sub: 'Weekly magazine', image: yt('Fpu5a0Bl8eY'), url: lib('german', 'news') },
        { title: 'Die Zeit', sub: 'In-depth reporting', image: yt('W3q8Od5qJio'), url: lib('german', 'news') },
        { title: 'Tagesschau', sub: 'Daily news', image: yt('VQH8ZTgna3Q'), url: lib('german', 'news') },
        { title: 'Deutsche Welle', sub: 'International', image: yt('cnDqcFM6Qx4'), url: lib('german', 'news') },
        { title: 'FAZ', sub: 'Frankfurter Allgemeine', image: yt('tWlqMOLLfHs'), url: lib('german', 'news') },
        { title: 'BILD', sub: 'Tabloid', image: yt('WlBiLNN1NhQ'), url: lib('german', 'news') },
      ],
    },

    english: {
      music: [
        { title: 'Shape of You', sub: 'Ed Sheeran', image: yt('JGwWNGJdvx8'), url: lib('english', 'music') },
        { title: 'Uptown Funk', sub: 'Mark Ronson ft. Bruno Mars', image: yt('OPf0YbXqDm0'), url: lib('english', 'music') },
        { title: 'Hello', sub: 'Adele', image: yt('YQHsXMglC9A'), url: lib('english', 'music') },
        { title: 'Roar', sub: 'Katy Perry', image: yt('CevxZvSJLk8'), url: lib('english', 'music') },
        { title: 'Sorry', sub: 'Justin Bieber', image: yt('fRh_vgS2dFE'), url: lib('english', 'music') },
        { title: 'Happy', sub: 'Pharrell Williams', image: yt('ZbZSe6N_BXs'), url: lib('english', 'music') },
      ],
      tv: [
        { title: 'Stranger Things', sub: 'Netflix Original', image: yt('b9EkMc79ZSU'), url: lib('english', 'tv') },
        { title: 'The Crown', sub: 'Netflix', image: yt('JWtnJjn6ng0'), url: lib('english', 'tv') },
        { title: 'Friends', sub: 'NBC · Sitcom', image: yt('SAB18cSO0e0'), url: lib('english', 'tv') },
        { title: 'Bridgerton', sub: 'Shondaland', image: yt('gpv7ayf_tyE'), url: lib('english', 'tv') },
        { title: 'The Office', sub: 'NBC · Mockumentary', image: yt('LHhVE9JxQNI'), url: lib('english', 'tv') },
        { title: 'Wednesday', sub: 'Netflix', image: yt('Q2KCmZQQS1k'), url: lib('english', 'tv') },
      ],
      viral: [
        { title: 'MrBeast', sub: 'Most-subscribed', image: yt('JGwWNGJdvx8'), url: lib('english', 'viral') },
        { title: 'Marques Brownlee', sub: 'Tech reviews', image: yt('OPf0YbXqDm0'), url: lib('english', 'viral') },
        { title: 'PewDiePie', sub: 'Gaming · Comedy', image: yt('YQHsXMglC9A'), url: lib('english', 'viral') },
        { title: 'Try Guys', sub: 'Trying everything', image: yt('CevxZvSJLk8'), url: lib('english', 'viral') },
        { title: 'Dude Perfect', sub: 'Trick shots', image: yt('fRh_vgS2dFE'), url: lib('english', 'viral') },
        { title: 'Ryan Trahan', sub: 'Adventure vlogs', image: yt('ZbZSe6N_BXs'), url: lib('english', 'viral') },
      ],
      social: [
        { title: 'TikTok Trending', sub: 'Worldwide', image: yt('JGwWNGJdvx8'), url: lib('english', 'social') },
        { title: 'Instagram Reels', sub: 'Daily picks', image: yt('OPf0YbXqDm0'), url: lib('english', 'social') },
        { title: 'YouTube Shorts', sub: 'Vertical video', image: yt('YQHsXMglC9A'), url: lib('english', 'social') },
        { title: 'Twitter / X', sub: 'Threads & memes', image: yt('CevxZvSJLk8'), url: lib('english', 'social') },
        { title: 'Snapchat', sub: 'Stories', image: yt('fRh_vgS2dFE'), url: lib('english', 'social') },
        { title: 'Twitch', sub: 'Live streams', image: yt('ZbZSe6N_BXs'), url: lib('english', 'social') },
      ],
      podcasts: [
        { title: 'The Daily', sub: 'New York Times', image: yt('JGwWNGJdvx8'), url: lib('english', 'podcasts') },
        { title: 'This American Life', sub: 'WBEZ Chicago', image: yt('OPf0YbXqDm0'), url: lib('english', 'podcasts') },
        { title: 'Radiolab', sub: 'WNYC Studios', image: yt('YQHsXMglC9A'), url: lib('english', 'podcasts') },
        { title: 'Stuff You Should Know', sub: 'iHeart Podcasts', image: yt('CevxZvSJLk8'), url: lib('english', 'podcasts') },
        { title: 'Conan O\'Brien Needs a Friend', sub: 'Team Coco', image: yt('fRh_vgS2dFE'), url: lib('english', 'podcasts') },
        { title: '99% Invisible', sub: 'Roman Mars', image: yt('ZbZSe6N_BXs'), url: lib('english', 'podcasts') },
      ],
      news: [
        { title: 'BBC News', sub: 'International', image: yt('JGwWNGJdvx8'), url: lib('english', 'news') },
        { title: 'CNN', sub: 'Breaking news', image: yt('OPf0YbXqDm0'), url: lib('english', 'news') },
        { title: 'The Guardian', sub: 'In-depth reporting', image: yt('YQHsXMglC9A'), url: lib('english', 'news') },
        { title: 'Reuters', sub: 'Wire service', image: yt('CevxZvSJLk8'), url: lib('english', 'news') },
        { title: 'NPR', sub: 'Public radio', image: yt('fRh_vgS2dFE'), url: lib('english', 'news') },
        { title: 'AP News', sub: 'Associated Press', image: yt('ZbZSe6N_BXs'), url: lib('english', 'news') },
      ],
    },

    chinese: {
      music: [
        { title: '月亮代表我的心', sub: '邓丽君 (Teresa Teng)', image: yt('SrAm-IRGcLA'), url: lib('chinese', 'music') },
        { title: '红日 (Red Sun)', sub: '李克勤 (Hacken Lee)', image: yt('qDgmFf0Vyok'), url: lib('chinese', 'music') },
        { title: '童话 (Fairy Tale)', sub: '光良 (Michael Wong)', image: yt('jPGXfwAU_T8'), url: lib('chinese', 'music') },
        { title: '龙的传人', sub: '王力宏 (Wang Leehom)', image: yt('oOmqksKE5e0'), url: lib('chinese', 'music') },
        { title: '大鱼 (Big Fish)', sub: '周深 (Zhou Shen)', image: yt('6f7xPNJI_no'), url: lib('chinese', 'music') },
        { title: '月半小夜曲', sub: '李克勤 (Hacken Lee)', image: yt('6_OcyTUYbxk'), url: lib('chinese', 'music') },
      ],
      tv: [
        { title: 'Crouching Tiger, Hidden Dragon', sub: 'Ang Lee', image: yt('WnJUuSfQpsk'), url: lib('chinese', 'tv') },
        { title: 'Empresses in the Palace', sub: '甄嬛传', image: yt('rOgGd8KaUO0'), url: lib('chinese', 'tv') },
        { title: 'Story of Yanxi Palace', sub: '延禧攻略', image: yt('jWZH7zHJ8b8'), url: lib('chinese', 'tv') },
        { title: 'The Untamed', sub: '陈情令', image: yt('ZFcZAErJ_iY'), url: lib('chinese', 'tv') },
        { title: 'Nirvana in Fire', sub: '琅琊榜', image: yt('FB5lUGqEbi8'), url: lib('chinese', 'tv') },
        { title: 'Eternal Love', sub: '三生三世十里桃花', image: yt('h87xx4DjGT4'), url: lib('chinese', 'tv') },
      ],
      viral: [
        { title: 'Bilibili Trends', sub: 'China\'s viral hub', image: yt('SrAm-IRGcLA'), url: lib('chinese', 'viral') },
        { title: 'Li Ziqi', sub: 'Traditional cooking', image: yt('qDgmFf0Vyok'), url: lib('chinese', 'viral') },
        { title: 'Liziqi Highlights', sub: 'Rural lifestyle', image: yt('jPGXfwAU_T8'), url: lib('chinese', 'viral') },
        { title: 'Office Reels', sub: 'Workplace humor', image: yt('oOmqksKE5e0'), url: lib('chinese', 'viral') },
        { title: 'Asian Viral', sub: 'Top of the week', image: yt('6f7xPNJI_no'), url: lib('chinese', 'viral') },
        { title: 'Animal Clips', sub: 'Cute & funny', image: yt('6_OcyTUYbxk'), url: lib('chinese', 'viral') },
      ],
      social: [
        { title: 'Douyin Trending', sub: 'China\'s TikTok', image: yt('SrAm-IRGcLA'), url: lib('chinese', 'social') },
        { title: 'WeChat Channels', sub: 'Short videos', image: yt('qDgmFf0Vyok'), url: lib('chinese', 'social') },
        { title: 'Weibo Hot Topics', sub: 'Trending posts', image: yt('jPGXfwAU_T8'), url: lib('chinese', 'social') },
        { title: 'Xiaohongshu', sub: 'Lifestyle posts', image: yt('oOmqksKE5e0'), url: lib('chinese', 'social') },
        { title: 'Kuaishou', sub: 'Short-form video', image: yt('6f7xPNJI_no'), url: lib('chinese', 'social') },
        { title: 'Bilibili Shorts', sub: 'Daily picks', image: yt('6_OcyTUYbxk'), url: lib('chinese', 'social') },
      ],
      podcasts: [
        { title: 'ChinesePod', sub: 'Lessons for all levels', image: yt('SrAm-IRGcLA'), url: lib('chinese', 'podcasts') },
        { title: 'Slow Chinese', sub: 'Native pacing', image: yt('qDgmFf0Vyok'), url: lib('chinese', 'podcasts') },
        { title: 'Mandarin Bean', sub: 'Daily news', image: yt('jPGXfwAU_T8'), url: lib('chinese', 'podcasts') },
        { title: 'Maomi Chinese', sub: 'For HSK learners', image: yt('oOmqksKE5e0'), url: lib('chinese', 'podcasts') },
        { title: '声东击西', sub: 'Cross-strait pop culture', image: yt('6f7xPNJI_no'), url: lib('chinese', 'podcasts') },
        { title: 'Anchor 锚点', sub: 'In-depth stories', image: yt('6_OcyTUYbxk'), url: lib('chinese', 'podcasts') },
      ],
      news: [
        { title: 'Xinhua News', sub: '新华社', image: yt('SrAm-IRGcLA'), url: lib('chinese', 'news') },
        { title: 'CCTV News', sub: '中央电视台', image: yt('qDgmFf0Vyok'), url: lib('chinese', 'news') },
        { title: 'People\'s Daily', sub: '人民日报', image: yt('jPGXfwAU_T8'), url: lib('chinese', 'news') },
        { title: 'South China Morning Post', sub: 'Hong Kong', image: yt('oOmqksKE5e0'), url: lib('chinese', 'news') },
        { title: 'Caixin Global', sub: 'Business news', image: yt('6f7xPNJI_no'), url: lib('chinese', 'news') },
        { title: 'Sing Tao Daily', sub: '星岛日报', image: yt('6_OcyTUYbxk'), url: lib('chinese', 'news') },
      ],
    },
  };

  const LANGUAGES = [
    { value: 'spanish', label: 'Spanish' },
    { value: 'french', label: 'French' },
    { value: 'german', label: 'German' },
    { value: 'english', label: 'English' },
    { value: 'chinese', label: 'Chinese' },
  ];

  const PER_PAGE = 3;
  const CYCLE_MS = 4500;

  let currentLanguage = 'spanish';
  let currentCategory = 'music';

  function chunk(arr, size) {
    const out = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
  }

  function buildCard(item) {
    const card = document.createElement('a');
    card.className = 'pick-card';
    card.href = item.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.innerHTML = `
      <div class="pick-card__thumb">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
      </div>
      <div class="pick-card__title">${item.title}</div>
      <p class="pick-card__sub">${item.sub}</p>
    `;
    return card;
  }

  function buildPanel(catKey, items) {
    const pages = chunk(items, PER_PAGE);

    const panel = document.createElement('div');
    panel.className = 'tab-panel';
    panel.dataset.cat = catKey;

    const pagesEl = document.createElement('div');
    pagesEl.className = 'tab-pages';

    pages.forEach((pageItems, idx) => {
      const page = document.createElement('div');
      page.className = 'tab-page' + (idx === 0 ? ' is-active' : '');
      pageItems.forEach((item) => {
        page.appendChild(buildCard(item));
      });
      pagesEl.appendChild(page);
    });

    const pagination = document.createElement('div');
    pagination.className = 'tab-pagination';
    pagination.innerHTML = `
      <button class="page-btn page-btn--prev" aria-label="Previous page">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>
      <span class="page-count"><span class="page-count__current">1</span> / ${pages.length}</span>
      <button class="page-btn page-btn--next" aria-label="Next page">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>
    `;

    panel.appendChild(pagesEl);
    panel.appendChild(pagination);

    return { panel, pageCount: pages.length };
  }

  let state = {}; // { catKey: { idx, total, timer, panel } }

  function gotoPage(catKey, nextIdx) {
    const s = state[catKey];
    if (!s) return;
    const total = s.total;
    const idx = ((nextIdx % total) + total) % total;
    s.idx = idx;
    const pages = s.panel.querySelectorAll('.tab-page');
    pages.forEach((p, i) => p.classList.toggle('is-active', i === idx));
    const counter = s.panel.querySelector('.page-count__current');
    if (counter) counter.textContent = String(idx + 1);
  }

  function startAuto(catKey) {
    stopAuto(catKey);
    const s = state[catKey];
    if (!s || s.total <= 1) return;
    s.timer = setInterval(() => gotoPage(catKey, s.idx + 1), CYCLE_MS);
  }

  function stopAuto(catKey) {
    const s = state[catKey];
    if (s && s.timer) {
      clearInterval(s.timer);
      s.timer = null;
    }
  }

  function renderPanels() {
    // Tear down existing
    Object.keys(state).forEach(stopAuto);
    const panelsHost = document.querySelector('.tab-panels');
    if (!panelsHost) return;
    panelsHost.innerHTML = '';
    state = {};

    const tabsEl = document.querySelector('.tabs');
    if (!tabsEl) return;

    // Build a panel for each category that exists in this language
    const langContent = CONTENT[currentLanguage] || {};
    tabsEl.querySelectorAll('.tab').forEach((tabBtn) => {
      const catKey = tabBtn.dataset.cat;
      const items = langContent[catKey];
      if (!items) return;
      const { panel, pageCount } = buildPanel(catKey, items);
      panelsHost.appendChild(panel);
      state[catKey] = { idx: 0, total: pageCount, timer: null, panel };
    });

    activateTab(currentCategory);
  }

  function activateTab(catKey) {
    currentCategory = catKey;
    const tabsEl = document.querySelector('.tabs');
    if (tabsEl) {
      tabsEl.querySelectorAll('.tab').forEach((t) => {
        t.classList.toggle('is-active', t.dataset.cat === catKey);
      });
    }
    Object.entries(state).forEach(([key, s]) => {
      s.panel.classList.toggle('is-active', key === catKey);
      if (key === catKey) startAuto(key); else stopAuto(key);
    });
  }

  function init() {
    const tabsEl = document.querySelector('.tabs');
    const panelsHost = document.querySelector('.tab-panels');
    const langSelect = document.querySelector('.lang-select');
    if (!tabsEl || !panelsHost) return;

    // Wire up language dropdown
    if (langSelect) {
      // Make sure options exist (in case markup omitted them)
      if (!langSelect.children.length) {
        LANGUAGES.forEach((l) => {
          const opt = document.createElement('option');
          opt.value = l.value;
          opt.textContent = l.label;
          langSelect.appendChild(opt);
        });
      }
      langSelect.value = currentLanguage;
      langSelect.addEventListener('change', (e) => {
        currentLanguage = e.target.value;
        renderPanels();
      });
    }

    // Tab clicks
    tabsEl.addEventListener('click', (e) => {
      const t = e.target.closest('.tab');
      if (!t) return;
      activateTab(t.dataset.cat);
    });

    // Pagination clicks (delegated)
    panelsHost.addEventListener('click', (e) => {
      const next = e.target.closest('.page-btn--next');
      const prev = e.target.closest('.page-btn--prev');
      if (!next && !prev) return;
      const panel = e.target.closest('.tab-panel');
      const catKey = panel && panel.dataset.cat;
      if (!catKey) return;
      const s = state[catKey];
      gotoPage(catKey, s.idx + (next ? 1 : -1));
      startAuto(catKey);
    });

    // Pause autoplay when hovering a panel
    panelsHost.addEventListener('mouseenter', (e) => {
      const panel = e.target.closest && e.target.closest('.tab-panel.is-active');
      if (!panel) return;
      stopAuto(panel.dataset.cat);
    }, true);
    panelsHost.addEventListener('mouseleave', (e) => {
      const panel = e.target.closest && e.target.closest('.tab-panel.is-active');
      if (!panel) return;
      startAuto(panel.dataset.cat);
    }, true);

    renderPanels();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
