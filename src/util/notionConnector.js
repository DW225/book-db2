const { Client, APIErrorCode } = require("@notionhq/client")

const getPageList = async request => {
  const client = new Client({ token: process.env.NOTION_TOKEN })
  const { data } = await client.getPageList(request)
  return data
}

export {
  handler
}
