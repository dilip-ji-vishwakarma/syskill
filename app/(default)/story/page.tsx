import { Box, DataTable } from '@/components/core'

const tableJson = {
  data: [
    {
      id: 1,
      cover: "https://m.media-amazon.com/images/I/51NKhnjhpGL._SX342_.jpg",
      book_name: "Riya & Robo",
    },
   {
      id: 2,
      cover: "https://m.media-amazon.com/images/I/51NKhnjhpGL._SX342_.jpg",
      book_name: "Child & Fish",
    },
  ],
};

const Page = () => {
  return (
    <Box>
       <DataTable {...tableJson} />
    </Box>
  )
}

export default Page
