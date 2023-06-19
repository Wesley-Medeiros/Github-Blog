import moment from "moment"

function RelativeDateFormatter(date: string) {
  return moment(date).fromNow()
}

export default RelativeDateFormatter