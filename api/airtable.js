import qs from 'query-string'

export default (ctx) => {
  let { $axios } = ctx
  let url = 'https://api.airtable.com/v0/appZ3XfXTIphtg6Fe'

  return {
    async get(id, query, config) {
      let q = qs.stringify(query)

      return await $axios.get(`${url}/${id}?${q}`, config)
    }
  }
}
