import { Input, Select } from "@chakra-ui/react"
import { useState, ChangeEvent } from "react"

type SearchType = Book.BookType | {
  title: '書名',
  author: '作者',
  publisher: '出版社',
}

export default function searchBar() {
  const [inputText, setInputText] = useState<string>("")
  const [searchBy, setSearchBy] = useState<SearchType>()

  const onSearchInputChange = (textInput: string) => {
    setInputText(textInput)
  }

  return (
    <>
      <Select placeholder="Search By">
        
      </Select>
      <Input
        type="text"
        value={inputText}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {onSearchInputChange(e.target.value)}}
        placeholder='Enter the book name'
        size='sm' />
    </>
  )
}
