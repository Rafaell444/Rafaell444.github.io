const prodNames = [
  {id : 1, name :"21 Savage "},
  {id : 2, name :"ACDC "},
  {id : 3, name :"Backstreet Boys"},
  {id : 4, name :"Barry White "},
  {id : 5, name :"Billie Eilish"},
  {id : 6, name :"Blink 182 "},
  {id : 7, name :"Bob Dylan"},
  {id : 8, name :"Bob Marley"},
  {id : 9, name :"Daft Punk"},
  {id : 10, name :"David Bowie "},
  {id : 11, name :"Deep Purple"},
  {id : 12, name :"Depeche Mode "},
  {id : 13, name :"Dire Straits "},
  {id : 14, name :"Freddie Mercury "},
  {id : 15, name :"Gorillaz"},
  {id : 16, name :"Green Day"},
  {id : 17, name :"Harry Styles"},
  {id : 18, name :"John Lennon "},
  {id : 19, name :"Kiss "},
  {id : 20, name :"Kurt Cobain "},
  {id : 21, name :"Lana Del Rey "},
  {id : 22, name :"Led Zeppelin "},
  {id : 23, name :"Metallica "},
  {id : 24, name :"Michael Jackson "},
  {id : 25, name :"Nirvana "},
  {id : 26, name :"Oasis "},
  {id : 27, name :"Pink Floyd "},
  {id : 28, name :"Queen "},
  {id : 29, name :"Radiohead "},
  {id : 30, name :"Ray Charles "},
  {id : 31, name :"Red Hot Chili Peppers "},
  {id : 32, name :"Tame Impala"},
  {id : 33, name :"The Beatles "},
  {id : 34, name :"The Rolling Stones "},
  {id : 35, name :"The Weeknd"},
  {id : 36, name :"Tyler The Creator "},

  ]




  const apiResult = [
    {title:"21 Savage Poster №1",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"21 Savage Poster №2",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"ACDC Poster №1",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"ACDC Poster №2",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"ACDC Poster №3",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Backstreet Boys Poster",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Barry White Poster №1",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Barry White Poster №2",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Barry White Poster №3",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Billie Eilish Poster",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Blink 182 Poster №1",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Blink 182 Poster №2",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Blink 182 Poster №3",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Bob Dylan Poster",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Bob Marley Poster",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Daft Punk Poster",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"David Bowie Poster №1",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"David Bowie Poster №2",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"David Bowie Poster №3",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"David Bowie Poster №4",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Deep Purple Poster",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Depeche Mode Poster №1",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Depeche Mode Poster №2",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Depeche Mode Poster №3",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Depeche Mode Poster №4",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Dire Straits Poster №1",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Dire Straits Poster №2",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Dire Straits Poster №3",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Freddie Mercury Poster №1",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Freddie Mercury Poster №2",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Gorillaz Poster",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Green Day Poster",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Harry Styles Poster",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"John Lennon Poster №1",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"John Lennon Poster №2",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"John Lennon Poster №3",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Kiss Poster №1",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Kiss Poster №2",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Kiss Poster №3",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Kiss Poster №4",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Kiss Poster №5",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Kiss Poster №6",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Kiss Poster №7",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Kurt Cobain Poster №1",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Kurt Cobain Poster №2",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Lana Del Rey Poster №1",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Lana Del Rey Poster №2",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Lana Del Rey Poster №3",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Lana Del Rey Poster №4",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Led Zeppelin Poster №1",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Led Zeppelin Poster №2",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Led Zeppelin Poster №3",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Led Zeppelin Poster №4",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Led Zeppelin Poster №5",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Led Zeppelin Poster №6",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Led Zeppelin Poster №7",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Led Zeppelin Poster №8",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Led Zeppelin Poster №9",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Metallica Poster №1",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Metallica Poster №2",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Metallica Poster №3",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Metallica Poster №4",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Metallica Poster №5",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Metallica Poster №6",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Metallica Poster №7",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Metallica Poster №8",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Michael Jackson Poster №1",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Michael Jackson Poster №2",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Michael Jackson Poster №3",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Nirvana Poster №1",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Nirvana Poster №2",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Nirvana Poster №3",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Oasis Poster №1",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Oasis Poster №2",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Pink Floyd Poster №1",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Pink Floyd Poster №2",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Pink Floyd Poster №3",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Pink Floyd Poster №4",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Pink Floyd Poster №5",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Pink Floyd Poster №6",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Pink Floyd Poster №7",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Pink Floyd Poster №8",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Queen Poster №1",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Queen Poster №2",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Queen Poster №3",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Queen Poster №4",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Queen Poster №5",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Radiohead Poster №1",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Radiohead Poster №2",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Ray Charles Poster №1",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Ray Charles Poster №2",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Ray Charles Poster №3",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Red Hot Chili Peppers Poster №1",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Red Hot Chili Peppers Poster №2",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Red Hot Chili Peppers Poster №3",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Red Hot Chili Peppers Poster №4",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Red Hot Chili Peppers Poster №5",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Red Hot Chili Peppers Poster №6",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Red Hot Chili Peppers Poster №7",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Red Hot Chili Peppers Poster №8",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Red Hot Chili Peppers Poster №9",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Red Hot Chili Peppers Poster №10",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Tame Impala Poster",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"The Beatles Poster №1",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"The Beatles Poster №2",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"The Beatles Poster №3",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"The Beatles Poster №4",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"The Beatles Poster №5",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"The Beatles Poster №6",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"The Beatles Poster №7",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"The Beatles Poster №8",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"The Beatles Poster №9",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"The Beatles Poster №10",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"The Beatles Poster №11",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"The Beatles Poster №12",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"The Beatles Poster №13",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"The Beatles Poster №14",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"The Beatles Poster №15",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"The Beatles Poster №16",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"The Rolling Stones Poster №1",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"The Rolling Stones Poster №2",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"The Rolling Stones Poster №3",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"The Weeknd Poster",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Tyler The Creator Poster №1",description: "ზომა≈ A3+",output: "ფასი: 7"},
  {title:"Tyler The Creator Poster №",description: "ზომა≈ A3+",output: "ფასი: 7"},
];