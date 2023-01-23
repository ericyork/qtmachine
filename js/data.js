const allQuotes = [
  {
    "text": "Violence is the last refuge of the incompetent.",
    "author": "Isaac Asimov",
    "source": "Foundation",
    "path": "https://en.wikipedia.org/wiki/Foundation_(Asimov_novel)",
    "date": "1942",
    "tag": "Politics"
  },
  {
    "text": "Never let your sense of morals prevent you from doing what is right.",
    "author": "Isaac Asimov",
    "source": "Foundation",
    "path": "https://en.wikipedia.org/wiki/Foundation_(Asimov_novel)",
    "date": "1942",
    "tag": "Ethics"
  },
  {
    "text": "Scientific truth is beyond loyalty and disloyalty.",
    "author": "Isaac Asimov",
    "source": "Foundation",
    "path": "https://en.wikipedia.org/wiki/Foundation_(Asimov_novel)",
    "date": "1951",
    "tag": "Science"
  },
  {
    "text": "The most hopelessly stupid man is he who is not aware he is wise.",
    "author": "Isaac Asimov",
    "source": "Second Foundation",
    "path": "https://en.wikipedia.org/wiki/Second_Foundation",
    "date": "1953",
    "tag": "Philosophy"
  },
  {
    "text": "There are no happy endings in history, only crisis points that pass.",
    "author": "Isaac Asimov",
    "source": "The Gods Themselves",
    "path": "https://en.wikipedia.org/wiki/The_Gods_Themselves",
    "date": "1972",
    "tag": "History"
  },
  {
    "text": "Ideas are cheap. It’s only what you do with them that counts.",
    "author": "Isaac Asimov",
    "source": "The Secrets of the Universe",
    "path": "https://en.wikipedia.org/wiki/The_Gods_Themselves",
    "date": "1991",
    "tag": "Philosophy"
  },
  {
    "text": "Where any answer is possible, all answers are meaningless.",
    "author": "Isaac Asimov",
    "source": "The Road to Infinity",
    "path": "https://en.wikipedia.org/wiki/The_Gods_Themselves",
    "date": "1979",
    "tag": "Philosophy"
  },
  {
    "text": "There is nothing so eternally adhesive as the memory of power.",
    "author": "Isaac Asimov",
    "source": "I, Robot",
    "path": "https://en.wikipedia.org/wiki/I,_Robot",
    "date": "1950",
    "tag": "Politics"
  },
  {
    "text": "Self-education is, I firmly believe, the only kind of education there is.",
    "author": "Isaac Asimov",
    "source": "Science Past, Science Future",
    "path": "https://en.wikipedia.org/wiki/Isaac_Asimov_bibliography_(chronological)",
    "date": "1975",
    "tag": "Philosophy"
  },
  {
    "text": "Progress isn’t made by early risers. It’s made by lazy men trying to find easier ways to do something.",
    "author": "Robert Heinlein",
    "source": "Time Enough For Love",
    "path": "https://en.wikipedia.org/wiki/Time_Enough_for_Love",
    "date": "1973",
    "tag": "Technology"
  },
  {
    "text": "Love is that condition in which the happiness of another person is essential to your own.",
    "author": "Robert Heinlein",
    "source": "Stranger in a Strange Land",
    "path": "https://en.wikipedia.org/wiki/Stranger_in_a_Strange_Land",
    "date": "1961",
    "tag": "Ethics"
  },
  {
    "text": "Never underestimate the power of human stupidity.",
    "author": "Robert Heinlein",
    "source": "Time Enough For Love",
    "path": "https://en.wikipedia.org/wiki/Time_Enough_for_Love",
    "date": "1973",
    "tag": "Philosophy"
  },
  {
    "text": "A society that gets rid of all its troublemakers goes downhill.",
    "author": "Robert Heinlein",
    "source": "Time Enough For Love",
    "path": "https://en.wikipedia.org/wiki/Time_Enough_for_Love",
    "date": "1973",
    "tag": "Politics"
  },
  {
    "text": "Morals — all correct moral laws — derive from the instinct to survive. Moral behavior is survival behavior above the individual level.",
    "author": "Robert Heinlein",
    "source": "Starship Troopers",
    "path": "https://en.wikipedia.org/wiki/Starship_Troopers",
    "date": "1959",
    "tag": "Ethics"
  },
  {
    "text": "I am free because I know that I alone am morally responsible for everything I do.",
    "author": "Robert Heinlein",
    "source": "The Moon Is a Harsh Mistress",
    "path": "https://en.wikipedia.org/wiki/The_Moon_Is_a_Harsh_Mistress",
    "date": "1966",
    "tag": "Ethics"
  },
  {
    "text": "Don’t handicap your children by making their lives easy.",
    "author": "Robert Heinlein",
    "source": "Time Enough For Love",
    "path": "https://en.wikipedia.org/wiki/Time_Enough_for_Love",
    "date": "1973",
    "tag": "Politics"
  },
  {
    "text": "The slickest way in the world to lie is to tell the right amount of truth at the right time-and then shut up.",
    "author": "Robert Heinlein",
    "source": "Stranger in a Strange Land",
    "path": "https://en.wikipedia.org/wiki/Stranger_in_a_Strange_Land",
    "date": "1961",
    "tag": "Politics"
  },
  {
    "text": "A desire not to butt into other people’s business is at least eighty percent of all human wisdom.",
    "author": "Robert Heinlein",
    "source": "Stranger in a Strange Land",
    "path": "https://en.wikipedia.org/wiki/Stranger_in_a_Strange_Land",
    "date": "1961",
    "tag": "Philosophy"
  },
  {
    "text": "I’m a scientific expert; that means I know nothing about absolutely everything.",
    "author": "Arthur C. Clarke",
    "source": "2001: A Space Odyssey",
    "path": "https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey",
    "date": "1968",
    "tag": "Humor"
  },
  {
    "text": "The more wonderful the means of communication, the more trivial, tawdry, or depressing its contents seemed to be.",
    "author": "Arthur C. Clarke",
    "source": "2001: A Space Odyssey",
    "path": "https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey",
    "date": "1968",
    "tag": "Technology"
  },
  {
  "text": "Any sufficiently advanced technology is indistinguishable from magic.",
  "author": "Arthur C. Clarke",
  "source": "Profiles of the Future",
  "path": "https://en.wikipedia.org/wiki/Arthur_C._Clarke",
  "date": "1962",
  "tag": "Technology"
  },
  {
    "text": "Now I understand,” said the last man.",
    "author": "Arthur C. Clarke",
    "source": "Childhood's End",
    "path": "https://en.wikipedia.org/wiki/Childhood%27s_End",
    "date": "1953",
    "tag": "Philosophy"
  },
  {
    "text": "Science is the only religion of mankind.",
    "author": "Arthur C. Clarke",
    "source": "Childhood's End",
    "path": "https://en.wikipedia.org/wiki/Childhood%27s_End",
    "date": "1953",
    "tag": "Science"
  },
  {
    "text": "When in doubt, say nothing and move on.",
    "author": "Arthur C. Clarke",
    "source": "Rendezvous with Rama",
    "path": "https://en.wikipedia.org/wiki/Rendezvous_with_Rama",
    "date": "1973",
    "tag": "Humor"
  },
  {
    "text": "When in doubt, say nothing and move on.",
    "author": "Arthur C. Clarke",
    "source": "Rendezvous with Rama",
    "path": "https://en.wikipedia.org/wiki/Rendezvous_with_Rama",
    "date": "1973",
    "tag": "Humor"
  },
  {
    "text": "When beauty is universal, it loses its power to move the heart, and only its absence can produce any emotional effect.",
    "author": "Arthur C. Clarke",
    "source": "The City and the Stars",
    "path": "https://en.wikipedia.org/wiki/The_City_and_the_Stars",
    "date": "1956",
    "tag": "Philosophy"
  },
  {
    "text": "Because each of us is the sum of all we have ever experienced. Only the very young have a clean slate.",
    "author": "Arthur C. Clarke",
    "source": "Rama II",
    "path": "https://en.wikipedia.org/wiki/Rama_II_(novel)",
    "date": "1989",
    "tag": "Philosophy"
  },
  {
    "text": "It is sometimes an appropriate response to reality to go insane.",
    "author": "Phillip K. Dick",
    "source": "VALIS",
    "path": "https://en.wikipedia.org/wiki/Philip_K._Dick",
    "date": "1981",
    "tag": "Philosophy"
  },
  {
    "text": "I’m not much but I’m all I have.",
    "author": "Phillip K. Dick",
    "source": "Martian Time-Slip",
    "path": "https://en.wikipedia.org/wiki/Philip_K._Dick",
    "date": "1964",
    "tag": "Humor"
  },
  {
    "text": "The basic tool for the manipulation of reality is the manipulation of words. If you can control the meaning of words, you can control the people who must use them.",
    "author": "Phillip K. Dick",
    "source": "The Shifting Realities of Philip K. Dick",
    "path": "https://en.wikipedia.org/wiki/Philip_K._Dick",
    "date": "1995",
    "tag": "Politics"
  },
  {
    "text": "Reality is that which, when you stop believing in it, doesn’t go away.",
    "author": "Phillip K. Dick",
    "source": "I Hope I Shall Arrive Soon",
    "path": "https://en.wikipedia.org/wiki/Philip_K._Dick",
    "date": "1985",
    "tag": "Philosophy"
  },
  {
    "text": "My schedule for today lists a six-hour self-accusatory depression.",
    "author": "Phillip K. Dick",
    "source": "Do Androids Dream of Electric Sheep?",
    "path": "https://en.wikipedia.org/wiki/Philip_K._Dick",
    "date": "1968",
    "tag": "Humor"
  },
  {
    "text": "You will be required to do wrong no matter where you go. It is the basic condition of life, to be required to violate your own identity.",
    "author": "Phillip K. Dick",
    "source": "Do Androids Dream of Electric Sheep?",
    "path": "https://en.wikipedia.org/wiki/Philip_K._Dick",
    "date": "1968",
    "tag": "Ethics"
  },
  {
    "text": "Everything in life is just for a while.",
    "author": "Phillip K. Dick",
    "source": "A Scanner Darkly",
    "path": "https://en.wikipedia.org/wiki/Philip_K._Dick",
    "date": "1979",
    "tag": "Philosophy"
  },
  {
    "text": "Everything in life is just for a while.",
    "author": "Phillip K. Dick",
    "source": "A Scanner Darkly",
    "path": "https://en.wikipedia.org/wiki/Philip_K._Dick",
    "date": "1979",
    "tag": "Philosophy"
  },
  {
    "text": "If you think this Universe is bad, you should see some of the others.",
    "author": "Phillip K. Dick",
    "source": "VALIS",
    "path": "https://en.wikipedia.org/wiki/Philip_K._Dick",
    "date": "1981",
    "tag": "Philosophy"
  },
  {
    "text": "No single thing abides; and all things are fucked up.",
    "author": "Phillip K. Dick",
    "source": "The Transmigration of Timothy Archer",
    "path": "https://en.wikipedia.org/wiki/Philip_K._Dick",
    "date": "1982",
    "tag": "Philosophy"
  },
  {
    "text": "We all have our time machines, don’t we. Those that take us back are memories… And those that carry us forward, are dreams.",
    "author": "H. G. Wells",
    "source": "The Time Machine",
    "path": "https://en.wikipedia.org/wiki/The_Time_Machine",
    "date": "1895",
    "tag": "Philosophy"
  },
  {
    "text": "Face this world. Learn its ways, watch it, be careful of too hasty guesses at its meaning. In the end you will find clues to it all.",
    "author": "H. G. Wells",
    "source": "The Time Machine",
    "path": "https://en.wikipedia.org/wiki/The_Time_Machine",
    "date": "1895",
    "tag": "Philosophy"
  },
  {
    "text": "Our true nationality is mankind.",
    "author": "H. G. Wells",
    "source": "The Island of Doctor Moreau",
    "path": "https://en.wikipedia.org/wiki/The_Island_of_Doctor_Moreau",
    "date": "1896",
    "tag": "Politics"
  },
  {
    "text": "I must confess that I lost faith in the sanity of the world.",
    "author": "H. G. Wells",
    "source": "The Island of Doctor Moreau",
    "path": "https://en.wikipedia.org/wiki/The_Island_of_Doctor_Moreau",
    "date": "1896",
    "tag": "Philosophy"
  },
  {
    "text": "Advertising is legalized lying.",
    "author": "H. G. Wells",
    "source": "The Time Machine",
    "path": "https://en.wikipedia.org/wiki/The_Time_Machine",
    "date": "1895",
    "tag": "Politics"
  },
  {
    "text": "Moral indignation is jealousy with a halo.",
    "author": "H. G. Wells",
    "source": "The Wife of Sir Isaac Harman",
    "path": "https://en.wikipedia.org/wiki/H._G._Wells_bibliography",
    "date": "1914",
    "tag": "Ethics"
  },
  {
    "text": "Fact takes no heed of human hopes.",
    "author": "H. G. Wells",
    "source": "The Sleeper Awakes",
    "path": "https://en.wikipedia.org/wiki/The_Sleeper_Awakes",
    "date": "1910",
    "tag": "Science"
  },
  {
    "text": "You cannot buy the revolution. You cannot make the revolution. You can only be the revolution. It is in your spirit, or it is nowhere.",
    "author": "Ursula K. Le Guin",
    "source": "The Dispossessed",
    "path": "https://en.wikipedia.org/wiki/The_Dispossessed",
    "date": "1974",
    "tag": "Politics"
  },
  {
    "text": "Love doesn’t just sit there, like a stone, it has to be made, like bread; remade all the time, made new.",
    "author": "Ursula K. Le Guin",
    "source": "The Lathe of Heaven",
    "path": "https://en.wikipedia.org/wiki/The_Lathe_of_Heaven",
    "date": "1971",
    "tag": "Ethics"
  },
  {
    "text": "The only thing that makes life possible is permanent, intolerable uncertainty: not knowing what comes next.",
    "author": "Ursula K. Le Guin",
    "source": "The Left Hand of Darkness",
    "path": "https://en.wikipedia.org/wiki/The_Left_Hand_of_Darkness",
    "date": "1969",
    "tag": "Ethics"
  },
  {
    "text": "It is good to have an end to journey toward; but it is the journey that matters, in the end.",
    "author": "Ursula K. Le Guin",
    "source": "The Left Hand of Darkness",
    "path": "https://en.wikipedia.org/wiki/The_Left_Hand_of_Darkness",
    "date": "1969",
    "tag": "Philosophy"
  },
  {
    "text": "It is very hard for evil to take hold of the unconsenting soul.",
    "author": "Ursula K. Le Guin",
    "source": "A Wizard of Earthsea",
    "path": "https://en.wikipedia.org/wiki/Earthsea",
    "date": "1968",
    "tag": "Ethics"
  },
  {
    "text": "It is very hard for evil to take hold of the unconsenting soul.",
    "author": "Ursula K. Le Guin",
    "source": "A Wizard of Earthsea",
    "path": "https://en.wikipedia.org/wiki/Earthsea",
    "date": "1968",
    "tag": "Ethics"
  },
  {
    "text": "To hear, one must be silent.",
    "author": "Ursula K. Le Guin",
    "source": "A Wizard of Earthsea",
    "path": "https://en.wikipedia.org/wiki/Earthsea",
    "date": "1968",
    "tag": "Humor"
  },
  {
    "text": "Belief is the wound that knowledge heals.",
    "author": "Ursula K. Le Guin",
    "source": "The Telling",
    "path": "https://en.wikipedia.org/wiki/The_Telling",
    "date": "2000",
    "tag": "Philosophy"
  },
  {
    "text": "The more defensive a society, the more conformist.",
    "author": "Ursula K. Le Guin",
    "source": "City of Illusions",
    "path": "https://en.wikipedia.org/wiki/City_of_Illusions",
    "date": "1967",
    "tag": "Politics"
  },
  {
    "text": "In a universe the size of ours almost anything that can happen, will.",
    "author": "Larry Niven",
    "source": "There is a Tide",
    "path": "https://en.wikipedia.org/wiki/Larry_Niven_bibliography",
    "date": "1968",
    "tag": "Science"
  },
  {
    "text": "Ethics change with technology.",
    "author": "Larry Niven",
    "source": "N-space",
    "path": "https://en.wikipedia.org/wiki/N-Space_(short_story_collection)",
    "date": "1990",
    "tag": "Technology"
  },
  {
    "text": "To doubt everything or to believe everything are two equally convenient solutions; both dispense with the necessity of reflection.",
    "author": "Larry Niven",
    "source": "Lucifer's Hammer",
    "path": "https://en.wikipedia.org/wiki/Lucifer%27s_Hammer",
    "date": "1977",
    "tag": "Science"
  },
  {
    "text": "A civilization has the ethics it can afford.",
    "author": "Larry Niven",
    "source": "Lucifer's Hammer",
    "path": "https://en.wikipedia.org/wiki/Lucifer%27s_Hammer",
    "date": "1977",
    "tag": "Ethics"
  }
]

// const allQuotes = [
//   {
//     "text": "Lorem ipsum dolor sit amet escrepitur reddit, dang.",
//     "author": "some Roman, probably",
//     "source": "The Wall",
//     "path": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//     "date": "06/08/2006",
//     "tag": "default"
//   },
//   {
//     "text": "Dang, reddit escrepitur amet sit dolor ipsum lorem, sei.",
//     "author": "an erstwhile joker",
//     "source": "Your Mom",
//     "path": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//     "date": "03/25/2009",
//     "tag": "default"
//   }
// ]