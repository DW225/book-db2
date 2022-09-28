declare namespace Book {
  interface Book {
    title: string
    author: string
    publisher: string
    type: BookType
  }

  enum BookType {
    LITE_NOVEL = '輕小說',
    NOVEL = '小說',
    MANGA = '漫畫',
    MAGAZINE = '雜誌',
    ART_COLLECTION = '畫集'
  }
}
